# isNaN

isNaN는 어떤 값이 NaN인지를 확인할 때 사용하며,
NaN의 경우 true, 숫자일 경우 false를 반환합니다.

## Syntax
` isNaN(testValue)

## Parameters

#### testValue
테스트 하기 원하는 값

#### 부연설명
이 Object를 이용한다면 숫자 체크를 매우 쉽게 할 수 있게 된다.

## 예
```
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
```

레퍼런스 예제 중 재미있는 결과를 보이는 것이 있다.
바로 빈 칸의 경우인데 아래 예를 보고 결과를 확인하면 도움이 될 것 같다.

```
isNaN("");        // false: the empty string is converted to 0 which is not NaN
isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN
```
한마디로 빈칸의 경우 0으로 자동으로 변환되어 들어가 false를 반환하게 된다.