# ArrayBuffer

`ArrayBuffer` 객체는 일반적인 길이가 정해진 원시 이진 데이터 버버를 나타내는데 쓰입니다. `ArrayBuffer` 에 담긴 정보를 직접 수정하는 것은 불가능하지만, 대신 타입이 있는 배열이나 특정 포맷의 버퍼를 나타내는 `DataView` 를 생성하고 그것을 이용해 버퍼의 내용물을 읽고 쓸수 있습니다. 


```javasript
new ArrayBuffer(length)
```

- length
바이트 단위로 나타낸 버퍼에 저장된 길이

- 반환값
새로운`ArrayBuffer` 객체가 지정된 길이로 만들어져 반환됩니다. 새 객체의 내용물은 0으로 초기화 됩니다.


(MDN ArrayBuffer 참고)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer]
