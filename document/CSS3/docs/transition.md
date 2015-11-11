#transition

작성자 : 장현웅

작성일 : 2015-11-10

css 레퍼런스 설명: 모양이나 색상의 변화를 시간을 두고 줄 수 있는 속성이다. 
transition-property, transition-duration, transition-timing-function, transition-delay 총 네 가지 속성의 축약으로 transition 하나를 사용할 수 있다.


```css
 transition: property duration timing-function delay; 
```
transition-property	: transition 에 어떤 효과를 줄지 css 속성의 이름을 지정해주는 속성
transition-duration	: 변화되는 시간을 초단위로 지정해주는 속성

둘은 쌍으로 서로 연관되어 동작함
ex) 

transition-property : width, height;
transition-duration : 2s, 5s;
 - 이때는 width 값이 2s height 값이 5s가 됨.

transition-property : width, height, top, left;
transition-duration : 2s, 5s;
 - 이때는 duration 값이 반복해서 들어감. width 2s  height 5s  top 2s  left 5s


transition-property : width, height;
transition-duration : 2s, 5s, 3s, 4s;
 - 이때는 duration 값이 property 의 길이만큼 잘라낸후 사용 width 2s  height 5s


sample code:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<style>
.transition {
	width: 200px;
	height: 200px;
	background: green;
	transition-property: width, background;
	transition-duration: 2s, 5s;
}


.transition:hover {
	width: 500px;
	height: 300px;
	background: blue;
}

</style>
</head>
<body>
<div class="transition">

</div>
</body>
</html>
```


##실행결과

<style>
.transition {
	width: 200px;
	height: 200px;
	background: green;
	transition-property: width, background;
	transition-duration: 2s, 5s;
}


.transition:hover {
	width: 500px;
	height: 300px;
	background: blue;
}

</style>

<div class="transition">

</div>



transition-timing-function : 변화되어지는 시간동안 각 구간마다 빠르고 느림을 개별로 지정해주는 속성. 큐빅베이지어(cubic bezier)를 정의하는 네 점에 의해 정의됨 [큐빅베이지어](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

transition-delay : 변화가 언제 시작될지 지정해주는 속성


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
<div style="position:absolute;">
<div class="transition-timing-function ease">ease
</div>
<div class="transition-timing-function linear">linear
</div>
<div class="transition-timing-function step-end">step-end
</div>
<div class="transition-timing-function steps">steps(3, end)
</div>
</div>


<div style="position:absolute; top: 550px;">
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
		$('.transition-timing-function').css('left','500px')}
	,10);
	setInterval(function(){
		$('.transition-timing-function').css('left','500px');
		setTimeout(function(){
			$('.transition-timing-function').css('left','0px')
		},5000)
	},10000);
	

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
<div style="position:absolute;">
<div style="position:absolute;">
<div class="transition-timing-function ease">ease
</div>
<div class="transition-timing-function linear">linear
</div>
<div class="transition-timing-function step-end">step-end
</div>
<div class="transition-timing-function steps">steps(3, end)
</div>
</div>


<div style="position:absolute; top: 550px;">
<div class="transition-delay sec1">sec1
</div>
<div class="transition-delay sec2">sec2
</div>
<div class="transition-delay sec3">sec3
</div>
<div class="transition-delay sec4">sec4
</div>
</div>
</div>

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
