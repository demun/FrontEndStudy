#Math.clz32
The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.



#### 문법

```javascript
Math.clz32(x)
```

#### 전달인자
x
A number.


#### 설명

"clz32" is short for CountLeadingZeroes32.

If x is not a number, then it will be converted to a number first, then converted to a 32-bit unsigned integer.

If the converted 32-bit unsigned integer is 0, then return 32, because all bits are 0.

This function is particularly useful for systems that compile to JS, like Emscripten.


#### 예

```javascript
Math.clz32(1);                // 31
Math.clz32(1000);             // 22
Math.clz32();                 // 32

[NaN, Infinity, -Infinity, 0, -0, null, undefined, 'foo', {}, []].filter(
function(n) {
  return Math.clz32(n) !== 32
});                           // []

Math.clz32(true);             // 31
Math.clz32(3.5);              // 30
```



