#Map.has

The has() method returns a boolean indicating whether an element with the specified key exists or not.



#### 문법

```javascript
var myMap = new Map();
myMap.set("bar", "foo");

myMap.has("bar");  // returns true
myMap.has("baz");  // returns false
```

#### 전달인자

key
Required. The key of the element to test for presence in the Map object.



#### 반환값

Boolean
Returns true if an element with the specified key exists in the Map object; otherwise false.



#### 예

```javascript
var a = [1,2,3];
a.concat(4,5);          // [1,2,3,4,5]를 반환
a.concat([4,5]);        // [1,2,3,4,5]를 반환
a.concat([4,5],[6,7]);  // [1,2,3,4,5,6,7]를 반환
a.concat(4, [5,[6,7]]); // [1,2,3,4,5,[6,7]]를 반환
```
