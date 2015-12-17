# @keyframes

작성자 : 김동일

작성일 : 2015-09-18

comment : 테스트입니다

css 레퍼런스 설명:
 - @keyframes : 단계적으로 변화를 주는 애니메이션 코드

 - syntax :
```sh
@keyframes animationname {keyframes-selector {css-styles;}}
```

animationname : 사용할 애니메이션 명을 정의한다.

keyframes-selector : 애니메이션을 %별로 정의한다.

                     정의 범위 0 ~ 100% 또는 from(0%) ~ to(100%)

css-styles : 하나 이상의 css 스타일을 정의한다.

sample code :
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
    width: 100px;
    height: 100px;
    background: red;
    position :relative;
    -webkit-animation: mymove 5s infinite; /* Chrome, Safari, Opera */
    animation: mymove 5s infinite;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes mymove1 {
    0%   {top: 0px;}
    25%  {top: 200px;}
    75%  {top: 50px}
    100% {top: 100px;}
}

/* Standard syntax */
@keyframes mymove {
    0%   {top: 0px;}
    25%  {top: 200px;}
    75%  {top: 50px}
    100% {top: 100px;}
}
</style>
</head>
<body>

<p><strong>Note:</strong> The @keyframes rule is not supported in Internet Explorer 9 and earlier versions.</p>

<div></div>

</body>
</html>

```

결과

[http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_keyframes](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_keyframes)

-----

* [CSS3 README](../README.md)
