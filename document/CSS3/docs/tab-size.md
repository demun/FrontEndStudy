## tab-size

작성자 : 김동일

작성일 : 2015-10-30

css 레퍼런스 설명:
 - tab-size: div 영역의 resize를 정의한다.

 - syntax :
```sh
tab-size: number|length|initial|inherit;
```

number : 각 tab 문자별로 들어가 space 수를 명시 한다.(기본 값 : 8)

length : tab 문자열의 수를 명시한다.(현재 모든 브라우져에서는 지원 않함)

initial:기본 값으로 set되어 있는 값을 불러온다.

inherit:부모 element에 설정되어 있는 값을 상속 받는다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
#t1 {
    -moz-tab-size: 4; /* Code for Firefox */
    -o-tab-size: 4; /* Code for Opera 10.6-12.1 */
    tab-size: 4;
}

#t2 {
    -moz-tab-size: 16; /* Code for Firefox */
    -o-tab-size: 16; /* Code for Opera 10.6-12.1 */
    tab-size: 16;
}
</style>
</head>
<body>

<pre id="t1">
I	use	tab-size	4
</pre>

<pre id="t2">
I	use	tab-size	16
</pre>

<p><b>Note:</b> The tab-size property is currently supported in Chrome, Safari 6.1+ and Opera 15+.</p>
<p><b>Note:</b> Firefox supports an alternative, the -moz-tab-size property.</p>
<p><b>Note:</b> Opera 10.6 to 12.1 supports an alternative, the -o-tab-size property.</p>

</body>
</html>

```

결과

![tab-size](../images/tab-size.jpg)

IE에서는 지원하지 않음

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
