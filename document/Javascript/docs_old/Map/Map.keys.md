#Map.keys

The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.


#### 문법

```javascript
myMap.keys()
```

#### 전달인자

value1, ... `array` 에 이어 붙일 대상이 되는 임의 갯수의 값



#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.




#### 예

```javascript
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```



