# Sass Reference

## CSS 확장

* Nested Rules
* Referencing Parent Selectors: &
* Nested Properties
* Placeholder Selectors: %foo 


### Nested Rules (중첩)

Sass를 이용하면 HTML의 div 안에 div를 넣는다던지 하는 중첩 된 계층구조처럼 CSS선택자를 중첩할 수 있습니다.   
이것은 부모 선택자를 중복 작성하는 것을 방지합니다. 

```SCSS
/*styel.scss*/
#main {
  width: 97%;

  p, div {
    font-size: 2em;
    a { font-weight: bold; }


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

가상선택자의 경우에는 부모 선택자를 참조해야합니다. 중첩해서 부모선택자를 작성하는 대신 `&`로 부모선택자를 호출할 수 있습니다. 

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
또 접미사로도 사용될 수 있지만, 이 경우 선택자의 전체 이름이 명확히 인지되지 않기 때문에 권장하지 않습니다.

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

