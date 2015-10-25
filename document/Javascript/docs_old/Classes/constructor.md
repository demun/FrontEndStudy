# constructor

객체(Object)는 Object Literal Notation을 사용해서 생성할 수도 있을 뿐 아니라, Constructor 라는 함수를 이용해서도 생성이 가능하다. 
이 Constructor 함수는 Object.constructor 프로퍼티를 이용해 접근이 가능하며, 우리가 일반적으로 new Object() 또는 Object Literal Notation을 이용해 생성한 객체들은 모두 자바스크립트 내장 함수인 Object() 라는 객체 생성자(Constructor)함수를 이용해 생성되는 것이다.

[http://muckycode.blogspot.kr/2015/04/javascript-constructor.html 참고](http://muckycode.blogspot.kr/2015/04/javascript-constructor.html)



```javascript
var person1 = {
  firstName: "Jason",
  lastName: "Bourne",
  age: 25  
};

var person2 = new Object();

console.log(person1.constructor); //function Object() 
console.log(person2.constructor); //function Object() 
console.log(person1.constructor == person2.constructor); //true
```


이렇듯 person1 객체나 person2 객체 모두 같은 constructor에 의해 생성된다. 또 number, boolean string, array, regex 등도 각각의 constructor에 의해 생성된다.



```javascript
var array = [];
var number = new Number(3);
var bool = new Boolean(true);
var str = new String("String");

console.log(array.constructor); //function Array()
console.log(number.constructor); //function Number()
console.log(bool.constructor); //function Boolean()
console.log(str.constructor); //function String()
```

즉 constructor(생성자)는 함수일 뿐이며, constructor 함수는 언제든지 생성될 수 있다는 뜻 이기도 하다.
예를들어, 위의 person 객체의 생성자 함수를 만든다 하면 아래와 같이 만들 수 있다.


```javascript
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getInfo = function() {
    return "Name : " + firstName + " " + lastName + "\nAge : " + age;
  }
}

var person1 = new Person("Jason", "Bourne", 33);
var person2 = new Person("Jenny", "Laurence", 18);

console.log(person1.constructor); //function Person
console.log(person2.constructor); //function Person
```

단 new 키워드없이 생성자(Constructor)함수를 호출하게 되면 this 키워드때문에 윈도우 객체에 변수들이 추가되므로 주의하도록 하자(자세한건 this 키워드 관련 글을 참고하기).
