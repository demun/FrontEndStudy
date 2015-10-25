# Int8Array

8비트 정수 값에 대한 형식화 된 배열이다.
이 Object로 배열을 만들면 8bit 사이즈의 배열이 생성되게 된다.
Integer 8-bit 이므로 -128 ~ 127까지의 값을 갖는다.

## Syntax
```
Int8Array(length);
Int8Array(typedArray);
Int8Array(object);
Int8Array(buffer [, byteOffset [, length]]);
```

## Parameters
#### length
배열이 갖는 길이를 나타낸다.

#### typedArray
배열기 가지게 될 기본 값을 미리 넣어줄 때 사용한다.

#### object
typedArray를 가진 다른 Object를 바로 받을 수도 있다.

#### buffer
Array로 된 buffer를 말한다.
(좀 더 자세한 내용은 예제에서)

#### byteOffset
buffer에서 어느 지점부터 값을 가져갈 지를 결정 한다.

#### length
buffer에서 몇 번째까지를 가져갈 지 결정한다.

#### 부연설명
이 내용에 대해 잘 설명된 곳이 있어 공유한다.
> http://mohwa.github.io/blog/javascript/2015/08/31/binary-inJS/

## 예
```
// From a length
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(20);
var int8View = new Int8Array(buffer);

console.log(int8View.length); // 20

var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);

console.log(int8View.length); // 4
```
첫 예제를 보면 배열의 각 Element들은 모두 1바이트를 가지는 것을 확인할 수 있다.
그리고 마지막 예제를 보면 8개로 선언된 버퍼에서 1에서 4까지를 넣어주겠다는 것을 말한다.

