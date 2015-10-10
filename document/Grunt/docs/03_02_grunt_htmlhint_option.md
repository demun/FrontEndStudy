# htmlhint Rules

[htmlhint Rules](https://github.com/yaniswang/HTMLHint/wiki/Rules)



## 규칙

`Nico Schlömer` 는 3월 4일에 개정판 2 페이지를 편집

***


## Standard


- 표준


### tagname-lowercase

Level: error

태그 이름은 소문자여야 한다.



### attr-lowercase

Level: error

속성 이름은 소문자여야 한다.




### attr-value-double-quotes

Level: error

속성의 값은 따옴표로 감싸야 한다.




### attr-value-not-empty

Level: warning

속성의 값은 비어있지 않고 설정해야 한다.




### attr-no-duplication

Level: error

속성은 중복되지 않아야 한다.



### doctype-first

Level: error

DOCTYPE 먼저 선언해야 한다.




### tag-pair

Level: error

태그는 쌍을 이루어야 한다.



### tag-self-close

Level: warning

`self tag` 는 스스로 닫혀야 한다.



### spec-char-escape

Level: error

특수문자는 이스케이프(escape)해야 한다.




### id-unique

Level: error

아이디는 고유해야 한다.



### src-not-empty

Level: error

img, script, link 등의 src 는 값이 있어야 한다.

빈 `src` 값은 현재 페이지를 두번 호출한다.



***



## Performance

- 성능



### head-script-disabled

Level: warning

`scirpt` 는 태그는 `head` 태그안에 있지 않아야 한다.






***





## Accessibility

- 접근성




### img-alt-require

Level: warning

`img` 태그의 `alt` 값은 있어야 한다.




***



## Specification

- 특징



### doctype-html5

`Doctype` 은 `html5` 로 해야 한다




### id-class-value

Level: warning

`id` 와 `class` 는 `underline` , `dash` , `hump(헝가리안표기법)` 등의 룰을 따라야 한다.




### style-disabled

Level: warning

`style` 태그는 사용될 수 없다. `link` 태그 사용




### space-tab-mixed-disabled

Level: warning

공백과 탭은 라인 앞에 혼합해서 사용 할 수 없다.





### id-class-ad-disabled

Level: warning

`adblock software` 때문에 막혀서 `id` 와 `class` 에는 `ad` 키워드를 사용할 수 없다.




### href-abs-or-rel

Level: warning

`href` 는 절대경로나 상대경로여야 한다.




### attr-unsafe-chars

Level: warning

속성값에는 불안정한 문자를 사용할 수 없다.




***

- 이전글 [03_02_grunt_htmlhint](03_02_grunt_htmlhint.md)
- 다음글 [04_00_css_task](04_00_css_task.md)

