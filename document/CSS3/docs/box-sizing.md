# box-sizing

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
- box-sizing : 박스 요소의 크기를 결정하는 방식을 지정하는 속성이다.
- 속성 값 : content-box, border-box, initial, inherit

`sample code` : 

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .div1 {
                width: 300px;
                height: 100px;
                border: 1px solid blue;
            }

            .div2 {
                width: 300px;
                height: 100px;    
                padding: 50px;
                border: 1px solid red;
            }

            .div3 {
                width: 300px;
                height: 100px;
                border: 1px solid blue;
                box-sizing: border-box;
            }

            .div4 {
                width: 300px;
                height: 100px;    
                padding: 50px;
                border: 1px solid red;
                box-sizing: border-box;
            }
        </style>
    </head>
    <body>
        <h2>Without box-sizing</h2>
        <div class="div1">This div is smaller (width is 300px and height is 100px).</div>
        <br>
        <div class="div2">This div is bigger (width is also 300px and height is 100px).</div>
        <h2>With box-sizing</h2>
        <div class="div3">Both divs are the same size now!</div>
        <br>
        <div class="div4">Hooray!</div>
    </body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing)
