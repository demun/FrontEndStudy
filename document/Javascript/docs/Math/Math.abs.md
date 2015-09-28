#Math.abs
The Math.abs() function returns the absolute value of a numbe.



#### 문법

```javascript
Math.abs(x)
```

#### 전달인자
x
A number.




#### 설명

Because abs() is a static method of Math, you always use it as Math.abs(), rather than as a method of a Math object you created (Math is not a constructor).


#### 예

```javascript
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('string'); // NaN
Math.abs();         // NaN
```



