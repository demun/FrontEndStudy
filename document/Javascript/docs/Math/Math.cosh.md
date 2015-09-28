#Math.cosh
The Math.cosh() function returns the hyperbolic cosine of a number, that can be expressed using the constant e:

\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}


#### 문법

```javascript
Math.cosh(x)
```

#### 전달인자

x
A number.


#### 설명

Because cosh() is a static method of Math, you always use it as Math.cosh(), rather than as a method of a Math object you created (Math is not a constructor).


#### 예

```javascript
Math.cosh(0);  // 1
Math.cosh(1);  // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```



