# word-wrap

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명: 
- word-wrap : 단어가 요소 박스의 너비보다 길어질 경우 자동 줄바꿈이 발생하는데 이때 단어를 나눌지의 여부를 지정하는 속성이다.
- 속성 값 : normal, break-word, initial, inherit

`sample code` : 

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			p.test {
			    width: 11em; 
			    border: 1px solid #000000;
			    word-wrap: break-word;
			}
		</style>
	</head>
	<body>
		<p class="test"> This paragraph contains a very long word: thisisaveryveryveryveryveryverylongword. The long word will break and wrap to the next line.</p>
	</body>
</html>
```

[결과보기](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_word-wrap)
