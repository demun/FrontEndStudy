## border-image-repeat

작성자 : 김동일

작성일 : 2015-09-18

css 레퍼런스 설명: 
 - border-image-repeat : border image의 반복 타입을 정의한다.
 
 - syntax : 
```sh 
border-image-repeat: stretch|repeat|round|initial|inherit;
```

stretch :기본 값, 이미지를 full로 채운다.

repeat : 이미지를 바둑판식으로 반복적으로 채운다.

round : 이미지를 바둑판식으로 반복적으로 채운다. 이미지 전체로 채우지 못하는 경우 이미지가 고정된 크기로 재배치한다.

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code : 
```sh
<!DOCTYPE html>
<html>
<head>
<style> 
div {
    /*ie11,chrome */
    border: 15px solid transparent;
    padding: 5px;   
    border-image: url(border.png);
    border-image-slice: 30;
    border-image-repeat: repeat;
    border-image-outset:0 0 0 0;
    
    /*Safari 3.1-5*/
    -webkit-border-image: url(border.png);
    -webkit-border-image-slice: 30;
    -webkit-border-image-repeat: repeat;
    -webkit-border-image-outset:0 0 0 0;

    /*Opera 11-12.1*/
    -o-border-image: url(border.png);
    -o-border-image-slice: 30;
    -o-border-image-repeat: repeat;
    -o-border-image-outset:0 0 0 0;
    }
</style>
</head>
<body>

<div>
This DIV uses an image as a border.
</div>
<p>Here is the image used:</p>
<img src="border.png">

<p><b>Note: </b>Internet Explorer 10, Opera 12, and Safari 5 do not support the border-image-repeat property.</p>

</body>
</html>


```

결과 

![border-image-repeat](../images/border-image-repeat.jpg)

### 목록
* [align-content](docs/align-content.md)
* [align-items](docs/align-items.md)
* [align-self](docs/align-self.md)
* [@keyframes](docs/@keyframes.md)
* [animation](docs/animation.md)
* [animation-name](docs/animation-name.md)
* [animation-duration](docs/animation-duration.md)
* [animation-timing-function](docs/animation-timing-function.md)
* [animation-delay](docs/animation-delay.md)
* [animation-iteration-count](docs/animation-iteration-count.md)
* [animation-direction](docs/animation-direction.md)
* [animation-play-state](docs/animation-play-state.md)
* [backface-visibility](docs/backface-visibility.md)
* [background-clip](docs/background-clip.md)
* [background-origin](docs/background-origin.md)
* [background-size](docs/background-size.md)
* [border-bottom-left-radius](docs/border-bottom-left-radius.md)
* [border-bottom-right-radius](docs/border-bottom-right-radius.md)
* [border-image](docs/border-image.md)
* [border-image-outset](docs/border-image-outset.md)
* [border-image-repeat](docs/border-image-repeat.md)
* [border-image-slice](docs/border-image-slice.md)
* [border-image-source](docs/border-image-source.md)
* [border-image-width](docs/border-image-width.md)
* [border-radius](docs/border-radius.md)
* [border-top-left-radius](docs/border-top-left-radius.md)
* [border-top-right-radius](docs/border-top-right-radius.md)
* [box-shadow](docs/box-shadow.md)
* [box-sizing](docs/box-sizing.md)
* [column-count](docs/column-count.md)
* [column-gap](docs/column-gap.md)
* [column-rule](docs/column-rule.md)
* [column-rule-color](docs/column-rule-color.md)
* [column-rule-style](docs/column-rule-style.md)
* [column-rule-width](docs/column-rule-width.md)
* [column-span](docs/column-span.md)
* [column-width](docs/column-width.md)
* [columns](docs/columns.md)
* [flex](docs/flex.md)
* [flex-basis](docs/flex-basis.md)
* [flex-direction](docs/flex-direction.md)
* [flex-flow](docs/flex-flow.md)
* [flex-grow](docs/flex-grow.md)
* [flex-shrink](docs/flex-shrink.md)
* [flex-wrap](docs/flex-wrap.md)
* [@font-face](docs/@font-face.md)
* [font-feature-settings](docs/font-feature-settings.md)
* [hyphens](docs/hyphens.md)
* [justify-content](docs/justify-content.md)
* [opacity](docs/opacity.md)
* [order](docs/order.md)
* [outline-offset](docs/outline-offset.md)
* [overflow-wrap](docs/overflow-wrap.md)
* [overflow-x](docs/overflow-x.md)
* [overflow-y](docs/overflow-y.md)
* [@page](docs/@page.md)
* [perspective](docs/perspective.md)
* [perspective-origin](docs/perspective-origin.md)
* [resize](docs/resize.md)
* [tab-size](docs/tab-size.md)
* [text-align-last](docs/text-align-last.md)
* [text-overflow](docs/text-overflow.md)
* [text-shadow](docs/text-shadow.md)
* [transform](docs/transform.md)
* [transform-origin](docs/transform-origin.md)
* [transform-style](docs/transform-style.md)
* [transition](docs/transition.md)
* [transition-delay](docs/transition-delay.md)
* [transition-duration](docs/transition-duration.md)
* [transition-property](docs/transition-property.md)
* [transition-timing-function](docs/transition-timing-function.md)
* [word-break](docs/word-break.md)
* [word-wrap](docs/word-wrap.md)