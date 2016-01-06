#함수지향 

* **함수지향**
    - 클로저
    - arguments
    - 함수의 호출

### 클로저 (closure)

클로저란 내부함수가 외부함수의 context에 접근할 수 있는 것을 가리킵니다.   

####내부함수
자바스크립트는 함수 안에 또 다른 함수를 선언할 수 있습니다. 

```javascript
<script>
function outter(){
    function inner(){
        var title = '저는 inner의 지역변수 입니다.'; 
        alert(title);
    }
    inner();
}
outter();
</script>
```
[ex) 클로저1 실행](http://codepen.io/JaYoungKim/pen/GoWRpx?editors=001)    

위 예문에서 `function outter` 는 외부함수이고, 이 외부함수 안에 `function inner`라는 내부함수가 들어있습니다.
위 예문을 다시 표현하면 아래와 같습니다. 

```javascript
<script>
function outter(){
    var inner=function(){
        var title = '저는 inner의 지역변수 입니다.'; 
        alert(title);
    }
    inner();
}
outter();
</script>
```
[ex) 클로저2 실행](http://codepen.io/JaYoungKim/pen/bEqGVQ?editors=001)    

`outter` 라는 함수 안에 inner라는 변수를 설정하고 이 변수에 funtion을 담는것입니다. 
또, 내부함수는 외부함수의 지역변수에 접근할 수 있습니다.

```javascript
<script>
function outter(){
    var title = '저는 outter의 지역변수 입니다.';  
    function inner(){        
        alert(title);
    }
    inner();
}
outter();
</script>
```
[ex) 클로저3 실행](http://codepen.io/JaYoungKim/pen/yeMLYm?editors=001)   

위 함수의 결과값은 **저는 outter의 지역변수 입니다.**입니다. 
inner 함수가 title라는 변수를 가지고 있지 않으면 inner 함수는 그 외부에서 title 변수를 찾게됩니다. 


####클로저
내부함수는 외부함수의 지역변수에 접근할 수 있다고 했는데, 이것은 외부함수의 실행이 끝나고 외부함수가 소멸된 후에도 유효합니다. 

```javascript
<script>
function outter(){
    var title = '저는 outter의 지역변수 입니다.';  
    return function(){        
        alert(title);
    }
}
inner = outter();
inner();
</script>
```

[ex) 클로저4 실행](http://codepen.io/JaYoungKim/pen/vLxYLW?editors=001)   

`inner = outter();`에서 함수 inner는 outter함수를 호출하고 하고 있고, outter함수는 이름없는 `function()`을 호출 하고 있습니다.
`inner = outter();`의 결과는 이름이 없는 함수의 값인 **저는 outter의 지역변수 입니다.**입니다.  `inner = outter();`의 실행 이후 함수 outter();는 소멸합니다. 그렇다면 이후 'inner();'는 아무값도 가지지 않는것이 자연스럽지만, 결과는 마찬가지로 **저는 outter의 지역변수 입니다.**라는 alert을 띄웁니다. 이것으로 지역변수 title은 소멸되지 않았다는 것을 알 수 있습니다. 즉 클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미하는 것입니다.

```javascript
<script>
function a(title){
    return {
        a1 : function (){
            return title;
        },
        a2 : function(_title){
            title = _title
        }
    }
}
num = a('123');
str = a('문자');
 
alert(num.a1());
alert(str.a1());
 
num.a2('345');
 
alert(num.a1());
alert(str.a1());
</script>
```

[ex) 클로저5 실행](http://codepen.io/JaYoungKim/pen/wMJvXb?editors=001)   

함수 a는 내부함수로 a1과, a2를 가지고 있습니다. 내부함수 a1은 함수 a의 변수 title을 반환하고, a2의 변수 _title=title 이므로 a2도 마찬가지로 함수 a의 변수 title을 반환합니다. 클로저는 객체의 인자에서도 사용할 수 있습니다. 즉 내부 함수 a1과 a2는 동일한 외부함수 a를 반환한다는 뜻입니다. 

그래서 처음 'alert(num.a1()); alert(str.a1());' 결과값이 각각 num = a('123'); str = a('문자'); 을 반환하여  `123 / 문자` 
를 출력하는 것 입니다. 

그런데, 두번째로 출력하는 'alert(num.a1()); alert(str.a1());'는 중간에 `num.a2('345');` 으로 인해 `345 / 문자`를 출력하게됩니다.

똑같은 외부함수 a를 공유하고 있는 num과 str의 a1의 결과값이 다르게 나타나는것으로서, 각 내부함수들은 새로운 지역변수를 포함하는 클로저를 생성함에 따라 각각 독립된 객체로 분류할수 있음을 알 수 있습니다. 
JavaScript는 기본적으로 Private한 속성을 지원하지 않지만, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있습니다.

> 참고 Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미합니다. 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있습니다. 자바와 같은 언어에서는 이러한 특성을 언어 문법 차원에서 지원하고 있습니다.

#### 클로저에서 자주 범하는 오류 
```javascript
<script>
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    alert(arr[index]());
}
</script>
```

[ex) 클로저오류 예제1 실행](http://codepen.io/JaYoungKim/pen/YwZPpg?editors=001)   

0~4까지의 값을 출력하기 위해서 위의 코드는 아래와 같이 변경되어야합니다. 

```javascript
<script>
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    alert(arr[index]());
}
</script>
```

[ex) 클로저오류 예제2 실행](http://codepen.io/JaYoungKim/pen/EPWaZE?editors=001)  







<br>
### arguments

```javascript
<script>
function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
</script>
```

[ex) arguments1 실행](http://codepen.io/JaYoungKim/pen/EPWaZE?editors=001)  

위의 `함수 sum`은 'sum()' 으로 인자에 대한 정의가 없지만, `document.write('result : ' + sum(1,2,3,4));` 에선 인자값을 전달하여 값을 출력하도록 되어있습니다.     
실제 출력 결과는 **10** 입니다.    
인자가 없는데 값이 제대로 출력되는 이유는 `arguments`라는 특수한 객체가 있기 때문입니다. 
arguments는 함수안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 객체입니다. arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있습니다. 그리고 `arguments.length`를 이용해서 함수로 전달된 인자의 개수를 알아낼 수도 있습니다. 
이러한 특성은 배열과 비슷하다고 생각하시면 됩니다. 
`arguments`에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있고, 그 값을 더해서 리턴하면 인자로 전달된 값에 대한 총합을 구하는 함수를 만들 수 있게 됩니다.

####매개변수의 수
매개변수에는 관련된 두가지 수가 있습니다.
1. 함수.length : 함수에 정의된 인자의 수.
2. arguments.length : 함수로 전달된 실제 인자의 수.

```javascript
<script>
function zero(){ // 함수에 정의된 인자.
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){ // 함수에 정의된 인자.
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){ // 함수에 정의된 인자.
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); 			  // 함수로 전달될 실제 인자.
one('val1', 'val2');  // 함수로 전달될 실제 인자.
two('val1');  		  // 함수로 전달될 실제 인자.
</script>
```
[ex) arguments1 실행](http://codepen.io/JaYoungKim/pen/EPWaZE?editors=001)  









<br>
### 함수의 호출

```javascript
function func(){
}
func();
```
기본적으로 함수를 호출하는 방법은 위와 같지만, JavaScript는 함수를 호출하는 특별한 방법을 제공합니다. 
함수도 하나의 객체이기 때문에 여러 메소드를 가지고 있고, `func();`는 함수 객체의 인스턴트로서 마찬가지로 함수의 메소드를 상속받을 수 있습니다. 

 #### 함수.apply / 함수.call

```javascript
function func(arg1, arg2){
    return arg1+arg2;
}
alert(func.apply(null, [1,2]))
```
