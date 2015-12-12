//module호출시 인자값이 1개만 있는경우는 새로 선언이 아닌 기존에 있던 모듈을 호출하게 된다 
//즉 app.html 파일에서 선언된 sportsStore 모듈을 가져오는 역할
angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope,$http) {
	$scope.data = new Object();
	$http.get("http://localhost:5500/products").success(function(_data){
		console.log(_data);
		$scope.data.products = _data;
	})
//    $scope.data = {
//        products: //data
//        	[
//            {
//                name: "Product #1", description: "A product",
//                category: "Category #3", price: 123
//            },
//            {
//                name: "Product #2", description: "A product",
//                category: "Category #3", price: 110
//            },
//            {
//                name: "Product #3", description: "A product",
//                category: "Category #5", price: 210
//            },
//            {
//                name: "Product #4", description: "A product",
//                category: "Category #3", price: 110
//            },
//            {
//                name: "Product #5", description: "A product",
//                category: "Category #2", price: 210
//            },
//            {
//                name: "Product #6", description: "A product",
//                category: "Category #5", price: 202
//            }]
//    };
});
