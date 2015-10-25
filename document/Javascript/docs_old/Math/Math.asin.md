#Math.asin
The Math.asin() function returns the arcsine (in radians) of a number, that is

\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y) = x



#### 문법

```javascript
Math.asin(x)
```

#### 전달인자
x
A number.




#### 설명
The Math.asin() method returns a numeric value between -\frac{\pi}{2} and \frac{\pi}{2} radians for x between -1 and 1. If the value of x is outside this range, it returns NaN.

Because asin() is a static method of Math, you always use it as Math.asin(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.asin(-2);  // NaN
Math.asin(-1);  // -1.5707963267948966 (-pi/2)
Math.asin(0);   // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1);   // 1.570796326794897 (pi/2)
Math.asin(2);   // NaN
```



