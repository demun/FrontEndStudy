#transition

작성자 : 장현웅

작성일 : 2015-11-10

css 레퍼런스 설명: 모양이나 색상의 변화를 시간을 두고 줄 수 있는 속성이다. 
transition-property, transition-duration, transition-timing-function, transition-delay 총 네 가지 속성의 축약으로 transition 하나를 사용할 수 있다.


```css
 transition: property duration timing-function delay; ()
```
ex)
transition: width 1s linear 2s, height 2s ease 1s;

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
	transition: width 2s linear 1s, background 4s ease 2s;
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
	transition: width 2s linear 1s, background 4s ease 2s;
}


.transition:hover {
	width: 500px;
	height: 300px;
	background: blue;
}

</style>

<div class="transition">

</div>

