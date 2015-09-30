# Function

  Function 생성자(constructor)는 새로운 함수(Function) 객체를 만든다. Javascript에서 모든 함수는 실제로 function 객체이다.

---
### 구문(Syntax)
```javascript
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```
#### 매개변수(Parameters)
- `arg1, arg2, ... argN`
  
  함수에서 사용되는 전형적인 인수의 이름이다. 각각은 자바스크립트의 유효한 식별자(id)와 대응하는 문자열이거나, 콤마(,)로 구별된 문자열의 목록(list)이어야 한다.
 > 예 : 'x', 'theValue' 와 같은 문자열 혹은 "a,b" 와 같은 문자열 리스트.


- `functionBody`

  함수 정의를 포함하여 자바스크립트 상태를 나타내는 String

---
### 설명(Description)

함수 생성자에 의해 생성된 함수 객체는 함수가 생성될 때 분석된다(parse). 이것은 어떤 함수들은 코드의 나머지에서 분석되기 때문에, 코드내에서 함수 표현식이나 함수 상태를 선언하여 호출하는 것 보다 덜 효과적이다.

함수를 통과한 모든 인수(argument)들은, 통과한 순서대로 함수에서 생성한 매개변수의 이름으로 처리된다.

> **Note :** 함수 생성자로 생성된 함수들은 그들의 생성 구문들에 대한 클로져(closures)를 생성하지 않는다; 그들은 항상 전역변수로 생성된다. 함수 생성자로 생성된 함수들을 실행 시킬 땐 고유의 로컬 변수들과 전역 변수들만 접근이 가능하며, 함수 생성자로부터 호출된 범위의 변수들은 접근할 수 없다. 이것이 함수 표현을 위한 코드로 `eval`을 사용하는 것과의 차이점이다.


함수(새로운 연산자를 사용하지 않은)로서 함수 생성자를 호출하는 것은 생성자로서 이것을 호출하는 것과 같다.

---
### 함수의 속성과 메소드 (Properties and Methods of Function)

전역 함수 객체는 고유의 속성이나 메소드를 가지고 있지 않지만, 함수 그 자신이기 때문에 `Function.prototype`으로부터 프로토타입 체인을 통해 메소드와 프로퍼티를 상속한다.
---
### 함수 프로토타입 객체 (Function prototype object)
#### 속성(Properties)
- `Function.arguments`

  함수를 통과하는 인수들과 대응하는 배열. 이것은 함수의 속성으로서 사용되지 않는 대신 함수내에서 이용가능한 인수 객체로 사용한다.
- ~~`Function.arity`~~

  ~~함수에 의해 예상된 인수들의 수로 사용되었지만 삭제되었다. 대신에 `length` 속성을 사용해라.~~

- `Function.caller`

  현재 실행중인 함수를 호출하여 보여주는 함수.
- `Function.length`

  함수에 의해 예상된 인자의 갯수를 보여줌.
- `Function.name`

  함수의 이름
- `Function.displayName`

  display 용 함수 이름(별칭).
- `Function.prototype.constructor`

  객체의 프로토타입을 생성하는 함수를 보여줌. 상세한 사항은 `Object.prototype.constructor`을 참고.


#### 메소드(Methods)
- `Function.prototype.apply()`

  (객체를 호출하는) 다른 한 객체의 문맥에서 또다를 객체에 대한 메소드를 적용; 인수들은 배열 객체로 전달 가능.
- `Function.prototype.bind()`

  Creates a new function which, when called, itself calls this function in the context of the provided value, with a given sequence of arguments preceding any provided when the new function was called.
- `Function.prototype.call()`

  실행하고 있는 다른 객체에 대한 문맥에서 또다른 객체의 메소드를 실행 ; 인자로 전달이 가능
  
- `Function.prototype.isGenerator()`

  만약 함수가 제너레이터(generator)라면 `true`를 리턴 ; 아닐경우 `false` 리턴.
- `Function.prototype.toSource()`

  함수의 대표 소스코드 문자열을 리턴. `Object.prototype.toSource` 메소드에 오버라이드.

- `Function.prototype.toString()`

  함수의 대표 소스코드 문자열을 리턴. `Object.prototype.toString` 메소드에 오버라이드.


---
### 함수 인스턴스 (Function instances)

함수인스턴스는 `Function.prototype`으로 부터 메소드와 속성들을 상속한다. 모든 생성자로 생성자의 프로토타입 객체가 모든 함수 인스턴스들을 바꿀 수 있도록 변경할 수 있다.
---
### 예제(Example)

아래는 두개의 인자를 가진 함수 객체를 생성하는 예제이다.

```javascript
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// > 8
```
#### A recursive shortcut to massively modify the DOM
Creating functions with the Function constructor is one of the ways to dynamically create an indeterminate number of new objects with some executable code into the global scope from a function. The following example (a recursive shortcut to massively modify the DOM) is impossible without the invocation of the Function constructor for each new query if you want to avoid closures.
````html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example - a recursive shortcut to massively modify the DOM</title>
<script type="text/javascript">
var domQuery = (function() {
  var aDOMFunc = [
    Element.prototype.removeAttribute,
    Element.prototype.setAttribute,
    CSSStyleDeclaration.prototype.removeProperty,
    CSSStyleDeclaration.prototype.setProperty
  ];

  function setSomething(bStyle, sProp, sVal) {
    var bSet = Boolean(sVal), fAction = aDOMFunc[bSet | bStyle << 1],
        aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
        aNodeList = bStyle ? this.cssNodes : this.nodes;

    if (bSet && bStyle) { aArgs.push(''); }
    for (
      var nItem = 0, nLen = this.nodes.length;
      nItem < nLen;
      fAction.apply(aNodeList[nItem++], aArgs)
    );
    this.follow = setSomething.caller;
    return this;
  }

  function setStyles(sProp, sVal) { return setSomething.call(this, true, sProp, sVal); }
  function setAttribs(sProp, sVal) { return setSomething.call(this, false, sProp, sVal); }
  function getSelectors() { return this.selectors; };
  function getNodes() { return this.nodes; };

  return (function(sSelectors) {
    var oQuery = new Function('return arguments.callee.follow.apply(arguments.callee, arguments);');
    oQuery.selectors = sSelectors;
    oQuery.nodes = document.querySelectorAll(sSelectors);
    oQuery.cssNodes = Array.prototype.map.call(oQuery.nodes, function(oInlineCSS) { return oInlineCSS.style; });
    oQuery.attributes = setAttribs;
    oQuery.inlineStyle = setStyles;
    oQuery.follow = getNodes;
    oQuery.toString = getSelectors;
    oQuery.valueOf = getNodes;
    return oQuery;
  });
})();
</script>
</head>

<body>

<div class="testClass">Lorem ipsum</div>
<p>Some text</p>
<div class="testClass">dolor sit amet</div>

<script type="text/javascript">
domQuery('.testClass')
  .attributes('lang', 'en')('title', 'Risus abundat in ore stultorum')
  .inlineStyle('background-color', 'black')('color', 'white')('width', '100px')('height', '50px');
</script>
</body>

</html>
````