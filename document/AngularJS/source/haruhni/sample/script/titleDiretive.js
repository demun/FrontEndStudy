var title = angular.module('titleModule', []);

title.directive('ngTitle', function() {
    return {
        restrict: 'E',
        template: '<span>{{title}}</span>',
        replace: false
    }
});