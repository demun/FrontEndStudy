#Math.imul
The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters.



#### 문법

```javascript
Math.imul(a, b)
```

#### 전달인자
a
First number.
b
Second number.


#### 설명

Math.imul() allows for fast 32-bit integer multiplication with C-like semantics. This feature is useful for projects like Emscripten. Because imul() is a static method of Math, you always use it as Math.imul(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.imul(2, 4);          // 8
Math.imul(-1, 8);         // -8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```



