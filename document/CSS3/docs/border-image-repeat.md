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
* [align-content](align-content.md)
* [align-items](align-items.md)
* [align-self](align-self.md)
* [@keyframes](@keyframes.md)
* [animation](animation.md)
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
