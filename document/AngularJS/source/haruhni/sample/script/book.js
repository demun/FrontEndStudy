var book = angular.module('bookModule', [
    'titleModule'
]);

book.controller('bookCtrl', ['$scope', function($scope) {
    $scope.title = 'book Page Load';
}]);