# Sass


### Comments
Sass 주석은 두가지다.

```sass
// 해석되지않는 주석
/* 해석되는 주석 */
```

긴주석일경우는 주의해야한다.

```sass
/* 
여러줄
주석으로
이것은 안됩니다.
*/


/*
 * 여러줄
 * 주석으로
 * 앞에 *를 붙여야 합니다.
 */
```

변수를 주석에도 사용할 수 있다.

```sass
// before
$version: '1.2.3'
/* #{$version} */

// after
/* 1.2.3 */
```




<br>

### Nested Rules
Sass 중첩규칙은 부모선택자 내부에 자식선택자를 들여쓰기만하면 된다.

```sass
.parent
	.child
		color: blue
```





<br>

#### Referencing Parent Selectors
Sass 부모 참조 선택자(&) : 부모선택자에 중첩 형태로 자식 선택자를 사용할 때 앤퍼센드(&) 기호를 앞에 붙이면 부모 선택자를 참조한다.

```sass
a
	&:hover
		color: blue
```





<br>

#### Nested Properties
Sass 중첩 속성: 중첩규칙과 같이 속성도 동일하게 중첩하여 사용할수 있다.

```sass
.parent
	margin:
		left: auto
		right: auto
```






<br>

#### Selector Inheritance
Sass 선택자 상속(@extend) : 선택자에 설정된 속성을 그대로 물려받는다.

```sass
.button
	font-weight: bold
	color: blue

.button-1
	@extend .button
	background-color: #fff

.button-2
	@extend .button
	background-color: #ddd
```




<br>

#### Placeholder Selector
Sass 대체 선택자(%): `%` 기호가 붙으면 css 는 해석하지 않는다. 대체선택자를 선택자를 상속하면 대체선택자의 속성을 그대로 물려받는다.

```sass
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

- 결과

```css
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



<br><br>

### Import
Sass 호출하기 : `.sass` , `.scss` 모두 확장자 생략이 가능한채로 호출가능하다. 
css 로 변환되지 않을려면 파일명 앞에 `_`를 붙인다

```sass
// base 는 _base.scss 이다.
@import "base";
```


Ruby 환경의 Sass 에서는 Output 스타일을 설정할 수 있다.

Sass 출력스타일 | CSS 출력결과
----------------|---------------
compact			| 코드를 선택자마다 한 줄로 출력
nested 			| 코드를 선택자마다 여러줄로 출력하되, 선언구문의 끝이 마지막 속성뒤에 위치한다.
expanded 		| 코드를 선택자마다 여러줄로 출력
compressed 		| 코드를 모두 압축하여 출력






<br><br>

### Sass Script


#### Variables
Sass에서 변수는 이름앞에 `$` 를 사용한다.

```sass
$blue: blue
```




<br>

#### Operation
Sass에서 연산처리는 사칙연산(+, -, *, /), 비교연산(>, <, ==, >-, <=, !=), 문자접합 등을 지원한다.

나눗셈(/)을 할때 단위가 붙은 값은 괄호로 묶어야 된다.

```sass
(100% / 4)
// 결과 25%
```




<br>

#### Mixin
믹스인은 `sass`, `scss` 에서 사용법이 약간 다르지만 서로 호환이 되서 호출해서 사용할수 있다.

`sass`에서 믹스인 사용할때 이름앞에 `=` 를 붙인다. 호출할때 `+`를 붙인다.
`scss`에서 믹스인 사용할때 이름앞에 `@mixin` 키워드를 사용한다. 호출할때 `@include` 키워드를 사용한다.

- sass 구문

```sass
=reset-box
	margin: 0
	padding: 0

.box
	+reset-box
```

- scss 구문

```scss
@mixin reset-box {
	margin: 0;
	padding: 0;
}

.box {
	@include reset-box;
}
```


- Arguments
전달인자를 사용하여 믹스인을 확장할수 있다. 하지만 생략하거나 할때 오류가 날수도 있으니 정확하게 사용해야 한다.

기본값을 미리 지정해놓으면 따로 지정하지 않을때는 기본값을 사용하고, 지정하면 그값을 사용한다. 
사용하지 않는 속성값에는 `null` 을 입력해놓으면 따로 지정하지 않으면 생략가능하다.

```sass
=position($type: relative, $t: null, $r: null)
	position: $type
	top: $t
	right: $r

// 호출
.box
	+position(absolute)

// 원하는 속성값만 지정할수도 있다.
.box-2
	+position($t: 3px)
```

- 결과

```css
.box {
	position: absolute;
}

.box-2 {
	position: relative;
	top: 3px;
}
```





- 복수의 전달인자

```sass
=transition($args...)
	-webkit-transition: $args
	transition: $args

// 호출
.box
	+transition(width 0.2s, height 0.4s, ease-aut)
```


- 결과

```css
.box {
	-webkit-transition: width 0.2s, height 0.4s ease-aut;
	transition: width 0.2s, height 0.4s ease-aut;
}
```


<br><br>




### Conditions




#### @if...@else

자바스크립트의 `if` 문과 비슷하며 `@if...@else if...@else` 도 가능하다.

보간법 : 변수와 문자열을 접합할때 `#{}` 를 사용한다.


```sass
$theme: dark

@if $theme == light
	$bg-color: #f34e7b
@else
	$bg-color: #61051f

// 사용
body.#{$theme}-theme
	background: $bg-color
```

- 결과

```css
body.dark-theme {
	background: #61051f;
}
```





<br>



#### if()
if()함수는 자바스크립트의 3항 연산자와 비슷하다.

```sass
if(조건, 참일때, 거짓일때)
```


```sass
.foo 
	padding: if(true, 10px, 20px)
```

- 결과

```css
.foo {
    padding: 10px;
}
```





<br>


### Loops
Sass 반복문은 자바스크립트의 반복문과 유사하다

- @while

```sass
%col
	float: left
	margin-left: 20px;

$i: 1 // 반복자

@while $i <= 3
	.col-#{$i}
		@extend %col
		width: (60px * $i) + (20 * ($i - 1))
	// $i 반복자 값 1 증가
	$i: $i + 1
```

결과

```css
.col-1, .col-2, .col-3 {
    float: left;
    margin-left: 20px;
}

.col-1 {
    width: 60px;
}

.col-2 {
    width: 140px;
}

.col-3 {
    width: 220px;
}
```



- @for

@for 문은 $i 값을 1부터 (from) 3 값까지 (through) 1씩 증가하면서 반복합니다.
`through` 대신 `to` 키워드를 사용하면 3전까지 즉 2까지 반복합니다.

```sass
%col
	float: left
	margin-left: 20px

@for $i from 1 through 3
	.col-#{$i}
		@extend %col
		width: (60 * $i) + (20 * ($i - 1))
```

- 결과

```css
.col-1, .col-2, .col-3 {
    float: left;
    margin-left: 20px;
}

.col-1 {
    width: 60;
}

.col-2 {
    width: 140;
}

.col-3 {
    width: 220;
}
```








- @each

`@each...in` 문은 리스트나 맵에 유용하다.
`in` 앞에는 리스트나 맵 내부를 순환, 탐색하는 변수 아이템(item) 이 오고, 뒤에는 리스트나 맵이 올수 있습니다.

즉 아이템(item) 갯수만큼 반복합니다.

```sass
@each $item in icon1, icon2, icon3, icon4
	.icon-#{$item}
		background-image: url("images/#{$item}.png")
```

- 결과

```css
.icon-icon1 {
	background-image: url("images/icon1.png");
}
.icon-icon2 {
	background-image: url("images/icon2.png");
}
.icon-icon3 {
	background-image: url("images/icon3.png");
}
.icon-icon4 {
	background-image: url("images/icon4.png");
}
```


