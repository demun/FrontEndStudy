# bpopup

작성자: 이연옥

bPopup.js  : 
* [레퍼런스 사이트 : http://dinbror.dk/bpopup/ ] (http://dinbror.dk/bpopup/)
* v0.11.0 다운로드 :  [jquery.bpopup.min.js ] (https://raw.github.com/dinbror/bpopup/master/jquery.bpopup.min.js)



### 특징
* 가로/세로 자동 정렬 및 수동셋팅 가능 (컨텐츠 높이에 따라 absolut | fixed 자동설정)   
* 다중팝업 지원 (다중으로 팝업을 열 수 있으며, 열린 순서 역순으로 닫힘)
* 콜백 지원
* Ajax, image, iframe 지원
* 하위 브라우져 tested :  Internet Explorer 6*-9, Firefox 2+, Opera 9+, Safari 4+ and Chrome 4+



### 기본셋팅

```html
<!doctype html>
<html>
<head>
	<meta charset="uft-8">
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="./jquery.bpopup.min.js"></script>
	<script type="text/javascript">
		/* auto */
		$(window).load(function(){
			$('#bpopupLayer').bPopup({
				//follow: [false, false]
			});
		});
		/* click */
		$('#bpopupBtn').click(function(){
			$('#bpopupLayer').bPopup({
				//option
			});
		});
	</script>
</head>
<body>
	<a href="#" id="bpopupBtn">bpopup Open </a>
	<div id="bpopupLayer">
		<span class="bClose">close</span>
		<p>popup Layer</p>
	</div>
</body>
</html>
```

* [=> codepen 예제] (http://codepen.io/dot2flower/pen/LpwajB/)



## 구성 옵션

###기본옵션

** option **
기본옵션
``` javascript
$('element_to_pop_up').bPopup(
	follow: [false, false], //x, y  | true or false | 팝업이 따라다니는 것을 정지시킬 수 있음.
	position: [150, 400], //x, y 
	modalClose: false, //배경을 눌러서 팝업 닫기 여부
	opacity: 0.6, //배경 투명도
	positionStyle: 'fixed', //'fixed' or 'absolute'
	fadeSpeed: 'slow', // 사라지는 속도 'slow', 'fast' or int
	followSpeed: 1500, //따라다니는 속도 'slow' or 'fast' or int
	modalColor: 'greenYellow' , //
	easing: 'easeOutBack', //uses jQuery easing plugin 
	speed: 450, //에니메이션 속도
	transition: 'slideDown', // 팝업 열릴 때 애니메이션 옵션  | 'slideDown' or  'slideIn'
	transitionClose: 'slideBack' // 팝업 닫힐 때 애니메이션 옵션
	autoClose: // 자동 닫기 (밀리초)
);
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
