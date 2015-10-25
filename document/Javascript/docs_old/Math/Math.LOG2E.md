#Math.LOG2E
The Math.LOG2E property represents the base 2 logarithm of e, approximately 1.442:

\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442




#### Math.LOG2E의 속성

Writable    no
Enumerable  no
Configurable    no

#### 설명

Because LOG2E is a static property of Math, you always use it as Math.LOG2E, rather than as a property of a Math object you created (Math is not a constructor).



#### 예

```javascript
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```



