#함수지향

작성자 : 임성은

작성일 : 2016-01-29 20:50

* **객체지향**
    - 객체지향 프로그래밍
    - 생성자와 new
    - 전역객체
    - this
    - 상속
    - prototype
    - 표준 내장 객체의 확장
    - Object
    - 데이터 타입
    - 참조

###생성자와 new
**생성자(constructor)**는 객체를 만드는 역할을 하는 함수다.<br />
자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 **객체를 만드는 창조자**라고 할 수 있다.<br />
객체의 구조를 재활용할 수 있는 방법이 필요할 때 사용하는 것이 생성자다. <br />
일반적인 객체지향 언어에서 생성자는 클래스의 소속이다. 하지만 자바스크립트에서 **객체를 만드는 주체**는 함수다.<br />
함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은 자바스크립트에서 함수의 위상을 암시하는 단서이면서 또 자바스크립트가 추구하는 자유로움을 보여주는 사례라고 할 수 있다.<br />
함수를 호출할 때 **new**을 붙이면 새로운 객체를 만든 후에 이를 리턴한다. <br />
생성자 내에서 객체의 프로퍼티를 정의하는 작업을 **초기화**라고 한다. 이를 통해서 코드의 재사용성이 대폭 높아진다.<br />
또한 생성자 함수는 일반함수와 구분하기 위해서 **첫글자를 대문자**로 표시한다. <br />

###예시

####예시 01 

```javascript
<script>
function Person(){}
var p = new Person();
p.name = 'egoing';
p.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p.introduce());
</script>
```
위의 코드는 새로운 객체를 변수 p에 담았다. 여러사람을 위한 객체를 만든다면 아래와 같이 코드를 작성해야 할 것이다.<br />
===> 실행결과 : My name is egoing

[==> CondePen 확인](http://codepen.io/lseeee/pen/GoGROd)

####예시 02 

```javascript
<script>
function Person(){}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p1.introduce()+"<br />");
 
var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce()+"<br />");

//코드 개선

function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('leezche');
document.write(p2.introduce());
</script>
```
 메소드는 객체가 수행해야 할 행동이다. 아래의 코드는 String 객체의 toUpperCase() 메소드를 사용하여 텍스트를 대문자로 출력하는 코드이다.<br />
 ===> 실행결과 : 
My name is egoing<br />
My name is leezche<br />
My name is egoing<br />
My name is leezche

[==> CondePen 확인](http://codepen.io/lseeee/pen/PZaoEB)

##참고
[생성자와 new https://opentutorials.org/module/532/6570][생성자와 new]
[생성자와 new]:https://opentutorials.org/module/532/6570
