#Number.isNaN

####링크 : http://www.w3schools.com/jsref/jsref_isnan.asp  (한글번역) 

### 요약(Summary)

isFinite에 () 함수는 한정된 개수 법적 번호인지의 여부를 판정한다.
값이 무한대, 무한대, 또는 NaN이 (숫자가 아닌 값을) + 경우이 기능은, 그렇지 않으면 true를 반환 false를 반환합니다.

#### 반환값

부울. 값이 무한대, 무한대, 또는 NaN이를 +되는 경우, 그렇지 않으면 true를 반환하고, false를 돌려줍니다.

### 구문

isFinite(value)

#### 예

```javascript
숫자가 유한, 법적 번호가 있는지 확인합니다 :
var a = isFinite(123) + "<br>";  // [true]를 반환
var b = isFinite(-1.23) + "<br>";   // [true]를 반환
var g = isFinite("2005/12/12");   // [false]를 반환
var f = isFinite("Hello") + "<br>";   // [false]를 반환



