# Function.constructor

함수를 생성해줄 때 사용하며
Javascript안에 모든 함수 object 들은 이 방법으로 활성화 한다.

## Syntax
` new Function ([arg1[, arg2[, ...argN]],] functionBody)`

## Parameters

#### arg1, arg2, ... argN
함수 내에서 사용될 argument들의 이름을 말한다.
JavaScript는 이 인자들을 콤마(,)로 분리해서 인식한다.

#### functionBody
함수 정의를 이루는 문자열.

##### 부연설명
functionBody의 경우 html 에서 javascript를 사용할 때 각 함수를 세미콜론(;)을 이용해서 분리하는데
functionBody도 함수 선언을 따로 넣을 필요없이 아래의 예제처럼 선언과 동시에 사용할 수 있도록 할 수 있음


## 예
```
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// > 8
```

위 예에서 보면 함수가 선언이되며 바로 사용이 되었으며,
함수 내에 들어가야 하는 *return a + b*를 *functionBody*에 두어 바로 사용 가능하도록 함