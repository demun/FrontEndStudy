# angularJS 6장 

작성자 : 장현웅

작성일 : 2016-02-15


### 커스텀 디렉티브 구현



```html


<html ng-app="exampleApp">
<head>
    <title>Directives</title>
    <script src="angular.js"></script>
    <link href="bootstrap.css" rel="stylesheet" />
    <link href="bootstrap-theme.css" rel="stylesheet" />
    <script>
        angular.module("exampleApp", [])
            .directive("unorderedList", function () {   //unorderedList 라는 디렉티브를 선언
                return function (scope, element, attrs) {
                    var data = scope[attrs["unorderedList"]];   //어트리뷰트중 unoderedList 를 불러옴
                    var propertyName = attrs['listName'];
                    var propertyPrice = attrs['listPrice'];
                    if(angular.isArray(data)) {
                        var listElem = angular.element("<ul>"); //불러온 엘레멘트에 하위요소 ul을 생성
                        element.append(listElem);
                        console.log(data);
                        for(var i = 0 ; i < data.length ; i++){
                            (function(){			//즉시호출함수
                                var index = i;
                                var itemElement = angular.element('<li>');

                                listElem.append(itemElement);

                                var watcherFn = function(watchScope){		//와쳐생성
                                    return watchScope.$eval(propertyPrice, data[index]);
                                }

                                scope.$watch(watcherFn, function(newValue, oldValue){
                                    itemElement.text(newValue);
                                });
                            }());


                        }
                    }
                }
            })
            .controller("defaultCtrl", function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                ];

                $scope.incrementPrices = function(){
                    for(var i = 0 ; i < $scope.products.length ; i++){
                        $scope.products[i].price++;
                        console.log($scope.products[i].price);
                    }
                }
            })
    </script>
</head>
<body ng-controller="defaultCtrl">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Products</h3>
        </div>
        <div class="panel-body">
            <button class="btn btn-primary" ng-click="incrementPrices()">
                change price
            </button>
        </div>
        <div class="panel-body">
            <div unordered-list="products" list-name="name" list-price="price | currency"></div> <!--//엘레멘트로 커스텀디렉티브명 선언-->
        </div>
    </div>
</body>
</html>

```

커스텀디렉티브를 구현할 때는

module.directive 를 이용하여 생성하며 이때 생성될 디렉티브 이름과 생성할 디렉티브를 만들 function을 선언해준다.
```html

 angular.module("exampleApp", []).directive("unorderedList", function () {	//unorderedList 라는 디렉티브를 선언
```	


이후 div태그의 머트리뷰트로 아까 선언한 디렉티브 이름을 선언해준다. 이때 선언하는 방식이 조금다른데 "unorderedList" 이런식으로 대문자를 중간에 껴서 선언했다면

어트리뷰트를 선언할 때는 "unordered-list" 와 같이 선언해준다. 이유는 태그의 어트리뷰트에는 대소문자 구분이 없기때문에 '-'로 구분하여 대문자라고 인식을 하게 해준다.

```html

<div unordered-list="products"></div>	<!--//엘레멘트로 커스텀디렉티브명 선언-->

```


엘레멘트에 선언된 어트리뷰트를 통해 값을 전달하는것도 가능하다.

```html

var propertyName = attrs['listName'];	<!--변수에 'name'이라는 문자열이 박힌다-->

<div unordered-list="products" list-name="name"></div> <!--//엘레멘트로 커스텀디렉티브명 선언-->
```

이때 list-price="price | currency" 과같이 속성명에 필터를 사용하면 정상적으로 불러와지지 않게된다.

이럴땐 scope.$eval()함수를 써서 정상적인 표현이 가능하다.

```html

var propertyPrice = attrs['listPrice'];
scope.$eval(propertyPrice,data[i]);		//$1.20, $2.42, $2.02 값 출력

<div unordered-list="products" list-name="name" list-price="price | currency"></div> <!--//엘레멘트로 커스텀디렉티브명-->

```

price라는 값을 전달받고 그 키에대한 값을 가져온후 필터를 적용한 모습을 볼 수 있다.



####와쳐추가

와쳐를통해서 값을 실시간으로 데이터변화에 반응하게 하는기능을 추가.

```html

for(var i = 0 ; i < data.length ; i++){
    (function(){			//즉시호출함수
        var index = i;
        var itemElement = angular.element('<li>');

        listElem.append(itemElement);

        var watcherFn = function(watchScope){		//와쳐생성
            return watchScope.$eval(propertyPrice, data[index]);
        }

        scope.$watch(watcherFn, function(newValue, oldValue){
            itemElement.text(newValue);
        });
    }());


}

$scope.incrementPrices = function(){		//버튼을 누를때마다 호출하여 모든값을 1씩증가
    for(var i = 0 ; i < $scope.products.length ; i++){
        $scope.products[i].price++;
        console.log($scope.products[i].price);
    }
}

<button class="btn btn-primary" ng-click="incrementPrices()">
```

버튼을 누를때마다 값을 1씩증가하게 만들고

와처를 생성하여 값이 변화하면 1씩 증가한 값을 실시간으로 적용

이때 watcherFn을 선언하고 호출을 하는시점은 for문이 다 돈 이후이기 때문에 i값이 각각 적용이 되질 않음.

따라서 즉시호출함수를 선언하여 index변수를 새로 선언하여 넘겨줘야 재대로 된 결과를 얻을 수 있음.


