#transition-delay


작성자 : 장현웅

작성일 : 2015-11-10


css 레퍼런스 설명: 변화가 언제 시작될지 지정해주는 속성


syntax:
```
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


-----

* [CSS3 README](../README.md)

* [transition](transition.md)
* [transition-delay](transition-delay.md)
* [transition-duration](transition-duration.md)
* [transition-property](transition-property.md)
* [transition-timing-function](transition-timing-function.md)
