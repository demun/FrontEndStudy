# Sass Reference
* Control Directives & Expressions
	
	
##8. Control Directives & Expressions

- @if
- @while
- @for
- @each
	- Multiple Assignment




### if
sass에서 if문(조건문)을 사용할 수 있습니다.

문법은 다음과 같습니다.

```css
@if true/false {
  ...
} @else if true/false {
  ...
} @else {
  ...
​}
```

true/false를 괄호로 둘러싸지 않고, else와 if를 띄어쓴다는 점에 주의합니다.


변수 jb-type의 값에 따라 문단의 색을 다르게 만드는 예제입니다.

jb-type의 값이 jb-red이면 빨간색으로, jb-blue이면 파란색으로, jb-red나 jb-blue가 아니면 검정색으로 만듭니다.

```css
//sass

$jb-type: jb-blue;
p {
  @if $jb-type == jb-red {
    color: red;
  } @else if $jb-type == jb-blue {
    color: blue;
  } @else {
    color: black;
  }
}
```
변수의 값을 jb-blue, jb-red, 혹은 그외아무거나 값을 바꿔가면서 테스트해보시면 결과가 어떻게 나오는지 이해하실 수 있습니다.



```css
//css

p { color: blue; }

```


sass에서는 반복문이 3종류가 있습니다. 첫번쨰로 wile문을 다루도록 하겠습니다.
### while
```css
$i: 1;
$gutter: 20px;

@while $i <= 12 {
  .grid-#{$i} {
    width: (60px * $i) + $gutter * ($i - 1);
  }
  $i: $i + 1;
}
```

@while 뒤의 조건이 true 일때까지 괄호안의 명령을 계속 반복하는 명령어 입니다.

$i: $i + 1;
한번 반복할 때 마다 $i 변수의 값을 1씩 증가시키며 결국에는 처음에는 1이었던 값이 12에 도달하면 @while문이 중단됩니다.

.grid-#{변수}로 해당 클래스를 순차적으로 생성후

(60px * $i) + $gutter * ($i - 1); 계산식으로 값을지정해줍니다.


```css
//결과 
.grid-1 { width: 60px; }

.grid-2 { width: 140px; }

.grid-3 { width: 220px; }

.grid-4 { width: 300px; }

.grid-5 { width: 380px; }

.grid-6 { width: 460px; }

.grid-7 { width: 540px; }

.grid-8 { width: 620px; }

.grid-9 { width: 700px; }

.grid-10 { width: 780px; }

.grid-11 { width: 860px; }

.grid-12 { width: 940px; }


```

### for 

while문과 문법이 약간 다를뿐 비슷한 반복문입니다.

from 과 to,through 를 이용해 자바스크립트의 for문과 비슷한 효과를 낼 수 있습니다.
```css
$total: 12;

@for $i from 1 to $total {
  .grid-#{$i} {
    width: 70px * $i;
  }
}
```
$for 뒤에 {}안에서 사용될 변수를 선언후 from 부터 to, through 까지 변하는동안 반복됩니다.

이 때 to는 <(미만)과 같고 through 는 <=(이하)와 같습니다.

```css
.grid-1 { width: 70px; }

.grid-2 { width: 140px; }

.grid-3 { width: 210px; }

.grid-4 { width: 280px; }

.grid-5 { width: 350px; }

.grid-6 { width: 420px; }

.grid-7 { width: 490px; }

.grid-8 { width: 560px; }

.grid-9 { width: 630px; }

.grid-10 { width: 700px; }

.grid-11 { width: 770px; }
```

```css

$total: 12;

@for $i from 1 through $total {
  .grid-#{$i} {
    width: 70px * $i;
  }
}
```

```css
.grid-1 { width: 70px; }

.grid-2 { width: 140px; }

.grid-3 { width: 210px; }

.grid-4 { width: 280px; }

.grid-5 { width: 350px; }

.grid-6 { width: 420px; }

.grid-7 { width: 490px; }

.grid-8 { width: 560px; }

.grid-9 { width: 630px; }

.grid-10 { width: 700px; }

.grid-11 { width: 770px; }

.grid-12 { width: 840px; }
```


### each

each문은 배열이나 맵타입의 데이터의 내용을 하나씩 접근이 가능한 명령어이며 자바스크립트의 for in문과 비슷하게 동작합니다.

```css
@each $obj in phone, tablet, cup, mouse {

  .item-#{$obj} {
    background-image: url("img/#{$obj}.jpg");
  }
}
```
@each 뒤에 $obj 변수를 선언하고 in 뒤에 배열 phone, tablet, cup, mouse 을 나열하게 되면 

순차적으로 변수에 담기게됩니다.

```css
.item-phone { background-image: url("img/phone.jpg"); }

.item-tablet { background-image: url("img/tablet.jpg"); }

.item-cup { background-image: url("img/cup.jpg"); }

.item-mouse { background-image: url("img/mouse.jpg"); }
```

이번에는 배열이아닌 맵형태를 다뤄보도록 하겠습니다.

```css
@each $item in (h1: 2em, h2: 1.5em, h3: 1.2em) {

  #{nth($item, 1)} {
    font-size: nth($item, 2);
  }
}
```

아까와 다르게 (h1: 2em, h2: 1.5em, h3: 1.2em) 맵형태가 뒤에 위치하고 있습니다.

nth내장함수를 이용해 #{nth($item, 1)}여기서는 첫번째값 즉, h1,h2,h3 이 들어가고
nth($item, 2) 여기서는 2번째값 2em, 1.5em, 1.2em 값이 들어가는걸 확인할 수 있습니다.

nth함수는 (배열or맵,index값) 형식으로 앞의 배열이나 맵의 특정인덱스 값을 추출할 수 있는 내장함수입니다.