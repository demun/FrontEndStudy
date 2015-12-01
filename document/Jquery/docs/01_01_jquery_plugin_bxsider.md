# jQuery  slider plugin

작성자: 신종현, 허종문

### bxSlider 4.2.5
http://bxslider.com



### 특징
* 반응형 대응.
* 가로, 세로, 페이드 모드
* 이미지, 비디오, html 컨텐츠 제공
* 공용 매소드, 콜백 API 제공
* 지원 브라우져: Firefox, Chrome, Safari, iOS, Android, IE7+



## 사용법


### Step 1: `js`, `css` 파일 인클루드

```html
<!-- jQuery library (served from Google) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- bxSlider Javascript file -->
<script src="/js/jquery.bxslider.min.js"></script>
<!-- bxSlider CSS file -->
<link href="/lib/jquery.bxslider.css" rel="stylesheet" />
```

### Step 2: `HTML` 생성


```html
<ul class="bxslider">
  <li><img src="/images/pic1.jpg" /></li>
  <li><img src="/images/pic2.jpg" /></li>
  <li><img src="/images/pic3.jpg" /></li>
  <li><img src="/images/pic4.jpg" /></li>
</ul>
```

### Step 3: bxSlider 호출 및 옵션

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


## 구성 옵션

###General

**mode**
슬라이드 유형
```
default: 'horizontal'
options: 'horizontal', 'vertical', 'fade'
```

**speed**
슬라이드 전환 시간(ms 단위)
```
default: 500
options: integer
```

**slideMargin**
각 슬라이드 사이의 여백
```
default: 0
options: integer
```

**startSlide**
시작 슬라이드 인덱스 (zero-based)
```
default: 0
options: integer
```

**randomStart**
임의의 슬라이드에서 슬라이더를 시작합니다
```
default: false
options: boolean (true / false)
```

**slideSelector**
슬라이드로 사용할 요소 (ex. <code>'div.slide'</code>).<br />참고: 기본적으로, bxSlider는 슬라이더 요소의 모든 직계 자식을 사용합니다.
```
default: ''
options: jQuery selector
```

**infiniteLoop**
만약 <code>true</code>로 설정하면, 맨 마지막에서 "Next" 를 클릭하면 처음으로 전환됩니다.
```
default: true
options: boolean (true / false)
```

**hideControlOnEnd**
`true`의 경우 슬라이드가 첫번째 또는 마지막일때 "Prev"과 "Next" 컨트롤을 비활성화하는 클래스(`disabled`)를 받게됩니다.<br/>참고: <code>infiniteLoop: false</code> 를 사용하는 경우만 적용.
```
default: false
options: boolean (true / false)
```

**easing**
"easing" 유형은 전환시 사용. CSS 전환을 사용하는 경우, <code>transition-timing-function</code> 속성에 대한 값을 포함한다. CSS 전환을 사용하지 않는 경우 당신은 더많은 옵션 플러그인인 <code>jquery.easing.1.3.js</code>을 포함 할 수 있다.<br>더 많은 정보를 원하시면 [http://gsgd.co.uk/sandbox/jquery/easing/](http://gsgd.co.uk/sandbox/jquery/easing/)를 참조하십시오.

```
default: null
options: CSS를 사용하는 경우: 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)'. CSS를 사용하지 않는 경우: 'swing', 'linear' (추가 옵션을 보려면 위의 파일을 참조하십시오)
```

**captions**
이미지 캡션을 포함합니다. 캡션은 이미지의 <code>title</code> 속성입니다.
```
default: false
options: boolean (true / false)
```

**ticker**
ticker 모드에서 슬라이더를 사용 (뉴스 ticker와 유사)
```
default: false
options: boolean (true / false)
```

**tickerHover**
마우스가 슬라이더를 가리킬 때 ticker가 일시 중지됩니다. 참고 :이 기능은 CSS의 transitions을 사용하는 경우 작동하지 않습니다!
```
default: false
options: boolean (true / false)
```

**adaptiveHeight**
동적으로 각 슬라이드의 높이를 기반으로 슬라이더 높이를 조정합니다.
```
default: false
options: boolean (true / false)
```

**adaptiveHeightSpeed**
슬라이드 높이 전환 시간(ms 단위). 참고: <code>adaptiveHeight: true</code>에만 사용
```
default: 500
options: integer
```

**video**
모든 슬라이드 비디오를 포함하는 경우, <code>true</code>로 설정합니다. 또한, 플러그인 <code>jquery.fitvids.js</code>포함<br />
더 많은 정보를 원하시면 [http://fitvidsjs.com/](http://fitvidsjs.com/) 보기
```
default: false
options: boolean (true / false)
```

**responsive**
활성 또는 비활성으로 슬라이더의 크기조정을 자동으로 설정합니다..
```
default: true
options: boolean (true /false)
```

**useCSS**
`true`의 경우, CSS 전환은 수평 및 수직 슬라이드 애니메이션에 사용됨 (네이티브 하드웨어 가속을 사용합니다). `false`의 경우, jQuery의 animate()가 사용됩니다.
```
default: true
options: boolean (true / false)
```

**preloadImages**
'all' 이면, 슬라이더를 시작하기 전에 모든 이미지를 미리로드. 'visible' 이면, 슬라이더를 시작하기 전에 처음 볼 슬라이드의 이미지만 미리로드 (tip: 모든 슬라이더의 크기가 동일한경우 'visible' 사용)
```
default: 'visible'
options: 'all', 'visible'
```

**touchEnabled**
<code>true</code>이면, 슬라이더에 터치 swipe 전환을 허용합니다
```
default: true
options: boolean (true / false)
```

**swipeThreshold**
픽셀의 양은 터치 swipe 슬라이드 전환을 실행하기 위해 초과 할 필요가있다. 참고: <code>touchEnabled: true</code>에만 사용
```
default: 50
options: integer
```

**oneToOneTouch**
If <code>true</code>, non-fade slides follow the finger as it swipes
```
default: true
options: boolean (true / false)
```

**preventDefaultSwipeX**
If <code>true</code>, touch screen will not move along the x-axis as the finger swipes
```
default: true
options: boolean (true / false)
```

**preventDefaultSwipeY**
If <code>true</code>, touch screen will not move along the y-axis as the finger swipes
```
default: false
options: boolean (true / false)
```

**wrapperClass**
Class to wrap the slider in. Change to prevent from using default bxSlider styles.
```
default: 'bx-wrapper'
options: string
```


###Pager

**pager**
<code>true</code>이면, pager가 추가됩니다
```
default: true
options: boolean (true / false)
```

**pagerType**
<code>'full'</code>이면, pager 링크는 각 슬라이드에 대해 생성됩니다. <code>'short'</code>이면, x / y pager가 사용됩니다 (ex. 1 / 5)
```
default: 'full'
options: 'full', 'short'
```

**pagerShortSeparator**
<code>pagerType: 'short'</code>이면, pager는 분리 문자로 이 값을 사용합니다
```
default: ' / '
options: string
```

**pagerSelector**
pager 셀렉터로 엘리먼트를 사용합니다. 기본적으로 호출기는 bx-viewport에 추가됩니다
```
default: ''
options: jQuery selector
```

**pagerCustom**
부모 요소가 pager로서 이용된다. 부모 요소는 각 슬라이드에 대한 <code>&lt;a data-slide-index="x"&gt;</code>를 포함해야합니다. 하지만 동적 carousels과 함께 사용해야합니다.
```
default: null
options: jQuery selector
```

**buildPager**
제공되는 경우, 함수는 모든 슬라이드 요소이며, 반환된 값은 페이저 항목 마크업으로 사용됩니다. <br />자세한 구현을위한 <a href="http://bxslider.com/examples">예제</a>를 참조하십시오.
```
default: null
options: function(slideIndex)
```



###Controls

**controls**
<code>true</code>이면, "Next" / "Prev" 컨트롤이 추가됩니다
```
default: true
options: boolean (true / false)
```

**nextText**
텍스트가 "Next" 제어에 사용됩니다.
```
default: 'Next'
options: string
```

**prevText**
텍스트가 "Prev" 제어에 사용됩니다.
```
default: 'Prev'
options: string
```

**nextSelector**
"Next" 제어에 사용할 엘리먼트 요소
```
default: null
options: jQuery selector
```

**prevSelector**
"Prev" 제어에 사용할 엘리먼트 요소
```
default: null
options: jQuery selector
```

**autoControls**
<code>true</code>이면, "Start" / "Stop" 컨트롤 추가
```
default: false
options: boolean (true / false)
```

**startText**
텍스트가 "Start" 제어에 사용됩니다.
```
default: 'Start'
options: string
```

**stopText**
텍스트가 "Stop" 제어에 사용됩니다.
```
default: 'Stop'
options: string
```

**autoControlsCombine**
슬라이드 쇼를 재생하면 "Stop" 컨트롤이 표시되고 반대의 경우도 마찬가지 입니다.
```
default: false
options: boolean (true / false)
```

**autoControlsSelector**
auto(자동실행) 제어에 사용되는 엘리먼트 요소를 선택합니다.
```
default: null
options: jQuery selector
```

**keyboardEnabled**
슬라이더에 대한 키보드 네비게이션을 활성화합니다.
```
default: false
options: boolean (true / false)
```


###Auto

**auto**
슬라이드가 자동실행으로 전환됩니다
```
default: false
options: boolean (true / false)
```
**stopAutoOnClick**
자동실행을 중단됩니다
```
default: false
options: boolean (true / false)
```

**pause**
자동실행 전환 사이의 시간(ms 단위)
```
default: 4000
options: integer
```

**autoStart**
로드될때 자동실행이 시작합니다. 만약 <code>false</code>이면, "Start" 컨트롤을 클릭해야 시작됩니다.
```
default: true
options: boolean (true / false)
```

**autoDirection**
자동으로 재생되는 슬라이드 전환 방향입니다.
```
default: 'next'
options: 'next', 'prev'
```

**autoHover**
마우스로 슬라이더를 가리킬 때 슬라이드가 일시중지 됩니다
```
default: false
options: boolean (true / false)
```

**autoDelay**
자동실행이 시작되기전의 기다리는 시간입니다.
```
default: 0
options: integer
```



###Carousel

**minSlides**
슬라이드의 최소 수를 표시합니다. 캐러셀이 원래 크기보다 작아질 경우 슬라이드 크기가 될 것입니다.
```
default: 1
options: integer
```

**maxSlides**
슬라이드의 최대 수를 표시합니다. 컨베이어가 원래 크기보다 커지면 슬라이드도 자동 키워집니다.
```
default: 1
options: integer
```

**moveSlides**
이숫자의 슬라이드로 이동합니다. 이값으로 해야됩니다 <code>>= minSlides</code>, 그리고 <code><= maxSlides</code>. 만약 0인경우 (기본값), 슬라이드에 보여진 숫자로 이동됩니다.
```
default: 0
options: integer
```

**slideWidth**
각 슬라이드의 폭입니다. 이 설정은 모든 수평 캐러셀에 필요합니다!
```
default: 0
options: integer
```

**shrinkItems**
캐러셀은 전체 항목을 표시하고 maxSlides / MinSlides에 기초한 뷰포트에 맞게 이미지를 축소할 것이다.
```
default: false
options: boolean (true / false)
```




###Keyboard

**keyboardEnabled**
슬라이드를 키보드로 제어 할 수 있습니다. 슬라이더를 볼 수 없는 경우 키누르기(Keypress)는 무시합니다.
```
default: false
options: boolean (true / false)
```





### Accessibility

**ariaLive**
슬라이드 속성에 Aria Live를 추가합니다.
```
default: true
options: boolean (true / false)
```

**ariaHidden**
보이지 않는 슬라이드에 Aria Hidden 속성을 추가합니다.
```
default: true
options: boolean (true / false)
```





###Callbacks

**onSliderLoad**
슬라이더가 완전히 로드된 직후 실행
```
default: function(){}
options: function(currentIndex){ // your code here }
arguments:
  currentIndex: 현재 슬라이더의 인덱스
```

**onSliderResize**
슬라이더의 크기가 변경된 후 즉시 실행
```
default: function(){}
options: function(currentIndex){ // your code here }
arguments:
  currentIndex: 현재 슬라이더의 인덱스
```

**onSlideBefore**
슬라이드 전환 직전에 실행합니다.
```
default: function(){}
options: function($slideElement, oldIndex, newIndex){ // your code here }
arguments:
    $slideElement: 대상요소(jQuery element)
    oldIndex: 이전 슬라이더의 인덱스(전환전)
    newIndex: 다음 슬라이더의 인덱스(전환후)
```

**onSlideAfter**
슬라이드 전환 후 즉시 실행합니다. 함수의 인수는 현재 슬라이드 요소(전환이 완료 될 때)입니다.
```
default: function(){}
options: function($slideElement, oldIndex, newIndex){ // your code here }
arguments:
    $slideElement: 대상요소(jQuery element)
    oldIndex: 이전 슬라이더의 인덱스(전환전)
    newIndex: 다음 슬라이더의 인덱스(전환후)
```

**onSlideNext**
"Next" 슬라이드 전환 직전에 실행합니다. 함수의 인수의 대상은 슬라이드 (next)엘리먼트입니다.
```
default: function(){}
options: function($slideElement, oldIndex, newIndex){ // your code here }
arguments:
    $slideElement: 대상요소(jQuery element)
    oldIndex: 이전 슬라이더의 인덱스(전환전)
    newIndex: 다음 슬라이더의 인덱스(전환후)
```

**onSlidePrev**
"Prev" 슬라이드 전환 직전에 실행합니다. 함수의 인수의 대상은 슬라이드 (prev)엘리먼트입니다.
```
default: function(){}
options: function($slideElement, oldIndex, newIndex){ // your code here }
arguments:
    $slideElement: 대상요소(jQuery element)
    oldIndex: 이전 슬라이더의 인덱스(전환전)
    newIndex: 다음 슬라이더의 인덱스(전환후)
```




###Public methods

**goToSlide**
제공된 슬라이드 인덱스에 슬라이드 전환을 수행합니다 (zero-based)
```
example:
slider = $('.bxslider').bxSlider();
slider.goToSlide(3);
```

**goToNextSlide**
"Next" 슬라이드 전환을 수행합니다
```
example:
slider = $('.bxslider').bxSlider();
slider.goToNextSlide();
```

**goToPrevSlide**
"Prev" 슬라이드 전환을 수행합니다
```
example:
slider = $('.bxslider').bxSlider();
slider.goToPrevSlide();
```

**startAuto**
슬라이드의 자동실행(auto)을 시작합니다. 만약 <code>false</code>이면 업데이트되는 자동 컨트롤을 막습니다.
```
example:
slider = $('.bxslider').bxSlider();
slider.startAuto();
```

**stopAuto**
슬라이드의 자동실행(auto)을 중지합니다. 만약 <code>false</code>이면 업데이트되는 자동 컨트롤을 막습니다.
```
example:
slider = $('.bxslider').bxSlider();
slider.stopAuto();
```

**getCurrentSlide**
현재 활성화된 슬라이드를 반환합니다.
```
example:
slider = $('.bxslider').bxSlider();
var current = slider.getCurrentSlide();
```

**getSlideCount**
슬라이드의 총 갯수를 반환합니다.
```
example:
slider = $('.bxslider').bxSlider();
var slideQty = slider.getSlideCount();
```

**redrawSlider**
슬라이드를 다시 그립니다. 슬라이드를 숨김후 다시 표시할때 유용합니다.
```
example:
slider = $('.bxslider').bxSlider();
slider.redrawSlider();
```

**reloadSlider**
슬라이드를 리로드합니다. 실시간으로 슬라이드를 추가할때 유용합니다. 설정의 옵션 객체를 받아들입니다.
```
example:
slider = $('.bxslider').bxSlider();
slider.reloadSlider();
```

**destroySlider**
슬라이더를 파괴(destroy)합니다. 이것은 (슬라이더를 호출하기 전에) 다시 원래 상태로 모든 슬라이더 요소를 되돌립니다.
```
example:
slider = $('.bxslider').bxSlider();
slider.destroySlider();
```
