#Map.prototype

The Map.prototype property represents the prototype for the Map constructor.



#### 문법

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```

#### 전달인자

value1, ... `array` 에 이어 붙일 대상이 되는 임의 갯수의 값



#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명

Map instances inherit from Map.prototype. You can use the constructor's prototype object to add properties or methods to all Map instances.


#### 예

```javascript
var a = [1,2,3];
a.concat(4,5);          // [1,2,3,4,5]를 반환
a.concat([4,5]);        // [1,2,3,4,5]를 반환
a.concat([4,5],[6,7]);  // [1,2,3,4,5,6,7]를 반환
a.concat(4, [5,[6,7]]); // [1,2,3,4,5,[6,7]]를 반환
```



