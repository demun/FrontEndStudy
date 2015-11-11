## 그리드 시스템

부트스트랩은 기기나 뷰포트 크기가 증가함에 따라 `12열`이 적절하게 확대되는 반응형, 모바일 우선 유동 그리드 시스템입니다.

#### 소개 Introduction
  그리드 시스템은 당신의 콘텐츠를 보관할 행과 열 시리즈를 통해 페이지 레이아웃들 만드는데 사용되어집니다. 

  * `행(row)`은 반드시 적절한 정렬과 패딩을 위해서 `.container (fixed-width)` 나 `.container-fluid (full-width)` 안에 위치해야 합니다.
  * 열들의 수평그룹을 만드는데 행(row)을 이용하세요.
  * 콘텐츠는 열안에 위치해야 합니다. 그리고 열들만이 행의 바로 아래에 올 수 있습니다.
  * 열은 `padding` 으로 사이 간격을 만듭니다. 패딩은 행 내에서 첫열과 마지막열을 위해 .row 내에 음수 마진으로 offset 되어 있습니다.
  * 음수 마진은 아래의 예제들이 내어쓰기가 되어 있는 이유입니다. 그것은 그리드 열 내의 콘텐츠는 비그리드 콘텐츠와 정렬되기 위함입니다.
```
  .row {
  margin-right: -15px;
  margin-left: -15px;
}
```

* `.row ` : `.container` 또는 `.container-fluid` 안에 `.row`로 행을 만듭니다.  
* `.col-*-*` : `.row` 안에 `.col-*-*`로 열을 만듭니다


#### 미디어 쿼리 Media queries

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


    
<table class="">
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

기기들에 CSS 를 좁게 적용하기 위해 미디어쿼리에 max-width 를 포함하여 부연합니다.

```
@media (max-width: @screen-xs-max) { ... }
@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
@media (min-width: @screen-lg-min) { ... }
```

#### 그리드 옵션

  <div class="table-responsive">
      <table class="table table-bordered table-striped responsive-utilities">
        <thead>
          <tr>
            <th></th>
            <th>
              매우 작은 기기들
              <small>모바일폰 (&lt;768px)</small>
            </th>
            <th>
              작은 기기들
              <small>태블릿 (≥768px)</small>
            </th>
            <th>
              중간 기기들
              <small>데스크탑 (≥992px)</small>
            </th>
            <th>
              큰 기기들
              <small>데스크탑 (≥1200px)</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><code>.visible-xs</code></th>
            <td class="is-visible">보임</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-hidden">숨겨짐</td>
          </tr>
          <tr>
            <th><code>.visible-sm</code></th>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-visible">보임</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-hidden">숨겨짐</td>
          </tr>
          <tr>
            <th><code>.visible-md</code></th>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-visible">보임</td>
            <td class="is-hidden">숨겨짐</td>
          </tr>
          <tr>
            <th><code>.visible-lg</code></th>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-visible">보임</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th><code>.hidden-xs</code></th>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-visible">보임</td>
            <td class="is-visible">보임</td>
            <td class="is-visible">보임</td>
          </tr>
          <tr>
            <th><code>.hidden-sm</code></th>
            <td class="is-visible">보임</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-visible">보임</td>
            <td class="is-visible">보임</td>
          </tr>
          <tr>
            <th><code>.hidden-md</code></th>
            <td class="is-visible">보임</td>
            <td class="is-visible">보임</td>
            <td class="is-hidden">숨겨짐</td>
            <td class="is-visible">보임</td>
          </tr>
          <tr>
            <th><code>.hidden-lg</code></th>
            <td class="is-visible">보임</td>
            <td class="is-visible">보임</td>
            <td class="is-visible">보임</td>
            <td class="is-hidden">숨겨짐</td>
          </tr>
        </tbody>
      </table>
    </div>
  


#### 예제 1
그리드 클래스인 `.col-md-*` 싱글 세트를 사용하여, 당신은 데스크탑(중간) 기기에서 수평으로 되기전까지, 모바일 기기와 태블릿 기기(매우 작음에서 작음까지)에서 쌓이기 시작하는 기본 그리드 시스템을 만들 수 있다. `.row` 안에 그리드 컬럼을 놓으세요.
<p data-height="268" data-theme-id="11744" data-slug-hash="RWBZXx" data-default-tab="result" data-user="hklim" class='codepen'>See the Pen <a href='http://codepen.io/hklim/pen/RWBZXx/'>bootstrap3_grid1</a></p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>



***



* **반응형 컬럼 초기화**  
  사용가능한 4등급의 그리드들과 특정 분기점에서, 컬럼들이 하나가 다른 컬럼보다 긴 경우 명확하게 클리어 되지 않을 수 있다. 그걸 고치기 위해서는, `.clearfix `와 우리의 반응형 유틸리티 클래스들의 조합을 사용하면 됩니다.
*  **`col-* -offset-*`**  
  .col-md-offset-* 클래스를 사용하여 컬럼을 우측으로 옮기세요. 이 클래스들은 * 컬럼만큼 한 컬럼의 좌측마진을 증가하게 합니다. 예를 들어, .col-md-offset-4 는 .col-md-4 을 4컬럼만큼 이동시킵니다.
* **컬럼 중첩하기**  
  기본그리드로 콘텐츠를 중첩하려면, 존재하는 .col-md-* 컬럼 내에 새로운 .row 와 .col-md-* 컬럼 세트를 추가하세요. 중첩된 행은 합쳐서 12 가 되는 하나의 컬럼 세트가 됩니다.  
* **`col-push와 col-pull `**  
  .col-md-push-* 와.col-md-pull-* 수식클래스들로 그리드 컬럼들의 순서를 쉽게 변경할수 있습니다.


#### 예제 2  
<p data-height="268" data-theme-id="11744" data-slug-hash="jbvXdp" data-default-tab="result" data-user="hklim" class='codepen'>See the Pen <a href='http://codepen.io/hklim/pen/jbvXdp/'>bootstrap3_grid2</a></p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

***




[이전페이지- 부트스트랩CSS_컨테이너](css-container.md)

[다음페이지- component-list-group](component-list-group.md)

