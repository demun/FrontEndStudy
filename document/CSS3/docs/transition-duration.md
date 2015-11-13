#transition-duration

작성자 : 장현웅

작성일 : 2015-11-10


css 레퍼런스 설명: transition 에 어떤 효과를 줄지 css 속성의 이름을 지정해주는 속성


syntax: 
```css 
transition-duration: time|initial|inherit;
```


transition-duration,transition-property 둘은 쌍으로 서로 연관되어 동작함

ex) 

transition-property : width, height;

transition-duration : 2s, 5s;

 - 이때는 width 값이 2s height 값이 5s가 됨.
  
<br>
transition-property : width, height, top, left;

transition-duration : 2s, 5s;

 - 이때는 duration 값이 반복해서 들어감. width 2s  height 5s  top 2s  left 5s
  
<br>
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


## [실행결과 보기](http://codepen.io/jhw811/pen/EVGRjO)