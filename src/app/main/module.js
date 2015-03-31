define(function(require) {
  'use strict';

  var angular = require('angular');

  require('angularTouch');
  require('uiRouter');
  require('lumx');

  // angular module definition
  return angular.module(

    // module name
    'main',

    // module dependencies
    [
      'ngTouch',
      'ui.router',
      'lumx',

      require('app/auth/package').name,
      require('app/tabs/package').name,
      require('app/stores/package').name,
      require('app/history/package').name,
      require('app/gamification/package').name,
      require('app/settings/package').name,
      require('app/teste/package').name,
      require('app/subheader/package').name
    ]
  );

});
