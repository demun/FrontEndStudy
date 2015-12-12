# Sass Basic
	
>**이문서는 [sass-guidelin](http://sass-guidelin.es/ko/)의 내용을 포함하고 있습니다.**


##Preprocessing (전처리)

Sass(Syntactically Awesome Stylesheets)는 CSS 상위에 있는 메타언어(meta-language)로 보다 간결하고 격식을 갖춘 CSS 문법을 사용합니다.
소프트웨어 개발 원칙인 DRY(Don’t Repeat Yourself)를 적용해서 더 빠르고 효율적으로 코드를 작성하고 쉽게 유지보수 하도록 해줍니다.-단 가이드 라인에서 말하길 DRY 보다도 KISS 원칙 (Keep It Simple Stupid)을 우선 할 수 있습니다.- 또한 Sass는 CSS 전처리기(pre-processor)입니다. 스타일시트와 브라우저에서 해석할 CSS파일 중간에 위치하는 하나의 계층으로 Sass 문법으로 작성된 코드를 일반적으로 사용하는 CSS 코드로 컴파일해 줍니다.

Sass 파일을 CSS 코드로 컴파일 하는 가장 기본적인 방법은 `터미널`을 사용하는 것인데, Sass 설치 후에 터미널에서 `sass input.scss output.css`를 실행하면 개별 파일이나 전체 디렉토리를 변환할 수 있습니다 . 또,`--watch`명령어를 추가하면 폴더나 디렉토리를 실시간으로 감시할 수 있습니다.    
아래는 Sass의 전체 디렉토리를 실행하는 예시입니다.    
```SCSS
sass --watch app/sass:public/stylesheets
```

<br>
## Variables (변수)

Sass는 stylesheet 전반에 걸쳐 재사용 할 정보를 저장하는 방법으로 `변수`를 사용합니다.
이 변수에는 색상, 글꼴 등의 그 어떤 Css라도 저장할 수 있으며, 변수를 사용할 때는 `$` 기호를 이용합니다.

```SCSS

// _style.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

```
```css

/*style.css*/
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

```
단, 적절한 이유 없이는 변수를 선언하면 안됩니다. CSS에는 변수 이름에 대한 유효범위가 없기 때문에, 충돌의 위험성이 아주 높습니다. 

<br>
[변수선언 가이드라인 참조](http://sass-guidelin.es/ko/#section-63) 


<br>
## Nesting (중첩)

Sass를 이용하면 HTML의 div 안에 div를 넣는다던지 하는 중첩 된 계층구조처럼 CSS선택자를 중첩할 수 있습니다.    
단, 지나친 중첩은 지양해야합니다. 지나친 중첩시 CSS로 컴파일시 문제가 발생할 수 있으며, 문서의 가독성을 떨어뜨릴 수 있습니다.    
아래는 적합하게 중첩된 *navigation style* 예입니다.

```SCSS

// _style.scss
nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li { display: inline-block; }

	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}

```
nav안에 ul, li, a selector가 있는 것을 알 수 있습니다.    
이런 경우에 중첩 방식을 사용하면  CSS를 정리하고 더 읽기 쉽게 만들 수있습니다.

```css
/*styel.css*/
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

```
selector만이 아니라 style 속성의 이름이 중복 될 때도 사용할 수 있습니다.

```SCSS

/// _style.scss
.fakeshadow {
  border: {
    style: solid;
    left: {
      width: 4px;
      color: #888;
    }
    right: {
      width: 2px;
      color: #ccc;
    }
  }
```
```css

/*sytle.css*/

.fakeshadow {
  border-style: solid;
  border-left-width: 4px;
  border-left-color: #888;
  border-right-width: 2px;
  border-right-color: #ccc; }

```
개인적으로 저의경우 속성은 CSS에 익숙해져 있기떄문에 중첩을 사용하는 것이 더 가독성이 떨어져 보인다고 생각합니다.   

<br>
[중첩선언 가이드라인 참조](http://sass-guidelin.es/ko/#nesting)


<br>
## Partials

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

<br>
[패턴 가이드라인 참조 ](http://sass-guidelin.es/ko/#section-54)


<br>
## Import (불러오기)

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



## Mixins

믹스인



## Extend

상속


## Operators


## Arguments




