# transform

작성자 : 장현웅

작성일 : 2015-11-10

css 레퍼런스 설명: 시각적 서식 모델(visual formatting model)의 좌표 공간을 변형시킬 수 있다. 해당 속성에 지정된 값에 따라 엘리먼트(element)에 이동(translate), 회전(rotate), 크기변경(scale), 기울임(skew)등의 효과를 줄 수 있다. 

syntax: 
```css 
transform : transform-function | none;
```

2D 속성
none : 변형 속성을 적용하지 않음

translate(x,y):	요소의 위치를 옮기는 속성

scale(x,y) : 요소의 크기를 비율에 맞춰 확대/축소하는 속성

rotate(angle) : 요소를 지정된 각도 만큼 회전시키는 속성

skew(x-angle, y-angle) : 요소를 지정된 각도만큼 모양을 비스듬히 변형시키는 속성

matrix(n,n,n,n,n,n)	: translate, scale, rotate, skew 각 속성을 한꺼번에 적용할 수 있는 매트릭스 함수


sample code : 
```html

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<style> 
div {
    width: 200px;
    height: 100px;
    margin-bottom: 50px;
}
.none {
	transform: none; 
    background-color: yellow;
}
.translate {
	transform: translate(12px, 20%);
    background-color: red;
}
.scale {
	transform: scale(0.5, 1.5);
    background-color: green;
}
.rotate {
	transform: rotate(0.2turn);
    background-color: blue;
}
.skew {
	transform: skew(-35deg,-200deg);
    background-color: grey;
}
</style>
</head>
<body>

<div class="none">none</div>
<div class="translate">translate</div>
<div class="scale">scale</div>
<div class="rotate">rotate</div>
<div class="skew">skew</div>

</body>
</html>
```


##실행결과

<style> 
div.transform2d div {
    width: 200px;
    height: 100px;
    margin-bottom: 50px;
}
div.transform2d div.none {
	transform: none; 
    background-color: yellow;
}
div.transform2d div.translate {
    background-color: red;
}
div.transform2d div.translate:hover {
	transition-duration: 1s;
	transform: translate(12px, 20%);
}


div.transform2d div.scale {
    background-color: green;
}
div.transform2d div.scale:hover {
	transition-duration: 1s;
	transform: scale(0.5, 1.5);
}
div.transform2d div.rotate {
    background-color: blue;
}
div.transform2d div.rotate:hover {
	transition-duration: 1s;
	transform: rotate(0.2turn);
}
div.transform2d div.skew {
    background-color: grey;
}
div.transform2d div.skew:hover {
	transition-duration: 1s;
	transform: skew(-40deg,35deg);
}
</style>
<div class="transform2d">
<div class="none">none</div>
<div class="translate">translate</div>
<div class="scale">scale</div>
<div class="rotate">rotate</div>
<div class="skew">skew</div>
</div>

3D 속성

translate3d(x,y,z) : 요소의 위치를 옮기는 속성

translateX(x) : 요소의 x 좌표 위치를 옮기는 속성

translateY(y) : 요소의 y 좌표 위치를 옮기는 속성

translateZ(z) : 요소의 z 좌표 위치를 옮기는 속성

scale3d(x,y,z) : 요소의 크기를 비율에 맞춰 확대/축소하는 속성

scaleX(x) : 요소의 x축 크기를 비율에 맞춰 확대/축소하는 속성

scaleY(y) : 요소의 y축 크기를 비율에 맞춰 확대/축소하는 속성

scaleZ(z) : 요소의 z축 크기를 비율에 맞춰 확대/축소하는 속성

rotate3d(x,y,z,angle) : 요소를 지정된 각도 만큼 회전시키는 속성

rotateX(angle) : 요소를 지정된 각도 만큼 x축을 회전시키는 속성

rotateY(angle) : 요소를 지정된 각도 만큼 y축을 회전시키는 속성

rotateZ(angle) : 요소를 지정된 각도 만큼 z축을 회전시키는 속성

skewX(angle) : 요소를 지정된 각도만큼 x축 모양을 비스듬히 변형시키는 속성

skewY(angle) : 요소를 지정된 각도만큼 y축 모양을 비스듬히 변형시키는 속성

skewZ(angle) : 요소를 지정된 각도만큼 z축 모양을 비스듬히 변형시키는 속성

perspective(n) : 지정된 픽셀만큼 더 멀리서 보는 효과를 낸다

matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) : translate, scale, rotate, skew 각 속성을 한꺼번에 적용할 수 있는 매트릭스 함수




sample code : 
```html

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<style> 
div {
    width: 200px;
    height: 100px;
    margin-bottom: 50px;
}
.none {
	transform: none; 
    background-color: yellow;
}
.translate3d {
	transform: translate3d(20px, 30px, 40px);
    background-color: red;
}
.scale3d {
	transform: scale3d(0.5, 1.5,1.5);
    background-color: green;
}
.rotate3d {
	transform: rotate3d(1, 0, 1, 80deg);
    background-color: blue;
}
.skewX {
	transform: skewX(30deg);
    background-color: grey;
}
.skewY {
	transform: skewY(30deg);
    background-color: cyan;
}

</style>
</head>
<body>
<div class="none">none</div>
<div class="translate3d">translate3d</div>
<div class="scale3d">scale3d</div>
<div class="rotate3d">rotate3d</div>
<div class="skewX">skewX</div>
<div class="skewY">skewY</div>
</body>
</html>
```

##실행결과

<style> 
div.transform3d div {
    width: 200px;
    height: 100px;
    margin-bottom: 50px;
}
div.transform3d div.none {
	transform: none; 
    background-color: yellow;
}
div.transform3d div.translate3d {
    background-color: red;
}
div.transform3d div.translate3d:hover {
	transition-duration: 1s;
	transform: translate3d(20px, 30px, 40px);
}
div.transform3d div.scale3d {
    background-color: green;
}
div.transform3d div.scale3d:hover {
	transition-duration: 1s;
	transform: scale3d(0.5, 1.5,1.5);
}
div.transform3d div.rotate3d {
    background-color: blue;
}
div.transform3d div.rotate3d:hover {
	transition-duration: 1s;
	transform: rotate3d(1, 0, 1, 80deg);
}
div.transform3d div.skewX {
    background-color: grey;
}
div.transform3d div.skewX:hover {
	transition-duration: 1s;
	transform: skewX(30deg);
}
div.transform3d div.skewY {
    background-color: cyan;
}
div.transform3d div.skewY:hover {
	transition-duration: 1s;
	transform: skewY(30deg);
}


</style>
<div class="transform3d">
<div class="none">none</div>
<div class="translate3d">translate3d</div>
<div class="scale3d">scale3d</div>
<div class="rotate3d">rotate3d</div>
<div class="skewX">skewX</div>
<div class="skewY">skewY</div>
</div>

#transform-origin


css 레퍼런스 설명: transform 속성을 사용할때 함께 사용되며 변형호과를 줄때 그 도형의 기준 축을 지정해주는 값이다. 2D에서는 x와 y 기준점을 설정하며 3D에서는 z축까지 지정할 수 있다.
기본값은 50% 50%

```css 
transform-origin: x-axis y-axis z-axis;
```

x-axis: x축의 기준점을 설정한다.

y-axis: y축의 기준점을 설정한다.

z-axis: z축의 기준점을 설정한다.



#transform-style

css 레퍼런스 설명: transform-style 속성은 3D공간에서 그 속성을 하위요소에 전달할지의 여부를 지정한다.

```css
transform-style: flat | preserve-3d;
```

flat : 하위요소에 3D속성을 전달하지 않게 지정
preserve-3d : 하위요소에 3D속성을 그대로 전달


sample code : 
```html

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<style> 
.cube {
	width: 200px; 
	height: 200px; 
	transform: perspective(350px); 
	transform-style: preserve-3d;
	transform-origin: 130% 170%;
}
.middle {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: 1px dashed black; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: transparent;
}
.front {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(0, 0, 0, 0.298039); 
	-webkit-transform: translateZ(50px);
}
.back {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	text-align: center; 
	background-color: rgb(0, 255, 0); 
	color: black; 
	-webkit-transform: translateZ(-50px);
}
.right {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(196, 0, 0, 0.701961); 
	-webkit-transform: rotateY(90deg) translateZ(50px);
}
.left {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(0, 0, 196, 0.701961); 
	-webkit-transform: rotateY(-90deg) translateZ(50px);"
}

.top {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(196, 196, 0, 0.701961); 
	-webkit-transform: rotateX(90deg) translateZ(50px);
}
.bottom {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(196, 0, 196, 0.701961); 
	-webkit-transform: rotateX(-90deg) translateZ(50px);
}
</style>
</head>
<body>


<div class="container" style="width: 200px; height: 200px; margin: 200px 0px 0px 75px; border: none;">
  <div class="cube" >
    <div class="middle">
      &nbsp; &nbsp;</div>
    <div class="front">
      1</div>
    <div class="back">
      2</div>
    <div class="right">
      3</div>
    <div class="left">
      4</div>
    <div class="top">
      5</div>
    <div class="bottom">
      6</div>
    <div>
      &nbsp;</div>
  </div>
</div>

</body>
</html>
```



##실행결과

<script type="text/javascript" src="/public/jquery-2.1.3.min.js"></script>
<style> 
div.container .cube {
	width: 200px; 
	height: 200px; 
	transition-duration: 1s;
	transform: perspective(250px); 
	transform-style: preserve-3d;
	transform-origin: 30% -50%;
}
div.container .middle {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: 1px dashed black; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: transparent;
}
div.container .front {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(0, 0, 0, 0.298039); 
	-webkit-transform: translateZ(50px);
}
div.container .back {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	text-align: center; 
	background-color: rgb(0, 255, 0); 
	color: black; 
	-webkit-transform: translateZ(-50px);
}
div.container .right {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(196, 0, 0, 0.701961); 
	-webkit-transform: rotateY(90deg) translateZ(50px);
}
div.container .left {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(0, 0, 196, 0.701961); 
	-webkit-transform: rotateY(-90deg) translateZ(50px);
}

div.container .top {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(196, 196, 0, 0.701961); 
	-webkit-transform: rotateX(90deg) translateZ(50px);
}
div.container .bottom {
	position: absolute; 
	width: 100px; 
	height: 100px; 
	border: none; 
	line-height: 100px; 
	font-family: arial, sans-serif; 
	font-size: 60px; 
	color: white; 
	text-align: center; 
	background-color: rgba(196, 0, 196, 0.701961); 
	-webkit-transform: rotateX(-90deg) translateZ(50px);
}
</style>

<div class="wrapper" style="width: 300px; height: 300px; position:absolute;">
	<div class="container" style="width: 200px; height: 200px; margin: 100px 0px 0px 100px; border: none; position:absolute;">
	  <div class="cube" >
	    <div class="middle">
	      &nbsp; &nbsp;</div>
	    <div class="front">
	      1</div>
	    <div class="back">
	      2</div>
	    <div class="right">
	      3</div>
	    <div class="left">
	      4</div>
	    <div class="top">
	      5</div>
	    <div class="bottom">
	      6</div>
	    <div>
	      &nbsp;</div>
	  </div>
	  
		<div class="scrollArea" style="position:absolute; 
			height:200px; 
			overflow-y:scroll;
		    position: absolute;
		    height: 200px;
		    width: 200px;
		    overflow-y: scroll;
		    top: -50px;
		    left: 0px;">
			<div style="height:1000px">
			</div>
		</div>
	</div>
</div>

<script>
$('.wrapper').on('click',function(){
	var x = (event.offsetX == undefined ? event.layerX : event.offsetX)-75;
	var y = (event.offsetY == undefined ? event.layerY : event.offsetY)-75;
	$('.cube').css('transform-origin',x+'% '+y+'%');
})

$('.scrollArea').on('scroll',function(event){
	$('.cube').css('transform','perspective('+(250+$(this).scrollTop())+'px)');
})
</script>