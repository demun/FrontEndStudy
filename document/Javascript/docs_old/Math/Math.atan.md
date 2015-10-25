#Math.atan
The Math.atan() function returns the arctangent (in radians) of a number, that is

\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \tan(y) = x



#### 문법

```javascript
Math.atan(x)
```

#### 전달인자
x
A number.




#### 설명

The Math.atan() method returns a numeric value between -\frac{\pi}{2} and \frac{\pi}{2} radians.

Because atan() is a static method of Math, you always use it as Math.atan(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.atan(1);  // 0.7853981633974483
Math.atan(0);  // 0
```



