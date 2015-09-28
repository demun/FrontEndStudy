#Math.cbrt
The Math.cbrt() function returns the cube root of a number, that is

\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique} \; y \; \text{such that} \; y^3 = x




#### 문법

```javascript
Math.cbrt(x)
```

#### 전달인자

x
A number.

#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명
Because cbrt() is a static method of Math, you always use it as Math.cbrt(), rather than as a method of a Math object you created (Math is not a constructor).


#### 예

```javascript
Math.cbrt(-1); // -1
Math.cbrt(0);  // 0
Math.cbrt(1);  // 1

Math.cbrt(2);  // 1.2599210498948734
```



