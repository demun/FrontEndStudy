## align-content

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명:
 - align-content : flex로 지정된 부모 요소 내에서 여러 개의 행이나 열로 구성된 박스 요소의 정렬을 지정하기 위한 속성이다.

 - syntax :
```sh
align-content: stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit;
```

stretch : 기본 값. 박스 요소는 나머지 공간을 사용하고 박스 요소 사이에 균등하게 분할된다.

center : 박스 요소는 flex로 지정된 부모 요소의 중심에 정렬된다.

flex-start : 박스 요소는 flex로 지정된 부모 요소의 시작 점 부터 정렬된다.

flex-end : 박스 요소는 flex로 지정된 부모 요소의 끝나는 점 부터 정렬된다.

space-between : 박스 요소는 flex로 지정된 부모 요소 내에서 균등하게 정렬된다.

space-around : 두 개의 인접 박스 요소 사이의 공간이 같도록 flex로 지정된 부모 요소 내에서 균등하게 정렬된다.
맨 처음 박스 요소 전과 마지막 박스 요소 후의 빈 공간은 두 개의 인접 박스 요소 사이의 공간의 절반과 같다.

initial : 기본 초기값이다.

inherit : 부모 요소에 적용된 이 속성 값을 상속한다.


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

[결과보기 >](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-content)

[모든 속성 값에 대한 결과 보기 >] (http://mdn.mozillademos.org/en-US/docs/Web/CSS/align-content%24samples/Examples?revision=921425)

참고 :
- 인터넷 익스플로러 10 및 이하 버전에서는 align-content 속성을 지원하지 않는다.
- 사파리 7.0 및 최신 버전에서는 -webkit-align-content 속성을 지원한다.

-----

* [CSS3 README](../README.md)

* [align-content](align-content.md)
* [align-items](align-items.md)
* [align-self](align-self.md)
