## box-sizing

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
 - box-sizing : 박스 요소의 크기를 결정하는 방식을 지정하는 속성이다.

 - syntax : 
```sh 
box-sizing: content-box|border-box|initial|inherit;
```

content-box : 기본 값이다. 폭과 넓이 값에 padding, border, margin 값이 별도의 값으로 추가 계산된다.

border-box : padding, border 값이 폭과 넓이에 포함된다. margin 값은 포함되지 않는다.

initial : 기본 초기값이다.

inherit : 부모 요소에 적용된 이 속성 값을 상속한다.

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

### 목록
* [align-content](align-content.md)
* [align-items](align-items.md)
* [align-self](align-self.md)
* [@keyframes](@keyframes.md)
* [animation](animation.md)
* [animation-name](animation-name.md)
* [animation-duration](animation-duration.md)
* [animation-timing-function](animation-timing-function.md)
* [animation-delay](animation-delay.md)
* [animation-iteration-count](animation-iteration-count.md)
* [animation-direction](animation-direction.md)
* [animation-play-state](animation-play-state.md)
* [backface-visibility](backface-visibility.md)
* [background-clip](background-clip.md)
* [background-origin](background-origin.md)
* [background-size](background-size.md)
* [border-bottom-left-radius](border-bottom-left-radius.md)
* [border-bottom-right-radius](border-bottom-right-radius.md)
* [border-image](border-image.md)
* [border-image-outset](border-image-outset.md)
* [border-image-repeat](border-image-repeat.md)
* [border-image-slice](border-image-slice.md)
* [border-image-source](border-image-source.md)
* [border-image-width](border-image-width.md)
* [border-radius](border-radius.md)
* [border-top-left-radius](border-top-left-radius.md)
* [border-top-right-radius](border-top-right-radius.md)
* [box-shadow](box-shadow.md)
* [box-sizing](box-sizing.md)
* [column-count](column-count.md)
* [column-gap](column-gap.md)
* [column-rule](column-rule.md)
* [column-rule-color](column-rule-color.md)
* [column-rule-style](column-rule-style.md)
* [column-rule-width](column-rule-width.md)
* [column-span](column-span.md)
* [column-width](column-width.md)
* [columns](columns.md)
* [flex](flex.md)
* [flex-basis](flex-basis.md)
* [flex-direction](flex-direction.md)
* [flex-flow](flex-flow.md)
* [flex-grow](flex-grow.md)
* [flex-shrink](flex-shrink.md)
* [flex-wrap](flex-wrap.md)
* [@font-face](@font-face.md)
* [font-feature-settings](font-feature-settings.md)
* [hyphens](hyphens.md)
* [justify-content](justify-content.md)
* [opacity](opacity.md)
* [order](order.md)
* [outline-offset](outline-offset.md)
* [overflow-wrap](overflow-wrap.md)
* [overflow-x](overflow-x.md)
* [overflow-y](overflow-y.md)
* [@page](@page.md)
* [perspective](perspective.md)
* [perspective-origin](perspective-origin.md)
* [resize](resize.md)
* [tab-size](tab-size.md)
* [text-align-last](text-align-last.md)
* [text-overflow](text-overflow.md)
* [text-shadow](text-shadow.md)
* [transform](transform.md)
* [transform-origin](transform-origin.md)
* [transform-style](transform-style.md)
* [transition](transition.md)
* [transition-delay](transition-delay.md)
* [transition-duration](transition-duration.md)
* [transition-property](transition-property.md)
* [transition-timing-function](transition-timing-function.md)
* [word-break](word-break.md)
* [word-wrap](word-wrap.md)
