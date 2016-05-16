'use strict';
angular.module('duleApp')
    .controller('ArenaCtrl', function (Arena, Animals, $tiemout) {
        var vm = this;

        vm.AllAnimals = Animals.findAll();

        vm.selectAnimal = function (animal) {
            vm.playerAnimal = animal;
        };

        vm.isSelectedAnimal = function (animal) {
            if (vm.playerAnimal) {
                return vm.playerAnimal.id === animal.id;
            }
        };

        vm.fightMatch = function () {
            vm.matchWinner = Arena.determineWinner(vm.playerAnimal, vm.matchup.opponent, vm.matchup.terrain);
        };

        vm.resetMatch = function () {
            vm.matchup = undefined;
            vm.matchWinner = undefined;
            vm.playerAnimal = undefined;
            generateMatchup();
        };

        function generateMatchup() {
            $timeout(function () {
                vm.matchup = Arena.generateMatchup();
            }, 2000);
        }

        generateMatchup();
    })