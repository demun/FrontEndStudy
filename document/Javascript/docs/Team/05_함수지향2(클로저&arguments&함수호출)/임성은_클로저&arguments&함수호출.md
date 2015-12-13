#함수지향

작성자 : 임성은

작성일 : 2015-12-13 22:29

* **함수지향**
    - 유효범위
    - 값으로서의 함수와 콜백
    - 클로저
    - arguments
    - 함수의 호출

###클로저
내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가르킨다.<br/>고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.

###예시

```javascript
<script>
  function outter(){     //outter 함수선언 외부함수
     var title = 'pcg love';   //외부함수에 선언된 지역변수
     function inner(){   //outter함수안에 또다른 inner함수선언 내부함수
        alert(title);
     }
     inner();
  }
  outter();
  //내부inner함수에서 title변수를 호출하고 있는데 내부에 title변수가 없다면 외부에 title변수를 찾아 호출하게 된다.
  //이러한것을 클로저라고 한다.
  //===> 실행결과 : pcg love


  function outter(){   //outter 외부함수 선언
     var title = 'pcg love';
     return function(){   //내부 함수 정의
        alert(title);
     }
  }
  inner = outter();
  inner();
  //외부함수가 종료된 이후에도 내부함수를 통해 접근할 수 있다 이것이 클로저에 큰 특징이다.
  //===> 실행결과 : pcg love

  //실용적인 예

  function factory_movie(title){  //함수정의 인자는 title
    return {    //2개의 객체를 리턴하고 있다.
       get_title : function() {      //1번객체 메소드는 get_title
          return title;
       },
       set_title : function(_title){  //2번객체
          title = _title
       }
    }
  }
  ghost = factory_movie('Ghost in the shell');
  matrix = factory_movie('Matrix');
  alert(ghost.get_title());
  alert(matrix.get_title());
  //===> 실행결과 : Ghost in the shell , Matrix

  ghost.set_title('pcg love')
  alert(ghost.get_title());
  alert(matrix.get_title());
  //===> 실행결과 : pcg love, Matrix
  //factory_movie(title) return을 주었기 때문에 여기서 title인자값을 아무나 수정할 수 없고
  //내부 메소드를 통해서만 수정이 가능하므로 자바로 치면 private라고 보면 이해하기가 쉽다.
  //즉, 자기 자신만 수정이 가능하도록 정보를 은닉하는것이다.

  //일어나기 쉬운 실수(클로즈구현과정 실수)

  var arr = []        //배열선언
  for(var i = 0; i < 5; i++){  //5번회전하면서 1씩증가시키는 로직
     arr[i] = function(){     //함수배열
        return i ;
     }
  }
  for(var index in arr) {     //for in문을 이용해서 배열담긴 값들을
     console.log(arr[index]());    //하나하나 꺼낸다
  }
  //0~4까지 출력하기를 원하고 있으니 그게 안되고 있다. 왜 그러냐면 i의 값은 외부변수값이 아니기 때문이다.
  //===> 실행결과 : 5,5,5,5,5  즉, 5번출력됨

  var arr = []
  for(var i = 0; i < 5; i++){
   arr[i] = function(id){
      return function(){
      return id ;
      }
      }(i);
  }
  for(var index in arr) {
     console.log(arr[index]());
  }
  //for문이 돌면서 위에서 강조 표시하고 있는 함수로직이 실행이 될것이고
  //id라고 하는 값은 매개변수 즉, 지역변수로서의 역할을 하고 있다.
  //i의 값을 받아서 함수 내부로 전달하고 잇다. 또한 전달과 동시에 리턴을 하고 있는데
  //내부함수를 리턴을 하고 있고 내부함수는 외부함수의 지역변수 id를 사용하고 있다.
  //===> 실행결과 : 0,1,2,3,4
</script>
```

###arguments
함수안에서 인자와 관련된 정보를 담고 있는 배열과 유사하다.<br/>
length를 통해서 객체가 포함하고 있는 함수가 인자가 몇 개인지 알수 있고 i값을 통해 인덱스 값을 알 수 있다.

###예시

```javascript
<script>
  function sum(){     //매개변수가 없는 sum()이란 함수
    var i, _sum = 0;    //i , _sum 변수를 정의  i는 loof를 위한변수 즉, 반복 _sum 출력결과를 담아낼 변수
    for(i = 0; i < arguments.length; i++){
     document.write(i+' : ' + arguments[i]+ '<br />');   //arguments[i] i는 1,2,3,4 이렇게 들어간다.
     _sum += arguments[i];      //+= 이란  a = a+1과 같은뜻
    }
    return _sum;
   }
   document.write('result : ' + sum(1,2,3,4));  //매개변수가 없는데도 sum이란함수에 1,2,3,4 인자4개를 전달
  //arguments.lengh 특수한 변수의 렌스값을 체크하고 잇다.
  //약속되어 있는 특수한 이름의 변수명 arguments라는 배열이 담겨져 있다.
  //사용자가 전달한 인자가 1,2,3,4가들어 가있다.
  //몇개의 인자가 들어올지 알수가 없어서 sum()이란 함수를 정의했고
  //arguments라는 약속된 객체에 렌스값을 체크해서 사용자가 정의한 인자값을 sum()에 전달되고 있다.
  //===> 실행결과 : 0 : 1
  //                1 : 2
  //                2 : 3
  //                3 : 4
  //                result : 10

  //매개변수의 수

  //arguments.length는 실제로 어떠한 함수로 유입된 인자의 숫자가 몇 개인가를 알아내는 것이다.

  function zero(){     //zero()매개변수를 정의하지 않았다.
   console.log(
       'zero.length', zero.length,    //출력결과는 0
       'arguments', arguments.length   //출력결과는 0
    );
  }
  zero();   //인자를 주지 않은 상태

  function one(arg1){   //인자값 1개를 정의
   console.log(
    'one.length', one.length,     //출력결과는 1
    'arguments' , arguments.length   //출력결과는2
    );
  }
  one('val1' , 'val2');
  //one('val1','val2') 여기서 2개의 인자를 출력하는것은 arguments.length가 출력하는 구문이고,
  //one.length에서는 오로직 1개의 인자만을 출력하는것이다.
  //여기서 중요한것은 arguments.length라는 것이 어떠한 일을 하냐는 것에 중점을 둬야 한다.
  //즉, 매개변수로 사용자가 정의 한 모든 인자를 출력하는 것이 arguments의 객체가 하는 역할이다.
</script>
```

###함수의 호출
객체에 속성이 있고 속성안에 함수가 들어있다면 그것을 메소드 라고 한다.<br/>

###예시

```javascript
<script>
  function func(){   //func()함수는 객체 이기때문에 메소드를 가지고 있다.
  }
  func();  //함수호출
  //함수호출 func.apply 또는 func.call로 호출하는 역할을 한다.

   function sum(arg1, arg2) {
    return arg1 + arg2;
   }
   alert(sum.apply(null, [1,2]))
  //===> 실행결과 : 3
  //인자로 1,2를 arg1, arg2로 전달하고 있다.

  o1 = {vall:1, val2:2, val3:3}
  o2 = {v1:10, v2:50, v3:100, v4:25}
  function sum(){
   var _sum = 0;     
   for(name in this){    //this담긴 객체의 값을 하나씩 꺼내서
    _sum += this[name];   //_sum이라는 지역 변수에 담고 있다.
   }
   return _sum    //지역변수 담은 결과를 리턴하고 있다.
  }
  alert(sum.apply(o1))   //01이라고 하는 객체를 첫번째 인자로 줬다.
  alert(sum.apply(o2))   //02를 첫번째 인자로 줬다.
  //===> 실행결과 : 6 , 185
  //위에서 this란 현재 정해져 있지 않다. 무슨 뜻이냐면 호출할때 정해지기 때문이다.
  //alert(sum.apply(o1)) 한다는 것은 sum이라고 하는 apply를 하게 되면 o1 이라는 객체에 sum이라는 메소드가된다.
</script>
```

##참고
[함수지향1 http://boss4239.blog.me/220269084153][함수지향1]
[함수지향1]:http://boss4239.blog.me/220269084153
[함수지향2 https://opentutorials.org/module/532/6508][함수지향2]
[함수지향2]:https://opentutorials.org/module/532/6508
