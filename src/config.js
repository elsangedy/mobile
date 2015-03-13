require({

  // libraries dependencies (fallback support)
  paths: {

    angular: [
      './vendor/angular.min'
    ],

    angularTouch: [
      './vendor/angular-touch.min'
    ],

    angularResource: [
      './vendor/angular-resource.min'
    ],

    uiRouter: [
      './vendor/angular-ui-router.min'
    ],

    lumx: [
      './vendor/lumx.min'
    ],

    moment: [
      './vendor/moment.min'
    ],

    velocity: [
      './vendor/velocity.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      exports: 'angular'
    },

    'angularTouch': {
      deps: ['angular']
    },

    'angularResource': {
      deps: ['angular']
    },

    'uiRouter': {
      deps: ['angular']
    },

    'lumx': {
      deps: ['moment', 'velocity']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./app']

});
