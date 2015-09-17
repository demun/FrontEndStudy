# GitHub Flavored Markdown

github 의 마크다운은 기존의 마크다운과 약간 차이점이 있습니다.

깃헙은 `GFM` 이라는것을 사용하는데요. 몇가지 추가적인 것도 있고, 내용이 변경된것도 있습니다.


## 기존의 마크 다운과의 차이점



### Multiple underscores in words

기존의 마크다운에서 밑줄`_` 은 기울임체를 표시하지만 깃헙에서는 무시합니다.


```md
do_this_and_do_that_and_another_thing.
```

do_this_and_do_that_and_another_thing.


단어의 일부를 강조하기 위해서는 별표`*` 를 사용합니다.

```md
*test*
```

*test*


### URL autolinking

`GFM` 은 표준 `url` 은 자동링크됩니다. 물론 기존의 링크를 표시하는 방법도 지원합니다.

```md
http://example.com
```

http://example.com



### Strikethrough

`GFM` 은 취소선(글자를 지우기위해 글자위에 선을 긋는것)을 지원합니다.

```md
~~Mistaken text.~~
```

~~Mistaken text.~~



### Fenced code blocks

따옴표 3개( \`\`\` )로 코드블럭을 래핑하며 4칸 들여쓰기로 변환됩니다.

![코드블럭 이미지](../images/git-2015-06-30-002.jpg)

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```




### Syntax highlighting

코드블럭의 구문강조는 언어 ID 를 추가하면 됩니다.

아래는 루비의 구문강조 예제입니다.

[루비 구문강조](../images/git-2015-06-30-003.jpg)

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

언어 ID는 [언어 YAML 파일](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) 을 참고하세요.




### Tables

테이블은 `|` 와 `-` 를 이용해서 만들수 있습니다.

```md
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```


First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell


미적인 부분을 고려해서 끝에 `|` 를 추가할 수 있습니다.

```md
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


해더 부분, 즉 상단 첫행의 텍스트 길이와 대시`-` 부분이 꼭 같지 않아도 됩니다.

```md
| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```

굵은 링크, 기울임꼴, 취소선 등 인라인 마크다운을 포함 할 수 있습니다.

```md
| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |
```

| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |


해더행에서 콜론(`:`)을 이용하여 왼쪽 정렬, 오른쪽 정렬을 선택할 수 있습니다.

```md
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
```


| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

기본적으로는 왼쪽정렬이고 콜론(`:`) 이 양쪽에 있으면 가운데 정렬입니다.



## HTML

github 에서 지원하는 html 태그는 [github/markup repository](https://github.com/github/markup) 를 참고하세요.




----

* [Sublimetext 목록으로 돌아가기](../README.md)
* [01-프로그램-설치](01-프로그램-설치.md)
* [02-플러그인-설치](02-플러그인-설치.md)
* [03-환경설정](03-환경설정.md)
* [04-사용팁](04-사용팁.md)
* [101_Markdown-Basics](101_Markdown-Basics.md)
* [102_GitHub-Flavored-Markdown](102_Github-Flavored-Markdown.md)
* [103_Writing-on-Github](103_Writing-on-Github.md)
* [104_Mastering-Markdown](104_Mastering-Markdown.md)

----
