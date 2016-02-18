var app = angular.module('example', [
    'ngRoute',
    'movieModule',
    'bookModule'
]);

app.controller('mainCtrl', ['$scope', function() {
    
}]);

app.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
    $routeProvider.when('/movie', {
        templateUrl: 'template/movie.html',
        controller: 'movieCtrl'
    });
    
    $routeProvider.when('/book', {
        templateUrl: 'template/book.html',
        controller: 'bookCtrl'
    });
    
    $locationProvider.html5Mode(true);
}]);