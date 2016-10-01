var controllersModule = angular.module("exampleApp.Controllers", [])
// 이 예제에서는 exampleApp.Controllers라는 새로운 모듈을 생성하고,
// 이 모듈을 이전 예제의 두 컨트롤러를 정의하는데 사용했다.
// 코드를 조직화 할 때는 애플리케이션을 공통 컴포넌트 타입의 모듈로 정리하고,
// 메인 모듈의 이름에 컴포넌트 타입을 결함해
// 각 모듈에 들어있는 컴포넌트의 내용이 무엇인지 명확히 알 수 있게 하는 방식을 많이 사용한다.
// 
// angular.module을 contollersModule로 정의하고 아래에서 사용함

controllersModule.controller("dayCtrl", function ($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});
