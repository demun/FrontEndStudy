#in 

지정된 객체에 지정된 속성이 있을 경우, "in" 연산자는 true를 반환한다.

###문법
```javascript
prop in objectName
```
### 전달인자
####prop
문자열 또는 속성 이름 또는 배열 인덱스를 나타내는 숫자 식이다.
####objectName
객체의 이름입니다.
###설명
다음 예제에서는 "in" 연산자 사용의 예를 보여 준다.
###예
```javascript
// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // true를 반환
3 in trees        // true를 반환
6 in trees        // false를 반환 
"bay" in trees    // false를 반환 (index에 있는 값이 아니라, index번호를 지정해야 한다.)
"length" in trees // true를 반환 (length는 배열 속성이다.)

// 미리 정의 된 객체
"PI" in Math          // true를 반환

// 사용자 정의 객체
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // true를 반환
"model" in mycar // true를 반환
```
당신은 "in" 연산자 오른쪽에 있는 객체를 지정해야 한. 예를 들어, String생성자로 만들어진 문자열을 지정할 수 있지만, 문자열 리터럴로는 지정할 수 없다.
```javascript
var color1 = new String("green");
"length" in color1 // true를 반환

var color2 = "coral";
// 오류 발생 (color2는 문자열 객체가 아님.)
"length" in color2
```
###참조
[http://devdocs.io/javascript/operators/in/](http://devdocs.io/javascript/operators/in/)
