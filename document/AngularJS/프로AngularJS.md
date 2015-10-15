# 책을 보면서 문제가 있거나 참조 해야할 내용이 있으면 이 파일에서 공유하도록 하겠습니다.

## 1부 준비하기 에서 내용이 조금 다른 부분이 있습니다.
### connect 설치 후 웹서버 구동시 server.js파일이 맞지 않습니다.
해당 파일은 2.x.x의 connect에서 되는 내용이고,
이를 위해 설치 방법이나 또는 설치 모듈, 파일내용이 변경되어야 합니다.

해당 내용은 아래 링크를 참조하세요.

> http://stackoverflow.com/questions/24346161/nodejs-connect-cannot-find-static

제가 사용한 코드를 아래 적습니다.
```
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../angularjs"));
app.listen(5000);
```

### test.html 파일이 버전이 바뀌면서 조금 바뀌었습니다.
`<html np-app>` 이라고 된 부분이 동작하지 않더군요.
이 부분은 그대로 `<html>`으로 사용하시고,
`body`안에서 `<div ng-app="">`으로 수정해야 합니다.

제가 사용한 코드를 아래 적습니다.
```
<!DOCTYPE html>
<html lang="utf-8">
<head>
	<meta charset="UTF-8">
	<title>FristTest</title>
	<script src="./angular.js"></script>
	<link rel="stylesheet" type="text/css" href="bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="bootstrap-theme.css" />
</head>
<body>
	<div ng-app="">
		<div class="btn btn-default">{{"AngularJS"}}</div>
		<div class="btn btn-success">Bootstrap</div>
	</div>
</body>
</html>
``` 

test heekwon
asfdasdfasdfasdfsadfsadfasdfasdfsadf