# align-content

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
- align-content : flex로 지정된 부모 요소 내에서 여러 개의 행이나 열로 구성된 요소 박스의 정렬을 지정하기 위한 속성이다.

`sample code` : 

```html
<!DOCTYPE html>
<html>
<head>
<style>
#main {
    width: 70px;
    height: 300px;
    border: 1px solid #c3c3c3;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    align-content: center;
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
  <div style="background-color:pink;"></div>
</div>
</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-content)
