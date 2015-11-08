# jQuery  자주 사용하는 함수 


## Triggrt 함수

<pre><code>

원문 링크  http://api.jquery.com/trigger/

.trigger( eventType [, extraParameters] )

개요 : 특정 이벤트 유형에 대해 선택된 요소에 연결된 모든 핸들러와 동작(behavior)을 실행합니다.

.trigger( eventType [, extraParameters] )
eventType JavaScript 이벤트 타입을 표현하는 문자열, click 또는 submit 같은.
extraParameters 이벤트 핸들러에 전달할 추가 파라미터.
.trigger( event )
event jQuery.Event 객체.

</code></pre>



<pre><code>
## 예제_01
.trigger() 함수는 이벤트가 발생할 때 실행될 함수나 .bind() 함수로 연결된 어떤 이벤트 핸들러를 강제로 실행시켜 줍니다. 

$('#foo').bind('click', function() {
      alert($(this).text());
    });
$('#foo').trigger('click');

#foot 선택자를 클릭 하지 않아도   trigger함수에 연결된 click 이벤트가  trigger함수의 특징의 의하여
 alert($(this).text()); 를  강제로 실행합니다.
</code></pre>


<pre><code>

## 예제_02


   $(document).ready(function () {
      //btn클릭 이벤트 처리
      $("#btn").click(function () { alert('버튼이 클릭되었습니다.') });
      //페이지 로드시 버튼 클릭
      $('#my .hover').click(function () { alert('버튼이 클릭'); });
      $('#my input[type=button]').one("click", function () {
         alert('역시 버튼이 사용자에 의해서 클릭됨');
      });
      $('#btn').bind("click", function () { alert('버튼이 클릭됨'); });
      //버튼 클릭이 아니라 코드에 의해서 click이벤트를 실행하고 싶다면?
      $('#btn').trigger('click'); 
   });


   모든 click  이벤트가   $('#btn').trigger('click'); 코딩에 의하여  강제로 실행되는 예제 입니다.

   div id="my"
   input type="button" id="btn" value="버튼" class="hover" /
   /div



</code></pre>





선택자명 | 설명
--- | ---
$('tag') | Tag라는 이름의 모든 태그 요소를 선택
$(‘.class’) | class라는 클래스명의 모든 클래스 요소를 선택
$(‘#id’) | id라는 아이디명의 아이디 요소를 선택
$(‘div li’) | div에 있는 li 모두 선택
$(‘div > p’) | div의 p태그라는 직계 자식을 선택 
$(this) | 현재 선택 중인 요소를 가리킴

### jQuery 메소드

메소드명 | 설명
--- | ---
eq(n) | n번째에 위치하는 요소를 선택. 
length() | 요소의 개수를 알 수 있음. 
parent()  /  parents() | 요소의 직계 부모 선택  /  요소의 모든 부모들 선택
children(“a”) | 요소의 a태그의 직계자손 선택
prev()  /  next() | 이전 요소 선택  /  다음 요소 선택
val() | 텍스트에 입력한 값을 추출
text() | 해당 요소의 텍스트를 변경
move()  /  clone() | 해당 요소 이동  /  해당 요소 복사
remove() | 해당 요소 삭제
bind(이벤트,함수)  /  unbind(이벤트) | 해당 이벤트 실행시 함수 실행 / 이벤트 제거
&nbsp; | * unbind() - 해당문서 객체와 관련된 모든 이벤트 제거
&nbsp; | * unbind(eventName) - 특정 이벤트와 관련된 모든 이벤트 제거
&nbsp; | * unbind(eventName, function) - 특정 이벤트의 함수 제거
addClass()  /  removeClass() | 클래스 추가  /  클래스 삭제

### jQuery 이벤트
이벤트명 | 설명
--- | ---
mousedown() | 노드영역에서 마우스르 눌렀다가 떼었을 때 발생
mouseenter() | 노드에 마우스가 진입했을 때 발생 -> 부모 영역안의 자식영역에 커서가 가도 마우스 진입으로 판단
mouseleave() | 노드영역에서 마우스가 나갔을 때 발생
mousemove() | 노드영역에서 마우스가 움직일 때 발생
mouseover() | 노드 영역에 마우스를 올려 놓았을 때 발생 -> 부모 영역안의 자식영역에 커서가 가면 마우스 아웃으로 판단
mouseup() | 마우스 포인터를 노드에 올려놓고 마우스 버튼을 눌렀을 때 발생

### jQuery 키보드 이벤트
키보드 이벤트명 | 설명
--- | ---
keydown() | 키보드가 눌러질 때 발생
keyup() | 키보드가 떼어질 때 발생
keypress() | 글자가 입력될 때 발생

#### html()
* 기존 내용을 없애고 필요한 html구문을 생성함

```
ex) 
$subMenu1.html("<li>text</li>");
```

#### 문서의 객체 선택 및 삽입
* $(A).insertBefore(B) : A를 B앞에 추가
* $(C).insertAfter(B) : C를 B뒤에 추가

* $(D).prependTo(B) : D를 B 앞부분에 추가
* $(E).appendTo(B) : E를 B의 뒷부분에 추가

* $(1).after(F) : 1뒤의 F 선택
* $(3).before(G) : 3앞의 G 선택

#### css()
* 해당 요소의 CSS를 설정 및 값 추출

```
ex) 
$("#header").css({height:80, overflow:"hidden"}) //height, overflow 설정

ex) 
var $alpha=$(".subMenu").css("opacity"); //opacity 값 추출
```


#### attr()
* 해당 요소의 속성을 설정 및 값 추출

```
ex) 
$mainImg.attr("class","img02");  //클래스명 설정

ex) 
$("#visual_img").attr("src", "images/main/visual_02.jpg") //이미지 경로 변경

ex) 
var $className=$("#visual_img").attr("class"); //클래스명 값 추출
```

#### setInterval(함수명,주기)
* 일정시간 마다 함수가 실행되도록 처리

#### clearInterval(함수명)
* setInterval로 설정한 작업을 취소


## Animation

### Animate({속성:값},시간,효과,함수)
* 속성의 값만큼 시간주기로 해당효과를 낸 후 함수를 실행함
* 효과 : jQuery의 easing효과(32가지의 easing 효과 사용 가능)

```
ex)
function onLeft() {
   #imgWrap.animate({marginLeft:-400},500,"easeOutCubic");
}
```

```
ex)
$("#imgWrap:not(:animated)").animate({left:300, opacity:0}, 1000, "easeOutCubic", function() {
   #imgWrap.css({left:0, opacity:1});
});
```


## 활용가능한 jQuery 예제

### Slide Image
* slideUP(), slideDown() 사용 (left, right는 적용 안됨)
* appendTo(), prependTo(), animate() 사용

### Show, hide Image
* show(), hide() 사용
* tab menu, modalWindow 활용가능 

### Scroll Image
* scrollTop() 사용 


## 특이사항

### 작동 유무 변수 설정
* 여러 함수에서 한 함수의 동작이 실행중일 때 동시에 다른 함수 동작을 하지 못하도록 함.

```
<script type="text/javascript">
var count;
var $panel;
var totalMember;
var timer;
var isPlay = false; //작동 유무 변수, 시작하자마자는 작동하지 않으니 false

$(document).ready(function() {
   $panel = $("#panel");
   $(".btn_start").bind("click", onStart);
   $(".btn_stop").bind("click", onStop);
});

function onStart() {
   if(isPlay == false) {
      totalMember = parseInt($("#tatalWrap").val());
      timer = setInterval(onCount,20);
      isPlay = true;
   }
}

function onCount() {
   count = parseInt(Math.random()*totalMember)+1
   $panel.html(count);
   $panel.css("font-size", parseInt(Math.random()*100)+100)
   $panel.css("color", "black");
}
function onStop() {
   if(isPlay == true) {
      clearInterval(timer);
      $panel.css("color", "red");
      $panel.css("font-size", 200);
      isPlay = false;
   }
}
</script>
```

### :not(:animated)
* 해당 애니메이션이 진행중일 때 다른 애니메이션 실행을 못하도록 함.
* 해당 애니메이션이 다 끝나고 다음 애니메이션이 실행 됨.

```
<script type="text/javascript">
var $mainMenu;
var $subMenu;
var $subBg;

$(document).ready(function(e) {
   $mainMenu = $(".menu_list > li");
   $subMenu = $(".subMenu");
   $subBg = $("#sub_bg");

   $subMenu.hide();
   $subBg.hide();

   $mainMenu.bind("mouseover", onOver);
   $subBg.bind("mouseout", onOut);

   function onOver() {
      //bg가 내려오는 동안 다른 이벤트는 실행시키지 않는다.
      $("#sug_bg:not(:animated").slideDown(100, "easeOutCubic", function() {
         $subMenu.show();
      });
   }

   function onOut() {
      $subMenu.hide();
      $("#sub_bg:not(:animated)") .slideUp(300, "easeOutCubic");
   }
})
</script>
```

### stop()
* 진행중인 애니메이션을 모두 멈춤.
* 여러 애니메이션이 동시 진행시 실행하던 애니메이션의 동작 완료 전 다른 애니메이션 실행시 사용.

```
<script type="text/javascript">
var $menu;
$(document).ready(function(e) {
   $menu = $(".menu > li");
   $menu.bind("mouseenter", onOver);
   $menu.bind("mouseleave", onOut);
});

function onOver() {
   $(this).children("div").stop();
   $(this).children("div").animate({top:-30}, 300, "easeOutCubic");
}

function onOut() {
   $(this).children("div").stop();
   $(this).children("div").animate({top:0}, 300, "easeOutCubic");
}
</script>
```
