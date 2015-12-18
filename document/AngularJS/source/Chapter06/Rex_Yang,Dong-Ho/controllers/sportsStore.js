angular.module('sportsStore')  //sportsStore모듈이 의존하는모듈(배열)은 나중에 추가할 예정
.controller('sportsStoreCtrl', function ($scope) {  //★★★최상위레벨 컨트롤러, (.연산자)의 사용법에 놀라지말자
  $scope.data = {  //object 형으로 저장
    products: [{ name: 'Product #1', description: '상품 1번', category: '카테고리1', price: 111}
      ,{ name: 'Product #2', description: '상품 2번', category: '카테고리2', price: 222}
      ,{ name: 'Product #3', description: '상품 3번', category: '카테고리3', price: 333}
      ,{ name: 'Product #4', description: '상품 4번', category: '카테고리4', price: 444}]  //object 배열
  };
});