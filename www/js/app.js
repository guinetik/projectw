// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular app
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('wats', ['ionic', 'wats.app']).run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: "/app",
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    }).state('app.contacts', {
        url: "/contacts",
        views: {
            'menuContent': {
                templateUrl: "templates/contacts.html",
                controller: 'ContactsCtrl'
            }
        }
    }).state('app.settings', {
        url: "/settings",
        views: {
            'menuContent': {
                templateUrl: "templates/settings.html",
                controller: 'SettingsCtrl'
            }
        }
    }).state('app.chat', {
        url: "/chat/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/chat.html",
                controller: 'ChatCtrl'
            }
        }
    }).state('app.chats', {
        url: "/chats",
        views: {
            'menuContent': {
                templateUrl: "templates/chats.html",
                controller: 'ChatsCtrl'
            }
        }
    }).state('app.login', {
        url: "/login",
        views: {
            'menuContent': {
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            }
        }
    }).state('app.profile', {
        url: "/profile",
        views: {
            'menuContent': {
                templateUrl: "templates/profile.html",
                controller: 'ProfileCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
});