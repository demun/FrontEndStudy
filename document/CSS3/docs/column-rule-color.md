## column-rule-color

작성자 : 김동일

작성일 : 2015-09-17

css 레퍼런스 설명: 
 - column-rule-color : column간의 컬러를 명시 한다.
 
 - syntax : 
```sh 
column-rule-color: color|initial|inherit;
```

column-rule-color : column 컬러를 명시한다.(ex: #fff, #f3f3f3, red, rgb(255, 0, 0), rgba(255, 0, 0, 0.3), hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.3) 등)

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code : 
```sh
<!DOCTYPE html>
<html>
<head>
<style> 
.newspaper {
    /* Chrome, Safari, Opera에서 사용하는 css (반드시 앞에 -webkit-을 붙여야함)*/
    -webkit-column-count: 3;
    -webkit-column-gap: 40px;
    -webkit-column-rule-style: outset;
    -webkit-column-rule-color: #ff0000;

    /* Firefox 에서 사용하는 css (반드시 앞에 -moz-을 붙여야함)*/
    -moz-column-count: 3;
    -moz-column-gap: 40px;
    -moz-column-rule-style: outset;
    -moz-column-rule-color: #ff0000;

    /*IE 10.0 이후 에서 사용하는 css (이전 버전은 지원 안함)*/
    column-count: 3;
    column-gap: 40px;
    column-rule-style: outset;
    column-rule-color: #ff0000;
}
</style>
</head>
<body>

<p><strong>Note:</strong> The column-rule-color property is not supported in Internet Explorer 9 and earlier versions.</p>

<div class="newspaper">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
</div>

</body>
</html>

```

결과 

![column-rule-color](../images/column-rule-color.jpg)

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