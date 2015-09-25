# sass 기본




## Variables

변수는 `$` 기호를 이용합니다.

```scss
// scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
	font: 100% $font-stack;
	color: $primary-color;
}
```



## Nesting




```scss
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


## Partials




## Import




## Mixins

믹스인



## Extend

상속


## Operators







