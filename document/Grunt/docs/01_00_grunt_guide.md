# Grunt 가이드

`grunt 가이드` 문서는 `grunt` 를 모르는 사람도 장단점을 알고 따라하면서, 적용할 수 있도록 만들습니다. 

총 9개의 문서로 작성되었으며, 각각의 작업마다 옵션 문서를 포함하면 29개 정도의 문서가 되며, 문서는 더 추가될수 있습니다.

예제에 사용된 프로젝트 저장소는 [grunt-template](https://github.com/demun/grunt-template) 입니다.


작성자 : [demun](http://demun.tistory.com/)


***



## grunt 가이드 문서 소개


### 01_00_grunt_guide

현재 문서를 말합니다. 

문서에 대한 차례와 목록을 소개합니다.



### 02_00_grunt_소개

`grunt` 에 대한 소개와 장단점, 설치방법 그리고 전체 로직을 소개합니다.


### 03_00_html_task

`html` 작업인 `includes` , `htmlhint` 모듈의 사용방법 및 예제를 소개합니다.


### 04_00_css_task

`css` 작업인 `less` , `csslint` , `autoprefixer` , `csscomb` , `cssmin` 사용방법 및 예제를 소개합니다.



### 05_00_javascript_task

`javascript` 작업인 `jshint` , `concat` , `uglify` 모듈의 사용방법 및 예제를 소개합니다.



### 06_00_others_task

`clean` , `copy` , `imagemin` 폴더와 파일을 복사, 삭제하고, 이미지를 최적화하는 모듈의 사용방법 및 예제를 소개합니다.



### 07_00_watch_task

`watch` , `connect` 변경된 파일을 감시하여 실시간으로 동기화하고, 로컬서버로 연결하여 브라우져로 확인하는 예제와 방법입니다.



### 08_00_최적화

프로젝트를 최적화하기 위해 `Gruntfile` 파일을 최적화하고 관련 모듈인 `newer` , `concurrent` , `time-grunt` , `load-grunt-tasks` 을 사용하는 방법과 예제를 소개합니다.


### 09_00_task_실행

마지막 단계로 디버깅하기 쉽고, 관리하기 쉽게 task(작업)별로 나누어서 task를 실행하고 관리하는 방법과 예제를 소개합니다.





## 그런트 가이드 프로젝트 폴더 구조

그러트 가이드를 위한 예제 프로젝트의 폴더 구조입니다.

- app 폴더는 소스코드 폴더입니다.
- gruntConfig 폴더는 그런트 모듈의 설정 파일이 있는 폴더입니다
- node_modules 폴더는 그런트 모듈 폴더입니다.


```
+---app
|   +---docs
|   |   +---html
|   |   |   +---category1
|   |   |   |       page-01.html
|   |   |   |       page-02.html
|   |   |   |       
|   |   |   \---category2
|   |   |           page-01.html
|   |   |           page-02.html
|   |   |           
|   |   \---include
|   |       |   head.html
|   |       |   js.html
|   |       |   
|   |       \---other
|   |               lorem.html
|   |               lorem2.html
|   |               
|   +---fonts
|   |       NanumGothic-Bold.eot
|   |       NanumGothic-Bold.ttf
|   |       NanumGothic-Bold.woff
|   |       NanumGothic-Bold.woff2
|   |       NanumGothic-ExtraBold.eot
|   |       NanumGothic-ExtraBold.ttf
|   |       NanumGothic-ExtraBold.woff
|   |       NanumGothic-ExtraBold.woff2
|   |       NanumGothic-Regular.eot
|   |       NanumGothic-Regular.ttf
|   |       NanumGothic-Regular.woff
|   |       NanumGothic-Regular.woff2
|   |       
|   +---images
|   |       download.png
|   |       user.png
|   |       
|   +---js
|   |   +---lib
|   |   |       jquery-1.11.2.min.js
|   |   |       jquery-migrate-1.2.1.min.js
|   |   |       
|   |   \---site
|   |           site1.js
|   |           site2.js
|   |           
|   \---less
|       |   style.less
|       |   
|       +---common
|       |       common.less
|       |       nanumgothic.less
|       |       normalize.less
|       |       variables.less
|       |       
|       \---site
|               site1.less
|               
+---gruntConfig
|       .csscomb.json
|       .csslintrc
|       .htmlhintrc
|       .jshintrc
|       
\---node_modules
```

- 다음글 [02_00_grunt_소개](02_00_grunt_소개.md)


