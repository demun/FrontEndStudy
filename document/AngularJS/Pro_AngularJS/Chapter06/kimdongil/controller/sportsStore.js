/*
	Controller 부분 : 이 곳에서는 데이터를 sportsStoreCtrl 이름으로 return한다.
*/	
angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
	/*일반 json 데이터*/
	/*$scope.data = {
		products: [
		{ name: "Product #1", description: "A product",
		category: "Category #1", price: 100 },
		{ name: "Product #2", description: "A product",
		category: "Category #1", price: 110 },
		{ name: "Product #3", description: "A product",
		category: "Category #2", price: 210 },
		{ name: "Product #4", description: "A product",
		category: "Category #3", price: 202 }]
	};*/
	
	/*DB로 처리 시 다음과 같이 사용할 것*/
	$scope.data = {};
	$http.get(dataUrl)
	.success(function (data) {
		$scope.data.products = data;
	})
	.error(function (error) {
		$scope.data.error = error;
	});
});