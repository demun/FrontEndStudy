## box-shadow

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명:
 - box-shadow : 박스 요소의 그림자를 지정하는 속성이다.

 - syntax :
```sh
box-shadow: none|h-shadow v-shadow blur spread color |inset|initial|inherit;
```

none : 기본 값. 그림자를 지정하지 않는다.

h-shadow : y축 위치 그림자의 위치를 의미한다.

v-shadow : x축 위치 그림자의 위치를 의미한다.

blur : 옵션 값으로 그림자의 선명도를 의미한다.

spread : 옵션 값으로 그림자가 얼마 만큼 퍼질지에 대한 크기를 의미한다.

color : 옵션 값으로 그림자 색을 의미 한다.

inset : 옵션 값으로 초기 외부 그림자 값을 내부 그림자 값으로 가져온다.

initial : 기본 초기값이다.

inherit : 부모 요소에 적용된 이 속성 값을 상속한다.


`sample code` :

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			div {
			    width: 300px;
			    height: 100px;
			    background-color: yellow;
			    box-shadow: 10px 10px 5px #888888;
			}
		</style>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow)




-----

* [CSS3 README](../README.md)

* [box-shadow](box-shadow.md)
* [box-sizing](box-sizing.md)
