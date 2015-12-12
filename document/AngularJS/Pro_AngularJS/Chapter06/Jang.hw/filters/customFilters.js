//새로 모듈을 생성한다. 이는 sportsStore모듈과는 다른 독립된 모듈이다 2번째 인값이 있기 때문.
angular.module("customFilters", [])
.filter("unique", function () {
    return function (data, propertyName) {//필터이름의 :뒤의 값을 인자로 받아옴 ex) unique:'category'  라고 필터를 지정하면  propertyName = 'category'
        if (angular.isArray(data) && angular.isString(propertyName)) {
            var results = [];
            var keys = {};
            for (var i = 0; i < data.length; i++) {
                var val = data[i][propertyName];
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                }
            }
            return results;
        } else {
            return data;
        }
    }
}).filter("categoryFilterFn",function(){//categoryFilterFn 방식을 .filter메소드로 구현
	return function(data, selectedCategory){
		if (angular.isArray(data) && angular.isString(selectedCategory)) {
            var results = [];
            for (var i = 0; i < data.length; i++) {

                if(selectedCategory == null ||
                			data[i].category == selectedCategory){
                    results.push(data[i]);	
                }
            }
            return results;
        } else {
            return data;
        }
	}
}).filter("range", function ($filter) {
    return function (data, page, size) {
        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
            var start_index = (page - 1) * size;
            if (data.length < start_index) {
                return [];
            } else {
                return $filter("limitTo")(data.splice(start_index), size);	//$filter("limitTo") 는 내장 필터함수
            }
        } else {
            return data;
        }
    }
})
.filter("pageCount", function () {
    return function (data, size) {
        if (angular.isArray(data)) {
            var result = [];
            for (var i = 0; i < Math.ceil(data.length / size) ; i++) {
                result.push(i);
            }
            return result;
        } else {
            return data;
        }
    }
});

