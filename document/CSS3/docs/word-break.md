## word-break

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명:
 - word-break : 줄바꿈을 위한 단어 규칙을 지정하는 속성이다.

 - syntax :
```sh
word-break: normal|break-all|keep-all|initial|inherit;
```

normal : 기본 값. 기본 줄 바꿈 규칙을 사용한다.

break-all: 영어를 한 단어 내에 줄바꿈하는 속성이다. 한국어, 일본어, 중국어는 띄어쓰기를 기준으로 줄바꿈 된다.

keep-all : 영어도 한국어, 일본어, 중국어와 동일한 줄바꿈 규칙을 사용하는 속성이다.

`sample code` :

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			p.test1 {
			    width: 140px;
			    border: 1px solid #000000;
			    word-break: keep-all;
			}

			p.test2 {
			    width: 140px;
			    border: 1px solid #000000;
			    word-break: break-all;
			}
		</style>
	</head>
	<body>
		<p class="test1">This paragraph contains some text. This line will-break-at-hyphens.</p>
		<p class="test2">This paragraph contains some text. The lines will break at any character.</p>
	</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_word-break)

참고 : 오페라 12 및 이하 버전에서는 지원되지 않는다.

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
