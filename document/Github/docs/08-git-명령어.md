# 08-git-명령어


> 아래에서 나오는 `[]` 는 명령어를 입력할때 생략해도 됩니다.


## 기본 명령어

| 명령어 | 설명 |
|--------|------|
| git config --global user.name "name" | 최초 한번은 사용자이름을 지정해줘야 한다|
| git config --global user.email "user@email.com" | 최초 한번은 사용자 이메일을 지정해줘야 한다 |
| git config --global alias.co checkout | co 라는 별명(단축글자)으로 checkout 을 사용한다 |
| git config --global core.editor emacs | git 편집기로 emacs 를 사용한다 |
| git config --golbal merge.tool vimdiff | 머지툴로 vimdiff 를 사용한다 |
| git config --list | 글로벌 설정을 확인한다 |
| git clone url | 원격저장소 로컬에 복사 |
| git init | 원격관리 시작(로컬저장소를 만든다) |
| git add filename | 파일 추적하기(staging area 에 추가한다) |
| git commit -m 'commit message' | 커밋하고 메시지 입력(작업내용을 저장소로 보낸다) |
| git pull | 원격저장소에서 다운로드하면서 합치기 |
| git push | 원격저장소로 업로드 |
| git status | 현재 상태 알아보기 |


## 기본 명령어 2

| 명령어 | 설명 |
|--------|------|
| git diff | staged 와 unstaged 상태를 볼수 있다(마지막 커밋한 부분은 보여주지 않는다) |
| git diff --cached | 워킹디렉토리에 있는것과 staging area 에 넣은 파일의 변경된 부분을 보여준다. |
| git commit -a -m | git add 명령을 생략하고 바로 커밋할때 사용한다 |
| git rm filename | 삭제하기(삭제한후 커밋해야 한다) |
| git rm -f filename | staging area 에 추가하고 삭제가 안될때 강제삭제 |
| git rm --cached filename | 로컬에 그대로 두고(삭제하지않고) git 만 추적하지 않게하기 |
| git mv file_from file_to | file_from 을 file_to 로 파일명 변경하기 |
| git log | 커밋 로그 보기 |
| git add --all | 한번에 여러파일을 stage area 에 add 한다 |
| git add file1 file2 file3 | file1, file2, file3 등 3개의 파이을 한번에 add 할때 사용한다 |


## 커밋 로그

| 명령어 | 설명 |
|--------|------|
| git log | 커밋 로그 보기 |
| git log -p | 각 커밋의 diff 결과를 보여준다 |
| git log -p -2 | 각 커밋의 diff 결과 중 최근 2개만 보여준다 |
| git log --word-diff | 각 커밋의 diff 결과 중 줄단위가 아닌 단어단위로 보여준다. |
| git log -U1 --word-diff | 각 커밋의 diff 결과 중 줄단위가 아닌 단어단위로 보여준고 해당줄만 보여준다. |
| git log --star | 수정된 파일의 통계정보 보여준다. |
| git log --name-only | 커밋정보중에서 수정된 파일의 목록만 보여준다. |
| git log --name-status | 수정된 파일의 목록을 보여줄뿐만 아니라 파일을 추가,수정,삭제한것들도 보여준다. |
| git log --abbrev-commit | 40자 짜리 SHA-1 체크섬의 처음 몇자만 보여준다. |
| git log --relative-date | `2주전` 처럼 상대적인 형식으로 보여준다. |
| git log --graph | 브렌치와 머지 히스토리 정보까지 아스키 그래프로 보여준다. |
| git log --pretty=oneline | 로그의 히스토리 통계 중 한줄씩만 보여준다(oneline, short, full, fuller 옵션이있다) |
| git log --pretty=format:"%h - %an, %ar : %s" | 옵션대로 원하는 형태로 로그를 출력한다. |
| git log -(n) | 최근 n개의 커밋만 조회한다 |
| git log --since[--after] | 명시한 날짜 이후의 커밋만 조회한다 |
| git log --until[--before] | 명시한 날짜 이전의 커밋만 조회한다 |
| git log --author | 입력한 저자의 커밋만 조회한다 |
| git log --committer | 입력한 커미터의 커밋만 조회한다 |


## 되돌리기

| 명령어 | 설명 |
|--------|------|
| git commit --amend | 이전 커밋으로 되돌린다. |
| git checkout -- filename | 이전 커밋으로 되돌린다(덮어쓴다) |
| git revert HEAD | 마지막 커밋 상태로 돌려준다 |
| git revert $id | $id로 지정한 커밋의 상태로 돌려준다 |
| git checkout -f | 마지막 커밋상태로 돌려준다 |
| git reset --hard | 마지막 커밋한 상태로 돌려준다 |


## 리모트 저장소

| 명령어 | 설명 |
|--------|------|
| git remote | 현재 프로젝트에 등록된 리모트 저장소의 단축이름을 보여준다 |
| git remote -v | 단축이름과 url을 함께 보여준다 |
| git remote add [단축이름] [url] | 리코트 저장소를 추가한다. |
| git fetch [리모트저장소이름] [브렌치] | 리모트 저장소의 데이터를 가져오기만 한다 |
| git pull [리모트저장소이름] [브렌치] | 리모트 저장소의 데이터를 가져오고 merge 한다 |
| git push [리모트저장소이름] [브렌치] | git push origin master : master 브렌치로 origin 저장소에 푸시한다 |
| git remote show [리모트저장소이름] | 리모트 저장소의 구체적인 정보를 보여준다 |
| git remote rename [현재저장소이름] [바꿀려는저장소 이름] | 저장소 이름을 바꾼다. |
| git remote rm [삭제할 저장소 이름] | 저장소를 삭제한다 |


## 태그

| 명령어 | 설명 |
|--------|------|
| git tag | 태그를 조회한다(알파벳순서) |
| git tag -l 'v1.4.2.*' | 1.4.2 버젼의 태그들만 검색한다 |
| git tag -a | Annoteted 태그를 만든다 |
| git tag -a v1.4 -m '메시지' | Annoteted 태그를 만들때 -m 으로 메시지를 추가할수 있다. |
| git show v1.4 | 1.4버젼의 태그 정보를 조회한다. |
| git tag -s v1.5 -m '메시지' | GPG 개인키로 태그에 서명하고 메시지를 입력한다. |
| git tag v1.4 | Lightweight 태그로 v1.4 를 만든다 |
| git tag -v [태그이름] | GPG를 사용하여 태그를 검증한다 |
| git tag -a v1.2 -m 'version 1.2' 9fceb02 | 9fceb02 커밋 체크섬(지난 커밋)에 태그를 만들고 메시지를 입력한다 |
| git push origin [태그이름] | 태그이름을 리모트서버에 푸시한다(공유) |
| git push origin --tags | 태그를 리모트서버에 한번에 여러개 푸시한다 |


## 브렌치

| 명령어 | 설명 |
|--------|------|
| git branch | 브렌치를 보여준다(현재 작업하고 있는 브렌치는 앞에 * 가 붙어있다) |
| git branch -v | 브렌치와 커밋메시지까지 보여준다 |
| git branch [branch] | [branch] 으로 새로운 브렌치를 만든다(만들기만 한것이다) |
| git checkout [branch] | [branch] 이라는 브렌치로 이동한다 |
| git checkout -b [branch] | [branch] 라는 브렌치를 만들고 [branch] 로 이동한다 |
| git merge [branch] | [branch] 의 브렌치를 합친다 브렌치이름은 합쳐질 브렌치이다. |
| git branch --merged | Merge 한 브렌치 목록을 보여준다 |
| git branch --no-merged | Merge 하지않은 브렌치 목록을 보여준다 |
| git branch -d [branch] | [branch] 의 브렌치를 삭제한다 |
| git push [리모트저장소] [리모트브렌치] | [리모트저장소] 에 [리모트브렌치]를 생성하고, 현재의 로컬브랜치와 추적상태를 만든다 |
| git checkout -b [branch1] [리모트저장소]/[branch2] | [branch1] 이라는 트래킹 브렌치가 만들어진다. [branch2] 는 원격저장소의 브렌치이고 이젠 [branch1] 에서 명령을 내리면 [리모트저장소]/[branch2]에서 작동한다 |
| git push [리모트저장소] :[리모트브렌치] | :[리모트브렌치] 라는 서버의 원격브렌치를 삭제한다. 띄어쓰기 주의 |
| git push [리모트저장소] [localbranch]:[remotebranch] | 위와같은내용. 로컬에서 빈내용을 [remotebranch] 에 채워 넣어라 |
| git rebase --onto master server client | client 브렌치를 Checkout하고 server와 client의 공통조상 이후의 패치를 만들어 master에적용한다 |
| git rebarse [basebranch] topicbranch] | server 브렌치를 Checkout하고 master 브랜치로 rebase 한다 |


----

* [Github 목록으로 돌아가기](../README.md)
* [01-git-설치](01-git-설치.md)
* [02-github-회원가입](02-github-회원가입.md)
* [03-ssh-keygen-등록](03-ssh-keygen-등록.md)
* [04-저장소-만들기](04-저장소-만들기.md)
* [05-순환구조](05-순환구조.md)
* [06-add-commit-pull-push](06-add-commit-pull-push.md)
* [07-협업하기](07-협업하기.md)
* [08-git-명령어](08-git-명령어.md)

----