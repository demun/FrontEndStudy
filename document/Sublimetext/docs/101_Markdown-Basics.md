# Markdown Basics


## Basic writing



### Paragraphs

기본적으로 단락은 여러줄 사용해도 한줄로 인식합니다.




### Headings

제목은 `#` 의 갯수로 표현

```md
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

# h1
## h2
### h3
#### h4
##### h5
###### h6


### Blockquotes

인용구는 `>` 를 사용.

```md
> 인용구
```

> 인용구



### Styling text

강조와 기울임체는 `*` 와 `_` 를 사용하는데 한개는 기울임, 두개는 강조를 표현합니다.

```md
*This text will be italic*

**This text will be bold**

_This text will be bold_

__This text will be bold__
```

*This text will be italic*

**This text will be bold**

_This text will be bold_

__This text will be bold__


필요에 따라 강조와 기울임체를 모두 결합할 수 있다.

```md
**Everyone _must_ attend the meeting at 5 o'clock today.**
```

**Everyone _must_ attend the meeting at 5 o'clock today.**


<br>
<br>

## Lists


### Unordered lists

순서없는 목록은 `*` 또는 `-` 를 사용한다.

```md
* Item
* Item
* Item

- Item
- Item
- Item
```

* Item
* Item
* Item

- Item
- Item
- Item


### Ordered lists

순서있는 목록은 숫자를 이용한다.


```md
1. Item 1
2. Item 2
3. Item 3
```

1. Item 1
2. Item 2
3. Item 3





### Nested lists

중첩된 목록의 들여쓰기는 빈칸 두개를 이용합니다.

```md
1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces, because it's two spaces further than the item above.
    * You might want to consider making a new list.
3. Item 3
```

1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces, because it's two spaces further than the item above.
    * You might want to consider making a new list.
3. Item 3


3. Item 3




<br>
<br>


## Code formatting


### Inline formats

인라인 형식은 역따옴표(키보드 왼쪽맨 위의 키판, 숫자 1옆의 물결표시)( \` ) 한개를 사용하여 고정폭의 텍스트 서식을 표시합니다.

```md
Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.
```

Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.



### Multiple lines

다중라인은 역따옴표 3개로 코드 블럭을 표시합니다.

![Markdown lines](../images/demun-056.jpg)



Check out this neat program I wrote:

```
x = 0
x = 2 + 2
what is x
```



### Links

링크는 [] 과 () 를 이용해서 표현합니다. 예제를 보세요.

```md
[www.github.com](www.github.com)
```

[www.github.com](www.github.com)



인라인으로 표현할때는:

```md
인라인으로 표현할때는 [www.github.com](www.github.com) 이렇게 표현합니다.
```

인라인으로 표현할때는 [www.github.com](www.github.com) 이렇게 표현합니다.



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