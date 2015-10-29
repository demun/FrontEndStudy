
######1. 브라우저 - 구글크롬 + Batarang AngularJS(F12툴에 AngularJS를 지원하는 크롬 확장 플러그인)



######2. 코드 편집기 - 비주얼 스튜디오 익스프레스 2013 권장 (서브라임 등도 가능)


==============================================================================================


######3. 서버(플랫폼) - Node.js (패키지매니저 설치, 설치 디렉토리를 경로에 추가???)
cmd 창에서 아래 문장을 타이핑해보자.
node
function testNode() {return "노드JS 실행중!";} testNode();

Node.js 를 사용해서 웹 서버를 만드는 방식에는 여러가지가 있는데,
여기서는 가장 간편하면서 안정적인 방식을 사용함.
==> Node.js 설치 디렉토리 내에 로컬로 필요한 애드온 모듈을 설치하는 방식
==> 다른 설정 옵션은 http://Nodejs.org 에서 볼수 있음`

####(1) 여기서는 Connect 라는 Node.js 모듈을 사용해 웹 서버를 만든다.
   Node.JS 설치디렉토리로 cd 하여 "npm install connect" 을 실행한다.
   ☆ "npm install connect-static", "npm install http" 도 해줘야할것 같다. (안해줘도됨..)
   ==> npm(Nodejs Package Manager)은 Connect 모듈에 필요한 파일을 내려받는다.

####(2) server.js 라는 새 파일을 Node.js 설치디렉토리 내에 생성하고, 아래를 타이핑한다.
var connect = require('connect');
connect.createServer(
  connect.static('../angularjs')
).listen(7777);
//localhost:7777 에 응답하는 로컬서버를 생성하고,
//angularjs 라는 폴더에 들어있는 파일을 제공한다.

★사용법이 좀 바뀐것같다. https://www.npmjs.com/package/connect 를 참조하자. (여기아닌듯..)
                          https://github.com/sbedulin/pro-angularjs-book

★npm install serve-static 을 추가로 설치해주고, 아래코드를 대신 삽입한다.
var connect = require('connect'),
    serveStatic = require('serve-static'),
    workspaceDir = '../angularjs',
    port = 7777;

var app = connect();

app.use(serveStatic(workspaceDir));
app.listen(port);

console.log('서버 실행중, http://localhost:' + port);


==============================================================================================


######4. 테스트 시스템 설치  ==>  파이썬을 설치해야 하는듯 하다. 그러므로 그냥 스킵한다.
AngularJS의 가장 중요한 특징 중 하나는 '단위 테스트 지원' 이다.
카르마(Karma) 테스트 러너와, 자스민(Jasmine) 테스트 프레임워크를 사용한다.
Node.js 설치 디렉토리 내에서 다음 명령을 실행한다.
npm install -g karma  ==> NPM이 카르마에 필요한 파일을 내려받아 설치해준다.


==============================================================================================


######5. AngularJS 디렉토리 생성
Node.js 설치 폴더와 같은 레벨상에 AngularJS 애플리케이션을 제공할 디렉토리를 생성한다.
==> 책에서는 위와같이 되어있지만 어디든지 상관없다.
==> 위의 connect.static() 메소드에 전달되는 인자를 조정하면 된다.
==> ./../../Desktop/Rex/Programming/_Rex_Github_Repositories/Book_Pro-AngularJS

####(1) AngularJS 라이브러리를 다운로드한다. (http://angularjs.org)
   Stable, Uncompressed 옵션을 체크하고 다운로드.
   이 책에서는 압축이 해제된 로컬 라이브러리 버전을 사용한다.
   이 파일을 위의 AngularJS 디렉토리 내에 저장한다.
   (책에서는 1.2.5버전을 사용했으나, API는 잘 변하지 않으므로 상관없다)

####(2) AnfularJS 추가파일 다운로드
   다운로드 모달창 좌측하단 구석에 Extras 링크에서 코어 AngularJS 라이브러리의 기능을 확장해주는 추가 파일을 내려받을 수 있다.
   14장 : angular-locale-fr-fr.js  (프랑스어를 위한 지역화를 제공, i18n 폴더에서 여러 지역화파일을 볼수있다)
   19장 : angular-sanitize.js  (위험한 콘텐츠 이스케이핑을 제공)
   21장 : angular-route.js  (URL 라우팅을 제공)
   23장 : angular-touch.js  (터치 이벤트 지원 기능을 제공)
   23장 : angular-animate.js  (콘텐츠가 변할 때 애니메이션을 제공)
   25장 : angular-mocks.js  (단위 테스트를 위해 목 객체를 제공)
   ==> 나중에 해도 괜찮다.


==============================================================================================


######6. 부트스트랩 다운로드
이 책에서는 예제 내용에 스타일을 적용하는데 부트스트랩 CSS 프레임워크를 사용한다.
부트스트랩은 AngularJS 를 사용할 때 꼭 필요한 프레임워크는 아니며, 둘 사이에는 아무런 직접적인 관련이 없다.
하지만 부트스트랩을 사용하면 커스텀 CSS 스타일을 매번 반복적으로 정의하지 않아도 콘텐츠 레이아웃을 명확하게 정의할 수 있는 CSS 스타일을 활용할 수 있다.

####(1) http://getbootstrap.com -> Download Bootstrap 버튼 클릭
####(2) 압축을 풀고 dist/css/ 폴더 안에
   bootstrap.css 와 bootstrap-theme.css 를
   위의 AngularJS 디렉토리에 넣는다.
(책에서는 3.0.3 버전을 사용하지만, 더 높은걸 사용해도 상관없다.)


==============================================================================================


######7. (선택) LiveReload 툴 설치
==> 폴더 내 파일을 모니터링하고, 변경사항을 감지하면 자동으로 브라우저를 Reload 해준다.
http://livereload.com  에서 설치프로그램을 다운로드 받을수 있으며,
윈도우용은 현재 알파버전(무료)이고, Mac용은 10달러에 판매중임.
<script src='LiveReload.js'></script> 처럼 인클루드해서 사용하면 아주 편리함. (조작된 js파일)

==> 업데이트 사항을 계속해서 확인해야 할 경우, 이 툴이 시간을 크게 줄여줄 수 있다.


==============================================================================================


######8. Deployd 다운로드
==> 6장에서는 HTTP 요청을 보내서 데이터를 가져올 서버가 필요하다.
    3부에서는 AngularJS의 AJAX기능과 RESTful 웹서비스 처리를 설명하는데에서도 필요하다.
Deployd는 웹 어플리케이션용 API를 모델링 할 수 있는 훌륭한 크로스플랫폼 툴이다.
Deployd는 Node.js 및 몽고DB를 기반으로 개발되었으며, 데이터를 JSON형식으로 저장하고, 자바스크립트로 서버사이드를 개발할 수 있게 해준다.
Deployd.com 에서 내려받을 수 있다.
(하지만 미래가 불확실해 보인다고 한다.)


==============================================================================================


######9. 간단한 테스트 수행

####(1) 위의 AngularJS 디렉토리 내에 test.html 을 생성하고 아래의 코드를 넣는다.
<!DOCTYPE html>
<html ng-app>
<head>
  <script src='LiveReload.js'></script>
  <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />  <!--이게 없으면 한글이 깨진다-->
  <title>First Test</title>
  <script src='angular.js'></script>
  <link href='bootstrap.css' rel='stylesheet' />
  <link href='bootstrap-theme.css' rel='stylesheet' />
</head>

<body>
  <div class='btn btn-default'>{{'AngularJS'}}</div>
  <div class='btn btn-success'>Bootstrap</div>
</body>
</html>


####(2) 웹 서버를 실행한다.
Node.js 설치 디렉토리에서 다음 명령을 실행한다.
==> node server.js
==> 그러면 앞서 만든 server.js 파일을 로드하고 7777포트에서 HTTP 요청의 리스닝을 시작한다.


####(3) 테스트 파일 로드
크롬을 실행한 후, 아래의 경로로 접속한다.
http://localhost:7777/test.html


####(4) AngularJS 글자가 흰색바탕에 검정글자, 그라데이션 버튼 안에 있어야하고,
    Bootstrap 글자가 초록바탕에 흰색글자, 그라데이션 버튼 안에 있어야한다.

{{"AngularJS"}}
Bootstrap           <== 처럼 나오면 실패다. 다시 점검을하자.


####(5) LiveReload 가 정상적으로 작동하는지 확인한다.





- 완료 -
































