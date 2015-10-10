# Grunt 소개


[Grunt 홈페이지](http://gruntjs.com/)

[Grunt 홈페이지 번역](http://gruntjs-kr.herokuapp.com/)

[Grunt 플러그인 저장소](https://github.com/gruntjs/)



***



## Grunt 가 무엇인가?

grunt 는 프로젝트 자동화를 위한 `task(작업)` 단위로 실행되는 커멘드라인 빌드 툴입니다.

즉 프로젝트 자동화를 쉽게 해주는 프로젝트 관리 도구입니다.

다른 말로 패키지 관리자라고도 합니다.

패키지 관리자에는 `Yeoman` , `Bower` , `Gulp` 도 있습니다.



## 왜 Grunt 인가?

자동화 패키지 중에서 가장 기본이 되는 도구 입니다.

패키지 관리자인 `Yeoman` , `Bower` 등도 `Grunt` 를 알아야 쉽게 사용할 수 있고, 
`Gulp` 도 `Grunt` 를 알면 쉽게 익힐 수 있습니다.

`Yeoman` 에는 `Grunt` 와 `Bower` 가 포함이 되어 있고, `Grunt` 에는 `Bower` 를 포함하기도 합니다.

즉 아래와 같은 관계라고 이해하시면 됩니다.

> Yeoman > Grunt > Bower


`Gulp` 는 `Grunt` 보다 더 빠르다고 소개하고 있지만 현재까지 출시된 관련 모듈이 `Grunt` 가 훨씬 많고 기본이 되기 때문에 먼저 익혀두길 추천합니다.




## 설치

`Grunt`와 `Grunt` 플러그인 설치와 관리는 `npm` 을 통해서 합니다. 
`npm`은 `Node.js`의 패키지 메니징 도구입니다.

`Node.js` 를 먼저 설치해야 합니다.

[Node.js](https://nodejs.org/) 설치

`Grunt`를 사용하려면 먼저 콘솔 어디서나 실행할 수 있는 `Grunt's Command line interface (CLI)`를 설치해야 합니다.

```
npm install -g grunt-cli
```

`grunt-cli`를 설치하면, 여러분의 시스템 경로에 `grunt`란 커멘드가 자동으로 추가해서, 어느 디렉터리에서나 `grunt`를 사용할 수 있게 됩니다.


`Grunt CLI`의 역할은 그저 `Gruntflie`이라는 파일이 있는 위치에 설치된 `Grunt`를 찾아서 실행하는 것입니다.




### 프로젝트 시작

프로젝트를 시작할 때는 `package.json`과 `Grunfile`라는 파일이 있어야 합니다.

`package.json` : 이 파일은 해당 프로젝트를 npm 모듈로 npm에 퍼블리싱할 때 사용하는 메타데이터 저장 파일이다. 
프로젝트에 필요한 grunt와 grunt 플러그인들은 이 파일의 devDependencies라는 항목에 나열합니다.

`Gruntfile` : 이 파일의 이름은 `Gruntfile.js`이거나 `Gruntfile.coffee` 입니다. 
task를 설정하거나 정의하고 Grunt 플러그인을 불러오는데 사용합니다





#### package.json, Gruntfile.js 생성

`package.json` 을 생성하는 방법은 두가지가 있습니다.

- 1.그냥 새로만들기로 해서 `package.json` 파일을 만들고 옵션을 적는다.
- 2.`npm init` 명령어를 입력해서 만든다.

여기서는 2번 방법대로 만들어 보겠습니다.

프로젝트 이름으로 폴더를 생성한후, 폴더안에서 커맨드창을 실행한후, `npm init` 명령어를 칩니다.

여기 예제에서는 프로젝트 폴더이름을 `grunt-template` 이라고 하고 폴더 안으로 들어가서 `npm init` 을 칩니다.

```
npm init
```

그럼, `name` , `version` , `description` , `main` , `scripts` .... 을 물어오며 엔터만 치면 자동으로 `package.json` 이 생성됩니다.


빈 자바스크립트 파일인 `Gruntfile.js` 도 생성해줍니다.




#### Gruntfile.js

`Gruntfile.js`나 `Gruntfile.coffee`파일은 `package.json`과 함께 프로젝트 루트 폴더에 있어야 하는 자바스크립트 혹은, 커피스크립트 파일입니다.


Gruntfile의 내부 구성요소입니다.

- "wrapper" 함수.
- 프로젝트와 task의 환경설정.
- grunt plugin과 task 로딩.
- 사용자 정의 task 설정



아래는 `Gruntfile.js` 의 아주 간단한 예제입니다.


```javascript
module.exports = function(grunt) {

  // 가) 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 플러그인 설정

  });

  // 나) 플러그인 로드.

  // 다) task 실행.

};
```


Grunt 가이드에서 만드는 전체 로직은 아래와 같습니다.


```javascript
module.exports = function(grunt) {

  // 가) 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 플러그인 설정
    
    // 1. html task
    // grunt-htmlhint: html 구문검사
    // grunt-includes : html 에서 인클루드를 사용할 수 있게 해줌.
    
    
    // 2. css task
    // grunt-contrib-less : css 확장언어로써 css를 만들어줌.
    // grunt-contrib-csslint : css 구문검사
    // grunt-autoprefixer : 크로스브라우징에 맞게 벤더프리픽스 삽입
    // grunt-csscomb : css 를 우선순위에 맞게 정렬해주는 도구
    // grunt-contrib-cssmin : css 최적화를 위해 css 압축
    
    
    // 3. javascript task
    // grunt-contrib-jshint : 자바스크립트 구문검사
    // grunt-contrib-concat : 자바스크립트 파일 합침
    // grunt-contrib-uglify : 자바스크립트 압축
    
    
    // 4. others task
    // grunt-contrib-clean : 폴더 및 파일 삭제
    // grunt-contrib-copy : 폴더 및 파일 복사
    // grunt-contrib-imagemin : 이미지 최적화
    
    
    // 5. watch task
    // grunt-contrib-watch : 변경된 작업파일 실시간 동기화
    // grunt-contrib-connect : 로컬 서버를 통해 브라우져로 확인
    
    
    // 6. 최적화
    // grunt-newer : 변경된 파일들만 빌드하기
    // grunt-concurrent : 다중 태스크를 병렬로 실행하기
    // time-grunt : 얼마나 시간이 소요되나 확인
    // load-grunt-tasks : 자동으로 grunt 태스크를 로드, grunt.loadNpmTasks 를 생략할 수 있음

  });

  // 나) task 실행.
  // 1. html task
  // 2. css task
  // 3. javascript task
  // 4. watch task
  // 5. build task
  // 6. default task

};
```

- 이전글 [01_00_grunt_guide](01_00_grunt_guide)
- 다음글 [03_00_html_task](03_00_html_task)
