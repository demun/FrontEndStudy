#Math.log1p
The Math.log1p() function returns the natural logarithm (base e) of 1 + a number, that is

\forall x > -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)



#### 문법

```javascript
Math.log1p(x)
```

#### 전달인자

x
A number.




#### 설명

If the value of x is less than -1, the return value is always NaN.

Because log1p() is a static method of Math, you always use it as Math.log1p(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```



