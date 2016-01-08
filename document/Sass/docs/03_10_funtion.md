# Sass Reference

## Function Directives

sass에서는 내장함수말고도 사용자가 직접 함수를 제작할 수 있습니다.

```css
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
```

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

이부분이 function을 선언하는 부분이며 자바스크립트와 비슷하게 동작한다고 생각하시면 됩니다.

@mixin과 비슷하지만 가장큰 차이점이라면 @return이 있다는점 정도가 있습니다.

width: grid-width(5); 이렇게 호출하여 5값이 function을 통해서 계산되서 리턴이되었습니다.

```css
#sidebar { width: 240px; }
```

@mixin과의 차이를 확인하기위해 @mixin을 이용해 동일한 결과를 얻어보도록 하겠습니다

```css

$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }


@mixin grid-width($n){
	width: $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { @include grid-width(5) }
```

```css
#sidebar { width: 240px; }

#sidebar { width: 240px; }

```