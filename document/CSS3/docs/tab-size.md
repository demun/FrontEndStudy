## tab-size

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - tab-size: div 영역의 resize를 정의한다.

 - syntax :
```sh
tab-size: number|length|initial|inherit;
```

number : 각 tab 문자별로 들어가 space 수를 명시 한다.(기본 값 : 8)

length : tab 문자열의 수를 명시한다.(현재 모든 브라우져에서는 지원 않함)

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#t1 {
    -moz-tab-size: 4; /* Code for Firefox */
    -o-tab-size: 4; /* Code for Opera 10.6-12.1 */
    tab-size: 4;
}

#t2 {
    -moz-tab-size: 16; /* Code for Firefox */
    -o-tab-size: 16; /* Code for Opera 10.6-12.1 */
    tab-size: 16;
}
</style>
</head>
<body>

<pre id="t1">
I	use	tab-size	4
</pre>

<pre id="t2">
I	use	tab-size	16
</pre>

<p><b>Note:</b> The tab-size property is currently supported in Chrome, Safari 6.1+ and Opera 15+.</p>
<p><b>Note:</b> Firefox supports an alternative, the -moz-tab-size property.</p>
<p><b>Note:</b> Opera 10.6 to 12.1 supports an alternative, the -o-tab-size property.</p>

</body>
</html>
```

결과

![tab-size](../images/tab-size.jpg)

IE에서는 지원하지 않음



-----

* [CSS3 README](../README.md)

* [resize](resize.md)
* [tab-size](tab-size.md)
