## justify-content

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - justify-content : div 영역 내 flex item 가로 크기를 정의한다.

 - syntax :
```sh
justify-content: flex-start|flex-end|center|space-between|space-around|initial|inherit;
```

flex-start : 기본 값, flex item들이 영역 시작 부분으로 정의한다.

flex-end : flex item들이 영역 끝 부분으로 정의한다.

center : flex item들이 영역 가운데 부분으로 정의한다.

space-between : flex item들이 서로간에 간격을 띄어 정의한다.

space-around : flex item들이 영역 시작과 끝 부분에 간격을 띄면서, 서로간에 간격을 띄어 정의한다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#main {
    width: 400px;
    height: 150px;
    border: 1px solid #c3c3c3;
    display: -webkit-flex; /* Safari */
    -webkit-justify-content: space-around; /* Safari 6.1+ */
    display: flex;
    justify-content: initial;
}

#main div {
    width: 70px;
    height: 70px;
}
</style>
</head>
<body>

<div id="main">
  <div style="background-color:coral;"></div>
  <div style="background-color:lightblue;"></div>
  <div style="background-color:khaki;"></div>
  <div style="background-color:pink;"></div>
</div>

<p><b>Note:</b> Internet Explorer 10 and earlier versions do not support the justify-content property.</p>

<p><b>Note:</b> Safari 6.1 (and newer) supports an alternative, the -webkit-justify-content property.</p>

</body>
</html>
```

결과

![justify-content](../images/justify-content.jpg)

-----

* [CSS3 README](../README.md)
