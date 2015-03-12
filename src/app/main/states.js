define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureStates);

  //---

  configureStates.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function configureStates($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider
      .when('', '/login') // default
      .when('/', '/login') // default
      .otherwise('/404'); // For any unmatched url, redirect to /404

    $stateProvider
      .state('404', {
        url: '/404',
        views: {
          'master': {
            templateUrl   : 'app/main/tpl/layout.html'
          },
          'content@404': {
            templateUrl   : 'app/main/tpl/404.html'
          }
        }

      });

  }

});
