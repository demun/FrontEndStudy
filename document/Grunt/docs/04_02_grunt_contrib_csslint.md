# grunt-contrib-csslint

[grunt-contrib-csslint 원문](https://github.com/gruntjs/grunt-contrib-csslint)

> 이 문서는 `grunt-contrib-csslint` 문서와 규칙에 대한 부분을 모두 실었습니다. 페이지 이동없이 한페이지에서 모두 보기위해 작성되었습니다.  
> [grunt-contrib-csslint](https://www.npmjs.com/package/grunt-contrib-csslint) , [CSSLint Rules](https://github.com/CSSLint/csslint/wiki/Rules), [CSSLint Rules 번역](https://github.com/hyunchulkwak/csslint/wiki/규칙) 을 참고하였습니다.


***


## 규칙에 대한 전체 옵션

- important
- adjoining-classes
- known-properties
- box-sizing
- box-model
- overqualified-elements
- display-property-grouping
- bulletproof-font-face
- compatible-vendor-prefixes
- regex-selectors
- errors
- duplicate-background-images
- duplicate-properties
- empty-rules
- selector-max-approaching
- gradients
- fallback-colors
- font-sizes
- font-faces
- floats
- star-property-hack
- outline-none
- import
- ids
- underscore-property-hack
- rules-count
- qualified-headings
- selector-max
- shorthand
- text-indent
- unique-headings
- universal-selector
- unqualified-attributes
- vendor-prefix
- zero-units


***

## 규칙

[규칙 번역](https://github.com/hyunchulkwak/csslint/wiki/규칙)


***

### 발생할 수 있는 오류들

여러분의 CSS에서는 다음과 같은 오류들이 발생할 수 있습니다.

- 박스모델 사이즈에 대한 주의
- display와 함께 쓸 수 없는 속성
- 중복 속성
    - 공백 규칙
- 알려진 속성의 사용
- 잘못 작성된 :hover 선택자

*****

### 호환성

> 브라우저와 브라우저 셋팅간의 호환성 문제에 대한 규칙들입니다.

- 다중 선택자 문제
- box-sizing 속성의 사용
- 벤더 프리픽스의 사용
- CSS gradient의 적용
- text-indent를 이용한 숨김 텍스트 관련 주의점
- 벤더 프리픽스와 표준 속성의 입력
- color 속성의 적용
- Star(*) hack의 사용
_ hack의 사용
- 웹폰트 사용시 IE6~8 404 에러 (v0.9.10부터 적용)


*****


### 성능

- CSS 성능을 향상시키기 위한 규칙들입니다. 실행속도와 코드 사이즈에 관련된 내용을 다루고 있습니다.

- 지나치게 많은 웹폰트의 사용
- @import의 사용
- 정규표현식과 유사한 선택자의 사용
- 전체 선택자의 사용
- 부적격 선택자의 사용
- 값이 0인 경우 단위 제거
- 필요이상의 한정자(Qualifier) 사용
- 축약형 표현 사용
- 배경 이미지 주소의 반복적인 입력

*****

### 유지보수 측면

코드의 가독성과 유지보수에 도움을 주기 위한 규칙들입니다.


- float 속성의 잦은 사용
- 지나치게 많은 font-size 선언
- 선택자에 ID 사용
- !important의 사용

*****


### 접근성

접근성과 관련된 이슈를 찾아내기 위해 고안된 규칙입니다.

- outline:none의 사용

*****



### OOCSS(객체지향CSS)

OOCSS의 기본 규칙을 바탕으로 작성된 규칙입니다.

- 헤딩에 한정자 사용
- 헤딩에 관한 규칙은 한 번만 정의



*****

## 옵션 세부사항 

*****


#### 박스모델에 사이즈에 대한 주의

- 규칙(Rule) ID: `box-model`   

`width` 가 `border`, `border-left`, `border-right`, `padding`, `padding-left`, padding-right` 와 쓰면 안된다.

`height` 가 `border`, `border-top`, `border-bottom`, `padding`, `padding-top`, `padding-bottom` 과 쓰면 안된다.  

아래는 정상적으로 판단되는 경우.  

```css
/* width와 border를 box-sizing과 함께 사용한 경우 */
.mybox {
    box-sizing: border-box;
    border: 1px solid black;
    width: 100px;
}

/* width와 border-top */
.mybox {
    border-top: 1px solid black;
    width: 100px;
}

/* height와 border-top을 none으로 작성한 경우 */
.mybox {
    border-top: none;
    height: 100px;
}
```

*****

#### display와 함께 쓸 수 없는 속성 

- 규칙(Rule) ID: `display-property-grouping`    


`display: inline`에서는 `width`, `height`, `margin-top`, `margin-bottom`, `float` 속성은 아무런 효과가 없는데, 이는 인라인 요소(Inline element)는 이러한 스타일들을 적용할 박스를 가지고 있지 않기 때문입니다.   

`margin-left`와 `margin-right` 속성은 들여쓰기를 위해 여전히 사용될 수 있지만 그 외의 여백`(margin)` 속성들은 적용되지 않습니다.

- `display: inline-block` 은 `float` 와 함께 사용할 수 없다.
- `display: block` 은 `vertical-align` 을 사용할 수 없다.
- `display: table-*` 은 `margin` (및 그 변형들)이나 `float` 를 사용할 수 없다.  


```css
/* inline과 margin-left를 함께 작성한 경우 */
.mybox {
    display: inline;
    margin-left: 10px;
}
```


*****


#### 중복 속성

- 규칙(Rule) ID: `duplicate-properties`  

다음은 경고  

- 한 속성이 두 번 포함되고 같은 값을 가지는 경우
- 한 속성이 두 번 포함되었으며 최소한 하나의 속성에 의해 분리되어 있는 경우


다음은 정상인 경우  

```css
/* 다른 값을 가진 연속된 중복 속성 */
.mybox {
    border: 1px solid black;
    border: 1px solid red;
}
```

*****

- #### 공백 규칙 

- 규칙(Rule) ID: `empty-rules`    


아래는 오류. 

```css
.mybox { }

.mybox {

}

.mybox {
    /* a comment */
}
```

*****

#### 알려진 속성의 사용 

- 규칙(Rule) ID: `known-properties`   


아래와 같은 경우는 오류로 판단합니다.

```css
/* 알려지지 않은 속성의 사용 */
a {
    clr: red;
}

/* 잘못된 값의 입력 */
a {
    color: foo;
}
```


아래의 경우는 정상적인 것으로 판단합니다.

```css
/* -moz- is a vendor prefix, so ignore */
a {
    -moz-foo: bar;
}
```

*****

#### 잘못 작성된 :hover 선택자

- 규칙(Rule) ID: `non-link-hover`


아래와 같은 경우를 오류로 판단합니다.

```css
/* a 태그와 연결되지 않은 :hover 호환성 */
.test :hover{
    top: 10px;
}

.test .event-link:hover {
    top: 10px;
}
```

다음의 경우는 정상적으로 작성된 것으로 판단.

```css
/* a 태그에 연결된 :hover 선택자*/
.test a:hover{
    top: 10px;
}

.test a.event-link:hover {
    top: 10px;
}
```



***


#### 다중 선택자 문제

- 규칙(Rule) ID: `adjoining-classes`    

IE 6 및 이전 버전에서 오류를 만드는 다중 선택자와 관련된 문제를 해결하기 위한 규칙이다.

다중 클래스(Adjoining classes)는 `.foo.bar`와 같이 작성된다. 기술적으로는 지원되는 부분이지만, IE6와 이전 버전에서는 적절하게 작동하지 않는다.   


*****


#### box sizing 속성의 사용 

- 규칙(Rule) ID: `box-sizing`    


CSS `box-sizing` 속성(Property)는 `border`, `padding`, `width`, `height`가 어떻게 표현되는지를 정의하기 위해 사용된다.    
기본값은 `content-box`로 `width`와 `height`가 요소(Element)의 `content`를 포함하고, `padding`과 `border`가 여기에 더해진다.  

IE6, 7에서 `box-sizing` 속성이 지원되지 않기 때문에 이 속성이 사용되었다는 사실을 알려주는 규칙이다.


*****

#### 벤더 프리픽스의 사용 

- 규칙(Rule) ID: `compatible-vendor-prefixes`      

실험적인 CSS 속성(Property)은 최종적으로 동작이 결정되고 합의되기 전까지는 벤더 프리픽스(Vendor Prefixes)와 함께 제공된다.    
대부분의 CSS3 속성이 사용하는 벤더 프리픽스로 Firefox (`-moz`), Safari/Chrome (`-webkit`), Opera (`-o`), and Internet Explorer (`-ms`)가 있다.    


벤더 프리픽스 속성이 잘 입력되었는지 확인하는 규칙이다.  

*****


#### CSS gradient의 적용 

- 규칙(Rule) ID: `gradients`

5가지 그라디언트 벤더 프리픽스가 모두 작성되지 않은 경우에 오류로 판단합니다.

- Internet Explorer 10+: `-ms-linear-gradient`, `-ms-radial-gradient`
- Firefox 3.6+: `-moz-linear-gradient`, `-moz-radial-gradient`
- Opera 11.10+: `-o-linear-gradient`, `-o-radial-gradient`
- Safari 5+ and Chrome: -`webkit-linear-gradient`, `-webkit-radial-gradient`
- Safari 4+ and Chrome (Old WebKit): `-webkit-gradient`

*****

#### Color 속성의 적용 

- 규칙(Rule) ID: `fallback-colors`


다음의 경우를 오류로 판단합니다

- `rgba()`, `hsl()`, `hsla()`가 입력된 `color`속성 앞에 예전 방식으로 작성된 `color` 속성이 없는 경우
- `rgba()`, `hsl()`, `hsla()`가 입력된 `background` 속성 앞에 예전 방식으로 작성된 `color` 속성이 없는 경우
- `rgba()`, `hsl()`, `hsla()`가 입력된 `background-color` 속성 앞에 예전 방식으로 작성된 `color` 속성이 없는 경우


아래는 정상인식  

```css
/* 헥사코드 표기가 앞에 위치함 */
.mybox {
    color: red;
    color: rgba(255, 0, 0, 0.5);
}
```

*****

#### Star(*) hack의 사용 

- 규칙(Rule) ID: `1star-property-hack`

Star hack은 CSS 속성(Property)을 IE8 이전 버전에만 적용하기 위해 사용되는 잘 알려진 방법입니다.   

이 규칙은 CSS 상에서 star hack을 사용하지 않게 하는 것이 목적입니다.   
따라서 `속성명`과 `*`이 함께 입력되어 있는 경우에는 오류로 인식합니다.



*****

#### _ hack의 사용 

- 규칙(Rule) ID: `underscore-property-hack`   

이 핵은 IE7 이전 버전에만 CSS 속성(Property)을 적용하는 방법이다. 

이 규칙은 CSS 상에서 _ hack을 사용하지 않게 하는 것이 목적입니다.   
따라서 `속성명`과 `_`이 함께 입력되어 있는 경우에는 오류로 인식합니다.


*****

#### 웹폰트 사용시 ie6~8 404 에러 

- 규칙(Rule) ID: `bulletproof-font-face`

IE8 이하 버전에서 웹폰트 URL을 파싱하는 과정의 버그로 인해 발생하는 404 에러를 막기 위한 규칙입니다.

이 규칙은 첫번째 선언된 폰트가 쿼리 문자열이 함께 적혀있는 `.eot` 파일이어야 하고, 나머지 폰트에 대해서는 확인을 하지 않습니다.   
나머지 폰트의 순서는 불규칙적이므로 `.eot` 파일의 URL을 가장 먼저 적는다고 가정하고 있습니다.

이 규칙은 현재 작성은 되어 있지만 릴리스 전으로, 버전 0.9.10이나 1.0.0에서 공개될 것입니다.


아래와 같은 경우 오류로 판단합니다.

```css
@font-face {
    font-family: 'MyFontFamily';

    /* First web font is missing query string */
    src: url('myfont-webfont.eot') format('embedded-opentype'), 
        url('myfont-webfont.woff') format('woff'), 
        url('myfont-webfont.ttf')  format('truetype'),
        url('myfont-webfont.svg#svgFontName') format('svg');
}
```

아래의 경우는 정상이라고 판단합니다.

```css
@font-face {
    font-family: 'MyFontFamily';
    src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'), 
        url('myfont-webfont.woff') format('woff'), 
        url('myfont-webfont.ttf')  format('truetype'),
        url('myfont-webfont.svg#svgFontName') format('svg');
}
```



*****

#### 지나치게 많은 웹폰트의 사용 

- 규칙(Rule) ID: `font-faces`

웹폰트 파일의 용량이 상당하고 일부 브라우저에서는 다운로드 중에는 제대로 표현되지 않는 문제가 있기 때문에, `다섯개` 이상의 웹폰트가 사용되는 경우 CSSLint는 부적절하다고 판단합니다.


*****


#### @import의 사용 


- 규칙(Rule) ID: `import`  

이 규칙은 CSS에 @import가 이용되고 있으면 검토를 요구합니다.


브라우저가 두 개의 @import 앞에서 한번씩 멈춰서 입력된 파일을 내려받게 됩니다.    
이 때 브라우저는 이 다운로드가 끝나기 전에는 다른 스타일시트를 내려받을 수 없게 되고, CSS를 동시에 병렬로 다운로드 받을 수 없게 됩니다.


`@import`를 대신할 수 있는 두가지 방법은 다음과 같습니다.

- 배포전에 CSS 파일을 연결시켜주는 빌드 시스템 활용
- 여러 개의 <link> 태그를 이용하여 병렬로 다운로드 받을 수 있게 하는 방법

*****


#### 정규표현식과 유사한 선택자의 사용 

- 규칙(Rule) ID: `regex-selectors`


이 규칙은 성능에 영향을 줄 수 있는 선택자를 사용하는 경우에 검토를 요구하는데, 아래와 같이 `*=`, `|=`, `^=`, `$=`, `~=`가 사용되는 경우에 적용됩니다.


아래 두 경우는 성능에 영향을 미치지 않기 때문에 검토대상에서 제외합니다.

```css
.mybox[class=xxx]{
    color: red;
}

.mybox[class]{
    color: red;
}
```


*****

#### 전체 선택자의 사용 

- 규칙(Rule) ID: `universal-selector`

전체 선택자의 이용으로 인한 속도저하를 찾아냅니다.   
다음과 같이 전체 선택자가 선택자의 가장 오른쪽에 입력되는 경우 검토를 요구합니다.

```css
* {
    color: red;
}

.selected * {
    color: red;
}
```

다음의 경우는 문제되지 않습니다.

```css
/* 전체 선택자가 가장 오른쪽에 위치하지 않음 */
.selected * a {
    color: red;
}
```

*****

#### 부적격 선택자의 사용 


- 규칙(Rule) ID: `unqualified-attributes`  

부적격 선택자의 사용은 속도에 영향을 미치게 됩니다.  
따라서 이 규칙은 부적격 선택자가 가장 오른쪽인 키파트에 입력되었는지 확인합니다. 다음과 같은 경우에는 검토를 요구합니다.

```css
[type=text] {
    color: red;
}

.selected [type=text] {
    color: red;
}
```

다음의 경우는 정상적인 것으로 판단합니다.

```css
/* 부적격 선택자가 가장 오른쪽에 입력되어 있지 않음 */
.selected [type=text] a {
    color: red;
}
```

*****

#### 값이 0인 경우 단위 제거 

-규칙(Rule) ID: `zero-units`


이 규칙은 값이 0이면서 단위를 가지고 있는 경우를 찾아냅니다. 0px, 0em, 0%과 같은 경우 오류로 판단합니다.


*****


#### 필요이상의 한정자(qualifier) 사용 

- 규칙(Rule) ID: `overqualified-elements`

이 규칙은 선택자에 불필요하게 추가적으로 입력된 한정자(Qualifier)를 없애서 용량을 줄이는 것을 목표로 합니다.  
따라서 li.active처럼 요소와 클래스 명칭이 함께 쓰이면 문제로 판단합니다.  
그렇지만 li.active와 p.active처럼 두 개의 서로 다른 요소가 같은 클래스 명칭을 사용하는 경우에는 문제로 판단하지 않습니다.

다음의 경우는 문제로 판단합니다.

```css
div.mybox {
    color: red;   
}

.mybox li.active {
    background: red;
}
```

다음의 경우에는 정상적인 것으로 판단합니다.

```css
/* 두개의 다른 요소가 다른 규칙에서 같은 클래스 명칭을 사용하는 경우 */
li.active {
    color: red;
}

p.active {
    color: green;
}
```

*****

#### 축약형 표현 사용 


- 규칙(Rule) ID: `shorthand`

이 규칙은 하나로 합쳐질 수 있는 속성들을 찾아서 파일 용량을 줄이는 것을 목표로 합니다. 다음의 경우에는 문제로 판단합니다.

- 하나의 규칙에 `margin-left`, `margin-right`, `margin-top`, `margin-bottom`이 함께 쓰인 경우
- 하나의 규칙에 `padding-left`, `padding-right`, `padding-top`, `padding-bottom`이 함께 쓰인 경우


*****

#### 배경 이미지 주소의 반복적인 입력 


- 규칙(Rule) ID: `duplicate-background-images`

이 규칙은 같은 URL이 CSS에서 반복되지 않게 하는 것을 목표로 합니다.


다음의 경우는 문제로 판단합니다.

```css
/* 같은 URL이 여러번 반복되는 경우 */
.heart-icon {
    background: url(sprite.png) -16px 0 no-repeat;
}

.task-icon {
    background: url(sprite.png) -32px 0 no-repeat;
}
```

다음의 경우는 정상으로 판단합니다.

```css
/* 한 클래스에만 URL을 작성한 경우 */
.icons {
    background: url(sprite.png) no-repeat;
}

.heart-icon {
    background-position: -16px 0;
}
```

*****



#### Float 속성의 잦은 사용 

- 규칙(Rule) ID: `floats`

float가 얼마나 사용됐는지 확인해서 복잡도를 낮추는 것이 이 규칙의 목적입니다.  
float가 `10`번 이상 사용되면 문제로 판단하게 됩니다.  
이렇게 여러번 사용된 경우는 페이지에 세로로 쌓은 레이아웃이 많이 있으며, 그리드 시스템을 이용하는 것이 더 바람직하다는 점을 보여주는 것이기 때문입니다.


*****


#### 지나치게 많은 font size 선언 

- 규칙(Rule) ID: `font-sizes`

이 규칙은 폰트 사이즈 속성의 사용을 줄일 수 있는 기회를 찾고자 합니다.  
`font-size` 선언이 `10번 이상` 사용되면 문제로 판단합니다.

*****


#### 선택자에 id 사용 


- 규칙(Rule) ID: `ids`

이 규칙은 선택자에 ID를 사용하는 경우를 찾아내어 유지보수에 도움을 주는 것을 목적으로 합니다.  
ID가 사용된 모든 사례에 대해 경고합니다.

*****

#### !important의 사용 


- 규칙(Rule) ID: `important`

이 규칙은 !important의 사용을 억제하고자 하기 때문에, !important가 사용되는 모든 경우에 경고를 하게 됩니다.




*****


#### Outline:none의 사용 

- 규칙(Rule) ID: `outline-none`

이 규칙은 키보드만 사용하는 사용자에게 포커스를 이용한 시각적 설명을 보장하기 위한 규칙입니다. 다음의 경우 문제로 판단합니다.

- outline: none 또는 outline: 0이 작성된 규칙이 :focus를 포함하지 않는 경우
- outline: none 또는 outline: 0이 작성된 규칙이 :focus를 포함하지만 다른 속성을 포함하지 않는 경우





*****


#### 헤딩에 한정자 사용 


- 규칙(Rule) ID: `qualified-headings`

이 규칙은 한정자가 사용된 헤딩을 찾아내는 것을 목적으로 하여, 헤딩 요소가 마지막으로 작성되어 있는 선택자는 모두 찾아내게 됩니다.

문제로 판단

```css
/* 한정자를 사용한 헤딩 */
.box h3 {
    font-weight: normal;
}
```

*****

#### 헤딩에 관한 규칙은 한 번만 정의 

- 규칙(Rule) ID: `unique-headings`

이 규칙은 다음의 경우와 같이 반복적으로 같은 헤딩 요소에 규칙을 선언하는 경우 문제로 판단하게 됩니다.




***

- 이전글 [04_01_grunt_contrib_less](04_01_grunt_contrib_less)
- 다음글 [04_03_grunt_autoprefixer](04_03_grunt_autoprefixer)

