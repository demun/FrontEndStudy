## 점보트론(Jumbotron)

점보트론은 당신의 사이트에서 중요한 콘텐츠를 보여주기 위한 선택적으로 전체 뷰포트로 확장할 수 있는 가볍고 유연한 콤포넌트입니다.

![component_jumbotron_01](../images/component_jumbotron_01.jpg)

```html
<div class="jumbotron">
  <h1>Hello, world!</h1>
  <p>...</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div>

```

점보트론을 최대 너비로 만드려면 `.container` 안에 넣지 마세요. `.container` 내 놓여진 점보트론은 최대 너비를 만들지 못합니다.


```html
<div class="jumbotron">
  <div class="container">
    ...
  </div>
</div>

```

<br >
---

* [원문사이트 바로가기](http://getbootstrap.com/components/#jumbotron)
* [부트스트랩 ReadMe](../README.md)

---
* 이전페이지 - 배지 [Badges](component_11_badges.md)
* 다음페이지 - 페이지 제목 [Page header](component_13_page_header.md)