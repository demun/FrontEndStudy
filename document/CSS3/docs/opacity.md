## opacity

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - opacity : div 영역 내 투명도를 설정한다.

 - syntax :
```sh
opacity: number|initial|inherit;
```

number : 투명도를 명시한다. (값 범위 : 0.0~1.0)

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
    background-color: red;
    opacity: 0.5;
    filter: Alpha(opacity=50); /* IE8 and earlier */
}
</style>
</head>
<body>

<div>This element's opacity is 0.5! Note that both the text and the background-color are affected by the opacity level!</div>

</body>
</html>
```

결과

![opacity](../images/opacity.jpg)


-----

* [CSS3 README](../README.md)
