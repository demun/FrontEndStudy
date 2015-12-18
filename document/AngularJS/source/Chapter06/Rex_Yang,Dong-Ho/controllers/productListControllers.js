console.log('=== productListControllers.js 시작 ===');

angular.module('sportsStore')
.constant('productListPageCount', 3)  //이 컨트롤러에서 사용할 상수를 Map(k, v) 형태로 선언함, injection 가능
.constant('productListActiveClass', 'btn-primary')  //이렇게 상수값을 정의하는 이유는, "느슨한 결합" 을 위함이다.
.controller('productListCtrl', function($scope, $filter, productListActiveClass, productListPageCount) {
  console.log('컨트롤러 시작');

  var selectedCategory = null;

  $scope.selectedPage = 1;  //디폴트값
  $scope.pageSize = productListPageCount;

  $scope.selectCategory = function(newCategory) {
    selectedCategory = newCategory;
    $scope.selectedPage = 1;  //카테고리를 새로 클릭하면 1페이지로 만듬
  };
  $scope.categoryFilterFn = function(product) {
    var isResult = selectedCategory == null || product.category == selectedCategory;
    console.log('isResult ==> '+isResult);
    return isResult;
  };
  $scope.getCategoryClass = function(category) {
    return selectedCategory == category ? productListActiveClass : '';
  };
  $scope.selectPage = function(newPage) {
    $scope.selectedPage = newPage;
  };
  $scope.getPageClass = function(page) {
    return $scope.selectedPage == page ? productListActiveClass : '';
  };
});

console.log('=== productListControllers.js 종료 ===');