angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('registerHere', {
    url: '/page3',
    templateUrl: 'templates/registerHere.html',
    controller: 'registerHereCtrl'
  })
  
  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/task.html',
    controller: 'registerHereCtrl'
  })
  
  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/homeschedule.html',
    controller: 'registerHereCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});