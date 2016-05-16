'use strict';

angular.module('duelApp')
    .service('Storage', function (localStorageService) {
        var Storage = this;
        Storage.save = function (key, data) {
            localStorageService.set(key, data);
        };

        Storage.load = function (key) {
            return localStorageService.get(key);
        };
    });