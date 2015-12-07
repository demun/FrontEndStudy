/*
	Controller 부분 : Load된 데이터를 productListCtrl란 이름으로 filtering 하여 결과를 return한다.(filterfing 대상 : category)
	Constant 부분 : 
	 - productListActiveClass : 버튼에 btn-primary class 적용
	 - productListPageCount : 페이징 처리
*/
angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function ($scope, $filter,
		productListActiveClass, productListPageCount, cart) {
		
		var selectedCategory = null;
		
		$scope.selectedPage = 1;
		$scope.pageSize = productListPageCount;
		
		$scope.selectCategory = function (newCategory) {
			console.log(newCategory);
			selectedCategory = newCategory;
			$scope.selectedPage = 1;
		}
		
		$scope.selectPage = function (newPage) {
			$scope.selectedPage = newPage;
		}
		
		$scope.categoryFilterFn = function (product) {
			return selectedCategory == null ||
			product.category == selectedCategory;
		}
		
		$scope.getCategoryClass = function (category) {
			return selectedCategory == category ? productListActiveClass : "";
		}
		
		$scope.getPageClass = function (page) {
			return $scope.selectedPage == page ? productListActiveClass : "";
		}
		
		$scope.addProductToCart = function (product) {
			cart.addProduct(product.id, product.name, product.price);
		}
});