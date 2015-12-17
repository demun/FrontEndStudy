## perspective-origin

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명:
 - perspective-origin : 3D 공간상에서 원근감의 방향을 지정하는 속성이다. 3D 요소가 x축과 y축에 기초한다.

 - syntax :
```sh
perspective-origin: x-axis y-axis|initial|inherit;
```

x-axis : x위치의 가로 좌표의 소실점 위치를 나타낸다.

y-axis : y위치 좌표의 소실점 위치를 나타낸다.

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
			    -webkit-perspective: 150px; /* Chrome, Safari, Opera */
			    -webkit-perspective-origin: 10% 10%; /* Chrome, Safari, Opera */
			    perspective: 150px;
			    perspective-origin: 10% 10%;
			}

			#div2 {
			    padding: 50px;
			    position: absolute;
			    border: 1px solid black;
			    background-color: red;
			    -webkit-transform: rotateX(45deg); /* Chrome, Safari, Opera */
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

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_perspective-origin1)

참고 예제 : [예제 보기](http://www.hanbit.co.kr/exam/1955/perspective.htm)



-----

* [CSS3 README](../README.md)

* [perspective](perspective.md)
* [perspective-origin](perspective-origin.md)
