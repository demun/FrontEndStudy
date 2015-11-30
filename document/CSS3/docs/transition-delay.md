#transition-delay 


작성자 : 장현웅

작성일 : 2015-11-10


css 레퍼런스 설명: 변화가 언제 시작될지 지정해주는 속성


syntax: 
```css 
transition-delay : time|initial|inherit;
```

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<style>



.transition-delay {
	position: absolute;
	width: 100px;
	height: 100px;
	background: blue;
	-webkit-transition-property: left;
	-webkit-transition-duration: 2s;
	left:0px;
}

.transition-delay.sec1 {
	transition-delay:1s;
	top:0px;
	
}
.transition-delay.sec2 {
	transition-delay:2s;
	top:120px;
}
.transition-delay.sec3 {
	transition-delay:3s;
	top:240px;
}
.transition-delay.sec4{
	transition-delay:4s;
	top:360px;
}

</style>
</head>
<body>

<div style="position:absolute; ">
<div class="transition-delay sec1">sec1
</div>
<div class="transition-delay sec2">sec2
</div>
<div class="transition-delay sec3">sec3
</div>
<div class="transition-delay sec4">sec4
</div>
</div>
</body>
<script>
$(document).ready(function(){
	setTimeout(function(){
		$('.transition-delay').css('left','500px')}
	,10);
	setInterval(function(){
		$('.transition-delay').css('left','500px');
		setTimeout(function(){
			$('.transition-delay').css('left','0px')
		},7000)
	},14000);
});
</script>
</html>

```


##실행결과


## [실행결과 보기](http://codepen.io/jhw811/pen/QjeNJW)



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