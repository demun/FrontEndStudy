# Error

Error constructor 는 에러 객체를 생성한다.
애러 객체의 인스턴스는 런타임 에러가 발생할 때 실행된다.
에러 객체는 또한 사용자 정의 예외의 기본 객체로 사용될 수 있다.



#### 구문

```javascript
new Error([message[, fileName[, lineNumber]]])
```



#### 인자(Parameters)

- `message`
선택사항. 사람이 읽을 수 있는 에러 메시지.

- fileName
선택사항. 생성된 에러 객체에 대한 파일 이름 값. 
파일 이름에 대한 기본 값은 Error() 생성자에 의해 호출된 코드를 포함하고 있다.

- lineNumber
선택사항. lineNumber 값은 생성된 에러 오브젝트의 속성이다.
lineNumber에 대한 기본 값은 Error() 생성자가 호출할 때 포함된다.



#### 설명(Description)

런 타임 에러는 새로운 에러 객체가 생성되고 실행되었을 때의 결과이다.
이 페이지는 에러 객체 그 자신일 때와, 생성자 함수에 의해 사용될 때에 관한 문서이다.
Error 인스턴스들에 의해 상속된 프로퍼티와 메소드의 리스트, Error.prototype을 볼 수 있다.


##### Error types

자바스크립트에서 Error constructor는 6가지 종류가 있다.

- EvalError
전역 함수 eval()과 관련된 에러가 발생할 때 나타나는 에러를 생성한다.

- InternalError
자바스크립트 엔진에서 내부 에러가 발생할 때 생성한다. E.g. 재귀 과다 호출.

- RangeError
유효한 범위 밖의 인자나 수치의 변수일 때 발생하는 에러를 생성한다.

- ReferenceError
유효하지 않은 레퍼런스를 역참조 할 때 발생하는 에러를 생성한다.

- SyntaxError
eval()에서 코드를 분석하는 동안 발생하는 구문 에러를 생성한다.

- TypeError
변수나 파라미터가 유효하지 않은 타입일 때 발생하는 에러를 생성한다.

- URIError
encodeURI() 혹은 decodeURI()가 유효하지 않은 파라미터로 통과될 때 발생하는 에러를 생성한다.



#### 속성(Properties)

- Error.prototype
에러 인스턴스들에 속성을 추가할 수 있음.



#### 메소드(Methods)
전역 에러 객체는 그 자신의 메소드를 포함하지 않지만, 프로토타입 고리(prototype chain)을 통해 메소드들을 상속한다.



#### 에러 인스턴스(Error instances)
모든 에러 인스턴스들과 정의되지 않은 타입의 에러들(non-generic errors)는 Error.prototype으로부터 상속된다. 모든 생성자 함수처럼, 당신은 생성자에 의해 새성된 모든 인스턴스들에 속성이나 메소드를 추가하기 위해 생성자의 프로포타입을 사용할 수 있다.

##### Properties
##### Standard properties
- Error.prototype.constructor
인스턴스의 프로포타입을 생성하는 함수를 지정

- Error.prototype.message
에러 메시지

- Error.prototype.name
에러 이름

##### 공급자 별 확장(Vendor-specific extensions)
```
- 비 표준
이 형식은 비 표준이다. 이 것들을 웹에 바로 적용하지 마라. 이것은 모든 사용자에게 적용되지 않을 것이다.
아마도 나중에 구현과 실행 사이에서의 호환성이 바뀔 가능성이 있다.
```

##### Microsoft
- Error.prototype.description
에러 설명. message와 유사하다.
- Error.prototype.number
에러 숫자

##### Mozilla
- Error.prototype.fileName
해당 에러가 발생한 파일의 경로
- Error.prototype.lineNumber
해당 에러가 발생한 파일의 라인 넘버.
- Error.prototype.columnNumber
해당 에러가 발생한 라인의 컬럼 수.
- Error.prototype.stack
스택 추적.




##### Methods
- Error.prototype.toSource()
발생한 에러 객체에 대한 소스를 포함하는 문자열을 반환한다. ; 당신은 이 값을 새로운 객체를 생성하는 데에 사용할 수 있다. Object.prototype.toSource() 메소드로 오버라이드.

- Error.prototype.toString()
객체를 대표하는 문자열을 반환한다. Object.prototype.toString() 메소드로 오버라이드.



##### 예제(Example)

- 일반 에러의 발생 (Throwing a generic error)
보통 'throw' 키워드를 사용하여 에러 오브젝트를 생성할 수 있다.
try ~ catch 구문을 통해 에러를 핸들링한다.
```javascript
try {
  throw new Error('Whoops!');
} catch (e) {
  alert(e.name + ': ' + e.message);
}
```



- 특정 에러의 핸들링 (Handling a specific error)
특정 에러에 관해서만 선택적으로 핸들링 할 수 있는 방법에는 
에러의 생성자 프로퍼티를 사용하여 에러 타입을 테스팅 하거나,
(만약 모던 자바스크립트 엔진을 염두로 작성하고 있다면) instanceof 키워드를 이용하는 방법이 있다.
```javascript
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ': ' + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ': ' + e.message);
  }
  // ... etc
}
```



##### 커스텀 에러 작성(Custom Error Types)
당신은 아마도 당신의 고유 에러 타입을 정의하고자 할지도 모른다. new MyError()를 발생시키고, 에러를 검사하고 예외를 발생시키는 핸들러로서 instanceof MyError를 유도하는 것 까지.
이것을 하기위한 공통적인 방법은 아래를 참고.

실행된 MyError는 적어도 파이어폭스(Firefox)에선 정확하지 않은 lineNumber 와 fileName를 보고한다는 것을 유의해야한다.

참고 [What's a good way to extend Error in JavaScript?" discussion on Stackoverflow.](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)

```javascript
// 에러 생성자로부터 프로토타입적으로(prototypally) 상속된 새로운 객체를 생성한다.
function MyError(message) {
  this.name = 'MyError';
  this.message = message || 'Default Message';
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  throw new MyError();
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'Default Message'
}

try {
  throw new MyError('custom message');
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'custom message'
}
```