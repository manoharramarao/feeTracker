// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.config', {
        url: '/config',
        views: {
            'menuContent': {
                templateUrl: 'templates/config.html',
                controller: 'ConfigController'
            }
        }
    })
    .state('app.students', {
        url: '/students',
        views: {
            'menuContent': {
                templateUrl: 'templates/students.html',
                controller: 'StudentsController'
            },
            'fabContent': {
                template: '<button ng-click="addStudent()" id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: 'StudentsController'
            }
        }
    })
    .state('app.addStudent', {
        url: '/addStudent',
        views: {
            'menuContent': {
                templateUrl: 'templates/add_student.html',
                controller: 'AddStudentsController'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    .state('app.payments', {
        url: '/payments/:studentId',
        views: {
            'menuContent': {
                templateUrl: 'templates/payments.html',
                controller: 'PaymentsController'
            },
            'fabContent': {
                template: '<button ng-click="addPayment()" id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: 'PaymentsController'
            }
        }
    })
    .state('app.addPayment', {
        url: '/addPayment/:studentId',
        views: {
            'menuContent': {
                templateUrl: 'templates/add_payment.html',
                controller: 'AddPaymentController'
            },
            'fabContent': {
                templateUrl: ''
            }
        }
    })
    .state('app.paymentsByDate', {
        url: '/paymentsByDate',
        views: {
            'menuContent': {
                templateUrl: 'templates/payments_by_date.html',
                controller: 'PaymentsByDateController'
            },
            'fabContent': {
                template: ''
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/config');
});
