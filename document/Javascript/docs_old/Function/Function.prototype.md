# Function.prototype

prototype은 함수가 생성자 함수인 경우에 대상이 되는 클래스의 프로토타입 객체에 대한 참조를 취득하는데 사용한다.
또한 이와 관련된 내용이 많이 있으므로 좀 더 상세한 설명은 아래 포스팅 참조 바람
>http://insanehong.kr/post/javascript-prototype/

## Syntax


## Parameters
없음



## 예

바로 예제로 설명 한다.
```
function Car (name) {
  this.name = name;
}

Car.prototype.info = function () {return this.name;};

var car1 = new Car ( "PRIUS");
alert (car1.info ());
```
위에서는 Car 클래스의 프로토타입 객체에 대해 info 속성을 결정한다.

다른 예제
```
function print (str) {
  document.write (str + "<br />");
}

function Car (manufact, name) {
  this.manufact = manufact;
  this.name = name;
}

Car.prototype.info = function () {return this.manufact + ""+ this.name;};

document.write ( "<p>");

var car1 = new Car ( "Toyota", "PRIUS");
print (car1.info ());

var car2 = new Car ( "Honda", "INSIGHT");
print (car2.info ());

document.write ( "</ p>");
```
위 예제는 아래와 같이 표시된다.
```
Toyota PRIUS
Honda INSIGHT
```
예제 출처
>http://www.ajaxtower.jp/js/function_class/index3.html