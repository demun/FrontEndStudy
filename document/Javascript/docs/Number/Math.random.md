#Math.min

####링크 : http://www.w3schools.com/jsref/jsref_random.asp (한글번역) 

### 요약(Summary)

하지만 1 (전용)을 포함하지 않는 최대 랜덤 () 메소드는 0 (포함)로부터 임의의 수를 반환합니다.

#### 반환값

뿐만 1을 포함하지 않는 0에서 번호를 나타내는 숫자

### 구문

Math.random()


#### 예

```javascript
0 (포함)과 1 (제외) 사이의 임의의 수를 돌려줍니다 :
Math.random();   // [0.10786516382358968]를 반환

1과 10 사이의 임의의 수를 반환 :
Math.floor((Math.random() * 10) + 1); . // [9]를 반환

1과 100 사이의 임의의 수를 반환 :
Math.floor((Math.random() * 100) + 1);   // [36]를 반환



