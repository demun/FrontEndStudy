#Math.acosh
The Math.acosh() function returns the hyperbolic arc-cosine of a number, that is

\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x



#### 문법

```javascript
Math.acosh(x)
```

#### 전달인자
x
A number.



#### 설명

Because acosh() is a static method of Math, you always use it as Math.acosh(), rather than as a method of a Math object you created (Math is no constructor).



#### 예

```javascript
Math.acosh(-1); // NaN
Math.acosh(0);  // NaN
Math.acosh(0.5) // NaN
Math.acosh(1);  // 0
Math.acosh(2);  // 1.3169578969248166
```



