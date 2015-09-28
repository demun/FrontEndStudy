#Math.asinh
The Math.asinh() function returns the hyperbolic arcsine of a number, that is

\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x



#### 문법

```javascript
Math.asinh(x)
```

#### 전달인자
x
A number.


#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명

Because asinh() is a static method of Math, you always use it as Math.asinh(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.asinh(1);  // 0.881373587019543
Math.asinh(0);  // 0
```



