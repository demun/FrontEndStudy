# cssnext

[cssnext 원문](http://cssnext.io/features/)


작성자: 허종문

<br>


## custom properties & var()

최상위 셀렉터에 `:root` 라는 셀렉터를 지원한다.

- 설정: `--변수명` 
- 사용: `var(--변수명)`

```css
/* before */
:root {
	--mainColor: red;
}

a {
	color: var(--mainColor);
}

/* after */
a {
	color: red;
}
```


<br>


## calc()

계산식에는 `calc` 키워드 사용.

```css
/* before */
:root {
	--fontSize: 1rem;
}

h1 {
	font-size: calc(var(--fontSize) *2);
}

/* after */
h1 {
	font-size: 32px;
	font-size: 2rem;
}
```


<br>


## custom media queries



```css
/* before */
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
	/* small viewport */
}


/* after */
@media (max-width: 30em) {
	/* small viewport */
}
```

<br>


## media queries ranges

`>=` , `<=` 는 `min-width` , `max-width` 로 대체

```css
/* before */
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px);

@media (--only-medium-screen) {
	/* your style */
}

/* after */
@media (min-width: 500px) and (max-width: 1200px) {
	/* your style */
}
```


<br>


## custom selectors

`:--변수명` 에 공백이 없어야한다.
`@custom-selector` 로 시작하고, `--변수명` 다음에 셀렉터를 지정한다.

```css
/* before */
@custom-selector :--button button, .button;
@custom-selector :--enter :hover, :focus;

:--button {
	/* button style */
}
:--button:--enter {
	/* hover, focus style */
}


/* after */
button,
.button {
	/* button style */
}
button:hover,
.button:hover,
button:focus,
.button:focus {
	/* hover, focus style */
}
```


<br>


## color


```css
/* before */
a {
	color: color(red alpha(-10%));
}
a:hover {
	color: color(red blackness(80%));
}


/* after */
a {
	color: #FF0000;
	color: rgba(255, 0, 0, 0.9);
}
a:hover {
	color: rgb(51, 0, 0);
}
```

<br>


## hwb


```css
/* before */
body {
	color: hwb(90, 0%, 0%, 0.5);
}


/* after */
body {
	color: #80FF00;
	color: rgba(128, 255, 0, 0.5);
}
```


<br>


## gray()

`gray()` 키워드 지원

```css
/* before */
.foo {
	color: gray(85);
}
.bar {
	color: gray(10%, 50%);
}


/* after */
.foo {
	color: rgb(85, 85, 85);
}
.bar {
	color: #1A1A1A;
	color: rgba(26, 26, 26, 0.5);
}
```

<br>


## rrggbbaa


```css
/* before */
body {
	background: #9d9c;
}


/* after */
body {
	background: #99DD99;
	background: rgba(153, 221, 153, 0.8);
}
```

<br>



## rebeccapurple


```css
/* before */
body {
	color: rebeccapurple;
}


/* after */
body {
	color: rgb(102, 51, 153);
}
```


<br>



## font-variant

```css
/* before */
h2 {
	font-variant-caps: small-caps;
}
table {
	font-variant-numeric: lining-nums;
}


/* after */
h2 {
	-webkit-font-feature-settings: "c2sc";
	   -moz-font-feature-settings: "c2sc";
	        font-feature-settings: "c2sc";
	font-variant-caps: small-caps;
}
table {
	-webkit-font-feature-settings: "lnum";
	   -moz-font-feature-settings: "lnum";
	        font-feature-settings: "lnum";
	font-variant-numeric: lining-nums;
}
```


<br>


## filter



```css
/* before */
.blur {
	filter: blur(4px);
}


/* after */
.blur {
	filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="4" /></filter></svg>#filter');
	-webkit-filter: blur(4px);
	        filter: blur(4px);
}
```

<br>



## rem units



```css
/* before */
.sky {
	margin: 2.5rem 2px 3em 100%;
}


/* after */
.sky {
	margin: 40px 2px 3em 100%;
	margin: 2.5rem 2px 3em 100%;
}
```

<br>


## :any-link pseudo-class


```css
/* before */
nav:any-link {
	background-color: yellow;
}


/* after */
nav:link,nav:visited {
	background-color: yellow;
}
```

<br>


## matches pseudo-class



```css
/* before */
p:matches(:first-child, .special) {
	color: red;
}


/* after */
p:first-child, p.special {
	color: red;
}
```

<br>


## :not pseudo-class


```css
/* before */
p:not(:first-child, .special) {
	color: red;
}


/* after */
p:not(:first-child):not(.special) {
	color: red;
}
```


<br>


## pseudo-elements



```css
/* before */
a::before {
	
}


/* after */
a:before {
	
}
```

<br>


## Alpah colors


```css
/* before */
body {
	background: rgba(153, 221, 153, 0.8);
}


/* after */
body {
	background: #99DD99;
	background: rgba(153, 221, 153, 0.8);
}
```



<br>


## Bonus features


- @import
- minification
- @todo


----


* [FrontEndStudy](../../../../)


