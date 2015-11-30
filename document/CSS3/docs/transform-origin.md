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


## [실행결과 보기](http://codepen.io/demun/pen/qOLYxM)


### 목록
* [align-content](align-content.md)
* [align-items](align-items.md)
* [align-self](align-self.md)
* [@keyframes](@keyframes.md)
* [animation](animation.md)
* [animation-name](animation-name.md)
* [animation-duration](animation-duration.md)
* [animation-timing-function](animation-timing-function.md)
* [animation-delay](animation-delay.md)
* [animation-iteration-count](animation-iteration-count.md)
* [animation-direction](animation-direction.md)
* [animation-play-state](animation-play-state.md)
* [backface-visibility](backface-visibility.md)
* [background-clip](background-clip.md)
* [background-origin](background-origin.md)
* [background-size](background-size.md)
* [border-bottom-left-radius](border-bottom-left-radius.md)
* [border-bottom-right-radius](border-bottom-right-radius.md)
* [border-image](border-image.md)
* [border-image-outset](border-image-outset.md)
* [border-image-repeat](border-image-repeat.md)
* [border-image-slice](border-image-slice.md)
* [border-image-source](border-image-source.md)
* [border-image-width](border-image-width.md)
* [border-radius](border-radius.md)
* [border-top-left-radius](border-top-left-radius.md)
* [border-top-right-radius](border-top-right-radius.md)
* [box-shadow](box-shadow.md)
* [box-sizing](box-sizing.md)
* [column-count](column-count.md)
* [column-gap](column-gap.md)
* [column-rule](column-rule.md)
* [column-rule-color](column-rule-color.md)
* [column-rule-style](column-rule-style.md)
* [column-rule-width](column-rule-width.md)
* [column-span](column-span.md)
* [column-width](column-width.md)
* [columns](columns.md)
* [flex](flex.md)
* [flex-basis](flex-basis.md)
* [flex-direction](flex-direction.md)
* [flex-flow](flex-flow.md)
* [flex-grow](flex-grow.md)
* [flex-shrink](flex-shrink.md)
* [flex-wrap](flex-wrap.md)
* [@font-face](@font-face.md)
* [font-feature-settings](font-feature-settings.md)
* [hyphens](hyphens.md)
* [justify-content](justify-content.md)
* [opacity](opacity.md)
* [order](order.md)
* [outline-offset](outline-offset.md)
* [overflow-wrap](overflow-wrap.md)
* [overflow-x](overflow-x.md)
* [overflow-y](overflow-y.md)
* [perspective](perspective.md)
* [perspective-origin](perspective-origin.md)
* [resize](resize.md)
* [tab-size](tab-size.md)
* [text-align-last](text-align-last.md)
* [text-overflow](text-overflow.md)
* [text-shadow](text-shadow.md)
* [transform](transform.md)
* [transform-origin](transform-origin.md)
* [transform-style](transform-style.md)
* [transition](transition.md)
* [transition-delay](transition-delay.md)
* [transition-duration](transition-duration.md)
* [transition-property](transition-property.md)
* [transition-timing-function](transition-timing-function.md)
* [word-break](word-break.md)
* [word-wrap](word-wrap.md)