# Writing on GitHub

깃헙에서의 쓰기는 [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown) 를 이용하여 몇가지 추가적인 사항이 있습니다.


## Markup




### Newlines

깃헙에서 쓰기의 가장 큰 차이점은 줄바꿈을 처리하는 방식입니다.

의도하지 않은 오류로 인해 같은 단락의 같은 문단은 줄바꿈으로 처리한다고 합니다.(> 저도 잘 이해가 되지 않습니다.)

다음은 하나의 개행문자로 분리된 문구가 포함되어 있습니다.


```md
Roses are red
Violets are blue
```

Roses are red  
Violets are blue

:question: 이 문장이 이해가 되지 않습니다. 자동으로 개행문자(`<br>`) 을 삽입한다는 말 같은데 언제 이걸 삽입하는지 모르겠습니다. 위의 `Roses are red` 다음에 빈칸 두개를 강제로 삽입한 예입니다. 그럼 깃헙에서 의도한대로 `<br>` 태그가 자동으로 삽입됩니다.




### Task lists
[작업목록](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments)은 `[]` 과 `[x]` 를 사용해서 불완전 또는 완전한 목록(체크박스)을 표시한다고 합니다.

```md
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported
- [x] list syntax is required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported
- [x] list syntax is required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

`[]` 으로 사용된 작업목록은 체크박스로 표시되어 선택하거나 선택해제할 수 있습니다.

작업 목록은 중첩될 수 있습니다.

```md
- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task
```

- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task

중첩된 깊이는 한번이나 두번을 추천하지만 임의의 깊이까지 중첩될 수 있습니다.



### References
일부 참조는 자동으로 연결됩니다.

```md
* SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User/Repository@SHA: jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* #Num: #26
* GH-Num: GH-26
* User#Num: jlord#26
* User/Repository#Num: jlord/sheetsee.js#26
```

* SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* User/Repository@SHA: jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e
* #Num: #26
* GH-Num: GH-26
* User#Num: jlord#26
* User/Repository#Num: jlord/sheetsee.js#26

:speech_balloon: 위와같은 형식은 깃헙사이트내에서만 작동되는겁니다. 마크다운으로 작성된 `.md` 파일이지만 `github.com` 에 올려져야 제대로 작동됩니다.


<br><br>

## Features


### Quick quoting
쓰기에서 `r` 은 현재 문제에 회신 또는 코멘트를 달 수 있습니다.
토론 게시글에서 선택한 모든 텍스트는 자동으로 인용구로 포맷되어 귀하의 코멘트에 추가됩니다.



### Name and Team @mentions autocomplete
이름과 팀이름 자동완성

쓰기에서 `@` 는 사람이름이나 팀의 목록을 가져옵니다. `@` 를 입력하면 사람이름이나 팀의 목록이 나오는데 탭이나 화살표로 이동하여 선택할 수 있씁니다.
단지 조직이나 팀이름은 가입한 구성원에 한함니다.

자동완성결과는 공동 작업자 및 스레드의 다른 참가자로 제한됩니다. 즉 전체로 검색되지는 않습니다.

@mention 의 자동완성에 자세한 내용은 [users](https://github.com/blog/1004-mention-autocompletion) 그리고 [teams](https://github.com/blog/1121-introducing-team-mentions) 을 참고하세요.



### Zen Mode (fullscreen) writing
Zen Mode를 사용하면 전체 화면 모드에서 마크다운으로 작성할 수 있습니다. 댓글, 문제에 대한 선 모드 버튼을 찾아 사이트를 통해 요청 양식을 풀 수 있습니다.

Zen Mode 버튼을 찾아 댓글, 이슈, 요청 양식등을 보낼수 있습니다.

![Edit in fullscreen](https://help.github.com/assets/images/help/repository/zen_mode.png)

Zen Mode 버튼을 사용하여 파일을 편집할 수 있습니다.

Zen Mode 는 밝은 테마, 어두운 테마를 제공합니다. 윈도우 오른쪽 상단에 스위처를 사용하여 테마를 변경할 수 있습니다.

[Zen Mode](https://github.com/blog/1379-zen-writing-mode) 자세한 내용은 블로그 게시물에서 확인하시기 바랍니다.



## See also

* [Markdown Basics](https://help.github.com/articles/markdown-basics/)
* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)

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