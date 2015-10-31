## 그리드 시스템

부트스트랩은 기기나 뷰포트 크기가 증가함에 따라 12 열이 적절하게 확대되는 반응형, 모바일 우선 유동 그리드 시스템입니다.

###소개 Introduction
  그리드 시스템은 당신의 콘텐츠를 보관할 행과 열 시리즈를 통해 페이지 레이아웃들 만드는데 사용되어집니다. 

  * `행(row)`은 반드시 적절한 정렬과 패딩을 위해서 `.container (fixed-width)` 나 `.container-fluid (full-width)` 안에 위치해야 합니다.
  * 열들의 수평그룹을 만드는데 행(row)을 이용하세요.
  * 콘텐츠는 열안에 위치해야 합니다. 그리고 열들만이 행의 바로 아래에 올 수 있습니다.
  * 열은 `padding` 으로 사이 간격을 만듭니다. 패딩은 행 내에서 첫열과 마지막열을 위해 .row 내에 음수 마진으로 offset 되어 있습니다.
  * 음수 마진은 아래의 예제들이 내어쓰기가 되어 있는 이유입니다. 그것은 그리드 열 내의 콘텐츠는 비그리드 콘텐츠와 정렬되기 위함입니다.
 

###미디어 쿼리 Media queries

그리드 시스템에서 주요 분기점을 만들기 위해 다음의 미디어 쿼리들을 사용합니다.

```
/* 매우 작은 기기들 (모바일폰, 768px 보다 작은) */
/* 부트스트랩에서 이것은 기본이므로 미디어쿼리가 없습니다. */
 
/* 작은 기기들 (태블릿, 768px 이상) */
@media (min-width: @screen-sm-min) { ... }
 
/* 중간 기기들 (데스크탑, 992px 이상) */
@media (min-width: @screen-md-min) { ... }
 
/* 큰 기기들 (큰 데스크탑, 1200px 이상) */
@media (min-width: @screen-lg-min) { ... }
```

* `.row `
  - `.container` 또는 `.container-fluid` 안에 .`row`로 행을 만듭니다.

* `.col-*-*` 
  - `.row` 안에 `.col-*-*`로 열을 만듭니다
  - xs : 항상 적용됩니다.
  - sm : 가로 해상도 768px 이상에서 적용됩니다.
  - md : 가로 해상도 992px 이상에서 적용됩니다.
  - lg : 가로 해상도 1200px 이상에서 적용됩니다.
  - 1 - 12 : 행을 12등분하여 그 중 몇 개를 사용할 지 정합니다.

* `.col-xs-*`
  - .col-xs-6은 `항상 행의` 6/12을 가로 크기로 한다는 뜻이고, .col-xs-3은 항상 행의 3/12을 가로 크기로 한다는 뜻입니다.
  - 행을 12등분했으므로, 숫자의 합이 12면 .container(.container-fluid)를 꽉 채웁니다.
  - 숫자의 합이 12보다 작으면 오른쪽에 공간이 남으며, 12보다 크면 다음 줄로 넘어갑니다.
  
* `.col-sm-*`
  - .col-sm-*은 가로 해상도 768px 이상에서 적용됩니다.
  - .col-sm-6은 가로 해상도 768px 이상에서 행의 6/12을 가로 크기로 하겠다는 뜻입니다.
  - 만약 가로 해상도가 768px 미만이라면 `행 전체를 가로 크기로 합니다`.

cf)첫번째 행은 .col-xs-*로 열을 만들었으므로, 가로 해상도에 상관없이 행을 8:4로 나눕니다.
하지만, 두번째 행은 .col-sm-*로 열을 만들었으므로, 가로 해상도 768px 이상에서는 행을 8:4로 나누지만, 768px 미만에서는 각각 한 줄을 다 차지합니다.
  
  * .col-md-* .col-lg-*
    - .col-md-*은 가로 해상도 992px 이상에서 적용됩니다.
    - .col-lg-*은 가로 해상도 1200px 이상에서 적용됩니다.



기기들에 CSS 를 좁게 적용하기 위해 미디어쿼리에 max-width 를 포함하여 부연합니다.

```
@media (max-width: @screen-xs-max) { ... }
@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
@media (min-width: @screen-lg-min) { ... }
```

###그리드 옵션

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>고정폭 container</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
    <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th></th>
          <th>
            매우 작은 기기
            <small>모바일폰 (&lt;768px)</small>
          </th>
          <th>
            작은 기기
            <small>태블릿 (≥768px)</small>
          </th>
          <th>
            중간 기기
            <small>데스크탑 (≥992px)</small>
          </th>
          <th>
            큰 기기
            <small>데스크탑 (≥1200px)</small>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-nowrap" scope="row">그리드 적용</th>
          <td>항상 <!-- TODO: Horizontal at all times --></td>
          <td colspan="3">분기점보다 크면 적용 <!-- TODO: Collapsed to start, horizontal above breakpoints --></td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">콘테이너 너비</th>
          <td>없음 (auto)</td>
          <td>750px</td>
          <td>970px</td>
          <td>1170px</td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">클래스 접두사</th>
          <td><code>.col-xs-</code></td>
          <td><code>.col-sm-</code></td>
          <td><code>.col-md-</code></td>
          <td><code>.col-lg-</code></td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">컬럼 수</th>
          <td colspan="4">12</td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">컬럼 너비</th>
          <td class="text-muted">Auto</td>
          <td>~62px</td>
          <td>~81px</td>
          <td>~97px</td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">사이 너비</th>
          <td colspan="4">30px (컬럼의 양쪽에 15px 씩)</td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">중첩</th>
          <td colspan="4">예</td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">오프셋</th>
          <td colspan="4">예</td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row">컬럼 순서정하기</th>
          <td colspan="4">예</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>

### 예제 1
그리드 클래스인 `.col-md-*` 싱글 세트를 사용하여, 당신은 데스크탑(중간) 기기에서 수평으로 되기전까지, 모바일 기기와 태블릿 기기(매우 작음에서 작음까지)에서 쌓이기 시작하는 기본 그리드 시스템을 만들 수 있다. `.row` 안에 그리드 컬럼을 놓으세요.

```
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>

</body>
</html>

### 예제 2
당신의 컬럼에 .col-xs-* .col-md-* 를 추가하여 매우 작은 기기와 중간 기기 그리드 클래스들을 사용하세요.

```
<!-- 모바일에서 컬럼들이 하나는 꽉찬너비로, 다른 하나는 절반너비로 쌓이게 합니다 -->
<div class="row">
  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- 컬럼들은 모바일에서 50% 너비로 시작하고 데스크탑에서는 33.3% 너비가 됩니다 -->
<div class="row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- 컬럼들은 모바일과 데스크탑에서 항상 50% 너비가 됩니다 -->
<div class="row">
  <div class="col-xs-6">.col-xs-6</div>
  <div class="col-xs-6">.col-xs-6</div>
</div>
```



[이전페이지- 부트스트랩CSS_컨테이너](css-container.md)

[다음페이지]