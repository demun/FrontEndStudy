# Function.call

객체 매서드로서 함수를 호출한다.
this 의 argument들에게 독립적으로 값을 제공한다.

## Syntax
` function.call(thisArg[, arg1[, arg2[, ...]]])`

## Parameters

#### thisArg
함수가 적용될 객체.
function의 몸체에서 thisobj는 this 키워드 값이 된다.
이 전달인자가 null이면 전역객체가 된다.

#### arg1, arg2, ...
object를 위한 인자들

## Description
call은 전달인자 목록에서 thisobj 다음에 나오는args 배열에 담긴 전달인자들을 전달하면서, 지정된 function을 마치 thisobj의 메서드인 것처럼 호출한다.
call은 함수 호출에서 반환한 결과를 반환한다.
함수 몸체에서 this 키워드는 thisArg가 null이면 전역객체를 가리킨다.
함수가 전달될 전달인자들을 배열로 지정하고 싶다면 Function.apply()를 대신 사용하라.

##### 부연설명
function.call을 이용하게 되면 이 이후의 this는 call을 통해 받아온 function의 this와 동일하게 동작하게 된다.

## 예

```
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }

  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

Food.prototype = Object.create(Product.prototype);
Food.prototype.constructor = Food; // Reset the constructor from Product to Food

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

Toy.prototype = Object.create(Product.prototype);
Toy.prototype.constructor = Toy; // Reset the constructor from Product to Toy

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

위의 예에서 마지막에 두 라인을 보면
*var cheese*에는 *Food* 카테고리에 이름을 *feta*로 갖고 가격을 *5*로 하도록 되고
*var fun*에는 *Toy* 카테고리에 이름을 *robot*으로 갖고 가격을 *40*으로 하도록 된다.

