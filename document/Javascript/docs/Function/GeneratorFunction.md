# GeneratorFunction

GeneratorFunction 생성자는 새로운 generator function 객체를 생성합니다.
JavaScript에서는 모든 발전기 기능은 실제로 GeneratorFunction 개체입니다.
GeneratorFunction 전역 개체가 아님에 주의하십시오.
다음 코드를 평가하여 얻을 수 있습니다.

```
Object.getPrototypeOf(function*(){}).constructor
```

## Syntax
` new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)`

## Parameters

#### arg1, arg2, ... argN
함수 내에서 사용될 argument들의 이름을 말한다.
JavaScript는 이 인자들을 콤마(,)로 분리해서 인식한다.

#### functionBody
함수 정의를 이루는 문자열.

##### 부연설명
각 파라미터 들은 일반 함수와 동일한 것을 확인할 수 있다.
GeneratorFunction을 알기 위해서는 Generator에 대해서 알아야 한다.

>Generator 설명 링크




