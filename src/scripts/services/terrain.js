'use strict';

angular.module('duelApp')
    .service('Terrain', function (TERRAINS_COLLECTION) {
        var Terrains = this;

        Terrain.findAll = function () {
            return TERRAINS_COLLECTION;
        };

        Terrains.find = function (id) {
            for (var i = 0; i < TERRAINS_COLLECTION.length; i++) {
                var terrain = TERRAINS_COLLECTION[i];
                if (terrain.id == id) {
                    return terrain;
                }
            }

            return undefined;
        };

        Terrains.getRandomTerrain = function () {
            return TERRAINS_COLLECTION[Math.floor(Math.random() * TERRAINS_COLLECTION.length)];
        };
    });