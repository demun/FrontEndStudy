## text-align-last

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - text-align-last : 문자의 마지막 라인 방향을 정의한다.

 - syntax :
```sh
text-align-last: auto|left|right|center|justify|start|end|initial|inherit;
```

auto : 기본 값, 문자의 마지막 라인을 왼쪽에 정렬한다.

left : 문자의 마지막 라인을 왼쪽에 정렬한다.

right : 문자의 마지막 라인을 왼쪽에 정렬한다.

center : 문자의 마지막 라인을 가운데에 정렬한다.

justify : div 크기에 따라 문자의 마지막 라인을 정렬한다.

start : text-direction에 정의되어 있는 것에 따라 정렬한다.

end : text-direction에 정의되어 있는 것의 역으로 정렬한다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
    text-align: justify;
    -moz-text-align-last: right; /* Code for Firefox */
    text-align-last: right;
}
</style>
</head>
<body>

<div>
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property. You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
You can use the text-align-last property to align the last line of a text, if the text has the text-align property set to justify. This text is where you will see the result of the  text-align-last property.
</div>

<p><strong>Note:</strong> The text-align-last property currently only works in Internet Explorer and Firefox.</p>

</body>
</html>
```

결과

![text-align-last](../images/text-align-last.jpg)

chrome, safari, opera 에서는 지원하지 않음



-----

* [CSS3 README](../README.md)

* [text-align-last](text-align-last.md)
* [text-overflow](text-overflow.md)
* [text-shadow](text-shadow.md)
