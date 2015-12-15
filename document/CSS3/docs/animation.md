# animation

작성자 : 이연옥, 허종문

작성일 : 2015-10-01
수정: 2015-12-04


css 레퍼런스 설명:
CSS3 `animation`은 엘리먼트에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜 줍니다. `animation`은 애니메이션을 나타내는 CSS 스타일과 애니메이션의 중간 상태를 나타내는 키프레임들로 이루어집니다.

`animation` 은 단축속성을 지원해서 단축해서 한번에 기술해도되고, 속성을 따로 따로 기술해도 됩니다.

속성들이 생략이 가능하지만 `name`, `duration` 속성은 있어야 에니메이션이 됩니다.

```
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

animation 속성의 하위 속성은 다음과 같습니다.


### animation-name
애니메이션의 이름으로 애니메이션의 중간 상태를 지정합니다. 중간 상태는 `@keyframes` 규칙을 이용하여 기술하는데 ``@keyframes` 의 이름을 사용합니다.

```
animation-name: keyframename | none | initial | inherit
```




### animation-duration
한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.

```
animation-duration: time | initial | inherit;
```

- [name 과 duration 만 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-name)




### animation-timing-function
중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.

```
animation-timing-function: linear | ease |ease-in | ease-out | cubic-bezier(n,n,n,n) | initial | inherit;
```

- [animation-timing-function 가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-timing-function)





### animation-delay
엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.

```
animation-delay: time | initial | inherit;
```

- [animation-delay 가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-delay)





### animation-iteration-count
애니메이션이 몇 번 반복될지 지정합니다. infinite로 지정하여 무한히 반복할 수 있습니다.

```sh
animation-iteration-count: number|infinite|initial|inherit;
```

- [animation-iteration-count 가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-iteration-count)




### animation-direction
애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.

```sh
animation-direction: normal | reverse | alternate | alternate-reverse | initial | inherit;
```

- [animation-direction 가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-direction)




### animation-fill-mode
애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.

```
animation-fill-mode: none | forwards | backwards | both | initial | inherit;
```

- [animation-fill-mode 가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-fill-mode)



### animation-play-state
애니메이션을 멈추거나 다시 시작할 수 있습니다.

```sh
animation-play-state: paused | running | initial | inherit;
```

- [animation-play-state 가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-play-state)
- [animation-play-state 에서 오버시 `paused`가 적용된 예제](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_animation-play-state_hover)



-----

* [CSS3 README](../README.md)
