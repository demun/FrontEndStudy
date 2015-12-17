## border-image-source

작성자 : 김동일

작성일 : 2015-09-18

css 레퍼런스 설명:
 - border-image-source : border image의 경로를 정의한다.

 - syntax :
```sh
border-image-source: none|image|initial|inherit;
```

none : 이미지를 사용하지 않는다.

image : 이미지 경로를 정의한다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#borderimg {
    border: 10px solid transparent;
    padding: 15px;
    border-image-source: url(border.png);    
    border-image-slice: 30;
}
</style>
</head>
<body>

<p>The border-image-source property specifies the image to be used as the border around an element:</p>
<p id="borderimg">Hello World!</p>

<p>Here is the original image:</p><img src="border.png">
<p><strong>Note:</strong> Internet Explorer 10, and earlier versions, do not support the border-image-source property.</p>

</body>
</html>
```

결과

![border-image-source](../images/border-image-source.jpg)



* [border-image](border-image.md)
* [border-image-outset](border-image-outset.md)
* [border-image-repeat](border-image-repeat.md)
* [border-image-slice](border-image-slice.md)
* [border-image-source](border-image-source.md)
* [border-image-width](border-image-width.md)
* [border-radius](border-radius.md)
