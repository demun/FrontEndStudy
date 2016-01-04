# Table

작성자 : 이기섭

작성일 : 2015-12-19


### 기본 예제

`<table>`에 약간의 패딩과 수평 구분 선을 주기 위해서 가장 기본 스타일인 `.table`을 사용할 수 있습니다.

[예제](http://codepen.io/luensys/pen/NxNLXO)
```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope=row>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope=row>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope=row>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### 줄무늬 행

줄부늬를 추가하기 위해서는(각 행별로 구분하기 위해) `<tbody`에 `.table-striped`를 추가하세요.
```
주의! CSS의 :nth-child 속성으로 만들어지기 때문에 IE8에서는 동작하지 않습니다.
```

[예제](http://codepen.io/luensys/pen/wMGEyx)
```
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope=row>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope=row>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope=row>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### 선이 있는 테이블

테이블의 테두리와 셀에 줄을 넣기 위해서 `.table-bordered`를 추가하세요.

[예제](http://codepen.io/luensys/pen/obxPdZ)
```
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope=row>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope=row>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope=row>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### Hover 행

`<tbody>` 안의 테이블 행들의 Hover 상태를 활성화하려면 `.table-hover`를 추가해주세요.

[예제](http://codepen.io/luensys/pen/bEpxMm)
```
<table class="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope=row>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope=row>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope=row>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### 좁은 폭 테이블

셀 패딩을 반으로 줄여서 좀 더 콤팩트 하게 테이블을 만들기 위해서는 `.table-condensed`를 추가하세요.

[예제](http://codepen.io/luensys/pen/vLGzre)
```
<table class="table table-condensed">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope=row>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope=row>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope=row>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### 맥락적인 클래스들

테이블 '행'이나 '셀'에 색을 넣으려면 아래의 클래스들을 사용하세요.

| 클래스 | 설명 |
|---|---|
|`.active`|특정한 행이나 셀에 hover 했을 때와 같은 색을 입힙니다.|
|`.success`|성공적이거나 긍정적인 액션을 의미합니다.|
|`.info`|중립적인 정보의 변화나 액션을 의미합니다.|
|`.warning`|주의가 필요한 경고를 의미합니다.|
|`.danger`|위험하거나 부정적일 수 있는 액션을 의미합니다.|

[예제](http://codepen.io/luensys/pen/KVzxBL)
```
<table class="table">
  <thead>
    <tr>
      <th>TD1</th>
      <th>TD2</th>
      <th>TD3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>active</td>
      <td>class</td>
      <td>row</td>
    </tr>
    <tr class="success">
      <td>success</td>
      <td>class</td>
      <td>row</td>
    </tr>
    <tr class="warning">
      <td>warning</td>
      <td>class</td>
      <td>row</td>
    </tr>
    <tr class="danger">
      <td>danger</td>
      <td>class</td>
      <td>row</td>
    </tr>
    <tr class="info">
      <td>info</td>
      <td>class</td>
      <td>row</td>
    </tr>
  </tbody>
</table>
```

### 반응형 테이블

`.table`을 `.table-responsive`로 감싸서 작은기기에서는 수평 스크롤이 생기도록 하는 테이블을 만듭니다.
사이즈는 768px 이하입니다.

```
수직 잘라내기 / 절삭
반응형 테이블은 세로 사이즈를 초과할 때 나오는 스크롤을 없애주는 overflow-y: hidden을 이용합니다.
이것은 드롭다운 메뉴와 다른 서드파티 위젯을 없애버릴 수 있습니다.
```
```
파이어폭스와 필드셋
파이어폭스는 반응형 테이블에 간섭하는 width 관련 몇 가지 이상한 필드셋 스타일을 가지고 있어,
파이어폭스 전용핵 없이는 사용할 수가 없습니다.
```

[예제](http://codepen.io/luensys/pen/yeOxGB)
```
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope=row>1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope=row>2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope=row>3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope=row>1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope=row>2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope=row>3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

