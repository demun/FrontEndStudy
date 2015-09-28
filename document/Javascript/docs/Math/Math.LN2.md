#Marh.LN2
The Math.LN2 property represents the natural logarithm of 2, approximately 0.693:

\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693



#### 문법

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```

#### Math.LN2의 속성

Writable    no
Enumerable  no
Configurable    no

#### 설명

Because LN2 is a static property of Math, you always use it as Math.LN2, rather than as a property of a Math object you created (Math is not a constructor).



#### 예

```javascript
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```



