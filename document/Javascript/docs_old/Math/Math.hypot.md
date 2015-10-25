#Math.hypot
The Math.hypot() function returns the square root of the sum of squares of its arguments, that is

\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}



#### 문법

```javascript
Math.hypot([value1[, value2[, ...]]])
```

#### 전달인자

value1, value2, ...
Numbers.



#### 설명

Because hypot() is a static method of Math, you always use it as Math.hypot(), rather than as a method of a Math object you created (Math is not a constructor).

If no arguments are given, the result is +0.

If at least one of arguments cannot be converted to a number, the result is NaN.

With one argument, Math.hypot() returns the same as Math.abs().



#### 예

```javascript
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN, +'foo' => NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755, +'5' => 5
Math.hypot(-3);          // 3, the same as Math.abs(-3)
```



