# Boolean.valueOf

Boolean 객체에 불리언 값




#### 문법

```javascript
b.valueOf()
```



### 반환값

`Boolean` 객체 b 에 포함된 기본 타입 불리언값



#### 예제

```javascript
// b에 true 값을 담습니다.
var b = new Boolean(true);
var v = b.valueOf();

// 확인
console.log(v); // true
console.log(typeof v); // boolean
```
