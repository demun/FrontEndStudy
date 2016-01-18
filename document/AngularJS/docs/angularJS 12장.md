# angularJS 12장 

작성자 : 김동일

작성일 : 2016-01-18


### Working with Forms

- Angular JS에서는 data buinding 및 validation에 대한 Form 요소를 지원 한다.

### 앵귤러JS로 Form 구현하기
앵귤러JS에는 여러가지 구성요소들이 있지만 이번 문서에서는 다음의 내용을 다루도록 하겠습니다.
아래 예제소스는 ajax로 리스트를 서버에서 가져와서 각종 필터링과 페이징 등등을 구현한 소스입니다.

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

[http://codepen.io/skypentum/pen/ZQXgmE?editors=100]예제

#### Form을 사용하는 Data Binding의 두가지 방법

1. ng-model directive를 사용하여 data binding 

```
<td>
	<input type="checkbox" ng-model="item.complete">
</td>
```

2. 암묵적인 model 속성을 생성

```
<script>
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
[http://codepen.io/skypentum/pen/MKENLg?editors=100]예제

### Form 유효성 검사

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
$scope.message = userDetails.name
+ " (" + userDetails.email + ") (" + userDetails.agreed + ")";
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

[http://codepen.io/skypentum/pen/xZXvBR?editors=100]예제

Adding the Form Element



