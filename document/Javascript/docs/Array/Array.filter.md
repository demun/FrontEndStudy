# Array.filter

-배열 안의 모든 요소 중 해당 함수에 test하여 pass된 요소만으로 구성된 새로운 배열을 생성한다.



#### 문법

```javascript
arr.filter(callback[, thisArg])
```


#### 예

```javascript

function isBigEnough(value) {
return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

```



