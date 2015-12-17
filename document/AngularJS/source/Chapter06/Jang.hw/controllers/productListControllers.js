angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")//상수를 선언. 
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass,productListPageCount){//productListActiveClass 변수에 위에서 .constant로 선언한 상수 "btn-primary"를 담는다. 

        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }
        $scope.getSelectCategory = function () {
            return selectedCategory;
        }
        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }
        $scope.getCategoryClass = function (category) {
        	return selectedCategory == category ? productListActiveClass : "";
        }
        
        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }


        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
    });


