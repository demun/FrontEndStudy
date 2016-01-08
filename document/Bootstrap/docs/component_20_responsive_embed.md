## 반응형 임베드

브라우저들에게 어느 기기에나 크기가 조절될 수 있도록 고유의 비율을 만드는 것으로 비디오나 슬라이드쇼의 콘테이닝 블록 너비 기반의 면적을 알아내는 것을 허가합니다.
규칙은 `<iframe>, <embed>, <video>, <object>` 에 직접 적용됩니다. 선택적으로 `.embed-responsive-item 를` 사용하세요.
유용한팁! <iframe> 에 frameborder="0" 포함할 필요가 없습니다. 우리가 오버라이드 하고 있습니다.

![component_responsive_embed_01](../images/component_responsive_embed_01.jpg)

```html
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

```


<br >
---

* [원문사이트 바로가기](http://getbootstrap.com/components/#responsive-embed)
* [부트스트랩 ReadMe](../README.md)

---
* 이전페이지 - 패널 [Panels](component_19_panelmark.md) 
* 다음페이지 - 웰 [Wells](component_21_wells.md)