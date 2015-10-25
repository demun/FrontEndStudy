#Math.log
The Math.log() function returns the natural logarithm (base e) of a number, that is

\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x


#### 문법

```javascript
Math.log(x)
```

#### 전달인자

x
A number.


#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명

If the value of x is negative, the return value is always NaN.

Because log() is a static method of Math, you always use it as Math.log(), rather than as a method of a Math object you created (Math is not a constructor).


#### 예

```javascript
Math.log(-1); // NaN, out of range
Math.log(0);  // -Infinity
Math.log(1);  // 0
Math.log(10); // 2.302585092994046
```



