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

## [실행결과 보기](http://codepen.io/demun/pen/qOLYxM)

