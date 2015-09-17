# Mastering Markdown

마크 다운은 GitHub의 플랫폼에서 작성하는 모든 형태의 스타일링을위한 가볍고 사용하기 쉬운 구문입니다.


학습 내용 :

* 마크 다운 스타일 공동 편집을 쉽게하는 방법
* 기존의 마크 다운 포맷 방식과 다릅니다
* 마크 다운에서 텍스트 서식을 사용하는 방법
* GitHub에서 자동으로 마크다운 렌더링을 활용하는 방법
* GitHub에서 고유의 마크다운 확장을 적용하는 방법



## What is Markdown?
[마크다운](http://daringfireball.net/projects/markdown/)은 웹에서 텍스트를 스타일링하는 방법입니다.



<br>
<br>

# Syntax guide
다음의 구문가이드는 __GitHub.com__ 또는 당신 자신의 텍스트 파일 어디에서나 사용할 수있는 마크다운 문법의 개요입니다.


## Headers

```md
# 이것은 <h1> 태그입니다
## 이것은 <h2> 태그입니다
###### 이것은 <h6> 태그입니다
```

# 이것은 \<h1\> 태그입니다
## 이것은 \<h2\> 태그입니다
###### 이것은 \<h6\> 태그입니다



## Emphasis

```md
*이 텍스트는 기울임 꼴이 될 것입니다*
_이것 또한 기울임 꼴이 될 것입니다_

**이 텍스트는 굵게 표시됩니다**
__이것 또한 굵게 될 것입니다__

*당신은 이것들을 **조합** 할 수 있습니다*
```

*이 텍스트는 기울임 꼴이 될 것입니다*  
_이것 또한 기울임 꼴이 될 것입니다_  

**이 텍스트는 굵게 표시됩니다**  
__이것 또한 굵게 될 것입니다__  

*당신은 이것들을 **조합** 할 수 있습니다*


## Lists

### Unordered
순서 없는 목록

```md
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

* Item 1
* Item 2
  * Item 2a
  * Item 2b


### Ordered
순서 있는 목록

```md
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
```

1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b



### Images

```md
![GitHub Logo](https://help.github.com/assets/images/site/set-up-git.gif)
형식: ![대체텍스트](이미지주소)
```

![GitHub Logo](https://help.github.com/assets/images/site/set-up-git.gif)




### Links

```md
http://github.com - 자동!  
[GitHub](http://github.com)
```

http://github.com - 자동!  
[GitHub](http://github.com)

> 자동! 뒤에 빈칸 두개 넣었습니다.


### Blockquotes


```md
인용구 표시:

> 인용구문
> 인용구문
```

인용구 표시:

> 인용구문
> 인용구문


### Inline code


```md
인라인으로 코드를 작성할때  
`<addr>` 요소를 넣습니다.
```

인라인으로 코드를 작성할때  
`<addr>` 요소를 넣습니다.



<br>
<br>
<br>

# GitHub Flavored Markdown

__GitHub.com__은 마크다운 문법의 자체 버전을 사용하고 __GitHub.com__ 콘텐츠와 함께 작동 할 수 있도록 많은 유용한 기능을 추가 제공 합니다.

__GitHub Flavored Markdown__ 은  일부 기능 설명과 이슈의 댓글에서만 사용할 수 있으며 요청을 __Pull__ 할 수 있습니다. 
다음은 SHA-1 해시, 이슈에 @mentions 뿐만 아니라 참조를 포함하며, 요청을 __Pull__ 합니다. 
작업 목록은 Gist 댓글과 Gist 마크다운 파일에서 사용할 수 있습니다.


## Syntax highlighting
구문강조하는 방법의 예: [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

또한 단순히 4 칸으로 코드를 들여 쓰기 수 있습니다

```javascript
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }
```

구문 강조하지 않고 파이썬 코드의 예입니다 :

```
def foo():
    if not bar:
        return True
```


## Task Lists

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```



## Tables
테이블은 하이픈으로 나누어 만듭니다. `-` 로 각각의 열을 분리한후 `|` 로 분리합니다.

```
첫번째 해더 | 두번째 해더
------------ | -------------
콘텐츠 셀 1 | 콘텐츠 셀 2
콘텐츠 첫번째 열 | 콘텐츠 두번째 열
```

첫번째 해더 | 두번째 해더
------------ | -------------
콘텐츠 셀 1 | 콘텐츠 셀 2
콘텐츠 첫번째 열 | 콘텐츠 두번째 열



## SHA 참조

[SHA-1 hash](http://en.wikipedia.org/wiki/SHA-1) 는 자동으로 GitHub에 커밋에 대한 링크로 변환됩니다.

```
16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac
```



## 저장소 내에서 이슈 참조
이슈 또는 끌어 오기(Pull Request) 요청의 모든 번호가 자동 링크로 변환됩니다.

```
#1
mojombo#1
mojombo/github-flavored-markdown#1
```

## Username @mentions
사용자 이름 뒤에 @ 기호를 입력하면, 그 사람의 이름을 볼 수 있습니다.
개인을 언급하고 있기 때문에 이것은, "@mention" 라고합니다.
또한 조직 내에서 팀을 @mention 할 수 있습니다.

> 깃헙에서 @username 하면 username 을 불러오거나 선택할 수 있습니다.


## URL에 대한 자동 연결
(URL http://www.github.com/) 은 자동으로 클릭 가능한 링크로 변환됩니다.



## 취소선

`~~this~~` 같은 물결표 두개로 감싼 단어는 취소선이 쳐진 것처럼 보입니다.



## 이모티콘

GitHub에서는 이모티콘을 지원합니다! :sparkles: :camel: :boom:

우리가 지원하는 모든 이미지의 목록을 보려면 [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/)



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
