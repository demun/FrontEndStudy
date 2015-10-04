#Javascript 기초문법

###Basic Rule   
---

* 기본은 [Javascript 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)를 참조합니다.   
대부분 번역이 완료되어있기때문에 공부하시면서 재정리를 하는 용도입니다. 

---

### 기초반에서 담당하는 Repference.

##### 문

- [block](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/block)
- [break](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/break)
- [const](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/const)
- [continue](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/continue)
- [do...while](do...https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/while)
- [export](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/export)
- [for](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/for)
- [for...in](for...https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/in)
- [for each...in](for each...https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/in)
- [function](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/function)
- [if...else](if...https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/else)
- [import](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/import)
- [label](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/label)
- [return](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/return)
- [switch](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/switch)
- [throw](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/throw)
- [try...catch](try...https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/catch)
- [var](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/var)
- [while](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/while)
- [with](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/with)



##### 연산자

- [Arithmetic Operators (+, -, *, /, %, ++, --, unary -)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Arithmetic Operators)
- [Assignment Operators (=, +=, -=, *=, /=, >>=, <<=, >>>=, &=, |=, ^=)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Assignment Operators)
- [Bitwise Operators (&, |, ^, ~, <<, >>, >>>)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Bitwise Operators)
- [Comparison Operators (==, !=, ===, !==, >, >=, <, <=)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Comparison Operators)
- [Logical Operators (&&, ||, !)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Logical Operators)
######특수 연산자
- [Conditional Operator (condition ? ifTrue : ifFalse)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Conditional Operator)
- [Comma Operator (,)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Comma Operator)
- [delete Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/delete Operator)
- [function Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/function Operator)
- [in Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/in Operator)
- [instanceof Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/instanceof Operator)
- [new Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/new Operator)
- [this Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/this Operator)
- [typeof Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/typeof Operator)
- [void Operator](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/void Operator)
- [String Operators (+ and += as concatenation operators)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/String Operators)
- [Member Operators (obj.property and obj["property"])](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Member Operators)
- [Operator Precedence](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Statements/Operator Precedence)

##### 주석
- [Code comments (// and /* */)](https://developer.mozilla.org/ko/Core_JavaScript_1.5_Reference/Comments/comment)

---

##기초문법에서 발표할 자주쓰는 함수 내역.    

* 타이머함수    
	- setTimeout(function,millisecond)    
	- setInterval(function,millisecond)    
	- clearTimeout(id)    
	- clearINterval(id)    

> setTimeout과 setInterval의 차이점 (중요함)    

* 인코딩/디코딩 함수
	- escape() / unescape()
	- encodeURI(url) / decodeURI(encodeURI)
	- encodeURIComponent(uriComponent) / decodeURIComponent(encodedURI)

* 코드 실행 함수
	- eval(String)

* 숫자 확인 함수
	- isFinite()
	- isNaN()

* cast 함수
	- parseInt(String)
	- parseFloat(String)
	- String(number)
	- Number(String)
	- Boolean(String)

	- typeof()
	- confirm(String)
	- prompt(String)
