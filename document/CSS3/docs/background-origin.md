작성자 : 박성희

작성일 : 2015-10-01

css 레퍼런스 설명:

The background-origin property specifies where the background image is positioned.
배경 이미지가 어디에 포지션 되는지에 따른 속성

Note: If the background-attachment property is set to "fixed", this property has no effect.
* background-attachment??? css1, 배경 이미지 고정, 스크롤 등등의 방법 설정

The property takes three different values: 3가지 value!

1. border-box - the background image starts from the upper left corner of the border<br/>
  상단 왼쪽 위에부터 시작
2. padding-box - (default) the background image starts from the upper left corner of the padding edge<br/>
  디폴트 값. 패딩에서 상단 왼쪽 위에부터 시작. 보더는 포함 안함
3. content-box - the background image starts from the upper left corner of the content<br/>
  컨텐츠의 상단 왼쪽 위에부터 시작.

http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background-origin
http://www.w3schools.com/cssref/playit.asp?filename=playcss_background-origin&preval=content-box


-----

* [CSS3 README](../README.md)

* [background-clip](background-clip.md)
* [background-origin](background-origin.md)
* [background-size](background-size.md)
