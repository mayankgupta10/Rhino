'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'ngRoute',
    'toaster',
    'ui.date',
    'ui.calendar',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when('/dashboard', '/dashboard/overview');
      $urlRouterProvider.when('/dashboard/manage', '/dashboard/manage/pilot');
      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('base', {
            abstract: true,
            url: '',
            templateUrl: 'app/views/base.html'
        })
          .state('login', {
              url: '/login',
              parent: 'base',
              templateUrl: 'app/views/login.html',
              controller: 'LoginCtrl'
          })
          .state('dashboard', {
              url: '/dashboard',
              parent: 'base',
              templateUrl: 'app/views/dashboard.html',
              controller: 'DashboardCtrl'
          })
            .state('overview', {
                url: '/overview',
                parent: 'dashboard',
                templateUrl: 'app/views/dashboard/HomeTrip.html',
                controller: 'homeTripCtrl'
            })
            .state('addtrip', {
                url: '/addtrip',
                parent: 'dashboard',
                params: {
                    ref : null
                },
                templateUrl: 'app/views/dashboard/AddTrip.html',
                controller: 'addTripCtrl'

            })
            .state('manage', {
                url: '/manage',
               parent: 'dashboard',
                templateUrl: 'app/views/dashboard/Manage.html',
                controller: 'manageCtrl'

            })
             .state('manage.pilot', {
                 url: '/pilot',
                 views: {
                     'listview': {
                         templateUrl: 'app/views/dashboard/PilotsList.html',
                         controller: 'pilotCtrl'
                     }
                 }
             })
               .state('manage.passenger', {
                   url: '/passenger',
                   views: {
                       'listview': {
                           templateUrl: 'app/views/dashboard/PassengersList.html',
                           controller: 'passengersCtrl'

                       }
                   }
               })
                .state('manage.aeroplane', {
                    url: '/aeroplane',
                    views: {
                        'listview': {
                            templateUrl: 'app/views/dashboard/AeroplanesList.html',
                            controller: 'aeroplanesCtrl'

                        }
                    }
                })
                .state('manage.setting', {
                    url: '/setting',
                    views: {
                        "listview": {
                            templateUrl: 'app/views/dashboard/Setting.html',
                            controller: 'settingCtrl'

                        }
                    }
                });

           
  });
