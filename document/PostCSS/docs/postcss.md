# PostCSS

PostCSS는 `JS 플러그인`으로 스타일을 변경하는 도구입니다. 이러한 플러그인들은 변수들과 믹스인들을 제공합니다. 향후의 CSS 문법, 인라인 이미지 등등을 트렌스 컴파일 합니다.

PostCSS는 구글, 트위터, 알리바바, 샵피파이 과 같은 인더스트리 리더들이 사용하고 있습니다.

PostCSS는 Sass, Less 그리고 Stylus와 같은 전처리기와 같은 동일한 작업을 할 수 있습니다. PostCSS가 모둘화 되어 있고, 3-30배 빠르고 파워풀 합니다.



# What is PostCSS
PostCSS는 무엇인가

PostCSS 자체는 매우 작은 프로그램 입니다. 그것은 CSS 파서, CSS 노드 트리 API, 소스 맵 생성기, 노드 트리 스트링파이어를 포함하고 있습니다.

모든 스타일 변형은 평범한 JS 함수인 플러그인에 의해서 이루어 집니다. 각각의 플러그인은 CSS 노드 트리를 받아서 변형하고 반환합니다.

`cssnext` 플러그인 팩을 사용해서 향후에 다음과 같은 CSS 코드를 사용할 수 있습니다.

```
:root {
    --mainColor: #ffbbaaff;
}
@custom-media    --mobile (width <= 640px);
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

.post-article :--heading {
    color: color( var(--mainColor) blackness(+20%) );
}
@media (--mobile) {
    .post-article :--heading {
        margin-top: 0;
    }
}
```


`Sass` 문법을 좋아한다면 다음과 같은 `PreCSS` 플러그인팩을 사용할 수 있습니다.

```
@define-mixin social-icon $network $color {
    &.is-$network {
        background: $color;
    }
}

.social-icon {
    @mixinsocial-icontwitter  #55acee;
    @mixinsocial-iconfacebook #3b5998;

    padding: 10px5px;
    @media (max-width: 640px) {
        padding: 0;
    }
}
```


## Features 특징

전처리기는 템플릿화 된 언어이고, PHP와 HTML이 사용되는 것처럼 스타일과 코드를 혼용해서 사용합니다.

반대로, PostCSS에서는 CSS의 부분집합을 사용할 수 있습니다. 모든 코드는 JS 플러기인 안에서 사용할 수 있습니다.

결과적으로, PostCSS 는 세가지의 장점을 제공합니다.

- 생산성: PostCSS 는 JS로 쓰여져 있고 `C++`로 쓰여진 `libsass`와 같이 같은 작업을 수행합니다.
- 향후 CSS: PostCSS 플러그인은 문서를 읽고 리빌드 할 수 있습니다. 그것은 새로운 언어의 특징을 제공할 수 있다는 것입니다. 예를 들어, `cssnext`은 최신의 `W3C` 드래프트를 현재의 CSS 문법으로 트랜스컴파일 합니다.
- 새로운 기능: PostCSS 플러그인은 스타일의 어떠한 부분도 읽고 변경할 수 있습니다.



## Usage 사용

두가지 단계를 거쳐서 PostCSS를 시작합니다.

- 1.도구를 빌드하기 위해서 PostCSS를 추가합니다.
- 2.아래의 리스트에서 플러그인 선택하고 PostCSS 과정에 추가합니다.

그런트, 걸프, 웹팩, 브로콜리, 브런치, ENB, Fly, 스타일러스, Meteor, Duo andConnect/Express와 같은 플러그인 이 있습니다.

```javascript
gulp.task('css', function () {
varpostcss=require('gulp-postcss');
returngulp.src('src/**/*.css')
    .pipe(postcss([ require('autoprefixer'), require('cssnano') ]) )
    .pipe(gulp.dest('build/') );
});
```


`postcss-js`는 React Inline Styles, Free Style, Radium 그리고 다른 CSS-in-JS 솔루션에서  PostCSS 플러그인을 사용합니다.

`<style>`태그와 HTML안의 인라인 스타일, 속성들 안에서 CSS를 사용하려면, `usinghtml-postcss`와  `gulp-html-postcss`를 고려해야 합니다.

다른 환경에서는 `CLI`도구와 `JS API`를 사용할 수 있습니다.

```javascript
varpostcss=require('postcss');
postcss([ require('autoprefixer'), require('cssnano') ])
    .process(css, { from:'src/app.css', to:'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.css', result.css);
        if ( result.map ) fs.writeFileSync('app.css.map', result.map);
    });
```

If you want to run PostCSS on node.js 0.10, add Promise polyfill:

```
require('es6-promise').polyfill();
varpostcss=require('postcss');
```




## Custom Syntaxes 사용자 설정 문법들
PostCSS는 CSS 안에서 뿐만 아니라 어떠한 문법으로도 스타일을 변경할 수 있습니다. 문법을 제어하기 위해서 `inprocess()` 메소드 안에 세가지 특별한 인자들이 있습니다. `input`파서와  `output` 스트링파이어를 구분하게 설정할 수 있습니다.

문법은 분석기와 함께 객체를 받아서 함수들을 스트링파이 합니다.
분석기는 input 분석 함수를 받습니다.
스트링파이어는 output 스트링파이어 함수를 받습니다.

```javascript
var safe =require('postcss-safe-parser');
postcss(plugins).process('a {', { parser: safe }).then(function (result) {
  result.css//=> 'a {}'
});
```

- `SCSS`와 작업하기 위해서 `postcss-scss`를 사용합니다. (`SCSS`를 `CSS`로 컴파일 하지 않습니다.)
- postcss-js는 인라인 스타일, Radium(래디엄), 프리스타일, 그리고 다른 CSS-in-JS를 대용하기 위해 사용합니다.
- postcss-safe-parser는 CSS 문법 에러를 수정하기 위해서 사용됩니다.
- midas는 CSS 문자열을 하이라이트된 HTML로 변환하기 위해 사용합니다.




## Plugins 플러그인

아래에 언급된 플러그인을 찾아보는 카타로그를 보려면 `postcss.parts`로 가세요.


### Control 컨트롤

PostCSS를 더 명료하게 만드는 두가지 방법이 있습니다.

`postcss-plugin-context`를 사용하여 플러그인의 로컬 스타일시트 맥락을 한정할 수 있습니다.

```
.css-example.is-test-for-css4-browsers {
    color: gray(255, 50%);
}
@context cssnext {
    .css-example.is-fallback-for-all-browsers {
        color: gray(255, 50%);
    }
}

/*Or enable plugins directly in CSS using postcss-use: */
@use autoprefixer(browsers: ['last 2 versions']);

:fullscreena {
    display: flex
}
```








## Packs 팩

* `atcss`는 특별한 주석에 따라서 CSS를 변형하는 플러그인을 포함하고 있습니다.
* `cssnano`는 상업적인 사용을 위해서 CSS 사이즈를 최적화하는 플러그인을 포함하고 있습니다.
* `cssnext`는 향후의 CSS를 오늘 사용할 수 있도록 하는 플러그인을 포함하고 있습니다.
* `oldie`는 당신의 CSS를 오래된 익스플로러 호환성에 맞게 변형해주는 플러그인을 포함하고 있습니다.
* `precss`는 Sass를 CSS로 사용할 수 있게 해주는 플러그인을 포함하고 있습니다.
* `rucksack`은 새로운 특성과 단축키로 CSS 개발을 빠르게 해주는 플러그인을 포함하고 있습니다.
* `level4`는 CSS4를 IE9 대비책 없이 쓸 수 있도록 하는 플러그인을 포함하고 있습니다.
* `short`는 다양한 약칭 속성들을 추가하고 확장합니다.
* `stylelint`는 당신의 스타일시트를 정리하는 플러그인을 포함하고 있습니다.


## Future CSS Syntax 향후의 CSS 문법

* `postcss-color-function` 은 색상을 변형하는 기능을 제공합니다.
* `postcss-color-gray` supports 는 `gray()`함수를 지원합니다.
* `postcss-color-hex-alpha` supports 는 `#rrggbbaa`와 `#rgba` 표기법을 지원합니다.
* `postcss-color-hwb` 는 `hwb()`를 호환성 있는 `rgb()`로 변형합니다.
* `postcss-color-rebeccapurple` 는 레베카퍼플(rebeccapurple) 색상을 지원합니다.
* `postcss-conic-gradient` 는 `conic-gradient` 배경을 지원합니다.
* `postcss-custom-media`은 미디어 쿼리의 사용자 지정 별칭을 지원합니다.
* `postcss-custom-properties`는 `W3C` 커스텀 속성들의 문법을 사용하여 변수를 지원합니다.
* `postcss-custom-selectors`는 셀렉터에 사용자 지정 별칭을 추가합니다.
* `postcss-extend`는 규칙, 플레이스홀더, spec-approximate `@extend`를 재귀적으로 지원합니다.
* `postcss-font-variant`는 CSS를 더 넑게 지원하기 위해서 사람이 읽을수 있는 `font-variant`를 트랜스컴파일 합니다.
* `postcss-host`는 새도우의 돔(DOM)을 생성합니다.: 호스트 셀렉터는 슈도 클래스(pseudo-classes)와 적절히 수행됩니다.
* `postcss-initial`은 키워드와 모든것을 초기화 합니다.: 상속된 스타일을 초기화 하기 위해서 입니다.
* `postcss-logical-properties`는 속성을 문서를 쓰는 방향에 따라서 왼쪽에서 오른쪽으로 속성을 변경합니다.
* `postcss-media-minmax`는 `<=` 와 `=>`를 미디어쿼리를 선언에 추가합니다.
* `postcss-pseudo-class-any-link`는 any-link 슈도 클래스를 추가합니다.
* `postcss-selector-not`는 CSS4 의 `:not()` 를 CSS3의 `:not()`로 변경합니다.
* `postcss-selector-matches`는 CSS4 :matches()를 더 호환성 있는 CSS로 변형합니다.
* `postcss-apply`는 사용자지정 속성 세트 레퍼런스를 지원합니다.
* `mq4-hover-shim`는 `@media (hover)` 속성을 지원합니다.

한줄의 코드로 향후 CSS 문법을 추가하려면 `cssnext` 플러그인 팩을 참조하세요.


## Fallbacks 대비책

* `postcss-color-rgba-fallback`는 rgba()를 헥사데시멀(hexadecimal)로 변형합니다.
* postcss-epub adds the -epub- prefix to relevant properties.(postcss-epub는 the -epub- prefix를 관련된 속성으로 추가합니다.)
* `postcss-fallback`는 중복되는 선언을 막기 위해서 대비책(fallback) 함수를 추가합니다.
* `postcss-mqwidth-to-class`는 min/max-width 미디어 쿼리를 클래스로 변환합니다.
* `postcss-opacity`는 IE8을 위해 투명도 필터를 추가합니다.
* `postcss-pseudoelements`는 IE8 호환성을 위해서 :: 셀렉터를 : 셀렉터로 변환합니다.
* `postcss-round-subpixels` 플러그인은 서브픽셀(sub-pixel) 값을 풀 픽셀(full pixel)과 가장 가까운 값으로 반올림 합니다.
* `postcss-unmq`는 IE8이하의 데스크탑 규칙을 보존하면서 미디어쿼리를 제거합니다.
* `postcss-vmin`는 IE9의 vmin 유닛의 vm 대비책를 생성합니다.
* `postcss-will-change`는 will-change 속성 전에 3D 핵을 삽입합니다.
* `autoprefixer`는 Can I Use로부터 데이터를 사용하여 벤더프리픽스를 추가합니다.
* `cssgrace` IE와 오래된 브라우저를 위해서 CSS3를 트랜스파일 하고 다양한 도움말을 지원합니다.
* `pixrem`은 `rem` 유닛을 위한 `pixel` 대비책를 지원합니다.

oldie(오래된 IE를 위한) 플러그인 팩도 볼 수 있습니다.



## Language Extensions 언어 확장팩
* `postcss-atroot`은 루트 노드에 직접적으로 규칙을 놓습니다.
* `postcss-bem`은 `BEM`과 `SUIT` 스타일 클래스를 위해서 `at-rules`를 추가합니다.
* `postcss-conditionals` 은 `@if구문을` 추가합니다.
* `postcss-css-variables`은 셀렉터를 위한 변수들과 W3C와 비슷한 문법을 사용하는 at-rules를 추가합니다.
* `postcss-define-property`는 속성의 단축키를 정의합니다.
* `postcss-each`는 `@each` 구문을 추가합니다.
* `postcss-for`는 `@for` 구문을 추가합니다.
* `postcss-at-rules-variables`는 사용자 속성 `@for`, `@each`, `@if`등을 지원합니다..

* postcss-functions enables exposure of JavaScript functions.
* postcss-local-constants adds support for localized constants.
* postcss-map enables configuration maps.
* postcss-match adds @match for Rust-style pattern matching.
* postcss-mixins enables mixins more powerful than Sass’, defined within stylesheets or in JS.
* postcss-media-variables adds support for var() and calc() in @media rules
* postcss-modular-scale adds a modular scale ms() function.
* postcss-nested unwraps nested rules.
* postcss-nested-props unwraps nested properties.
* postcss-nested-vars supports nested Sass-style variables.
* postcss-pseudo-class-enter transforms :enter into :hover and :focus.
* postcss-quantity-queries enables quantity queries.
* postcss-reverse-media reverse/Invert media query parameters.
* postcss-sassy-mixins enables mixins with Sass keywords.
* postcss-simple-extend lightweight extending of silent classes, like Sass’ @extend.
* postcss-simple-vars supports for Sass-style variables.
* postcss-strip-units strips units off of property values.
* postcss-vertical-rhythm adds a vertical rhythm unit based on font-size and line-height.
* csstyle adds components workflow to your styles.

See also precss plugins pack to add them by one line of code.


## Colors

* `postcss-ase-colors` replaces color names with values read from an ASE palette file.
* `postcss-brand-colors` inserts company brand colors in the brand-colors module.
* postcss-color-alpha transforms #hex.a, black(alpha) and white(alpha) to rgba().
* postcss-color-hcl transforms hcl(H, C, L) and hcl(H, C, L, alpha) to #rgb and rgba().
* postcss-color-hexa transforms hexa(hex, alpha) into rgba format.
* postcss-color-mix mixes two colors together.
* postcss-color-palette transforms CSS 2 color keywords to a custom palette.
* postcss-color-pantone transforms pantone color to RGB.
* postcss-color-scale adds a color scale cs() function.
* postcss-color-short adds shorthand color declarations.
* postcss-color-yiq sets foreground colors using the YIQ color space.
* postcss-colorblind transforms colors using filters to simulate colorblindness.
* postcss-contrast checks background-color and gives either white or black.
* postcss-hexrgba adds shorthand hex rgba(hex, alpha) method.
* postcss-rgb-plz converts 3 or 6 digit hex values to rgb.
* postcss-rgba-hex converts rgba values to hex analogues.
* postcss-shades-of-gray helps keeping grayscale colors consistent to a gray palette.
* colorguard helps maintain a consistent color palette.



## Images and Fonts

* postcss-assets allows you to simplify URLs, insert image dimensions, and inline files.
* postcss-assets-rebase rebases assets from url().
* postcss-at2x handles retina background images via use of at-2x keyword.
* postcss-copy-assets copies assets referenced by relative url()s into a build directory.
* postcss-data-packer moves embedded Base64 data to a separate file.
* postcss-image-set adds background-image with first image for image-set().
* postcss-image-inliner inlines local and remote images.
* postcss-instagram adds Instagram filters to filter.
* postcss-font-pack simplifies font declarations and validates they match configured font packs.
* postcss-fontpath adds font links for different browsers.
* postcss-responsive-images adds stylesheets for making your images responsive.
* postcss-sprites generates CSS sprites from stylesheets.
* postcss-svg insert inline SVG to CSS and allows to manage it colors.
* postcss-svg-fallback converts SVG in your CSS to PNG files for IE 8.
* postcss-svgo processes inline SVG through SVGO.
* postcss-url rebases or inlines url()s.
* postcss-urlrev adds MD5 hash strings to url()s.
* postcss-write-svg write inline SVGs in CSS.
* webpcss adds URLs for WebP images for browsers that support WebP.


## Grids

* postcss-grid adds a semantic grid system.
* postcss-simple-grid create grid with one line.
* postcss-neat is a semantic and fluid grid framework.
* lost feature-rich calc() grid system by Jeet author.


## Optimizations

* postcss-calc reduces calc() to values (when expressions involve the same units).
* postcss-import inlines the stylesheets referred to by @import rules.
* postcss-reference emulates Less’s [@import (reference)].
* postcss-partial-import inlines standard imports and Sass-like partials.
* postcss-single-charset ensures that there is one and only one @charset rule at the top of file.
* postcss-zindex rebases positive z-index values.
* css-byebye removes the CSS rules that you don’t want.
* css-mqpacker joins matching CSS media queries into a single statement.
* stylehacks removes CSS hacks based on browser support.

See also plugins in modular minifier cssnano.



## Shortcuts

* postcss-alias creates shorter aliases for properties.
* postcss-alias-atrules creates shorter aliases for at-rules.
* postcss-all-link-colors insert colors for link-related pseudo-classes.
* postcss-border adds shorthand for width and color of all borders in border property.
* postcss-center centers elements.
* postcss-circle inserts a circle with color.
* postcss-clearfix adds fix and fix-legacy properties to the clear declaration.
* postcss-crip shorthand properties for Crips that are too lazy to write.
* postcss-default-unit adds default unit to numeric CSS properties.
* postcss-easings replaces easing names from easings.net with cubic-bezier() functions.
* postcss-filter adds shorthand for black and white filter.
* postcss-focus adds :focus selector to every :hover.
* postcss-generate-preset allows quick generation of rules. Useful for creating repetitive utilities.
* postcss-input-style adds new pseudo-elements for cross-browser styling of inputs.
* postcss-position adds shorthand declarations for position attributes.
* postcss-property-lookup allows referencing property values without a variable.
* postcss-responsive-type changes font-size depends on screen size.
* postcss-short-font-size extends font-size to define line-height s a second value.
* postcss-short-position extends position to define edges as additional values.
* postcss-short-spacing extends margin and padding to allow or omitted edges.
* postcss-short-text adds a text shortcut property for several text-related properties.
* postcss-size adds a size shortcut that sets width and height with one declaration.
* postcss-transform-shortcut allows shorthand transform properties in CSS.
* postcss-triangle creates a triangle.
* postcss-verthorz adds vertical and horizontal spacing declarations.
* font-magician generates all the @font-face rules needed in CSS.



## Others

* postcss-autoreset automatically adds reset styles.
* postcss-class-prefix adds a prefix/namespace to class selectors.
* postcss-currency replaces name of currency with symbols.
* postcss-fakeid transforms #foo IDs to attribute selectors [id="foo"].
* postcss-flexboxfixer unprefixes -webkit- only flexbox in legacy CSS.
* postcss-flexbugs-fixes fixes some of known flexbox bugs.
* postcss-gradientfixer unprefixes -webkit- only gradients in legacy CSS.
* postcss-increase-specificity increases the specificity of your selectors.
* postcss-mq-keyframes moves any animation keyframes in media queries to the end of the file.
* postcss-pseudo-elements-content adds content: '' to :before-c and :after-c.
* postcss-pseudo-content-insert adds content: '' to :before and :after if it is missing.
* postcss-pxtorem converts pixel units to rem.
* postcss-select select rules based off a selector list.
* postcss-shorthand-expand expands shorthand properties.
* postcss-remove-prefixes removes vendor prefixes.
* postcss-style-guide generates a style guide automatically.
* postcss-scopify adds a user input scope to each selector.
* cssfmt formats CSS source code automatically inspired by Gofmt.
* perfectionist formats poorly written CSS and renders a “pretty” result.
* rtlcss mirrors styles for right-to-left locales.



## Analysis

* postcss-bem-linter lints CSS for conformance to SUIT CSS methodology.
* postcss-cssstats returns an object with CSS statistics.
* postcss-regexp-detect search for regexp in CSS declarations.
* css2modernizr creates a Modernizrconfig file that requires only the tests that your CSS uses.
* doiuse lints CSS for browser support, using data from Can I Use.
* immutable-css lints CSS for class mutations.
* list-selectors lists and categorizes the selectors used in your CSS, for code review.



## Reporters
* postcss-browser-reporter displays warning messages from other plugins right in your browser.
* postcss-reporter logs warnings and other messages from other plugins in the console.


## Fun
* postcss-australian-stylesheets Australian Style Sheets.
* postcss-andalusian-stylesheets Andalusian Style Sheets.
* postcss-canadian-stylesheets Canadian Style Sheets.
* postcss-german-stylesheets German Style Sheets.
* postcss-russian-stylesheets Russian Style Sheets.
* postcss-swedish-stylesheets Swedish Style Sheets.
* postcss-tatar-stylesheets Tatar Style Sheets
* postcss-lolcat-stylesheets Lolspeak Style Sheets.
* postcss-imperial adds CSS support for Imperial and US customary units of length.
* postcss-russian-units adds CSS support for russian units of length.
* postcss-pointer Replaces pointer: cursor with cursor: pointer.
* postcss-spiffing lets you use British English in your CSS.
* postcss-spanish-stylesheets Spanish Style Sheets.


# How to Develop for PostCSS
PostCSS를 개발하는 방법


## Syntax
* 사용자 지정의 문법을 사용하는 방법


## Plugin
* 플러그인 가이드라인
* 보일러플레이트(Boilerplate) 플러그인
* PostCSS API
* 질문하기


## Options 옵션

Source Map

PostCSS는 휼륭한 소스맵 지원을 갖고 있습니다.이전의 변형되는 단계에서의 맵을 읽고 해석할 수 있고, 당신이 기대하는 포맷을 자동으로 인식할 수 있고, 외부적으로 인라인맵으로나 출력할 수 있습니다.

명확한 소스맵을 생성하는 것을 보장하기 위해서, `from`과 `to`의 옵션을 각각 사용하여서 인풋과 아웃풋 CSS 파일 경로를 가리켜야 한다.

기본 옵션으로 새로운 소스맵을 생성하기 위해서, 단순이 `map:true`라고 셋팅합니다. 이렇게 함으로서 소스 내용을 담은 인라인 소스맵을 생성합니다. 인라인 맵을 원하지 않는다면, `setmap.inline:false`라고 설정합니다.


```scss
processor
    .process(css, {
from:'app.sass.css',
to:'app.css',
map: { inline:false },
    })
    .then(function (result) {
result.map//=> '{ "version":3,
//      "file":"app.css",
//      "sources":["app.sass"],
//       "mappings":"AAAA,KAAI" }'
    });
```    


PostCSS 가 소스맵은 이전의 변형된 것부터 찾는다면, 같은 옵션으로 소스맵을 자동으로 업데이트 할 것입니다.

소스맵 생성에 더 많은 제어를 하기 원한다면, 당신은 맵옵션을 다음과 같은 매개변수를 갖은 객체로 정의할 수 있습니다.

* inline boolean은 소스맵을 가리키고 소스맵은 Base64로 인코드되어야 합니다. 기본적으로, `true` 입니다. 이전의 맵들이 모두 외부적이였다면, 인라인이 아닙니다. PostCSS는 이 옵션을 설정하지 않았더라도 이 맵을 임베드하지 않을 것입니다. 인라인 소스맵을 갖고 있다면 result.map 속성은 비워지게 되고, 소스맵은 result.css라는 텍스트 안에 담겨지게 될 것입니다.

* prev string, object or boolean: source map content from a previous processing step (for example, Sass compilation). 전의 스트링, 객체, 혹은 불리언: 전 단계에서의 소스맵 컨텐트. (예를 들어, Sass 컴파일) PostCSS는 이전의 소스맵을 자동적으로 읽으려고 할 것 입니다. (CSS소스 안의 주석에 기반하여) 그것을 수동적으로 인식하기 위해서 이 옵션을 사용할 수 있습니다. 원한다면, `prev:false`로 전의 맵을 삭제할 수 있습니다.

* `sourcesContent boolean`은 PostCSS가 소스맵의 원본의 컨텐트를 설정해야 한다는 것을 의미합니다. (예를 들어, Sass 소스) 기본적으로 `true`이지만 모든 이전의 맵들은 소스 컨텐트를 포함하고 있지 않다면, 이 옵션을 설정하지 않는다 할지라도, PostCSS도 이 컨텐트를 포함하지 않을 것입니다.

* 주석 불리언 혹은 문자열은 PostCSS가 CSS에 주석을 추가해야 한다는 것을 의미합니다. 기본적으로, PostCSS는 항상 소스맵에 경로를 포함한 주석을 추가할 것입니다. PostCSS은 어떠한 주석도 갖고 있지 않은 CSS 파일에는 어노테이션(annotations)을 추가하지 않을 것입니다. 기본적으로, PostCSS는 당신이 소스맵을 `opts.to + '.map'`로 저장하기 원하는 것을 예상합니다. 어노테이션에 문자열을 제공함으서 다른 경로가 설정될 수 있습니다. `inline:true`로 설정되어 있다면, 어노테이션은 비활성화 될 수 없습니다.
