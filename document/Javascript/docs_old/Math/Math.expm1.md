#Math.expm1
The Math.expm1() function returns ex - 1, where x is the argument, and e the base of the natural logarithms.



#### 문법

```javascript
Math.expm1(x)
```

#### 전달인자

x
A number.



#### 설명

Because expm1() is a static method of Math, you always use it as Math.expm1(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0);  // 0
Math.expm1(1);  // 1.718281828459045
```



