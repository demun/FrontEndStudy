## backface-visibility

작성자 : 김동일

작성일 : 2015-09-18

css 레퍼런스 설명:
 - backface-visibility : div 테그 뒷면의 출력 여부를 정의한다.

 - syntax :
```sh
backface-visibility: visible|hidden|initial|inherit;
```

visible : 기본 값, 뒷면이 보여진다.

hidden : 뒷면을 숨긴다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :

```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
    position: relative;
    height: 60px;
    width: 60px;
    background-color: red;
    -webkit-transform: rotateY(180deg);  /* Chrome, Safari, Opera */
    transform: rotateY(180deg);
}

#div1 {
    -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
    backface-visibility: hidden;
}

#div2 {
    -webkit-backface-visibility: visible;  /* Chrome, Safari, Opera */
    backface-visibility: visible;
}
</style>
</head>
<body>

<p>This example shows two div elements, rotated 180 degrees, facing away from the user.</p>
<p>The first div element has the backface-visibility property set to "hidden", and should therefore be invisible.</p>

<div id="div1">DIV 1</div>
<div id="div2">DIV 2</div>

<p><strong>Note:</strong> The backface-visibility property is not supported in Internet Explorer 9 and earlier versions.</p>

</body>
</html>
```

결과

![backface-visibility](../images/backface-visibility.jpg)

-----

* [CSS3 README](../README.md)
