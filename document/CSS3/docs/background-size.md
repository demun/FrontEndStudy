작성자 : 박성희

작성일 : 2015-10-27

css 레퍼런스 설명:

The CSS3 background-size property allows you to specify the size of background images.
배경 이미지의 사이즈를 설정

Before CSS3, the size of a background image was the actual size of the image.
CSS3 allows us to re-use background images in different contexts.

1. auto : Default value<br/>
2. length : Sets the width and height of the background image. <br/>첫번째 값이 가로 크기, 두번째 값이 세로 크기. 값을 한 개 넣으면 가로 크기이며, 세로 크기는 원본 이미지의 가로 세로 비율에 맞게 자동으로 정해짐. <br/>백분율을 사용할 수도 있음.<br/>
 예제) length(width,height)http://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size

3. cover : 배경을 사용하는 요소를 다 채울 수 있게 이미지를 확대 또는 축소. 가로 세로 비율 유지.<br/>
4. contain : 배경을 사용하는 요소를 벗어나지 않는 최대 크기로 이미지를 확대 또는 축소. 가로 세로 비율 유지.<br/>

 예제) contain,cover
 http://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size_contain
5. initial : Default value. 기본값으로 설정.<br/>
6. inherit : 부모 요소의 속성값을 상속받음.<br/>


http://superkts.com/css/background-size


-----

* [CSS3 README](../README.md)

* [background-clip](background-clip.md)
* [background-origin](background-origin.md)
* [background-size](background-size.md)
