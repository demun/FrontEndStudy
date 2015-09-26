# Function.toString

대상 Function의 객체를 문자열로 변환한 결과를 반환한다.

## Syntax
` function.toString()`

## Parameters
없음

## Description
Function의 객체가 나타내는 함수를 문자열로 변환하도록 하며 이 매소드는 부모 클래스의 object 클래스에서 상속받은 매소드이다.
toString 매소드는 많은 환경에서는 함수 정의 자체를 문자열로 반환하는 경우가 많지만 정해진 규칙이 없기 때문에 환경에 따라 결과 값은 다르다.

##### 부연설명
결과적으로 함수 내용이 나오긴 하지만 브라우저마다 리턴 값이 다르게 된다.

## 예

```
function plus (num1, num2) {
  return num1 + num2;
}

alert (plus.toString ());
```
이 경우 각 브라우저 별로 아래와 같이 동작한다.
```
FireFox3 :
function plus (num1, num2) {return num1 + num2;}

IE8 :
function plus (num1, num2) {return num1 + num2;}

Opera :
function plus (num1, num2) {return num1 + num2;}
```
예제를 보면 알겠지만 간단한 경우에는 결과 값의 차이는 없는 것을 볼 수 있다.