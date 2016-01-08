# Sass Reference

##6. SassScript
* Interactive Shell
* Variables: $
* Data Types
* Operations
* Parentheses
* Functions
* Interpolation: #{}
* & in SassScript
* Variable Defaults: !default

---


###Interactive Shell 

  SassScript를 테스트해 보고 싶을 때, terminal(터미널)이나 cmd 환경에서 -i option을 사용 후 SassScript 표현식의 문법 코드를 작성하여 결과를 Prompt로 출력해볼수 있습니다.

```SCSS

$ sass -i
>> "Hello, Sassy World!"
"Hello, Sassy World!"
>> 1px + 1px + 1px
3px
>> #777 + #777
#eeeeee
>> #777 + #888
white

```

<br>
###Variables (변수)

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
단, 적절한 이유 없이는 변수를 선언하면 안됩니다. CSS에는 변수 이름에 대한 유효범위가 없기 때문에, 충돌의 위험성이 큽니다. 

* [변수선언 가이드라인 참조](http://sass-guidelin.es/ko/#section-63)




<br>
### Data Types 

SassScript는 일곱가지의 기본 데이터 유형을 지원합니다 :

* __숫자 (numbers)__ - e.g. 1.2, 13, 10px(단위도 포함하여 숫자타입입니다.)    
* __문자열 : ""(겹따옴표), ''(홑따옴표), 따옴표가 없는 것들 모두 문자열로 인식 (string) __ - e.g. "foo", 'bar', baz)    
* __색상 (colors)__ - e.g. blue, #04a3f9, rgba(255, 0, 0, 0.5)    
* __booleans__ - e.g. true, false    
* __nulls__ - e.g. null    
* __list :바스크립트의 배열과 유사하며 공백이나 쉼표(,)로 구분된 목록을 말합니다 __ - e.g. 1.5em 1em 0 2em, `Helvetica, Arial, sans-serif`    
* __map: 키: 값 으로 구성된 그룹으로 자바스크립트의 객체와 유사하며 map 과 관련된 함수로 값을 얻을 수 있습니다._ - e.g. (key1: value1, key2: value2)    

SassScript는 `Unicode`와 `!important` 등 과 같은 CSS 속성 값의 모든 종류를 지원합니다. 그러나, 이러한 유형에 대한 특별한 처리는 없습니다.
그들은 단지 인용되지 않은 문자열처럼 취급하고 있습니다.

#### Strings
CSS 2종류 문자열의 지정 : `"Lucida Grande"` 또는 `'http://sass-lang.com'` 와 같은 인용 부호를 가지는 것, `sans-serif` 또는 `bold` 같은 인용 부호가없는 것. SassScript는 일반적으로 SassScript에서 사용되는 문자열, CSS로 컴파일 후 사용되는 문자열의 두종류를 인식합니다.

그러나 하나의 예외는 있습니다.: [#{}보간법](#)을 사용할 때, 따옴표로 둘러싸인(인용부호를 가진) 문자열은 따옴표로 둘러싸여 있지 않습니다. 이것은 mixin 안에서 선택자 이름을 사용할 때 그것을 쉽게 사용할 수 있도록 해줍니다.

```SCSS

// _style.scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi, Firefox users!";
  }
}

@include firefox-message(".header");

```
```css

/*style.css*/
body.firefox .header:before {
  content: "Hi, Firefox users!"; }
}

```


#### Lists

List는 Sass 에서 `margin: 10px 15px 0 0 or font-face: Helvetica, Arial, sans-serif`와 같이 CSS의 선언 값을 나타내는 방법입니다.     
List는 그 자체로는 동작을 하지 않지만 [SassScript list functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#list-functions) 에서는 유용하게 사용됩니다. `nth function` 에서는 list 안의 item에 액세스 할수있고, join function에서는 여러개의 list를 연동할 수 있고,  append function에서는 list의 item을 추가할 수 있습니다. 또한  @each directive 에서는 스타일 안에 list로 열거한 값들을 추가할 수 있습니다.

간단한 값들을 포함하는것 외에도 다른 리스트 목록도 포함 할 수 있습니다. 예를 들어, 1px 2px, 5px 6px 은 1px 2px로 이루어진 리스트, 5px 6px 로 이루어진 리스트 두개를 포함하는 큰 리스트 입니다. 만약 안쪽의 list 값을 시작과 끝을 명확히 하고 싶다면 괄호 ()를 사용하면 됩니다. 
예를 들어, (1px 2px) (5px 6px)도 또한 (1px 2px)로 이루어진 리스트, (5px 6px) 로 이루어진 리스트 두개를 포함하는 큰 리스트 입니다. 두개의 차이는 내부 리스트의 구분을 `공백`으로 구분하는가 `,`로 구분하는가 일 뿐입니다.

list는 일반 Css로 컴파일 될 경우 Css가 list를 이해하지 않기 때문에 Sass는 `()`를 추가하지 않습니다. 즉,(1px 2px) (5px 6px) 과  1px 2px 5px 6px 이 동일하게 컴파일 됩니다. 그러나 ㅡSass에서 두가지는 동일하지 않습니다. : 첫번째는 두개의 list를 포함한 하나의 리스트이고 두번째 네개의 숫자를 포함하는 list 입니다. 

또, list는 빈 항목을 가질 수 있습니다. 이때는 빈 값의 ()로 표현합니다.    
그러나 이 값은 Css에서는 컴파일 할 수 없기 때문에 예로 `font-family: ()`같은 값을 사용한다면 Sass는 에서는 오류가 발생합니다. 
만약 list 에서 `1px 2px () 3px or 1px 2px null 3px` 와 같은 빈 list 나 null 값을 포함한다면 Css로 컴파일 하기 전에 제거해야합니다. 

쉼표로 구분 된 목록 뒤에 쉼표가있을 수 있습니다. 
#### Maps

맵은 키로 값을 찾는 곳에서 키와 값 사이의 관계를 나타냅니다.   
동적으로 이름지어진 그룹의 values에 쉽게 접근이 가능합니다. (key들의 그룹으로 값을 수집할 수 있도록 해당 그룹에 접근이 가능)    
맵은 항상 괄호로 묶어야 하며 쉼표로 구분해야 합니다.    
Map은 대부분 SassScript 기능을 사용하여 조작할 수 있습니다.    
@each 지시어를 사용하여 맵 내에서 각각의 키/값 쌍에 스타일을 정의하는데 사용됩니다.   

```SCSS

$map: (key1: value1, key2: value2, key3: value3);
```
#### Colors






<br>
### Operators (연산) 

#### Number Operations(숫자연산)

Sass에서는 `+, -, *, /, %`등의 수학의 사칙연산과 (>, <, ==, >-, <=, !=)등의 비교연산,  문자접합 등을 지원합니다.


##### 나누기 and / 
```SCSS

// _style.scss
p {
    font: 10px/8px;             // 일반적인  css 로는 나누기 연산을 할 수 없다
    $width: 1000px;
    width: $width/2;            // 변수를 사용하여 나누기 연산을 실행
    width: round(1.5)/2;        // 사스함수를 사용하여 나누기 연산을 실행
    height: (500px/2);          // 괄호를 사용하여 나누기 연산을 실행
    margin-left: 5px + 8px/2px; // 플러스 연산자와 함께 나누기 연산을 실행
    font: (italic bold 10px/8px); // 리스트의 괄호에선 연산할 수 없다. 
}

```
```css

/*style.css*/
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px; }

```
#{}을 사용했을 때의 예시 :

```SCSS

// _style.scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}

```
```css

/*style.css*/
p {
  font: 12px/30px; }

```
  -Subtraction, Negative Numbers, and -
#####  Color Operations

#####  String Operations
#####  Boolean Operations
#####  List Operations


아래는 width값을 알아내기 위한 간단한 연산 예문입니다.

```SCSS 

/// _style.scss
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}

```
연산을 사용하면 모든 계산된 수치값을 지정할 필요 없이 값들을 유동적으로 뽑아낼 수 있습니다.
예시문에서는 `container`클래스의 `width`값만 변경한다면 `article,aside`의 값도 자동으로 반영되어 변경됩니다.
유지보수가 훨씬 간단해질 수 있습니다.

```css

/* style.css */
 
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}

```



### Parentheses

```css
p {
  width: 1em + (2em * 3);
}
```
sass에서는 보통 수학에서의 계산과 마찬가지로 괄호연산이 우선적으로 이루어집니다.

```css
p { width: 7em; }
```

### Functions

sass자체에서 지원하는 내장함수들입니다. 

[sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)
링크를 통해 들어가셔서 api를 확인하실 수 있습니다.

### Keyword Arguments
### Interpolation : #{} 보간법
SASS 는 변수를 "" 내부에서 처리할 수 있는 보간법을 지원하고 있습니다.
다시 말해서, #{} 구문을 사용하여 선택자 및 속성 이름에 변수를 사용할 수가 있습니다.


```SCSS

//style.scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}

```

```css

/* style.css */
 
p.foo {
  border-color: blue; }

```
#{} 은 SassScript의 속성값에서 사용하는 것도 가능합니다. <해석불가>

```SCSS

//style.scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}

```
```css

/* style.css */
 
p {
  font: 12px/30px; }

```
### & in SassScript


### Variable Defaults와 global : !default, !global

!default 플래그는 value값의 끝에 쓰고 변수가 이미 할당된 경우는 재할당하지 않지만 아직 값을 갖지 않는 null인 경우에는 !defalut 플래그의 value값으로 할당됩니다. 

```SCSS

// _style.scss
$content: "First content";
$content: "Second content?" !default;
$new_content: "First time reference" !default;

#main {
  content: $content;
  new-content: $new_content;
}

$content: null;
$content: "Non-null content" !default;

#main {
  content: $content;
}

#demo {
  $width : 5em !global; // 전역변수처럼 사용합니다.
  width: $width;
}
#sidebar {
  width: $width;
}

```
```css

/*style.css*/
#main {
  content: "First content";
  new-content: "First time reference";
}

#main {
  content: "Non-null content";
}

#demo {
  width: 5em;
}

#sidebar {
  width: 5em;
}

```

`!global` flag 를 사용하면 중괄호 안에 선언한 지역변수도 전역변수로 설정할 수 있습니다. 

```SCSS

// _style.scss
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}

```
```css

/*style.css*/
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}

```

* [global flag 가이드라인 참조](http://sass-guidelin.es/ko/#global-)]
