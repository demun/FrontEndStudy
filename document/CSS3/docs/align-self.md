## align-self

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명:
 - align-self : flex로 지정된 부모 요소 내에서 flex 항목 자기 자신만의 정렬을 지정하는 속성이다.

 - syntax :
```sh
align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit;
```

auto : 부모 요소의 값으로 정렬 된다. 부모 요소가 없다면 기본 값으로 정렬.

stretch : 기본 값. 항목이 부모 요소에 크기에 맞게 채워지고 형제 요소와 같은 넓이로 분배된다.

center : 항목이 부모 요소의 중간 위치에 정렬된다.

flex-start : 부모 요소의 시작 기준선에 일치하여 정렬된다.

flex-end : 부모 요소의 끝나는 기준선에 일치하여 정렬된다.

baseline : 부모 요소의 기준선에 일치하여 정렬된다.

initial : 기본 초기값이다.

inherit : 부모 요소에 정의된 align-items 속성 값을 상속 받는다.


`sample code` :

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #main {
          width: 220px;
          height: 300px;
          border: 1px solid black;
          display: -webkit-flex; /* Safari */
          -webkit-align-items: flex-start; /* Safari 7.0+ */
          display: flex;
          align-items: flex-start;
      }

      #main div {
          -webkit-flex: 1; /* Safari 6.1+ */
          flex: 1;
      }

      #myBlueDiv {
          -webkit-align-self: center; /* Safari 7.0+ */
          align-self: center;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;">RED</div>
      <div style="background-color:lightblue;" id="myBlueDiv">BLUE</div>  
      <div style="background-color:lightgreen;">Green div with more content.</div>
    </div>
  </body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-self)


참고 :
- 부모 요소의 align-items 속성을 무시 한다.
- 인터넷 익스플로러 10 및 이하 버전에서는 align-content 속성을 지원하지 않는다.
- 사파리 7.0 및 최신 버전에서는 -webkit-align-content 속성을 지원한다.

-----

* [CSS3 README](../README.md)

* [align-content](align-content.md)
* [align-items](align-items.md)
* [align-self](align-self.md)
