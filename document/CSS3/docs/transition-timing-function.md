#transition-timing-function


작성자 : 장현웅

작성일 : 2015-11-10


css 레퍼런스 설명: 변화되어지는 시간동안 각 구간마다 빠르고 느림을 개별로 지정해주는 속성. 큐빅베이지어(cubic bezier)를 정의하는 네 점에 의해 정의됨 [큐빅베이지어](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

syntax: 
```css 
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