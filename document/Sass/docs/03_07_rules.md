# Sass Reference

* @-Rules and Directives
	- @import
		+ Partials
		+ Nested @import
	- @media
	- @extend
		+ How it Works
		+ Extending Complex Selectors
		+ Multiple Extends
		+ Chaining Extends
		+ Selector Sequences
		+ Merging Selector Sequences
		+ @extend-Only Selectors
		+ The !optional Flag
		+ @extend in Directives
	- @at-root
	 	+ @at-root (without: ...) and @at-root (with: ...)
	- @debug
	- @warn
	- @error

##7. @-Rules and Directives

### Import (불러오기) -1차

CSS에서 @import로 다른 파일을 연결시킬 수 있습니다. 
SASS에서도 @import를 사용할 수 있는데, CSS의 @import와는 문법이나 작동 방식이 다릅니다.

`.sass` , `.scss` 모두 확장자를 생략하고 호출가능합니다. 물론 확장자를 붙여도 됩니다.
확장자 없이 파일 이름만으로 가져오기를 하면 네 가지 파일이 있는지 검색하여 가져옵니다.
예를 들어

```SCSS

@import "inc";

```
는 다음 파일이 있는지 검색합니다.

* inc.scss
* inc.sass
* _inc.scss
* _inc.sass

네 개 중 하나만 존재하면 그 파일을 가져오고, 여러 파일이 존재하면 변환 시 에러가 납니다.    
SASS 파일을 가져왔다면, 가져온 파일에 있는 변수와 Mixin을 사용할 수 있습니다.

```SCSS 

// _rounded.scss

@mixin rounded($side, $radius: 10px) {
  border-#{$side}-radius: $radius;
  -moz-border-radius-#{$side}: $radius;
  -webkit-border-#{$side}-radius: $radius;
}

``` 
```SCSS 

/// _style.scss
@import "rounded";
 
nav li { @include rounded(top); }
footer { @include rounded(top, 5px); }
sidebar { @include rounded(left, 8px); }

```
```css

/* style.css */
 
nav li {
  border-top-radius: 10px;
  -moz-border-radius-top: 10px;
  -webkit-border-top-radius: 10px; }
 
footer {
  border-top-radius: 5px;
  -moz-border-radius-top: 5px;
  -webkit-border-top-radius: 5px; }
 
sidebar {
  border-left-radius: 8px;
  -moz-border-radius-left: 8px;
  -webkit-border-left-radius: 8px; }
```
<br>
### Partials -1차

Sass를 작성 시 CSS의 작은 조각파일을 포함하는 partial Sass파일을 만들어 다른 Sass파일에 포함 시킬 수 있습니다. 

```SCSS

// _reset.scss

html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
```
```SCSS

// _base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}

```
Sass 파일명 앞에 `_`를 붙이면 CSS로 변환되지 않습니다. 이점을 이용해 가이드라인에서는 `main.scss`를 제외한 모든 Sass파일명 앞에는 `_`를 사용할 것을 권장하고 있습니다.   

* [패턴 가이드라인 참조 ](http://sass-guidelin.es/ko/#section-54)


<br>
###Media



<br>
### Extend/Inheritance (확장/상속) -1차
`@extend`를 사용하면 미리 정의된 다른 Css 선언을 상속 받을 수 있습니다. 아래는 .success, .error, .warning 등의 메세지 속성을 `@extend`를 사용하여 간단히 정의한 예시입니다. 

```SCSS 

/// _style.scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}

```
이 지시어는 중복해서 선언해야하는 클래스 명을 보다 간결하게 유지할 수 있습니다. 

```css

/* style.css */
 
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}

```
이 방식은 알아는 두되, 되도록 사용을 자제하길 권장합니다. 
상속에 상속, 또 그 상속안에 상속을 해버린다거나 하는 경우엔 코드가 되려 더 복잡해질 뿐더러, 본래 지정하고자 했던 속성을 찾아가기 더 어려워질 수도 있습니다. 

또 `@extend`는 `@media` block 안에서는 제대로 작동하지 않습니다. 

* [extend 가이드라인 참조 ](http://sass-guidelin.es/ko/#extend)


<br>



<br>
###@at-root