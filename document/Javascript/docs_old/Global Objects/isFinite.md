# isFinite

isFinite의 경우 이 값이 유한한 값을 가지는지를 확인한다.
유한한 값을 가지면 true, 값을 알 수 없을 때는 false를 반환한다.

## Syntax
` isFinite(testValue)

## Parameters

#### testValue
테스트 하기 원하는 값

## 예
```
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true
```