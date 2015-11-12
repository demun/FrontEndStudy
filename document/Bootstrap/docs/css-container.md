#### HTML5 문서 유형  
```
<!DOCTYPE html>
<html lang="ko">
  ...
</html>
```

#### 모바일 우선 Mobile first

* 적절한 렌더링과 확대/축소를 위해, 당신의 `<head>`에 viewport 메타태그를 추가하세요.
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

* user-scalable=no 를 추가하여 모바일 기기에서 확대/축소 기능을 끌 수 있습니다.  
확대/축소를 끈다는 것은, 사용자들이 오직 스크롤만 할 수 있음을 의미합니다.
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

#### 타이포그래피와 링크

* `body` 에서 `background-color: #fff;` 를 설정합니다.  
* 기본 타이포그래피로 속성 `@font-family-base`, `@font-size-base`, `@line-height-base` 를 사용합니다.  
* 전역 링크의 색은 `@link-color` 에 설정하고 밑줄효과는 `:hover` 에만 적용되어 있습니다.  
* 이 스타일들은 `scaffolding.less` 내에서 찾을 수 있습니다.

#### CSS 초기화

향상된 크로스 브라우징을 위해 Normalize.css 를 사용합니다.
[Normalize.css](http://necolas.github.io/normalize.css/)


## Containers

  * 부트스트랩은 사이트 콘텐츠를 감싸고 그리드 시스템을 만들 콘테이너 요소가 필요합니다. 
  * 레이아웃을 만드는 가장 상위 요소에 `.container` 또는 `.container-fluid`를 추가합니다.
  * 2가지 콘테이너 중 하나를 선택할 수 있습니다.

  **container는 기본적으로 중첩 될 수없는 것을 유의하십시오.**


### .container의 속성(고정폭 콘테이너)

```
      .container {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    @media (min-width: 768px) {
      .container {
        width: 750px;
      }
    }  
    @media (min-width: 992px) {
      .container {
        width: 970px;
      }
    }  
    @media (min-width: 1200px) {
      .container {
        width: 1170px;
      }
    }
```

가로 해상도 - 767px 이하에서는 100%,   
            - 768px 이상에서는 750px,   
            - 992px 이상에서는 970px,   
            - 1200px 이상에서는 1170px  


### .container-fluid 속성(전체폭까지 늘어나는 최대폭 콘테이너)

```
  .container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
```

**가로 해상도에 관계없이 100%의 가로폭을 가집니다.**

### 예제
<div>
<p data-height="268" data-theme-id="0" data-slug-hash="PPxrbB" data-default-tab="result" data-user="hklim82" class='codepen'>See the Pen <a href='http://codepen.io/hklim82/pen/PPxrbB/'>bootstrap container</a> by kero (<a href='http://codepen.io/hklim82'>@hklim82</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
 </div>

[이전페이지- 부트스트랩 시작하기](bootstrap-start.md)  
[다음페이지- 부트스트랩CSS_그리드](css-grid.md)
