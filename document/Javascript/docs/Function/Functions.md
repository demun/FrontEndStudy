# Functions

일반적으로 말하자면 함수는 코드의 확장으로서 "서브프로그램"을 말한다.
여러 번 반복되는 일련의 작업을 서브프로그램으로 만들어 호출하여 편하게 사용하기 위해 이용된다.
자세한 사용 방법은 아래의 링크를 통해 확인할 수 있다.
>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

## 함수의 정의

함수는 아래와 같이 정의가 된다.
* 함수의 이름
* argument들의 이름 또는 그 안에 콤마로 분리된 문장의 리스트
* 자바스크립트에서 미리 정의가 된 대괄호로 묶임 {, }

아래는 함수를 정의하는 예이다.
```
function square(number) {
  return number * number;
}
```
마지막의 return은 함수가 실행된 후 그 결과를 알려줄 때 사용된다.

함수를 사용하는 간단한 예를 보자
```
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)
```
함수를 거치기 전 mycar 의 제조사는 Honda라는 값을 받을 수 있는데,
함수를 거쳐 값이 바뀌고 나니 제조사가 Toyota로 바뀌는 것을 볼 수 있다.

## 함수의 표현
함수를 위의 예제와 같이 독립되게 표현할 수도 있으나,
익명으로 사용할 수도 있다.

```
var square = function(number) { return number * number };
var x = square(4) // x gets the value 16
```
또한 아래와 같이 함수 내에 여러 동작들을 가질 수 있도록 할 수 있다.
```
function map(f,a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
```

그리고 함수가 조건에 의해 생성되거나 생성되지 않도록 제아할 수도 있다.
```
var myFunc;
if (num == 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}
```

