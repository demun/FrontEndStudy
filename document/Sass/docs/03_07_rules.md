# Sass Reference

##7. @-Rules and Directives
- @import
- @media
- @extend
- @at-root
- @debug & @warn &@error

### Import (불러오기) 

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
#### Partials 

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
###@media

@media는 Css에서 정의되어있는 미디어 쿼리 입니다. Sass에서 @media는 별도의 클래스 선언없이도 해당하는 클래스 안에 바로 정의할 수 있습니다. 이로서 굳이 선택자를 반복하거나 스타일을 작성을 중단할 필요없이 media 관련 스타일을 바로 추가할 수 있습니다. 

```SCSS 

/// _style.scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}

```

```css

/* style.css */
 
.sidebar {
  width: 300px; }
  @media screen and (orientation: landscape) {
    .sidebar {
      width: 500px; } }

```
@media의 쿼리는 서로 중첩 될 수도 있습니다.

```SCSS 

/// _style.scss
@media screen {
  .sidebar {
     height:300px
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}

```

```css

/* style.css */

@media screen {
  .sidebar {
    height: 300px;
  }
}
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}

```
마지막으로, @media 쿼리의 기능 이름과 특성 대신에  SassScript식(변수, 함수 및 연산자 포함)을 포함 할 수 있습니다. 

```SCSS 

/// _style.scss
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}

```

```css

/* style.css */

@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px; } }

```

<br>
### Extend/Inheritance (확장/상속)
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


####Multiple Extends
하나의 선택자는 하나이상으로 선택자를 확장할 수 있습니다.
즉, 모든 확장된 선택자에서 스타일를 상속한다는 의미입니다.

```SCSS 

// _style.scss
.error {
    border: 1px #f00;
    background-color: #fdd;
}

.attention {
    font-size: 3em;
    background-color: #ff0;
}

.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 3px;
}

```

```css

/* style.css */
.demo-01 {
    border: 1px #f00;
    background-color: #fdd;
}

.demo-02 {
    @extend .demo-01;
    border-width: 3px;
}

.demo-03 {
    @extend .demo-02;
    position: fixed;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
}
```

그리고 @extend .error; @extend .attention; 은 선택자들의 항목을 콤마로 구분하여 다음과 같이 쓸 수 있습니다.    
@extend .error, attention;

<br>
###@at-root

@at-root 지시어는 하나 이상의 규칙을 부모 선택자 아래 중첩되지 않고 document root상에 출력됩니다.

```SCSS 

/// _style.scss
.parent {
  background:#ddd;
  
  @at-root {
    .child1 {
      font-size: 12px;
    }
    .child2 {
      padding: 10px;
    }
  }
  .step-child {
    color: #c4c4c4;
  }
}

```

```css

/* style.css */
.parent {
  background: #ddd;
}
.child1 {
  font-size: 12px;
}

.child2 {
  padding: 10px;
}
.parent .step-child {
  color: #c4c4c4;
}

```

#### @at-root (without: ...) 와 @at-root(with: ...) 

기본적으로 @at-root는 단순히 부모선택자를 제외하지만  @media와 같은 중첩된 지시어의 밖으로 옮기는 것도 가능합니다.

```
// _style.scss
@media print {
  .page {
    width: 8in;
    @at-root (without: media) {
      color: red;
    }
    @at-root (without: page) {
      .number{
        color: red;
      }
    }
  }
}

```

```css

/* style.css */
@media print {
  .page {
    width: 8in;
  }
}
.page {
  color: red;
}
@media print {
  .page .number {
    color: red;
  }
}

```


<br>
###@debug & warn & @error

@debug, @warn 지시어는 표준 에러 출력 스트림에 SassScript 식의 값을 출력합니다.

 @warn 과 @debug사이에 두 가지 중요한 차이점이 있습니다.

  1. `--quie` 또는 `:quiet` 옵션으로 @warn을 해제할 수 있습니다.
  2. @warn경우에는 stylesheet에서 경고의 원인이 된 위치와 내용을 메시지로 출력해주지만 @debug는 cmd 나 터미널에서 출력됩니다.  

```SCSS
// _style.scss
@debug 10em + 12em;

```

```css

/* style.css */
Line 1 DEBUG: 22em

```
```
// _style.scss
@debug 10em + 12em;

```

```cmd
Line 1 DEBUG: 22em

```


```SCSS
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @warn " #{$x} 에 px이 있다고 가정 ";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn " #{$y} 에 px이 있다고 가정 ";
    $y: 1px * $y;
  }
  position: relative; left: $x; top: $y;
}
```
@error 지시어는 치명적인 오류와 같은 SassScript식의 값을 출력합니다. 그것은 mixin과 함수의 인자를 검증하기에 유용합니다. 

```SCSS
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @error "$x may not be unitless, was #{$x}.";
  }
  @if unitless($y) {
    @error "$y may not be unitless, was #{$y}.";
  }
  position: relative; left: $x; top: $y;
}
```