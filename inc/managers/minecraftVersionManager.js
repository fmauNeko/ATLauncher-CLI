#!/usr/bin/env node

/*
 * ATLauncher CLI - https://github.com/ATLauncher/ATLauncher-CLI
 * Copyright (C) 2016 ATLauncher
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

(function () {
    'use strict';

    const CacheManager = require('./cacheManager');
    const MinecraftVersion = require('../classes/minecraftVersion');

    class MinecraftVersionManager {
        getAllMinecraftVersions() {
            return new Promise(function (resolve, reject) {
                CacheManager.getObject('minecraftVersions.json').then(function (object) {
                    let minecraftVersions = [];

                    object.forEach(function (minecraftVersion) {
                        minecraftVersions.push(new MinecraftVersion(minecraftVersion));
                    });

                    resolve(minecraftVersions);
                }).catch(reject);
            });
        }
    }

    module.exports = new MinecraftVersionManager();
})();