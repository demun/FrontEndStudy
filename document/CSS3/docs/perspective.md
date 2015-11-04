## perspective

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
 - perspective : 3D 공간에서 요소와 관측 점과의 거리, 즉 원근감을 지정하는 속성이다.
                (얼마나 많은 3차원 픽셀을 놓을 것인지 정의하는 속성)
 - syntax : 
```sh 
perspective: length|none;
```

length : 평면에 원근감 거리를 제공한다. 이것은 평면의 중심과 컨텐츠 변환을 적용하기 위해 사용된다. 그 경우 0 또는 음의 값은 적용되지 않는다.

none : 기본 값. 0과 같다. 값이 없음을 의미한다.

`sample code` : 

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			#div1 {
			    position: relative;
			    height: 150px;
			    width: 150px;
			    margin: 50px;
			    padding: 10px;
			    border: 1px solid black;
			    -webkit-perspective: 150px; /* Chrome, Safari, Opera  */
			    perspective: 150px;
			}

			#div2 {
			    padding: 50px;
			    position: absolute;
			    border: 1px solid black;
			    background-color: red;
			    -webkit-transform: rotateX(45deg); /* Chrome, Safari, Opera  */
			    transform: rotateX(45deg);
			}
		</style>
	</head>
	<body>
		<div id="div1">
		  <div id="div2">HELLO</div>
		</div>
	</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_perspective1)

참고 예제 : [예제 보기](http://www.hanbit.co.kr/exam/1955/perspective.htm)

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
