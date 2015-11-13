#transform-origin


css 레퍼런스 설명: transform 속성을 사용할때 함께 사용되며 변형호과를 줄때 그 도형의 기준 축을 지정해주는 값이다. 2D에서는 x와 y 기준점을 설정하며 3D에서는 z축까지 지정할 수 있다.
기본값은 50% 50%

```css 
transform-origin: x-axis y-axis z-axis;
```

x-axis: x축의 기준점을 설정한다.

y-axis: y축의 기준점을 설정한다.

z-axis: z축의 기준점을 설정한다.


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

<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
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