#transform-origin


css 레퍼런스 설명: transform 속성을 사용할때 함께 사용되며 변형호과를 줄때 그 도형의 기준 축을 지정해주는 값이다. 2D에서는 x와 y 기준점을 설정하며 3D에서는 z축까지 지정할 수 있다.
기본값은 50% 50%

```
transform-origin: x-axis y-axis z-axis;
```

x-axis: x축의 기준점을 설정한다.

y-axis: y축의 기준점을 설정한다.

z-axis: z축의 기준점을 설정한다.



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


-----

* [CSS3 README](../README.md)

* [transform](transform.md)
* [transform-origin](transform-origin.md)
* [transform-style](transform-style.md)
