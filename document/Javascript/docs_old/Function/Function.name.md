# Function.name

함수의 이름을 돌려준다.
단, 최근 기술이므로 지원하는 브라우저가 따로 있으니 반드시 시험해 보아야 한다.

## Syntax
` Function.name`

## Parameters

#### arg1, arg2, ... argN
없음

##### 부연설명
함수가 선언되어 사용될 때 해당 함수의 본 이름을 알고 싶을 때 사용하며,
함수가 선언될 때의 이름이 return된다.


## 예
```
var object = {
  // anonymous
  someMethod: function() {}
};

object.someMethod.name = 'someMethod';
console.log(object.someMethod.name); // empty string, someMethod is anonymous
```
```
function a() {}

var b = new a();

console.log(b.constructor.name); // logs "a"
```
위의 예 처럼 함수의 원래 이름을 확인할 때 유용할 것으로 보이나,
실무에 사용될 지는 약간의 미지수로 보임