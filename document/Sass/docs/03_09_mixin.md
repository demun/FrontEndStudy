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

// _style.scss
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

####Including a Mixin: @include

위의 예시의 경우 @include를 {} 안에 선언해서 속성을 대체하는 mixin을 확인하셨습니다.
속성뿐만 아니라 선택자를 포함한 영역 자체도 mixin으로 선언할 수도 있습니다. 


```SCSS 

// _style.scss
@mixin silly-links {
  a {
    color: blue;
    background-color: red;
  }
}

@include silly-links;

```
```css

/* style.css */
 
a {
  color: blue;
  background-color: red; }

```

또 mixin 안에 다른 mixin을 포함할 수 도 있습니다. 
```SCSS 

// _style.scss
@mixin compound {
  @include highlighted-background;
  @include header-text;
}

@mixin highlighted-background { background-color: #fc0; }
@mixin header-text { font-size: 20px; }

```
####전달 인자(Arguments)

@mixin믹스 인을 정의 할 때, 인자는 모든 선택자 뒤의 괄호 안에서, 쉼표로 구분하여 변수 이름으로 기록됩니다.

```SCSS 

/// _style.scss
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}

p { @include sexy-border(blue, 1in); }

```

```css

/* style.css */
 
p {
  border-color: blue;
  border-width: 1in;
  border-style: dashed; }

```

@mixin은 default value를 전달하여 사용도 가능합니다. 만약 새로 정의되는 value가 없을 경우 default value 값이, 새로 정의된 값이 있을경우엔 정의된 값이 적용됩니다.

```SCSS 

// _style.scss
@mixin sexy-border($color, $width: 1in) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p { @include sexy-border(blue); }
h1 { @include sexy-border(blue, 2in); }

```
```css

/* style.css */
 
p {
  border-color: blue;
  border-width: 1in;
  border-style: dashed; }

h1 {
  border-color: blue;
  border-width: 2in;
  border-style: dashed; }
```

#####Keyword Arguments(키워드 인자)
mixin은 argument를 전달할때 값만이 아니라 해당 키워드도 함께 전달 할 수 있습니다. 위의 예는 아래처럼 변경이 가능합니다. 
```SCSS 

// _style.scss
 
p { @include sexy-border($color: blue); }
h1 { @include sexy-border($color: blue, $width: 2in); }
```

#####Variable Arguments(가변 인자)

argument의 값이 가변적으로 변할 경우 argument 뒤에 `...` 을 붙임으로서 가변적인 값을 전달할 수 있습니다. 

```SCSS 

// _style.scss
 
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```
```css

/* style.css */
 
.shadows {
  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}
```
변수를 호출하때도 argument 를 사용할 수 있습니다. 값의 list 나 map도 확장 할 수 있습니다.

```SCSS 

// _style.scss
 
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

```css

/* style.css */
 
.shadows {
  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}

```
###Mixin으로 Content Blocks을 통과

@ content 지시자를 사용해 스타일 블록 전체를 mixin으로 넘길 수 있습니다. 
Sass는 컴파일을 하면서 그 블록을 mixin을 호출하는 선언 안에 다시 넣습니다. 

```SCSS 

// _style.scss
 
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}

```
즉 위의 @content에는 ` #logo {background-image: url(/logo.gif);}` 가 담겨져 있습니다.

```css

/* style.css */
 
* html #logo {
  background-image: url(/logo.gif);
}

```
위의 예문은 `.sass` 에선 아래와 같이 표현됩니다.

```sass

// _style.sass
 
=apply-to-ie6-only
  * html
    @content

+apply-to-ie6-only
  #logo
    background-image: url(/logo.gif)

```

#### 변수 범위(Variable Scope) 및 Content Blocks

믹스 인에 전달 된 @content는  @content가 없는 믹스 인의 범위 내에서 정의 된 범위에서 적용됩니다. 이것은 믹스 인의 지역 변수에서 전달받은 값을 @content에서 사용할 수 없다는 것을 의미합니다.

```SCSS 
@content는 mix
// _style.scss
 
$color: white;
@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}
.colors {
  @include colors { color: $color; }
}
```

```css

/* style.css */
 
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}

```

>mixin에 기본값이 없는 인자를 설정해 줄 경우에 mixin을 호출하는 곳에서 인자값을 설정해 주지 않으면 에러가 나므로 주의를 기울여야 한다.


모든것을 mixin으로 선언할수 있다고 해서 과하게 선언하는 것은 좋지않습니다.  선언할때는 20줄 이내로 간단히 정의하길 권장합니다. 예시의 vendor prefixes의 경우에도 _Autoprefixer_를 사용하면 항상 최신 정보를 반영해주고, Sass의 코드를 줄여 줄수 있으니, 수동으로 vendor prefixes를 정의하는것은 권장하지 않습니다. 

* [mixin 가이드라인 참조 ](http://sass-guidelin.es/ko/#mixins)