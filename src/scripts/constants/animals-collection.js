'use strict';

angular.module('duelApp')
    .constant('ANIMALS_COLLECTION', [
        {
            name: 'Silverback Gorrila',
            scientific: 'Gorrila Beringei',
            id: 'selverback-gotilla',
            stats: {
                ferocity: 7,
                tenacity: 9,
                land: 7,
                water: 2
            }
        },
        {
            name: 'Leopard',
            scientific: 'Panthera Pardus',
            id: 'leopard',
            stats: {
                ferocity: 9,
                tenacity: 5,
                land: 9,
                water: 2
            }
        },
        {
            name: 'Anaconda',
            scientific: 'Eunectes Murinus',
        }
    ])