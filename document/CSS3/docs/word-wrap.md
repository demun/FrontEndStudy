## word-wrap

작성자 : 송지은

작성일 : 2015-09-27

css 레퍼런스 설명:
 - word-wrap : 단어가 박스 요소의 너비보다 길어질 경우 자동 줄바꿈이 발생하는데 이때 단어를 나눌지의 여부를 지정하는 속성이다.

 - syntax :
```sh
word-wrap: normal|break-word|initial|inherit;
```

normal : 기본 값. 일반적으로 단어들이 나뉘는 지점에서 나눌 수 있도록 지정 된다.

break-word : 일반적으로 나눌 수 없는 단어를 임의의 지점에서 나눌 수 있도록 지정된다.

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



-----

* [CSS3 README](../README.md)

* [word-break](word-break.md)
* [word-wrap](word-wrap.md)
