#transition-timing-function


작성자 : 장현웅

작성일 : 2015-11-10


css 레퍼런스 설명: 변화되어지는 시간동안 각 구간마다 빠르고 느림을 개별로 지정해주는 속성. 큐빅베이지어(cubic bezier)를 정의하는 네 점에 의해 정의됨 [큐빅베이지어](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

syntax:
```
transition-timing-function: ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier()|initial|inherit;
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
.transition-timing-function {
	position: absolute;
	width: 100px;
	height: 100px;
	background: green;
	-webkit-transition-property: left;
	-webkit-transition-duration: 4s;
	left:0px;
}

.transition-timing-function.ease {
	transition-timing-function:ease;
	top:0px;

}
.transition-timing-function.linear {
	transition-timing-function:linear;
	top:120px;
}
.transition-timing-function.step-end {
	transition-timing-function:step-end;
	top:240px;
}
.transition-timing-function.steps{
	transition-timing-function:steps(5, end);
	top:360px;
}
.transition-timing-function.ease-in{
	transition-timing-function:ease-in;
	top:480px;
}

.transition-timing-function.ease-out {
	transition-timing-function:ease-out;
	top:600px;
}
.transition-timing-function.ease-in-out {
	transition-timing-function:ease-in-out;
	top:720px;
}
.transition-timing-function.cubic-bezier {
	transition-timing-function:cubic-bezier();
	top:840px;
}

</style>
</head>
<body>
<div style="position:absolute;">
<div class="transition-timing-function ease">ease
</div>
<div class="transition-timing-function linear">linear
</div>
<div class="transition-timing-function step-end">step-end
</div>
<div class="transition-timing-function steps">steps(3, end)
</div>
<div class="transition-timing-function ease-in">ease-in
</div>
<div class="transition-timing-function ease-out">ease-out
</div>
<div class="transition-timing-function ease-in-out">ease-in-out
</div>
<div class="transition-timing-function cubic-bezier">cubic-bezier()
</div>
</div>
</div>

</body>
<script>
$(document).ready(function(){
	setTimeout(function(){
		$('.transition-timing-function').css('left','500px')}
	,10);
	setInterval(function(){
		$('.transition-timing-function').css('left','500px');
		setTimeout(function(){
			$('.transition-timing-function').css('left','0px')
		},5000)
	},10000);
});
</script>
</html>

```



## [실행결과 보기](http://codepen.io/jhw811/pen/LpMrYv)



### 목록
* [align-content](align-content.md)
* [align-items](align-items.md)
* [align-self](align-self.md)
* [@keyframes](@keyframes.md)
* [animation](animation.md)
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
