#Math.fround
The Math.fround() function returns the nearest single precision float representation of a number.


#### 문법

```javascript
Math.fround(x)
```

#### 전달인자
x
A number.


#### 반환값

새배열. 전달인자들은 array 배열에 이어 붙여 새 배열을 생성한다.



#### 설명

Because fround() is a static method of Math, you always use it as Math.fround(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.fround(0);     // 0
Math.fround(1);     // 1
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.5);   // 1.5
Math.fround(NaN);   // NaN
```



