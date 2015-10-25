# NaN

NaN은 Not-A-Number 로서 숫자가 아닌 것을 의미할 때 사용한다.
NaN의 경우 모든 숫자와 다른 값을 가지며, 심지어 NaN 자신 Object와도 다른 값을 가지는 것을 의미한다.

## Syntax
` NaN

## 예
```
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```
위의 예를 보다시피 NaN은 모든 숫자(심지어 자기 자신 조차)와 같지 않게 된다.
설명 보다는 이 예제를 기억하는 것이 이해가 더 빠를 것으로 보인다.