angular.module("cart", [])
.factory("cart", function () {
	var cartData = [];
	return {
		addProduct: function (id, name, price) {
			var addedToExistingItem = false;
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i].id == id) {
					cartData[i].count++;
					addedToExistingItem = true;
					break;
				}
			}
			if (!addedToExistingItem) {
				cartData.push({
					count: 1, id: id, price: price, name: name
				});
			}
		},
		removeProduct: function (id) {
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i].id == id) {
					cartData.splice(i, 1);
					break;
				}
			}
		},
		getProducts: function () {
			return cartData;
		}
	}
})
/* 
	directive - 사용자 정의 DOM으로 정의하여 사용할 수 있는 angularjs 기능
	ex : cart/cartSummary.html 에 있는 파일을 cartSummary라는 tag로 정의하여 사용함
	restrict 종류 
	 - E : element (해당 디랙티브를 사용자 정의 tag로 사용)
	 - A : attribute(해당 디랙티브를 사용자가 정의한 template 사이 구문의 내용으로 사용, 기본값)
	 - C : class (해당 디랙티브를 class 명으로 사용)
	 - M : comment (해당 디랙티브를 주석으로 사용)	 
*/
.directive("cartSummary", function (cart) {
	return {
		restrict: "E",
		templateUrl: "cart/cartSummary.html",
		controller: function ($scope) {
			var cartData = cart.getProducts();
			$scope.total = function () {
				var total = 0;
				for (var i = 0; i < cartData.length; i++) {
					total += (cartData[i].price * cartData[i].count);
				}
				return total;
			}
			$scope.itemCount = function () {
				var total = 0;
				for (var i = 0; i < cartData.length; i++) {
					total += cartData[i].count;
				}
				return total;
			}
		}
	}
});