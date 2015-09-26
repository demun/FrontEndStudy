# Array.concat

concat() method는인자로 넘겨지는 array나 value들을 기존array에 합쳐서 새로운 array를 리턴합니다.



#### 문법

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```

#### 전달인자

value1, ... `array` 에 이어 붙일 대상이 되는 임의 갯수의 값



#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명

`concat()` 은 각 전달인자들을 배열 array 에 이어 붙인 결과로 얻어진 새배열을 반환한다.

array 자체는 변경되지 않는다. 만일 concat()의 전달인자에 배열이 있는경우, 그 배열자체가 아니라 배열의 원소들을 이어 붙이다.



#### 예

```javascript
var a = [1,2,3];
a.concat(4,5);			// [1,2,3,4,5]를 반환
a.concat([4,5]);		// [1,2,3,4,5]를 반환
a.concat([4,5],[6,7]);	// [1,2,3,4,5,6,7]를 반환
a.concat(4, [5,[6,7]]);	// [1,2,3,4,5,[6,7]]를 반환
```



