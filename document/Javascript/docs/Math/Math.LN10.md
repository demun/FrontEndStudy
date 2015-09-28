#Math.LN10
The Math.LN10 property represents the natural logarithm of 10, approximately 2.302:

\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302



#### 문법

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```

#### Math.LN10 의 속성

Writable    no
Enumerable  no
Configurable    no

#### 설명

Because LN10 is a static property of Math, you always use it as Math.LN10, rather than as a property of a Math object you created (Math is not a constructor).


#### 예

```javascript
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```



