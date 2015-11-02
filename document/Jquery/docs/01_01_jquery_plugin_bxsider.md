# jQuery  slider plugin

## bxSlider 4.2.5
http://bxslider.com

### 특징
* Fully responsive - will adapt to any device
* Horizontal, vertical, and fade modes
* Slides can contain images, video, or HTML content
* Full callback API and public methods
* Small file size, fully themed, simple to implement
* Browser support: Firefox, Chrome, Safari, iOS, Android, IE7+
* Tons of configuration options

##사용법

```html
<!-- jQuery library (served from Google) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- bxSlider Javascript file -->
<script src="/js/jquery.bxslider.min.js"></script>
<!-- bxSlider CSS file -->
<link href="/lib/jquery.bxslider.css" rel="stylesheet" />
```

###Step 2:  HTML 생성

Create a `<ul class="bxslider">` element, with a `<li>` for each slide. Slides can contain images, video, or any other HTML content!

```html
<ul class="bxslider">
  <li><img src="/images/pic1.jpg" /></li>
  <li><img src="/images/pic2.jpg" /></li>
  <li><img src="/images/pic3.jpg" /></li>
  <li><img src="/images/pic4.jpg" /></li>
</ul>
```

###Step 3: bxSlider 호출 및 옵션

```javascript
$(document).ready(function(){
  $('.bxslider').bxSlider( {
  mode: 'horizontal',// 가로 방향 수평 슬라이드
                speed: 500,        // 이동 속도를 설정
                pager: false,      // 현재 위치 페이징 표시 여부 설정
                moveSlides: 1,     // 슬라이드 이동시 개수
                slideWidth: 100,   // 슬라이드 너비
                minSlides: 4,      // 최소 노출 개수
                maxSlides: 4,      // 최대 노출 개수
                slideMargin: 5,    // 슬라이드간의 간격
                auto: true,        // 자동 실행 여부
                autoHover: true,   // 마우스 호버시 정지 여부
                controls: false    // 이전 다음 버튼 노출 여부
    });
});
```
구분  기본값 데이터 타입  기능
mode  ‘horizontal’  ‘horizontal’
‘vertical’
‘fade’  슬라이드 이동 방향 설정
speed 500 숫자  슬라이드 전환 속도
pager true  논리  동그라미(불릿) 버튼 노출 여부
moveSlides  0 숫자  슬라이드 이동시 개수
sliderWidth 0 숫자  슬라이드 너비
slideMargin 0 숫자  슬라이드 사이 여백
maxSlides 1 숫자  슬라이드 최대 노출 개수
minSlides 1 숫자  슬라이드 최소 노출 개수
auto  false 논리  자동 슬라이드 여부
autoHover false 논리  슬라이드에 마우스 호버시 애니메이션 정지 여부
controls  false 논리  이전/다음 버튼 노출 여부
