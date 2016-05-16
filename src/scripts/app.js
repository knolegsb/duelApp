'use strict';

angular.module('duelApp', ['LocalStorageModule'])
.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('duelApp');
});