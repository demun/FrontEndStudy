## flex-wrap

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - flex-wrap : div 영역 내 flex item 의 표시 방식을 설정한다.

 - syntax :
```sh
flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
```

nowrap : 기본 값, flex item를 포장하지 않는다.

wrap : flex item를 영역 내에 포장하여 표시한다.

wrap-reverse : flex item를 영역 내에 역순으로 포장하여 표시한다.

flex-wrap : 영역 내 flex item들의 표시 방식을 설정한다. (

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#main {
    width: 200px;
    height: 200px;
    border: 1px solid #c3c3c3;
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    flex-wrap: wrap;
}

#main div {
    width: 50px;
    height: 50px;
}
</style>
</head>
<body>

<div id="main">
  <div style="background-color:coral;">A</div>
  <div style="background-color:lightblue;">B</div>
  <div style="background-color:khaki;">C</div>
  <div style="background-color:pink;">D</div>
  <div style="background-color:lightgrey;">E</div>
  <div style="background-color:lightgreen;">F</div>
</div>

<p><b>Note:</b> Internet Explorer 10 and earlier versions do not support the flex-wrap property.</p>

<p><b>Note:</b> Safari 6.1 (and newer) supports an alternative, the -webkit-flex-wrap property.</p>

</body>
</html>
```

결과

![flex-flow](../images/flex-flow.jpg)


-----

* [CSS3 README](../README.md)

* [flex](flex.md)
* [flex-basis](flex-basis.md)
* [flex-direction](flex-direction.md)
* [flex-flow](flex-flow.md)
* [flex-grow](flex-grow.md)
* [flex-shrink](flex-shrink.md)
* [flex-wrap](flex-wrap.md)
