#Math.log10
The Math.log10() function returns the base 10 logarithm of a number, that is

\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x



#### 문법

```javascript
Math.log10(x)
```

#### 전달인자

x
A number.



#### 설명
If the value of x is less than 0, the return value is always NaN.

Because log10() is a static method of Math, you always use it as Math.log10(), rather than as a method of a Math object you created (Math is not a constructor).



#### 예

```javascript
Math.log10(2);      // 0.3010299956639812
Math.log10(1);      // 0
Math.log10(0);      // -Infinity
Math.log10(-2);     // NaN
Math.log10(100000); // 5
```



