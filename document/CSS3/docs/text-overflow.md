## text-overflow

작성자 : 김동일

작성일 : 2015-11-04

css 레퍼런스 설명:
 - text-overflow : text 내용이 over 되는 경우를 설정한다.

 - syntax :
```sh
text-overflow: clip|ellipsis|initial|inherit;
```

clip : 기본 값, text 내용을 자른다.

ellipsis : 택스트 내용이 over되는 경우 "..."로 처리한다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#div1 {
    white-space: nowrap;
    width: 12em;
    overflow: hidden;
    text-overflow: clip;
    border: 1px solid #000000;
}

#div2 {
    white-space: nowrap;
    width: 12em;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid #000000;
}

</style>
</head>
<body>

<p>The following two divs contains a long text that will not fit in the box. As you can see, the text is clipped.</p>

<p>This div uses "text-overflow:clip":</p>
<div id="div1">This is some long text that will not fit in the box</div>

<p>This div uses "text-overflow:ellipsis":</p>
<div id="div2">This is some long text that will not fit in the box</div>

</body>
</html>
```

결과

![text-overflow](../images/text-overflow.jpg)



-----

* [CSS3 README](../README.md)

* [text-align-last](text-align-last.md)
* [text-overflow](text-overflow.md)
* [text-shadow](text-shadow.md)
