
// angular.module('formApp', ['ngAnimate', 'ui.router'])

// const app = angular.module("firstDemo", ["ui.router"])

// app.config(function($stateProvider, $urlRouterProvider) {
//
//   $stateProvider
//
//     .state("main", {
//         url: "/main",
//         templateUrl: "main.html",
//         controller: "firstCtrl"
//     })
//
//     .state("main.fisrt", {
//         url: "/first".
//         templateUrl: "first.html"
//     })
//
//     .state("main.second", {
//       url: "second",
//       templateUrl: "second.html"
//     })
//
//     // other page
//     $urlRouterProvider.otherwise("/main")
// })

// controller
// app.controller("firstCtrl", function($scope) {
//     // $scope.name = "zhangxianglin"
// })



// app.js
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('main', {
            url: '/main',
            templateUrl: 'main.html',
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('main.first', {
            url: '/first',
            templateUrl: 'first.html'
        })

        // url will be /form/interests
        .state('main.second', {
            url: '/second',
            templateUrl: 'second.html'
        })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/main');
})

.controller("swal", function($scope) {
  $scope.test = function() {
    console.log("点击到了的啦")
  }
})
