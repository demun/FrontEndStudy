#Math.cos
The Math.cos() function returns the cosine of a number.



#### 문법

```javascript
Math.cos(x)
```

#### 전달인자
x
A number given in unit of radians.



#### 설명

The Math.cos() method returns a numeric value between -1 and 1, which represents the cosine of the angle.

Because cos() is a static method of Math, you always use it as Math.cos(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.cos(0);           // 1
Math.cos(1);           // 0.5403023058681398

Math.cos(Math.PI);     // -1
Math.cos(2 * Math.PI); // 1
```



