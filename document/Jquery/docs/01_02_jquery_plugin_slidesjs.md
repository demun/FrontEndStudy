# jQuery  slider plugin

## slidejs
http://slidesjs.com

### 사용법

```html
<!doctype html>
<head>
  <style>
    /* Prevents slides from flashing */
    #slides {
      display:none;
    }
  </style>

  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script src="jquery.slides.min.js"></script>

  <script>
    $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });
  </script>
</head>
<body>
  <div id="slides">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
    <img src="http://placehold.it/940x528">
  </div>
</body>
```

### 옵션

```javascript
$(function() {
      $("#slides").slidesjs({
              width: 800, // 넓이
              height: 500, // 높이
              start: 3, // 시작 이미지 번호
              navigation: {
                active: false // 네비게이션 사용 유무(이전 다음 보기 버튼)
                effect: "slide"
                  //<a href="#" class="slidesjs-previous slidesjs-navigation">이전</a>
          //<a href="#" class="slidesjs-next slidesjs-navigation">다음</a>
        //false 후 이런식으로 넣으면 커스터마이징 가능함
              },
              pagination: {
                  active: true, //페이징
                  effect: "slide" //숫자 눌렀을때 효과 슬라이드(slide) 페이드효과(fade)
        //css slidesjs-pagination 이부분 수정으로 커스터마이징 가능함
              },
              play: {
                  active: true,  //플레이 스탑버튼 사용유무(버튼변경불가)
                  effect: "slide", //효과 slide, fade
                  interval: 2000,  //밀리세컨드 단위 5000 이면 5초
                  auto: true, //시작시 자동 재생 사용유무
                  swap: true, //플레이스 스탑버튼 둘다보임 false, 하나로 보임 true
                  pauseOnHover: false, //마우스 올렸을때 슬라이드 멈춤할껀지 말껀지
                  restartDelay: 2500 //마우스 올렸다가 벗어 났을때 재 작동 시간 밀리세컨드 단위
                  //css slidesjs-play, slidesjs-stop 이부분을 이용해서 커스터마이징 가능함
              },
              effect: {
        slide: {
        // 슬라이드 효과
          speed: 200
          // 0.2초만에 바뀜
        },
        fade: {
        // 페이드 효과
          speed: 300,
          // 0.3초만에 바뀜
          crossfade: true
          // 다음이미지와 겹쳐서 나타남 유무
        }
      },
      callback: {
        loaded: function(number) {
        //처음 화면 로드될때 번호
        //  alert('loaded : ' + number);
         $('#slidesjs-slide-number').text(number);
        },
        start: function(number) {
        //변경전 사진번호
        //  alert('start : ' + number);
        },
        complete: function(number) {
        //변경후 사진번호
        //  alert('complete : ' + number);
         $('#slidesjs-slide-number').text(number);
        }
      }
        })
  })
```
* width (number) & height (number)
Set width and height of the slideshow
 This must be defined.

* start (number)
Set the first slide in the slideshow.
 Default value is 1.

* navigation (object)
Next and previous button settings.

* pagination (object)
Pagination settings

* play (object)
Play and stop button setting.

* effect (object)
Effects setting.

* callback (function)
SlidesJS callbacks.




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
