# CoffeeScript

작성자: 허종문

<br>


- 세미골론(;) , 괄호() , 중괄호{} 를 생략할수 있다.
- 괄호는 파라미터에서는 생략할수 없다.
- 중괄호는 json스타일의 객체를 선언할때만 사용한다.



## 주석

- 한줄 주석

```coffee
# 한줄 주석은 # 하나를 사용한다. 이주석은 해석후 안보인다.
```

- 여러줄 주석

```coffee
###
여러줄 주석은 # 3개를 사용한다.
이 주석은 해석후 보인다.
###
```

<br><br>



## 함수

함수선언시 한줄바꿔서 들여쓰기하면 중괄호를 넣는것과 같다.

함수는 -> 를 사용한다.


- before

```coffee
-> console.log('함수')
```

- after

```javascript
(function() {
  return console.log('함수');
});
```





#### do  키워드를 사용해서 함수를 만들수도 있다.

- before

```coffee
do -> console.log('do 키워드를 사용한 함수')
```

- after

```javascript
(function() {
  return console.log('do 키워드를 사용한 함수');
})();
```






#### 이름이 있는 함수

- before

```coffee
nameFun = ->
	console.log('이름있는함수')
```

- after

```javascript
var nameFun;

nameFun = function() {
  return console.log('이름있는함수');
};
```




#### 파라미터가 있는 함수

- before

```coffee
pamFun = (pam) ->
  console.log('파라미터가 있는함수')
```

- after

```javascript
var pamFun;

pamFun = function(pam) {
  return console.log('파라미터가 있는함수');
};
```





- 함수에서 문자열 이어붙이기

'' 를 사용하면 한줄로,  "" 를 사용하면 여려줄로 이어붙이기가 가능하다.

- before

```coffee
stringFun1 = (pam) ->
  console.log "문자열을 한줄로 이어붙이기 #{msg}"
```

- after

```javascript
var stringFun1;

stringFun1 = function(pam) {
  return console.log("문자열을 한줄로 이어붙이기 " + msg);
};
```







- before

```coffee
stringFun2 = (pam) ->
  console.log "
    문자열을 
    여러줄로 
    이어붙이기 
    #{msg}"
```

- after

```javascript
var stringFun2;

stringFun2 = function(pam) {
  return console.log("문자열을 여러줄로 이어붙이기 " + msg);
};
```



- 함수에 return 이 자동으로 들어간다. 

이걸빼려면 함수에 return 을 넣어주면 된다.


<br><br>


## 범위(scope)

- 모든 함수는 범위를 만들며 유일한 방법은 함수를 정의하는것.
- 변수는 변수가 할당된 곳에서 최상단에서 존재한다.
- 범위 바깥에서는 변수에 접근할수 없다.



<br><br>


## 연산자

- is : ===
- isnt : !==
- not : !
- and : &&
- or : ||
- true, yes, on : true
- false, no, off : false




- is : ===

```coffee
a is b
```

```javascript
a === b;
```




- isnt : !==

```coffee
a isnt b
```

```javascript
a !== b;
```






- not : !

```coffee
a not b
```

```javascript
a(!b);
```



- and : &&

```coffee
a and b
```

```javascript
a && b;
```



- or : ||

```coffee
a or b
```

```javascript
a || b;
```










<br><br>


## 조건문

- before

```coffee
if true
  1
else if false 
  2
```


- after

```javascript
if (true) {
  1;
} else if (false) {
  2;
}
```



#### then 키워드를 사용하는경우

- before

```coffee
if true then 1 else 2
```

- after

```javascript
if (true) {
  1;
} else {
  2;
}
```




#### unless 사용하는경우, unless 는 if not 의 별칭

- before

```coffee
1 unless true
unless ture then 2
```


- after

```javascript
if (!true) {
  1;
}

if (!ture) {
  2;
}
```





<br><br>

### 존재확인 오퍼레이터 ?


#### a가 존재하면 a 리턴 아니면 b 리턴

- before

```coffee
a ? b
```

- after

```javascript
if (typeof a !== "undefined" && a !== null) {
  a;
} else {
  b;
};
```



#### 존재하지 않는가 ?=
> c 가 null 경우 오류남

```coffee
c ?= d
```


- before

```coffee
if coffee?
	alert 'dowon'
```

- after

```javascript
if (typeof coffee !== "undefined" && coffee !== null) {
  alert('dowon');
}
```



#### 다른 방식

- before

```coffee
alert 'dowon' if coffee?
```

- after

```javascript
if (typeof coffee !== "undefined" && coffee !== null) {
  alert('dowon');
}
```





<br><br>


## Switch 문
case 조건을 when 조건 then 으로 변환

- before

```coffee
-> switch coffee
  when 0 then 'hi'
  when 1 then 'haha'
  else 'dowon'
```



- after

```javascript
(function() {
  switch (coffee) {
    case 0:
      return 'hi';
    case 1:
      return 'haha';
    default:
      return 'dowon';
  }
});
```






<br><br>


### this 와 ==>

- @ 는 this 의 별칭
- 컨텍스트에 할당하려면 -> 대신 => 를 사용해야한다.
- this 를 컨텍스트에 할당할때 유용하다


#### -> 를 사용할경우

- before

```coffee
collback -> 1
```


- after

```javascript
collback(function() {
  return 1;
});
```






#### => 를 사용할경우

- before

```coffee
collback => 1
```

- after

```javascript
collback((function(_this) {
  return function() {
    return 1;
  };
})(this));
```





<br><br>

### 프로퍼티



- before

```coffee
setName = (name) -> name = name
```


- after

```javascript
var setName;

setName = function(name) {
  return name = name;
};
```



#### 파라미터에 @를 쓸경우 이름의 변수에 전달받은 값을 할당할수 있다.

- before

```coffee
setName = (@name) ->
```

- after

```javascript
var setName;

setName = function(name) {
  this.name = name;
};
```



### a가 전달되지 않으면 true 로 할당되고, 전달되면 전달된 파라미터값으로 a가 할당된다.

- before

```coffee
(a = true) ->
```

- after

```javascript
(function(a) {
  if (a == null) {
    a = true;
  }
});
```







<br><br>

## Splat

- before

```coffee
a = (b, c...) -> console.log c
a 1, 2, 3, 4, 5
```

- after

```javascript
var a,
  slice = [].slice;

a = function() {
  var b, c;
  b = arguments[0], c = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  return console.log(c);
};

a(1, 2, 3, 4, 5);
```




<br><br>


## string 변환
- {} 사용

- before

```coffee
coffee =->
	answer = confirm 'down'
	'hi #{answer}'
```

- after

```javascript
var coffee;

coffee = function() {
  var answer;
  answer = confirm('down');
  return 'hi #{answer}';
};
```





<br><br>

## jQuery 사용

- before

```coffee
jQuery ($) ->
```

- after

```javascript
jQuery(function($) {});
```


- before

```coffee
$ ->
```

- after

```javascript
$(function() {});
```


- jquery 예제

- before

```coffee
$(document).on 'click', '.first-btn, .last-button', ->
	c = $(@).attr 'class'
	t = $(@)

	if c == 'first-btn'
		ul = t.next 'ul'
	else if c is 'last-button'
		ul = t.parent().parent 'ul'

	if ul.css('display') is 'none'
		$('.lnb-link ul ul').hide();
		ul.show()
	else
		ul.hide()
```

- after

```javascript
$(document).on('click', '.first-btn, .last-button', function() {
  var c, t, ul;
  c = $(this).attr('class');
  t = $(this);
  if (c === 'first-btn') {
    ul = t.next('ul');
  } else if (c === 'last-button') {
    ul = t.parent().parent('ul');
  }
  if (ul.css('display') === 'none') {
    $('.lnb-link ul ul').hide();
    return ul.show();
  } else {
    return ul.hide();
  }
});
```



----


* [FrontEndStudy](../../../../)


