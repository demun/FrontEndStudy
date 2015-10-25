#Map.acos
The Math.acos() function returns the arccosine (in radians) of a number, that is

\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x



#### 문법

```javascript
Math.acos(x)
```

#### 전달인자
x
A number.


#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명
The Math.acos() method returns a numeric value between 0 and π radians for x between -1 and 1. If the value of x is outside this range, it returns NaN.

Because acos() is a static method of Math, you always use it as Math.acos(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
```



