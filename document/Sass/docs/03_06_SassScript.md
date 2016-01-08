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


###Interactive Shell -1차

  SassScript를 테스트해 보고 싶다면 -i option을 사용해 Prompt로 출력해볼수 있습니다.

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
###Variables (변수) -1차

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
###Global flag
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


<br>
### Data Types 

SassScript는 일곱가지의 기본 데이터 유형을 지원합니다 :

* __숫자 (numbers)__ - e.g. 1.2, 13, 10px    
* __문자와 따옴표 없는 문자 (string) __ - e.g. "foo", 'bar', baz)    
* __색상 (colors)__ - e.g. blue, #04a3f9, rgba(255, 0, 0, 0.5)    
* __booleans__ - e.g. true, false    
* __nulls__ - e.g. null    
* __공백이나 쉼표로 구분된 값 목록__ - e.g. 1.5em 1em 0 2em, `Helvetica, Arial, sans-serif`    
* __다른 값을 가진 함수__ - e.g. (key1: value1, key2: value2)    

SassScript는 `Unicode`와 `!important` 등 과 같은 CSS 속성 값의 모든 종류를 지원합니다. 그러나, 이러한 유형에 대한 특별한 처리는 없습니다.
그들은 단지 인용되지 않은 문자열처럼 취급하고 있습니다.

#### Strings
CSS 2종류 문자열의 지정 : `"Lucida Grande"` 또는 `'http://sass-lang.com'` 와 같은 인용 부호를 가지는 것, `sans-serif` 또는 `bold` 같은 인용 부호가없는 것. SassScript는 두종류를 인식하고, 일반적으로 SassScript에서 사용되는 문자열의 한종류 CSS에서 사용되는 사스 문서에서 사용되는 경우.



#### Lists
#### Maps
#### Colors

그러나 유일한 예외는 있습니다.: #{}를 사용할 경우 따옴표로 둘러싸인 문자열은 따옴표로 둘러싸여 있지 않습니다.


<br>
### Operators (연산) -1차

* Number Operations
  -Division and /
  -Subtraction, Negative Numbers, and -
* Color Operations
* String Operations
* Boolean Operations
* List Operations

Sass에서는 `+, -, *, /, %`등의 수학의 사칙연산과 (>, <, ==, >-, <=, !=)등의 비교연산,  문자접합 등을 지원합니다.
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
예시문에서는 `container`클래스의 `width`속성만 변경한다면 `article,aside`의 값도 자동으로 반영되어 변경됩니다.
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
### Functions
### Keyword Arguments
### Interpolation: #{}
### & in SassScript
### Variable Defaults: !default