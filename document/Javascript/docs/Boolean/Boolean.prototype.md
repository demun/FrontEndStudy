# Boolean.prototype

부울의 프로토타입에 대한 참조를 반환합니다.


#### 문법

```javascript
boolean.prototype
```



### 설명

`boolean` 인수는 개체 이름입니다.

prototype 속성은 개체 클래스에 기본 기능 집합을 제공합니다.
인스턴스의 새 개체는 해당 개체에 할당된 프로토타입의 동작을 상속합니다. 
프로토타입의 속성과 메서드를 추가할 수는 있지만 기본 제공 개체에 다른 프로토타입을 할당할 수는 없습니다.

예를들어 배열의 최대요소 값을 반환하는 `boolean` 개체에 매서드를 추가하려면 함수를 선언하고 `boolean.prototype`에 추가한 다음 사용합니다.


```javascript
// 함수선언
function isFalse(){
	if(this.toString() == 'false')
		return true;
	else
		return false;
}

// boolean.prototype 에 추가
Boolean.prototype.isFalse = isFalse;

// 사용
var bool = new Boolean(1);
document.write(boolisFalse());
```
