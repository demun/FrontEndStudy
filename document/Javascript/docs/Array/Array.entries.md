# Array.entries

-해당 배열의 각 인덱스에 대한 값과 같은 새로운 배열을 생성할 수 있다.


#### 예

```javascript

var arr = ['a', 'b', 'c'];
var eArr = arr.entries();
 
console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']

