## border-image-width

작성자 : 김동일

작성일 : 2015-09-18

css 레퍼런스 설명:
 - border-image-width : border image의 크기를 정의한다.

 - syntax :
```sh
border-image-width: number|%|auto|initial|inherit;
```

number : 이미지 크기를 px 단위로 정의한다

% : 이미지 크기를 % 단위로 정의한다.

auto : 자를 이미지에 정의되어 있는 크기 또는 높이에 따라 자동적으로 정의된다.

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
    border-image-source: url(border.png);
    border-image-repeat: round;
    border-image-slice: 30;
    border-image-width: 10px;        
}

#borderimg2 {
    border: 10px solid transparent;
    padding: 15px;
    border-image-source: url(border.png);
    border-image-repeat: round;
    border-image-slice: 30;
    border-image-width: 20px;        
}

#borderimg3 {
    border: 10px solid transparent;
    padding: 15px;
    border-image-source: url(border.png);
    border-image-repeat: round;    
    border-image-slice: 30;
    border-image-width: 30px;        
}
</style>
</head>
<body>

<p>The border-image-width property specifies the width of the border image:</p>
<p id="borderimg1">border-image-width: 10px;</p>
<p id="borderimg2">border-image-width: 20px;</p>
<p id="borderimg3">border-image-width: 30px;</p>

<p>Here is the original image:</p><img src="border.png">
<p><strong>Note:</strong> Internet Explorer 10, and earlier versions, do not support the border-image-width property.</p>

</body>
</html>
```

결과

![border-image-width](../images/border-image-width.jpg)



* [border-image](border-image.md)
* [border-image-outset](border-image-outset.md)
* [border-image-repeat](border-image-repeat.md)
* [border-image-slice](border-image-slice.md)
* [border-image-source](border-image-source.md)
* [border-image-width](border-image-width.md)
* [border-radius](border-radius.md)
