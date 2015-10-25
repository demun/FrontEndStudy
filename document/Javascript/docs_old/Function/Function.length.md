# Function.length

함수 인자의 갯수를 나타내며 함수는 실제로 이 개수보다 더 적거나 더 많은 전달인자로 호출 될 수 있다.
(ex. array, function 등의 경우 더 많거나 더 적은 인자가 length로 나타남)

## Syntax
` Function.lenth`

## Parameters
없음

## 예
```
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */
console.log((function(...args) {}).length); /* 0, rest parameter is not counted */
```

예제를 보면 알 수 있듯이 함수안에 선언되어 넘겨지는 argument들의 갯수가 표시되는 것을 볼 수 있다.