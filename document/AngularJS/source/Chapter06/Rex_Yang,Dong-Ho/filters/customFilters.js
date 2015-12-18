console.log('=== customFilters.js 시작 ===');

var customFilters = angular.module('customFilters', []);
//메소드 체인을 써도 되지만, 가독성이 떨어지고 관리가 용이하지 못하다.

customFilters.filter('unique', function() {  //배열의 속성의 값이 담긴, 새로운 배열을 반환하는 필터
  //전달되는 인자는 (필터명, 작업을 수행할 '필터함수'를 반환하는 팩토리함수)
  //AngualrJS에서는 필터 인스턴스를 생성할때는 팩토리함수를 호출하고, 필터링을 수행할 때는 필터함수를 호출한다.

  return function (data, propertyName) {
    //모든 필터함수는 포매팅할 data를 인자로 받는데,
    //이 커스텀필터에서는 고유값 목록을 생성하는 데 사용할 객체속성을 지정하기 위해 propertyName이라는 인자를 추가로 정의하였음.
    //즉, 필터의 재사용성을 높이고, 범용적인 필터를 구성한 것임.
    if (angular.isArray(data) && angular.isString(propertyName)) {
      var results = [];  //빈 배열
      var keys = {};     //빈 객체
      for (var i=0; i<data.length; i++) {
        var value = data[i][propertyName];  //2차원 배열?! NoNo... ==> object[key] 의 구조일 뿐임.
        //==> $scope.data[0].propertyName
        //==> $scope.data[0][propertyName]  ==> '상품 1번' 으로 예를 들어보자.
        if (angular.isUndefined(keys[value])) {  //keys['상품 1번'] 이 현재 존재하지 않는다면,
          keys[value] = true;   //keys['상품 1번'] = true  이것은 {"상품 1번": true, "상품 2번": true...} 로 셋팅됨.
          results.push(value);  //results.push('상품 1번'), results.push('상품 2번')  이것은 ['상품 1번', '상품 2번'] 으로 셋팅됨
        }
      }
      return results;  //필터링된 Array를 리턴 (==> 사용자에게 표시되는 내용에만 영향, 스코프상에 있는 원본데이터는 수정하지 않음)

    } else {        //필터에 들어온게 Array와 String이 아니면,
      return data;  //원본 데이터를 그냥 리턴
    }
  };
});


customFilters.filter('range', function($filter) {  //상품페이지에 해당하는 배열 내 일부 영역항목을 반환하는 필터
                                                   //limitTo 라는 내장필터를 기반으로 개발되었다.
  console.log('range range range')
  return function(data, page, size) {
    console.log('range')
    console.log('data-- '+data);
    console.log('page-- '+page);
    console.log('size-- '+size);
    if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
      var startIndex = (page - 1) * size;
      if (data.length < startIndex) {  //데이터배열의 길이가 시작하는 인덱스보다 작으면
        return [];  //빈 배열을 리턴함.
      } else {
        console.log('4-- '+startIndex);
        var result = $filter('limitTo')(data.splice(startIndex), size);
        /*$filter() 메소드에 'limitTo' 인자를 넣고 실행시키면 function(input, limit, begin)이 return되고,
          그 return된 함수에 data.splice(startIndex) 와 size 를 인자로 전달하며 실행한다.  */
        //limitTo 필터는 배열의 길이를 넘어서는 문제를 알아서 해결해주며, 지정한 숫자를 사용할 수 없는 경우, 더 적은 항목을 반환해준다.
        console.log('5-- '+result);
        return result;
      }
    } else {
      return data;
    }
  };
});


customFilters.filter('pageCount', function() {
  console.log('pageCount pageCount pageCount');
/*  ng-repeat 디렉티브는 지정된 획수만큼 반복하게 할수 없으며, 배열 전체를 스캔한다. 그래서 불필요한 리소스가 소모된다.
    이 필터를 사용하면 데이터 배열을 모두 보여주는데 필요한 페이지 개수를 계산하고, 페이지 수만큼의 숫자 값이 들어있는 배열을 생성한다.
    하지만 나중에 배울, 지정한 횟수만큼 엘리먼트를 생성해주는 '커스텀 디렉티브' 를 구현하는게 나은 해결책이며, 16장~17장에 배운다.  */
  return function(data, size) {
    console.log('pageCount');
    console.log(data);
    console.log(size);
    if (angular.isArray(data)) {
      var result = [];
      for (var i=0; i<Math.ceil(data.length / size); i++) {  //ceil 은 소수점 '올림' 메소드  4/3  ==> 2
        console.log(i);
        result.push(i);
      }
      console.log(result);
      return result;
    } else {
      console.log('aaaaaaaaaaa3');
      return data;
    }
  };
});

console.log('=== customFilters.js 종료 ===');
