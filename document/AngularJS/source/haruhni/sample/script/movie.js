var movie = angular.module('movieModule', [
    'titleModule'
]);

movie.controller('movieCtrl', ['$scope', function($scope) {
    $scope.title = 'movie Page Load';
}]);