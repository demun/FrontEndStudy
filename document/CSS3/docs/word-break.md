# word-break

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
- word-break : 줄바꿈을 위한 단어 규칙을 지정하는 속성이다.
- 속성 값 : normal, break-all, keep-all, initial, inherit

`sample code` : 

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			p.test1 {
			    width: 140px; 
			    border: 1px solid #000000;
			    word-break: keep-all;
			}

			p.test2 {
			    width: 140px; 
			    border: 1px solid #000000;
			    word-break: break-all;
			}
		</style>
	</head>
	<body>
		<p class="test1">This paragraph contains some text. This line will-break-at-hyphens.</p>
		<p class="test2">This paragraph contains some text. The lines will break at any character.</p>
	</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_word-break)

참고 : 오페라 12 및 이하 버전에서는 지원되지 않는다.
