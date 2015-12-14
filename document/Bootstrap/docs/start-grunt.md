작성자 : 최욱주 / 작성일 : 2015-12-14



# CSS와 자바스크립트 컴파일하기

부트스트랩은 빌드시스템으로 [grunt](http://gruntjs.com)를 사용.
grunt는 작성한 코드를 컴파일 하고 테스트 및 처리하는데 유용하다.






## Grunt 설치하기

Grunt 설치 전, [node.js](http://nodejs.org/download/) 설치가 필요하다.(npm 포함)
- `npm`은 [`node packaged modules`](https://www.npmjs.com/)로 node.js에서 개발의존성을 관리하는 방법```

다음으로 콘솔에서 명령어를 입력.
* `npm install -g grunt-cli` : `grunt-cli`를 전역적으로 설치
* `/bootstrap/` 디렉토리를 찾아 `npm install` 실행 : npm은 package.json 파일을 보고 필요한 로컬 의존성 프로젝트들을 자동으로 설치한다.

설치가 완료되면 다양한 grunt 명령어를 사용할 수 있다.





## 사용가능한 Grunt 명령어


##### `grunt dist` (css와 자바스크립트 컴파일)
컴파일 후 최소화 된 css, js 파일들로 `/dist/` 디렉토리를 재생성한다.
부트스트랩 사용자가 보통 사용하는 기본 명령어.


##### `grunt watch` (지켜보기)
Less 소스 파일을 지켜보다가 변경사항을 저장할 때마다 자동으로 CSS로 다시 컴파일한다.


##### `grunt test` (테스트 실행)
[JSHint](http://jshint.com) 를 실행하고 [PhantomJS](http://phantomjs.org) 로 브라우저 화면 없이 [QUnit](http://qunitjs.com) 테스트를 실행한다.


##### `grunt docs` (문서 빌드&테스트)
jekyll serve 로 로컬에서 CSS, 자바스크립트, 기타 자원을 빌드하고 테스트


##### `grunt` (모두 빌드&테스트)
* CSS와 자바스크립트을 컴파일
* CSS와 자바스크립트를 최소화
* 문서 웹사이트를 빌드
* 문서에 대해서 HTML5 검사기 실행, 맞춤 자원 등을 다시 생성
* Jekyll 가 필요
* 보통 부트스트랩에 빠삭할 때 필요한 명령어





## 문제해결
npm 설치나 grunt 명령어 실행시 문제가 생겼을 때, `/node_modules/` 디렉토리 삭제 후 `npm install` 재실행.