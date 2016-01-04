# Table

작성자 : 이기섭

작성일 : 2015-12-19


### 기본 예제

각각의 폼 컨트롤은 자동적으로 약간의 전역 스타일을 받게 받게 됩니다. `.form-control`에 있는 모든 텍스트 형식의 `<input>`, `<textarea>`, `<select>`는 기본으로 width를 100%로 정해집니다. 최적의 여백을 위해 라벨들과 콘트롤들은 `.form-group`으로 묶어야 합니다.

![기본 예제 테이블](../images/css-table-basic.png)

[예제](http://codepen.io/luensys/pen/GoZwYj?editors=100)
```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">이메일 주소</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="이메일을 입력하세요">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">암호</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="암호">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">파일 업로드</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">여기에 블록레벨 도움말 예제</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 입력을 기억합니다
    </label>
  </div>
  <button type="submit" class="btn btn-default">제출</button>
</form>
```
```
form-group과 input-group을 같이 쓰지 마세요.
form-group과 input-group을 직접 같이 쓰지 마세요. 대신 input-group은 form-group 안에 쓰세요.
```
### 인라인 