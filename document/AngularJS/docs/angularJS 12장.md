# angularJS 12장 

작성자 : 김동일

작성일 : 2016-01-18

## Working with Forms

- Angular JS에서는 양방향 데이터 바인딩 및 각 Form에 대한 유효성 검증을 지원 한다.
- 아래 예제 소스를 바탕으로 Form에서 처리하는 데이터 바인딩 및 유효성 검증을 설명한다.

form.html

```
<!DOCTYPE html>
<html ng-app="exampleApp">
<head>
<title>Forms</title>
<script src="angular.js"></script>
<link href="bootstrap.css" rel="stylesheet" />
<link href="bootstrap-theme.css" rel="stylesheet" />
<script>
	angular.module("exampleApp", [])
	.controller("defaultCtrl", function ($scope) {
	$scope.todos = [
	{ action: "Get groceries", complete: false },
	{ action: "Call plumber", complete: false },
	{ action: "Buy running shoes", complete: true },
	{ action: "Buy flowers", complete: false },
	{ action: "Call family", complete: false }];
	});
</script>
</head>
<body>
	<div id="todoPanel" class="panel" ng-controller="defaultCtrl">
		<h3 class="panel-header">
		To Do List
		<span class="label label-info">
		{{(todos | filter: {complete: 'false'}).length}}
		</span>
		</h3>
		<table class="table">
			<thead>
				<tr><th>#</th><th>Action</th><th>Done</th></tr>
			</thead>
				<tr ng-repeat="item in todos">
				<td>{{$index + 1}}</td>
				<td>{{item.action}}</td>
				<td>{{item.complete}}</td>
			</tr>
		</table>
	</div>
</body>
</html>
```

[http://codepen.io/anon/pen/JGmwqN?editors=100](예제)

## 양방향 데이터 바인딩의 두가지 방법

1. ng-model directive를 사용하여 데이터 바인딩 

- item 객체 내의 complete 인자 값을 이용하여 처리

```
:
<td>
	<input type="checkbox" ng-model="item.complete">
</td>
:
```

[http://codepen.io/skypentum/pen/ZQXgmE?editors=100](예제)

2. 암시적인 model 속성을 생성 

- newTodo라는 객체 내의 인자값을 ng-model 디랙티브를 통해 정의
- addNewItem이벤트 발생 시 해당 객체 내의 인자 값을 처리

```
<script>
:
<input id="actionText" class="form-control" ng-model="newTodo.action">
:
<select id="actionLocation" class="form-control" ng-model="newTodo.location">
<option>Home</option>
<option>Office</option>
<option>Mall</option>
</select>
:

$scope.addNewItem = function (newItem) {
	$scope.todos.push({
		action: newItem.action + " (" + newItem.location + ")",
		complete: false
	});
};
:
<script>
```

[http://codepen.io/anon/pen/xZymeg?editors=100](예제)

- 주의 : 암시적 model 속성을 사용 시 사용하려는 객체난 속성이 존재하지 않을 경우 스크립트 에러가 발생하므로, 이에 대한 대비 코드를 작성하는 것이 필요


### Form 유효성 검증

- 스크립트 에러 발생을 예방하고, 사용자 혼란을 최소화 하기 위한 장치

1. Form 엘리먼트에서의 유효성 검증 

- form name="myForm" novalidate ng-submit="addUser(newUser)"
- novalidate라는 어트리뷰트를 사용하여 브라우저 스스로 폼 유효성 검증을 수행하지 않게 하고 ng-submit 디랙티브를 이용하여 커스텀 응답을 지정함
```
<html ng-app="exampleApp">
<head>
<title>Forms</title>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" />
<script>
	angular.module("exampleApp", [])
	.controller("defaultCtrl", function ($scope) {
		$scope.addUser = function (userDetails) {
			$scope.message = userDetails.name + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
		}
		$scope.message = "Ready";
	});
</script>
</head>
<body>
	<div id="todoPanel" class="panel" ng-controller="defaultCtrl">
		<form name="myForm" novalidate ng-submit="addUser(newUser)">
			<div class="well">
				<div class="form-group">
					<label>Name:</label>
					<input name="userName" type="text" class="form-control"
					required ng-model="newUser.name">
				</div>
				<div class="form-group">
					<label>Email:</label>
					<input name="userEmail" type="email" class="form-control"
					required ng-model="newUser.email">
				</div>
				<div class="checkbox">
					<label>
					<input name="agreed" type="checkbox"
					ng-model="newUser.agreed" required>
					I agree to the terms and conditions
					</label>
				</div>
				<button type="submit" class="btn btn-primary btn-block"
				ng-disabled="myForm.$invalid">
				OK
				</button>
			</div>
			<div class="well">
				Message: {{message}}
				<div>
					Valid: {{myForm.$valid}}
				</div>
			</div>
		</form>
	</div>
</body>
</html>
```

[http://codepen.io/anon/pen/LGgqYz?editors=100](예제)

2. validation Form Element (css 사용)

- 폼의 유효성을 모니터링하여 검증 피드백을 전달
```
$pristine - 사용자가 엘리먼트/폼과 상호 작용하지 않은 경우 true반환
$dirty - 사용자가 엘리먼트/폼과 상호 작용한 경우 true반환
$valid - 엘리먼트/폼의 내용이 유효한 경우 true반환
$invalid - 엘리먼트/폼의 내용이 유효하지 않은 경우 true반환
$error - 유효성 검증 오류에 대한 상세 정보 제공
```
- 사용자에게 유효성 검증을 실시간으로 피드백하여 전달

[http://codepen.io/skypentum/pen/jWaLBv?editors=100](예제)

- 특수 변수를 활용하여 유효성 검증 피드백을 전달

[http://codepen.io/anon/pen/QyZYNL?editors=100](예제)

### Form별 디랙티브 어트리뷰트 활용

1. input 엘리먼트
```
ng-model - 앙방향 데이터 바인딩 지정
ng-change - 엘리먼트 내용이 변경되었을 때 실행할 표현석 지정
ng-minlength - 유효성 검증에 필요한 최소 문자 길이 지정
ng-maxlength - 유효성 검증에 필요한 최대 문자 길이 지정
ng-pattern - 정규식 설정하여 유효성 검증
ng-required - 데이터 바인딩을 통해 required 어트리뷰트 값을 설정함
```

[http://codepen.io/skypentum/pen/LGOjjN?editors=100](예제)

2.Checkbox 엘리먼트
```
ng-model - 앙방향 데이터 바인딩 지정
ng-change - 엘리먼트 내용이 변경되었을 때 실행할 표현석 지정
ng-true-value - 엘리먼트 체크할 때 모델 바인딩 표현식에 설정할 값을 지정
ng-false-value - 엘리먼트 체크해제 할 때 모델 바인딩 표현식에 설정할 값을 지정
```

[http://codepen.io/skypentum/pen/bEYrrM?editors=100](예제)

3.Text Area 엘리먼트

- input 엘리먼트와 동일한 유효성 검증 지원

[http://codepen.io/skypentum/pen/rxYzzE?editors=100](예제)

4.Select 엘리먼트
```
ng-required - 데이터 바인딩을 통해 required 어트리뷰트 값을 설정함
ng-options - 객체에 있는 데이터 인자값을 설정함
```

[http://codepen.io/anon/pen/gPBqgq?editors=100](예제)

- 빈 value 어트리뷰트가 들어 있는 option를 직접 추가할 수 있다.

[http://codepen.io/anon/pen/GoYzrP?editors=100](예제)
