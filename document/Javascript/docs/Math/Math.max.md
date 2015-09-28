#Map.max
The Math.max() function returns the largest of zero or more numbers.



#### 문법

```javascript
Math.max([value1[, value2[, ...]]])
```

#### 전달인자

value1, value2, ...
Numbers.



#### 설명

Because max() is a static method of Math, you always use it as Math.max(), rather than as a method of a Math object you created (Math is not a constructor).

If no arguments are given, the result is -Infinity.

If at least one of arguments cannot be converted to a number, the result is NaN.



#### 예

```javascript
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```



