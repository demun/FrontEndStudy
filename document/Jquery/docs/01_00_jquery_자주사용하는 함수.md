# jQuery  자주 사용하는 함수

작성자: 한충재



## Triggrt 함수

원문 링크:  http://api.jquery.com/trigger/

```javascript
.trigger( eventType [, extraParameters] )
```

개요 : 특정 이벤트 유형에 대해 선택된 요소에 연결된 모든 핸들러와 동작(behavior)을 실행합니다.

```javascript
.trigger( eventType [, extraParameters] )
```

eventType: JavaScript 이벤트 타입을 표현하는 문자열, `click` 또는 `submit` 같은.

extraParameters: 이벤트 핸들러에 전달할 추가 파라미터.

.trigger( event )
event jQuery.Event 객체.



<br>


## 예제_01
.trigger() 함수는 이벤트가 발생할 때 실행될 함수나 .bind() 함수로 연결된 어떤 이벤트 핸들러를 강제로 실행시켜 줍니다.

```javascript
$('#foo').bind('click', function() {
    alert($(this).text());
});
$('#foo').trigger('click');
```

`#foot` 선택자를 클릭 하지 않아도 trigger함수에 연결된 click 이벤트가  trigger함수의 특징의 의하여
 `alert($(this).text());` 를  강제로 실행합니다.


<br>

## 예제_02

```html
<script>  
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
</script>

<!-- 모든 click  이벤트가   $('#btn').trigger('click'); 코딩에 의하여  강제로 실행되는 예제 입니다. -->

<div id="my">
   <input type="button" id="btn" value="버튼" class="hover" />
</div>
```






<br>

## each(반복문) 함수

.each()는 선택한 요소가 여러개일 때 각각에 대하여 반복하여 함수를 실행시킵니다.

문법  :  .each( function )

특정 조건을 만족할 때 반복 작업에서 빠져려면  :  return false 사용합니다.



## 예제_01

```html
<style>
  .s1 {color: red;}
  .s2 {color: blue;}
  .s3 {color: green;}
  .s4 {color: brown;}
</style>

<script>
  $( document ).ready( function() {
    var i=1
    $( 'p' ).each( function() {
      $( this ).addClass( 's' + i );
      i = i + 1;
    } );
  } );
</script>


<p>Lorem</p>
<p>Ipsum</p>
<p>Dolor</p>
<p>Amet</p>
```



## 예제_02
반복 작업을 두번만 하고 빠져나오는 예제입니다.

```html
<style>
  .s1 {color: red;}
  .s2 {color: blue;}
  .s3 {color: green;}
  .s4 {color: brown;}
</style>

<script>
  $( document ).ready( function() {
    var i=1
    $( 'p' ).each( function() {
      $( this ).addClass( 's' + i );
      i = i + 1;
      if ( i == 3 ) {
        return false;
      }
    } );
  } );
</script>

<p>Lorem</p>
<p>Ipsum</p>
<p>Dolor</p>
<p>Amet</p>
```



----


* [Jquery README](../README.md)
* [01_00_jquery_기초문서](01_00_jquery_기초문서.md)
* [01_00_jquery_자주사용하는_함수](01_00_jquery_자주사용하는_함수.md)
* [01_01_jquery_plugin_bxslider](01_01_jquery_plugin_bxslider.md)
* [01_02_jquery_plugin_slidesjs](01_02_jquery_plugin_slidesjs.md)
* [01_03_jquery_plugin_bpopup](01_03_jquery_plugin_bpopup.md)
* [jquery](jquery.md)
* [Datepicker](Datepicker.md)

----


* [FrontEndStudy](../../README.md)
