# Error.message

에러를 사람이 읽을 수 있는 메세지로 반환합니다.



#### 설명(Description)

이 속성은 에러에 대해 보여주는 미리 설정해 둔 간단한 설명을 포함.
message 속성은 name 속성과 함께 Error.prototype.toString() 메소드를 통해 에러에 대한 표시를 생성하여 사용된다.
일반적으로 message 속성은 빈 string 이지만, Error contstuctor에서 처음 설정된 메시지로 오버라이딩 될 수 있다.



#### 예(Example)
##### Throwing a custom error

```javascript
var e = new Error('입력한 값이 올바르지 않습니다.'); // e.message 는 '입력한 값이 올바르지 않습니다.'
throw e;
```



#### 브라우저 적합성(Browser compatibility)
|Feature|Chrome|Firefox(Gecko)|Internet Explorer|Opera|Safari|
| ------ | ----- | ----- | --------- | ----- | ----- |
| 기본 지원 | O | O | O | O | O |

|Feature|Android|Chrome for Android|Firefox Mobile(Gecko)|IE Mobile|Opera Mobile|Safari Mobile|
| ------ | ----- | ----- | --------- | ----- | ----- | ----- |
| 기본 지원 | O | O | O | O | O | O |

