# Sass Reference

## CSS 확장

* Nested Rules
* Referencing Parent Selectors: &
* Nested Properties
* Placeholder Selectors: %foo 


### Nested Rules (중첩)
```css
/*styel.css*/
#main {
  width: 97%; }

#main p{
    font-size: 2em; }
```
보통 CSS의 케스케이딩문법은 위의 문법처럼 부모 클래스를 열거하는 식으로 상속을 구현하고 있습니다. 
그러나 Sass를 이용하면 HTML의 div 안에 div를 넣는다던지 하는 중첩 된 계층구조처럼 CSS선택자를 중첩할 수 있습니다.   
이것은 부모 선택자를 중복 작성하는 것을 방지합니다. 

```SCSS
/*styel.scss*/
#main {
  width: 97%;

  p, div {
      font-size: 2em;
      
      a { font-weight: bold; 
      }
  }

  pre { font-size: 3em; }
}

```

```css
/*styel.css*/
#main {
  width: 97%; }
  #main p, #main div {
    font-size: 2em; }
    #main p a, #main div a {
      font-weight: bold; }
  #main pre {
    font-size: 3em; }

```

단, 지나친 중첩은 CSS로 컴파일시 문제가 발생할 수 있으며, 문서의 가독성을 떨어뜨릴 수 있으므로 권장하지 않습니다.    
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

<br>
### Referencing Parent Selectors: & (부모선택자:&)

중첩규칙으로 부모선택자를 중첩해서 사용하는 방법을 방지했지만, 중첩규칙은 부모 클래스 안에 속한 자식 클래스에만 사용할 수 있는 규칙입니다. 
가상선택자 같은 경우에는 부모 선택자를 참조해야 합니다. `부모선택자:hover` , `부모선택자.추가선택자` 처럼 부모 클래스 라인에서 동일하게 반복될 경우에는 중첩규칙으론 대체할 수 가 없습니다.
이런경우 중첩해서 부모선택자를 작성하는 대신 `&`로 부모선택자를 호출할 수 있습니다. 

```SCSS

// _style.scss
a {
  font-weight: bold;
  text-decoration: none; 
  &:hover {
    text-decoration: underline; 
  }
}
body{
  &.firefox a {
      font-weight: normal; 
  }
}
```
```css

// _style.css
a {
  font-weight: bold;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
  body.firefox a {
    font-weight: normal; }
```
이처럼 연관된 스타일을 여러 줄을 만드는 것이 아닌, 하나로 그룹핑 할 수 있다는 장점을 가지고 있습니다. 
그러나, 접미사로도 사용될 경우 선택자의 전체 이름이 명확히 인지되지 않기 때문에 권장하지 않습니다.

```SCSS
// _style.scss
#main {
  color: black;

  &-sidebar { border: 1px solid; }
}

```
```css

// _style.css
#main {
  color: black; }
  #main-sidebar {
    border: 1px solid; }
```

추가로 [믹스인]()과 [조건문]()을 이용하여 부모 선택자가 존재하는지의 여부를 감지할 수도 있습니다.

```SCSS
// _style.scss
@mixin does-parent-exist {
    @if & {
      &:hover {
        color: red;
      }
    }
    @else {
      a {
        color: red;
      }
    }
}

// 부모선택자가 있다면...
.demo {
  @include does-parent-exist;
}

// 부모선택자가 없다면...
@include does-parent-exist;

```


<br>
### Nested Properties (중첩 속성)
Css의 속성중 font-family, font-size, font-weight 등과 같이 `font`로 시작되는 속성도 중첩하여 사용할 수 있습니다.

```SCSS
// _style.scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}

```
```css

// _style.css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```
한줄로 선언되는 속성에도 마찬가지로 중첩속성을 적용할 수 있습니다.

```SCSS
// _style.scss
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}

```
```css

// _style.css
.funky {
  font: 20px/24px fantasy;
    font-weight: bold;
}
```
* [중첩선언 가이드라인 참조](http://sass-guidelin.es/ko/#nesting)

###Placeholder Selectors: %foo (대체 선택자)

Sass에서는 특별한 선택자로 `placeholder selector`를 지원합니다. 
이 선택자는 클래스(.)나 아이디(#)를 대체하여 `%`를 사용해서 지정할 수 있지만, 
Css로 컴파일시에 대체선택자만을 사용한 코드는  컴파일 되지 않습니다.

```SCSS
// _style.scss

// 이 자체만으로는 Css에 렌더링 되지 않습니다.
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}

```
위 코드로는 %extreme는 임의의 클래스나 아이디를 대체할 뿐입니다.
실제 사용되기 위해선 `@extend %이름`을 사용해 호출해주어야합니다.

```SCSS
// _style.scss

.notice {
  @extend %extreme;
}

```
```css

// _style.css
#context a.notice {
  color: blue;
  font-weight: bold;
  font-size: 2em; }

```

mixin으로의 선언을 대신하여 아래와 같은 방식으로도 표현할 수 있습니다.

```SCSS
// _style.scss
%button
    font-weight: bold
    color: blue

.button-1
    @extend %button
    background-color: #fff

.button-2
    @extend %button
    background-color: #ddd

```
```css

// _style.css
.button-1, .button-2 {
    font-weight: bold;
    color: blue;
}

.button-1 {
    background-color: #fff;
}

.button-2 {
    background-color: #ddd;
}
```