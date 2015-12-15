## border-image-repeat

작성자 : 김동일

작성일 : 2015-09-18

css 레퍼런스 설명:
 - border-image-repeat : border image의 반복 타입을 정의한다.

 - syntax :
```sh
border-image-repeat: stretch|repeat|round|initial|inherit;
```

stretch :기본 값, 이미지를 full로 채운다.

repeat : 이미지를 바둑판식으로 반복적으로 채운다.

round : 이미지를 바둑판식으로 반복적으로 채운다. 이미지 전체로 채우지 못하는 경우 이미지가 고정된 크기로 재배치한다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
    /*ie11,chrome */
    border: 15px solid transparent;
    padding: 5px;   
    border-image: url(border.png);
    border-image-slice: 30;
    border-image-repeat: repeat;
    border-image-outset:0 0 0 0;

    /*Safari 3.1-5*/
    -webkit-border-image: url(border.png);
    -webkit-border-image-slice: 30;
    -webkit-border-image-repeat: repeat;
    -webkit-border-image-outset:0 0 0 0;

    /*Opera 11-12.1*/
    -o-border-image: url(border.png);
    -o-border-image-slice: 30;
    -o-border-image-repeat: repeat;
    -o-border-image-outset:0 0 0 0;
    }
</style>
</head>
<body>

<div>
This DIV uses an image as a border.
</div>
<p>Here is the image used:</p>
<img src="border.png">

<p><b>Note: </b>Internet Explorer 10, Opera 12, and Safari 5 do not support the border-image-repeat property.</p>

</body>
</html>
```

결과

![border-image-repeat](../images/border-image-repeat.jpg)



* [border-image](border-image.md)
* [border-image-outset](border-image-outset.md)
* [border-image-repeat](border-image-repeat.md)
* [border-image-slice](border-image-slice.md)
* [border-image-source](border-image-source.md)
* [border-image-width](border-image-width.md)
* [border-radius](border-radius.md)
