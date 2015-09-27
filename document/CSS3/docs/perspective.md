# perspective

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
- perspective : 3D 공간에서 요소와 관측 점과의 거리, 즉 원근감을 지정하는 속성이다.
                (얼마나 많은 3차원 픽셀을 놓을 것인지 정의하는 속성)
- 속성 값 : length, none

`sample code` : 

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			#div1 {
			    position: relative;
			    height: 150px;
			    width: 150px;
			    margin: 50px;
			    padding: 10px;
			    border: 1px solid black;
			    -webkit-perspective: 150px; /* Chrome, Safari, Opera  */
			    perspective: 150px;
			}

			#div2 {
			    padding: 50px;
			    position: absolute;
			    border: 1px solid black;
			    background-color: red;
			    -webkit-transform: rotateX(45deg); /* Chrome, Safari, Opera  */
			    transform: rotateX(45deg);
			}
		</style>
	</head>
	<body>
		<div id="div1">
		  <div id="div2">HELLO</div>
		</div>
	</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_perspective1)

참고 예제 : [예제 보기](http://www.hanbit.co.kr/exam/1955/perspective.htm)

