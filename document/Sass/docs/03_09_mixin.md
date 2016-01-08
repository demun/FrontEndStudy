# Sass Reference


## Mixins -1차

* Defining a Mixin: @mixin
* Including a Mixin: @include
* Arguments
	- Keyword Arguments
	- Variable Arguments
* Passing Content Blocks to a Mixin
* Variable Scope and Content Blocks

---

믹스인은 Sass 언어 전체에서 가장 많이 사용되는 기능 중 하나이며, 재사용성과 DRY 컴퍼넌트의 핵심입니다.   
Mixin은 스타일시트 내내 재사용하고 싶은 style을 정의할 수 있습니다. 
믹스인은 CSS 규칙과 Sass 문서에서 허용되는 거의 모든 것을 포함할 수 있습니다. 
함수처럼 매개변수를 취할 수도 있고, vendor prefixes도 간단히 정의할 수 있습니다.
아래는  border-radius 의 정의 예시입니다.

```SCSS 

/// _style.scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }

```
mixin을 사용하려면 먼저 @mixin 지시어를 선언하고 이름을 지정합니다.   
예시에선 border-radius 라고 이름을 지정했습니다.    
자바스크립트 함수 선언문과 흡사한 구조인데, 이름 뒤의 소괄호 안에는 `$radius`라는 변수를 선언했습니다.    

이제 실제 `.box`라는 클래스에 border-radius 속성을 사용하기 위해, 정의한 `border-radiu` mixin을 호출합니다. 호출 할 때는 `@include` 뒤에 지정한 mixin 이름을 선언하고, 소괄호 안에는 값을 선언합니다.
아래는 Css로 변환된 결과값입니다.

```css

/* style.css */
 
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}

```
모든것을 mixin으로 선언할수 있다고 해서 과하게 선언하는 것은 좋지않습니다.  선언할때는 20줄 이내로 간단히 정의하길 권장합니다. 예시의 vendor prefixes의 경우에도 _Autoprefixer_를 사용하면 항상 최신 정보를 반영해주고, Sass의 코드를 줄여 줄수 있으니, 수동으로 vendor prefixes를 정의하는것은 권장하지 않습니다. 

* [mixin 가이드라인 참조 ](http://sass-guidelin.es/ko/#mixins)