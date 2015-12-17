## border-image-slice

작성자 : 김동일

작성일 : 2015-09-18

css 레퍼런스 설명:
 - border-image-slice : border image의 자르기 정도를 정의한다.

 - syntax :
```sh
border-image-slice: number|%|fill|initial|inherit;
```

number : 자를 이미지를 px 단위의 값으로 정의한다.

% : 자를 이미지의 크기나 높이를 %단위로 정의한다.

fill : 자르는 이미지까지 전체를 보여준다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#borderimg1 {
    border: 10px solid transparent;
    padding: 15px;
    -webkit-border-image: url(border.png) round; /* Safari 3.1-5 */
    -o-border-image: url(border.png) round; /* Opera 11-12.1 */
    border-image: url(border.png) round;
    border-image-slice: 50;
}

#borderimg2 {
    border: 10px solid transparent;
    padding: 15px;
    -webkit-border-image: url(border.png) round; /* Safari 3.1-5 */
    -o-border-image: url(border.png) round; /* Opera 11-12.1 */
    border-image: url(border.png) round;
    border-image-slice: 20%;
}

#borderimg3 {
    border: 10px solid transparent;
    padding: 15px;
    -webkit-border-image: url(border.png) round; /* Safari 3.1-5 */
    -o-border-image: url(border.png) round; /* Opera 11-12.1 */
    border-image: url(border.png) round;
    border-image-slice: 30%;
}
</style>
</head>
<body>

<p id="borderimg1">border-image-slice: 50;</p>
<p id="borderimg2">border-image-slice: 20%;</p>
<p id="borderimg3">border-image-slice: 30%;</p>

<p>Here is the image used:</p>
<img src="border.png">

<p><strong>Note:</strong> Internet Explorer 10, and earlier versions, do not support the border-image-slice property.</p>

</body>
</html>
```

결과

![border-image-slice](../images/border-image-slice.jpg)



* [border-image](border-image.md)
* [border-image-outset](border-image-outset.md)
* [border-image-repeat](border-image-repeat.md)
* [border-image-slice](border-image-slice.md)
* [border-image-source](border-image-source.md)
* [border-image-width](border-image-width.md)
* [border-radius](border-radius.md)
