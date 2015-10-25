#Map.get

get() method는 set() method를 통해 저장한 value를 key를 통해 갖고 옵니다.


#### 문법

```javascript
var myMap = new Map();
myMap.set("bar", "foo");

myMap.get("bar");  // Returns "foo".
myMap.get("baz");  // Returns undefined.
```

#### 전달인자

map의 key



#### 반환값

map의 value


#### 예

```javascript
var testMap = new Map();
testMap.set("test", "map");

map.get("test");  // map을 반환
map.get("tests");  // undefined를 반환
```



