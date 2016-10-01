angular.module("exampleApp.Filters", []).filter("dayName", function () {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
    console.log("exampleApp.Filters 모듈에서 filter 메소드 동작");
    return function (input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    };
});
// filer 모듈은 module 메소드의 결과를 가지고 곧바로 filter 메소드를 호출하는
// 플루언트 API를 사용했다.
// 기존 코드와 다른 것은
// angular.module을 선언하며 filter 메소드를 바로 추가하게 된다.
// 