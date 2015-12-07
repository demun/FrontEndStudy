## overflow-y

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - overflow-y : div 영역이 overflow가 될 시 세로축에 대한 처리를 정의한다.

 - syntax :
```sh
overflow-y: visible|hidden|scroll|auto|initial|inherit;
```

visible : div 영역에 따라 overflow 발생 시 div 영역 외부에 scroll이 활성화된다.

hidden : 스크롤 여부에 상관 없이 가로축 scroll이 비활성화 된다.

scroll : 스크롤 여부에 상관 없이 가로축 scroll이 활성화 된다.

auto : div 영역에 따라 overflow 발생 시 scoll이 활성화 된다.

initial:기본 값으로 set되어 있는 값을 불러온다.(normal)

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
    width: 110px;
    height: 110px;
    border: thin solid black;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
</head>
<body>

<div><p style="width:140px">
In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'
</p></div>

<p>Overflow-x specifies whether or not to clip the left/right edges of the content.</p>
<p>Overflow-y specifies whether or not to clip the top/bottom edges of the content.</p>

</body>
</html>

```

결과

![overflow-y](../images/overflow-y.jpg)


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
