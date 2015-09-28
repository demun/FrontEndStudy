#Math.log2
The Math.log2() function returns the base 2 logarithm of a number, that is

\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x



#### 문법

```javascript
Math.log2(x)
```

#### 전달인자

x
A number.



#### 설명

If the value of x is less than 0, the return value is always NaN.

Because log2() is a static method of Math, you always use it as Math.log2(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.log2(3);    // 1.584962500721156
Math.log2(2);    // 1
Math.log2(1);    // 0
Math.log2(0);    // -Infinity
Math.log2(-2);   // NaN
Math.log2(1024); // 10
```



