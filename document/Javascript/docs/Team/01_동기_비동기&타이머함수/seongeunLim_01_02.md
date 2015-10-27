#실무에 자주 쓰이는 함수

* **타이머함수**
    - setTimeout(function,millisecond)
    - setInterval(function,millisecond)
    - clearTimeout(id)
    - clearInterval(id)
    - setTimeout과 setInterval의 차이점 (중요함)

##타이머함수 (window 객체의 타이머 메서드)

window 객체는 아래 표의 타이머 메서드를 갖는다.

|메서드 이름| 설명|
| :------------ | :------------|
|setTimeout(funtion, millisecond) |일정 시간 후에 함수를 한 번 실행한다.|
|setInterval(funtion, millisecond) |일정 시간마다 함수를 반복해서 실행한다.|
|clearTimeout(id) |일정 시간 후에 함수를 한 번 실행하는 것을 중지한다.|
|clearlnterval(id) |일정 시간마다 함수를 반복하는 것을 중단한다.|

타이머 메서드는 특정 시간에 특정 함수를 실행하게 하는 메서드이다.<br/>
**setTimeout() 메서드**는 특정 시간 후에 함수를 한 번 실행하고,<br/>
**setInterval() 메서드**는 특정 시간마다 함수를 실행한다.<br/>

**setTimeout() 메서드**는 한 번만 실행하므로 특별히 주의할 사항이 없지만, <br/>
**setInterval() 메서드**는 지속적으로 실행하므로 지속적으로 메모리를 차지하므로 주의해야 한다.  

타이머를 멈추려면 clearTimeout() 메서드와 clearInterval() 메서드를 사용한다.<br/>
setTimeout() 메서드와 setInterval() 메서드를 사용하면 **아이디를 리턴**하는데,<br/>
이 타이머 아이디를 **clearTimeout() 메서드**와 **clearInterval() 메서**드의 매개 변수에 넣어주면 타이머를 정지 할 수 있다.

**[아래 그림은 setTimeout() 메서드와 setInterval() 메서드의 차이를 나타낸 그림]**
![setTimeout() 메서드와 setInterval() 메서드의 차이 이미지](../../../../Javascript/images/seongeun_02.jpg)

###예시

* **타이머 메서드**

```javascript
<script>
  //윈도우가 로드될 때
  window.onload = function (){
    aleret('3초 후 이 페이지는 종료됩니다.');
    // 3초 후에 함수를 실행한다.
    window.setTimeout(function (){
      window.close();
    }, 3000);
  }
</script> 
```

* **타이머 정지 메서드**

```javascript
<script>
  //윈도우가 로드될 때
  window.onload = function (){
  // 1초마다 함수를 실행한다.
  val intervalID = setInterval(function (){
        document.body.innerHTML += '<p>' + new Date() + '</p>';
      },1000);
    
    // 10초 후에 함수를 실행한다.
    setTimeout(function (){
    //타이머를 종료한다.
      clearInterval(intervalID);
    }, 10000);
  }
</script> 
```

##참고
[모던 웹을 위한 JavaScript jQuery 입문/윤인성 지음/한빛미디어 출판]
