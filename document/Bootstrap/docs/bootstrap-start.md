
부트스트랩을 시작하면서 세팅해야 하는 파일들과 파일 구조, 기본세팅 등을 정리 해 놓았습니다.

이미 부트스트랩 홈페이지나 부트스트랩 한글사이트에 나와 있는 내용이지만 다시한번 필요하다고 생각되는 부분만 정리하였습니다.

(소스다운로드와 좀더 자세한 내용은 아래 사이트를 참고하세요)

[부트스트랩/영문] (http://getbootstrap.com/getting-started/)

[부트스트랩/한글] (http://bootstrapk.com/getting-started/)


## 파일 구조

### 최소화된 부트스트랩 Compiled and minified Bootstrap

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

* 사이트에서 최소로 사용한다면 위 파일중에서 `*.min.css` 와 `*.min.js` 만 로드하고 `font`를 로드하면 됩니다.

### 전체 부트 스트랩 소스 Bootstrap source

```
bootstrap/
├── less/
├── js/
├── fonts/
├── dist/
│   ├── css/
│   ├── js/
│   └── fonts/
└── docs/
    └── examples/
```

`*docs/`폴더 안에는 미리 컴파일된 소스들이 있어 예제를 보면서 연습 할수도 있습니다

> 부트스트랩은 HTML5와 CSS, 자바스크립트를 사용하기 위하여 jQuery가 
> 필요합니다. 


### 부트스트랩 CDN Bootstrap CDN

  * [MaxCDN ](https://www.maxcdn.com/) 에서 부트스트랩의 CSS 와 자바스크립트를 CDN 으로 지원합니다. 이를 사용하려면, 아래의 부트스트랩 CDN 링크들을 사용하세요.

```
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
```

##기본 템플릿 Basic template

### 기본세팅

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
    <title>부트스트랩 101 템플릿</title>

    <!-- 부트스트랩 -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE8 에서 HTML5 요소와 미디어 쿼리를 위한 HTML5 shim 와 Respond.js -->
    <!-- WARNING: Respond.js 는 당신이 file:// 을 통해 페이지를 볼 때는 동작하지 않습니다. -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

> html5shiv.js 는 익스플로러가 html5 의 구문을 모르기때문에 알려주는 역할을
> 합니다. 그래야만 html 이 로드될때 제대로 인식하기 때문입니다.
> respond.min.js 는 인터넷 익스플로러 8의 미디어쿼리를 지원하기 위해 
> 필요합니다.

[예제 템플릿](http://getbootstrap.com/getting-started/#examples)


### 반응성 끄기 Disabling responsiveness

반응형 기능을 끄기 위해, 다음의 순서를 따라하세요. 

* 문서내 CSS 에 명시된 뷰포트 <meta>를 제거합니다.
* .container에 width: 970px !important; 같은 수치값을 넣어줍니다.*이것들은 기본 부트스트랩 CSS 뒤에 와야함을 명심하세요*
* 만약 네비게이션 바를 사용하려면, 모든 네비게이션 바의 가리기와 보이기 행위를 제거해주세요.
* 그리드 레이아웃을 위해, .col-md-* 나 .col-lg-* 클래스 대신 .col-xs-* 클래스를 사용하세요. ( 모든 해상도에서 동일하게 작동합니다.)
* 여전히 IE8 을 위해 respond.js 가 필요합니다(미디어쿼리는 여전히 필요하기때문에).이것은 부트스트랩의 "모바일 사이트" 측면을 꺼지게 합니다.

[비반응형 예제](http://bootstrapk.com/examples/non-responsive/)


[다음페이지_부트스트랩CSS_컨테이너](css-container.md)


