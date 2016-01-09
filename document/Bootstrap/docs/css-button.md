# Button

작성자 : 이기섭

작성일 : 2016-01-09


### 버튼 태그
`<a>`, `<button>`, `<input>` 요소에 버튼 클래스를 사용하세요.

[예제](http://codepen.io/luensys/pen/JGNvWM?editors=100)

```html
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">
```

```
문맥 특정 사용
버튼 클래스는 <a>, <button>에 사용되어지지만, 오직 <button>만이 네비게이션과 네비게이션바 콤포넌트에서 지원됩니다.
```
```
버튼처럼 작동하는 링크
만약 <a> 요소가 버튼처럼 사용된다면, 그들은 적절한 role="button"도 주어져야 합니다.
```
```
크로스브라우징 렝더링
크로스브라우저 렌더링에 맞춤을 확실히 하기위해 가능한 <button>에 사용하는 것을 강력히 추천합니다.
그 외에 파이어폭스에는 버그가 있습니다.
그것은 <input>의 line-height의 설정을 막기 때문에 파이어폭스의 다른 버튼의 높이와 정확하게 맞추지는 못합니다.
```

### 옵션

간편하게 스타일 버튼을 만들기 위해 사용가능한 버튼 클래스 중 하나를 사용하세요.

[예제](http://codepen.io/luensys/pen/yebjbJ?editors=100)

```html
<!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
```

```
보조 공학에 의미를 전달하는 것
버튼에 의미를 추가하기 위해 색을 사용하는 것은 시각적인 표시에만 제공이 됩니다.
색에의한 정보를 콘텐츠 자체에도 나타낼 수 있도록 하세요.
그리고 .sr-only로 텍스트를 숨길수도 있습니다.
```

### 크기

버튼을 크거나 작게 하려면, `.btn-lg`, `btn-sm`, `.btn-xs`를 추가하세요.

[예제](http://codepen.io/luensys/pen/VebxbB?editors=100)

```html
<p>
  <button type="button" class="btn btn-primary btn-lg">Large button</button>
  <button type="button" class="btn btn-default btn-lg">Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary">Default button</button>
  <button type="button" class="btn btn-default">Default button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-sm">Small button</button>
  <button type="button" class="btn btn-default btn-sm">Small button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-xs">Extra small button</button>
  <button type="button" class="btn btn-default btn-xs">Extra small button</button>
</p>
```

`.btn-block`을 더하는 것으로 블록레벨 버튼을 부모 요소 만큼 꽉 찬 너비로 만듭니다.

```html
<div class="well center-block" style="max-width: 400px;">
  <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
  <button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>
</div>
```

### 활성 상태

버튼은 활성화 되었을 때 눌러진 것처럼 보여질 것입니다. `<button>` 요소를 위해서 `:active` 를 사용할 수 있습니다.  
하지만 프로그램적으로 활성화된 상태를 적용할 필요가 있을 때 `.active`를 사용할 수 있습니다.  
(그리고 aria-pressed="ture" 속성도 포함합니다.)

##### 버튼 요소

`:active`를 더할 필요는 없습니다만, 만약 강제로 같은 모습이 필요하다면, `.active`를 추가하세요.

[예제](http://codepen.io/luensys/pen/qbmYjx?editors=100)
(이 예제는 아래의 앵커 요소 코드도 포함합니다.)

```html
<button type="button" class="btn btn-primary btn-lg active">Primary button</button>
<button type="button" class="btn btn-default btn-lg active">Button</button>
```

##### 앵커 요소

`<a>` 버튼에 `.active` 클래스를 추가하세요.

```html
<a href="#" class="btn btn-primary btn-lg active" role="button">Primary link</a>
<a href="#" class="btn btn-default btn-lg active" role="button">Link</a>
```

### 비활성화 된 상태

`opacity`로 흐려지게 하여 버튼을 클릭할 수 없는 것처럼 보여지게 만드세요.  
(보여지게만 하는 것이 아닌 실제 클릭이 되지 않습니다.)

##### 버튼요소

`<button>` 요소에 `disabled` 속성을 추가하세요.

[예제](http://codepen.io/luensys/pen/MKmGvj?editors=100)
(이 예제는 아래의 앵커 요소 코드도 포함합니다.)

```html
<button type="button" class="btn btn-lg btn-primary" disabled="disabled">Primary button</button>
<button type="button" class="btn btn-default btn-lg" disabled="disabled">Button</button>
```

```
크로스 브라우저 호환성
만약 <button>에 diabled 속성을 추가한다면, 인터넷 익스플로러 9 과 그 이하는 우리가 고칠 수 없는 이상한 텍스트 그림과 회색 텍스트가 랜더링 될 것입니다.
```

##### 앵커 요소

`<a>`버튼에 `.diabled`를 추가하세요.

```html
<a href="#" class="btn btn-primary btn-lg disabled" role="button">Primary link</a>
<a href="#" class="btn btn-default btn-lg disabled" role="button">Link</a>
```
우리는 유틸리티 클래스로 `.disabled`를 사용합니다. `.active`도 동일합니다. prefix는 필요하지 않습니다.

```
링크 기능성 경고
이 클래스(.diabled)는 <a>의 링크 기능성을 비활성화 하기 위해 pointer-events: none를 사용합니다.
그러나 이 CSS 속성은 아직 표준이 되지 않아 오페라 18과 이하 그리고 인터넷 익스플로러 11에서 환전하게 지원되지 않습니다.
추가로, pointer-events: none 를 지원하는 브라우저 조차도 키보드 네비게이션에는 효력이 없습니다.
그 말은 보조공학 사용자들은 여전히 이런 링크들에 접근할 수 있다는 얘기입니다.
안전하게 사용하려면, 그런 링크들을 비활성화 할 수 있는 맞춤 자바스크립트를 사용하세요.
```