#클로저 (closure)

함수내부에 만든 지역변수가 사라지지 않고 계속해서 값을 유지하고 있는 상태를 말합니다.
일반 지역변수의 경우 함수호출이 완료되면 사라지지만 클로저를 이용하면 함수호출 완료후 사라지는 지역변수를 사라지지않는 데이터저장소로 만들수가 있습니다.

###문법예시

```javascript
<script>
 function 외부함수(){
      var 변수 A;
      function 내부함수(){
        변수 A사용;
      }
 }
</script>
```
클로저는 일종의 현상이기 때문에 정해진 문법은 없지만 위의 문법처럼 내부함수를 포함하고 있는 함수의 변수를 사용하는 구조의 경우로 표현할수 있다. 
이때 내부 함수를 클로저 함수라고 합니다.
변수 A는 클로저 현상에 의해 외부함수의 호출이 끝나더라도 사라지지않고 값을 유지하게 됩니다.

###일반 함수인 경우 
```javascript
<script>
function addCount(){
  var count=0;
  count++;
  return count;
}
document.write("1. count = "+addCount(),"<br>");
document.write("2. count = "+addCount(),"<br>");
document.write("3. count = "+addCount(),"<br>");
</script>
```
[==> CondePen 확인] http://codepen.io/minyeong/pen/MKmovM

addCount() 함수가 호출되면 지역변수 count가 0으로 초기화됨과 동시에 생성됩니다. 
증가 연산자에 의해 1이되고 이 값을 리턴하기때문에 1이 출력됩니다.그리고 모든 구문을 실행한 함수는 종료됩니다. 이와동시에 함수 내부에서 만들어진 
count는 메모리에서 사라집니다.
2.count, 3.count 역시 첫번째와 동일하게 실행되기 때문에 1이 출력됩니다.

이와같이 일반적인 경우 함수 내부에 위치하고 있는 지역변수는 함수가 종료됨과 동시에 모든 메모리에서 사라집니다. 
그렇지않은 경우 클로저를 사용한 경우 입니다. 

###예시
```javascript
<script>
function createCounter(){
            var count=0;
            function addCount(){
                count++;
                return count;
            }
            return addCount;
        }

        var counter = createCounter();
        
        document.write("1. count = " + counter(),"<br>");
        document.write("2. count = " + counter(),"<br>");
        document.write("3. count = " + counter(),"<br>");
</script>
```
[==> CondePen 확인] http://codepen.io/minyeong/pen/KVmvzp

createCounter() 함수가 호출되면 지역변수 count가 0으로 초기화됨과 동시에 만들어집니다.
그리고 내부에 addCount()라는 함수도 만들어지고 addCount()의 함수를 리턴한 후 createCounter()함수는 종료됩니다.

counter()가 실행되면 addCount()값이 실행되어 증가연산자에 의해서 2. count 와 3. count 의 값이 증가하여 출력됩니다.

외부함수가 내부함수를 리턴했다라는것은 그함수를 종료되었다는 뜻이므로 createCounter()(외부함수)는 종료되지만
counter에 담겨있는 함수를 호출하는 순간에 이미 사라진 외부함수에서 정의된 지역변수에 접근이 성공적으로 이루어진것입니다. 

###클로저를 사용하면 좋은점 
함수내부에 데이터가 만들어지기 때문에 함수 외부에서 수정할수 없는 보호된 데이터를 만들 수 있습니다.(객체지향 프로그래밍에서는 
이를 private데이터 라고 부릅니다.)

[출처] 자바스크립트+jquery 완전정복 스터디 1
