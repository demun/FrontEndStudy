#함수지향

작성자 : 임성은

작성일 : 2016-12-08 20:23

* **함수지향**
    - 유효범위
    - 값으로서의 함수와 콜백
    - 클로저
    - arguments
    - 함수의 호출

###클로저
내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가르킨다.<br/>고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.

###예시

####예시 01
```javascript
<script>
  function outter(){     //outter 함수선언 외부함수
     var title = 'pcg love';   //외부함수에 선언된 지역변수
     function inner(){   //outter함수안에 또다른 inner함수선언 내부함수
        document.write(title);
     }
     inner();
  }
  outter();
</script>
```
내부inner함수에서 title변수를 호출하고 있는데 내부에 title변수가 없다면 외부에 title변수를 찾아 호출하게 된다. 이러한것을 **클로저**라고 한다. <br />
===> 실행결과 : pcg love

[==> CondePen 확인](http://codepen.io/lseeee/pen/wMdJzV)

####예시 02
```javascript
<script>
  function outter(){   //outter 외부함수 선언
     var title = 'pcg love';
     return function(){   //내부 함수 정의
        document.write(title);
     }
  }
  inner = outter();
  inner();
</script>
```
외부함수가 종료된 이후에도 내부함수를 통해 접근할 수 있다 이것이 클로저에 큰 특징이다. <br />
===> 실행결과 : pcg love

[==> CondePen 확인](http://codepen.io/lseeee/pen/Qyvpdb)

####예시 03 실용적인 예
```javascript
<script>
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
  document.write(ghost.get_title() + ", ");
  document.write(matrix.get_title() + "<br />");

  ghost.set_title('pcg love')
  document.write(ghost.get_title() + ", ");
  document.write(matrix.get_title() + "<br />");
</script>
```
===> 처음 두 개 실행결과 : Ghost in the shell , Matrix<br/>
===> 나중 두 개 실행결과 : pcg love, Matrix<br/>
factory_movie(title) return을 주었기 때문에 여기서 title인자값을 아무나 수정할 수 없고 내부 메소드를 통해서만 수정이 가능하므로 자바로 치면 private라고 보면 이해하기가 쉽다.<br/>
즉, 자기 자신만 수정이 가능하도록 정보를 은닉하는것이다.

[==> CondePen 확인](http://codepen.io/lseeee/pen/gPWmmy)

####예시 04_1 일어나기 쉬운 실수(클로즈구현과정 실수)
```javascript
<script>
  var arr = []        //배열선언
  for(var i = 0; i < 5; i++){  //5번회전하면서 1씩증가시키는 로직
     arr[i] = function(){     //함수배열
        return i ;
     }
  }
  for(var index in arr) {     //for in문을 이용해서 배열담긴 값들을
     document.write(arr[index]() + ", ");    //하나하나 꺼낸다
  }
</script>
```
0~4까지 출력하기를 원하고 있으니 그게 안되고 있다. 왜 그러냐면 i의 값은 외부변수값이 아니기 때문이다.<br/>
===> 실행결과 : 5,5,5,5,5  즉, 5번출력됨

[==> CondePen 확인](http://codepen.io/lseeee/pen/BjRWZX)

####예시 04_2 
```javascript
<script>
  var arr = []
  for(var i = 0; i < 5; i++){
   arr[i] = function(id){
      return function(){
      return id ;
      }
      }(i);
  }
  for(var index in arr) {
     document.write(arr[index]() + ", ");
  }
</script>
```
for문이 돌면서 위에서 강조 표시하고 있는 함수로직이 실행이 될것이고, id라고 하는 값은 매개변수 즉, 지역변수로서의 역할을 하고 있다. i의 값을 받아서 함수 내부로 전달하고 잇다. 또한 전달과 동시에 리턴을 하고 있는데, 내부함수를 리턴을 하고 있고 내부함수는 외부함수의 지역변수 id를 사용하고 있다.<br />
===> 실행결과 : 0,1,2,3,4

[==> CondePen 확인](http://codepen.io/lseeee/pen/Qyvpqy)

###arguments
함수안에서 인자와 관련된 정보를 담고 있는 배열과 유사하다.

###예시

####예시 01
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
</script>
```   
arguments.length 특수한 변수의 렌스값을 체크하고 있다.<br />
length를 통해서 객체가 포함하고 있는 함수가 인자가 몇 개인지 알수 있고 i값을 통해 인덱스 값을 알 수 있다.<br />
약속되어 있는 특수한 이름의 변수명 arguments라는 배열이 담겨져 있다.<br />
사용자가 전달한 인자가 1,2,3,4가들어 가있다.<br />
몇개의 인자가 들어올지 알수가 없어서 sum()이란 함수를 정의했고, arguments라는 약속된 객체에 렌스값을 체크해서 사용자가 정의한 인자값을 sum()에 전달되고 있다.<br />
===> 실행결과 : 0 : 1<br />
                1 : 2<br />
                2 : 3<br />
                3 : 4<br />
                result : 10

[==> CondePen 확인](http://codepen.io/lseeee/pen/VebprE)

####예시 02 매개변수의 수
```javascript
<script>
  function zero(){     //zero()매개변수를 정의하지 않았다.
   document.write(
       'zero.length: ', zero.length, '<br />',   //출력결과는 0
       'arguments: ', arguments.length, '<br />'   //출력결과는 0
    );
  }
  zero();   //인자를 주지 않은 상태

  function one(arg1){   //인자값 1개를 정의
   document.write(
    'one.length: ', one.length, '<br />',     //출력결과는 1
    'arguments: ' , arguments.length, '<br />'   //출력결과는2
    );
  }
  one('val1' , 'val2');
</script>
```
arguments.length는 실제로 어떠한 함수로 유입된 인자의 숫자가 몇 개인가를 알아내는 것이다.<br />
one('val1','val2') 여기서 2개의 인자를 출력하는것은 arguments.length가 출력하는 구문이고, one.length에서는 오로직 1개의 인자만을 출력하는것이다.<br />
여기서 중요한것은 arguments.length라는 것이 어떠한 일을 하냐는 것에 중점을 둬야 한다.<br />
즉, 매개변수로 사용자가 정의 한 모든 인자를 출력하는 것이 arguments의 객체가 하는 역할이다.

[==> CondePen 확인](http://codepen.io/lseeee/pen/mVmWpg)

###함수의 호출
객체에 속성이 있고 속성안에 함수가 들어있다면 그것을 **메소드** 라고 한다.

```javascript
<script>
  function func(){ 
  }
  func();  //함수호출
</script>
```
func()함수는 객체 이기때문에 메소드를 가지고 있다.<br />
함수호출 func.apply 또는 func.call로 호출하는 역할을 한다.

###예시

####예시 01
```javascript
<script>
   function sum(arg1, arg2) {
    return arg1 + arg2;
   }
   document.write(sum.apply(null, [1,2]))
 </script>
```
===> 실행결과 : 3<br />
인자로 1,2를 arg1, arg2로 전달하고 있다.

[==> CondePen 확인](http://codepen.io/lseeee/pen/MKmpVp)

####예시 02
```javascript
<script>
  o1 = {vall:1, val2:2, val3:3}
  o2 = {v1:10, v2:50, v3:100, v4:25}
  function sum(){
   var _sum = 0;     
   for(name in this){    //this담긴 객체의 값을 하나씩 꺼내서
    _sum += this[name];   //_sum이라는 지역 변수에 담고 있다.
   }
   return _sum    //지역변수 담은 결과를 리턴하고 있다.
  }
  document.write(sum.apply(o1) + ',<br />')   //01이라고 하는 객체를 첫번째 인자로 줬다.
  document.write(sum.apply(o2))   //02를 첫번째 인자로 줬다.
</script>
```
===> 실행결과 : 6 , 185<br />
위에서 this란 현재 정해져 있지 않다. 무슨 뜻이냐면 호출할때 정해지기 때문이다.<br />
document.write(sum.apply(o1)) 한다는 것은 sum이라고 하는 apply를 하게 되면 o1 이라는 객체에 sum이라는 메소드가된다.

[==> CondePen 확인](http://codepen.io/lseeee/pen/bEWqMd)

##참고
[함수지향1 http://boss4239.blog.me/220269084153][함수지향1]
[함수지향1]:http://boss4239.blog.me/220269084153
[함수지향2 https://opentutorials.org/module/532/6508][함수지향2]
[함수지향2]:https://opentutorials.org/module/532/6508
