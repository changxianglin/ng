模块依赖

let mod_a = angular.module("a", [])
mod_a.controller("test_a", function($scope) {
  $scope.a = 12
})

let mod_b = angular.module("b", [])
mod_b.controller("test_b", function($scope) {
  $scope.b = 5
})

let mod = angular.module("test", ["a", "b"])


//  post

let mod = angular.module("test", [])

mod.config(function($httpProvider) {
  $httpProvider.defults.transformRequst = function(obj) {
    let arr = []

    for(let name in obj)
  }
})
