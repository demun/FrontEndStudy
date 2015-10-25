#Map.size
The size accessor property returns the number of elements in a Map object.



#### 문법

```javascript
var myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

myMap.size // 3
```


#### 설명
The value of size is an integer representing how many entries the Map object has. A set accessor function for size is undefined; you can not change this property.



#### 예

```javascript
var a = [1,2,3];
a.concat(4,5);          // [1,2,3,4,5]를 반환
a.concat([4,5]);        // [1,2,3,4,5]를 반환
a.concat([4,5],[6,7]);  // [1,2,3,4,5,6,7]를 반환
a.concat(4, [5,[6,7]]); // [1,2,3,4,5,[6,7]]를 반환
```



