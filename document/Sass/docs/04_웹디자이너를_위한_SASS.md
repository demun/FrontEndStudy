#웹디자이너를 위한 Sass 
- 저자. 댄 시더홈.  2014년 7월 발행.

###명령행대신 애플리케이션 사용하기

* [스카우트(Scout)](http://bkaprt.com/sass/6/) - Mac / Window 무료 데스크탑 애플리케이션.    
  독립된 루비환경을 제공하고, 몇번의 클릭으로 Sass 프로젝트를 관리합니다.

* [코드킷(CodeKit)](http://bkaprt.com/sass/7/)- Mac 전용    
  단순한 GUI에서 Sass, LESS, Stylus, Haml, 커피스크립트, 자바스크립트와 그밖의 파일을 컴파일해줍니다.   
  코드킷은 파일과 이미지르 최적하고 개발할때 자동으로 브라우저 새로고침 해주는 부가기능도 있습니다.     
* [라이브리로드(LiveReload)](http://bkaprt.com/sass/8/)- Mac / Window   
  Sass 컴파일 및 모든 파일의 변경사항을 모니터링, 브라우저를 새로고침해줍니다.

* [콤파스.앱(Compass.app)](http://bkaprt.com/sass/9/)- Mac / Window / Linux
  작은 메뉴바 애플리케이션으로 Sass파일을 감시하고 컴파일해줍니다.


### CSS 변수는 무엇인가요?
Sass와 그 외 CSS 전처리기들은 표준으로 제안할 만한 기능들을 테스트 할 수 있습니다. 즉, Sass는 아직 명세서에 존재하지 않는 기능들을 구현하면서 작업을 진행할 수 있습니다. 

Sass와 LESS에서 변수가 잘 활용되고 있기 때문에 공식적인 CSS기능으로 변수를 포함하자는 주장이 펼쳐지고 있고, 현재 W3C작업 초안중인 'CSS 변수모듈레벨1'이 개발진행중이며 (http://bkaprt.com/sass/11/) 최신 웹킷 시험버전인 나이틀리 빌즈(Nightly Builds)에서 변수에 대한 지원이 실행되기 시작했습니다. 

### 미디어쿼리

#### 해상도 분기점을 변수로 설정하기 

```SCSS

// 해상도 분기점을 변수로 설정. 
$width-small : 500px;
$width-medium: 800px;
$width-large: 1200px;

```
사용 예제 :

```SCSS

// _style.scss

section.main {
	font-size:16px;
	line-height: 1.4;

	@media screen and(max-width: $width-large){
		float: left;
		width: 65% 
	}
	@media screen and(max-width: $width-medium{
		float: none;
		width: auot;
	}
	@media screen and(max-width: $width-small){
		font-size: 12px;
		width: 1.4; 
	}
}

```
컴파일

```CSS

// _style.css

section.main {
	font-size:16px;
	line-height: 1.4;
}
@media screen and(max-width:1200px){
	float: left;
	width: 65% 
}
@media screen and(max-width: 800px){
	float: none;
	width: auot;
}
@media screen and(max-width: 500px){
	font-size: 12px;
	width: 1.4; 
}

```

나중에 해상도 분기점을 수정할 경우 변수값을 딱 한번만 고치면 Sass가 알아서 그 값이 사용된 모든곳을 업데이트 해줄 것입니다.    
연산도 가능해서 해상도 분기점의 값을 더하거나 뺼 수 있습니다. 

```SCSS

// _style.scss


@media screen and(max-width: $width-small + 1){
	font-size: 12px;
	width: 1.4; 
}
@media screen and(max-width: $width-small - 1){
	font-size: 12px;
	width: 1.4; 
}
```
컴파일

```CSS

// _style.css

@media screen and(max-width: 501px){
	font-size: 12px;
	width: 1.4; 
}
@media screen and(max-width: 499px){
	font-size: 12px;
	width: 1.4; 
}
```
좀 더 응용해서 미디어쿼리 전체를 변수로 지정할 수도 있습니다. 

```SCSS

// _style.scss

$mobile-first: "screen and (min-widht: 300px)";

@media #{$movile-first}{
	#content {
		font-size:14px;
		line-height:1.5;
	}
}
```
```CSS

// _style.css

@media screen and (min-widht: 300px){
	#content {
		font-size:14px;
		line-height:1.5;
	}
}
```

#### @content블록과 믹스인 결합시키기. 

`@content` 지시자를 사용해서 스타일 블록 전체를 믹스인으로 넘길 수 있습니다.   
Sass는 컴파일 하면서 그 블록을 믹스인을 호출하는 선언 안에 다시 넣을 것 입니다.   

아래는 예시입니다. 서로다른 3개의 해상도 분기점을 가진 반응형 믹스인을 만들고 각 해상도 분기점에 포함시킬 스타일을 `@content`에 담아 제어합니다. 

```SCSS

$width-small : 400px;
$width-medium: 760px;
$width-large: 1200px;

@mixin responsive($width){
	@if $width == wide-screens{
		@media only screen and ( max-width: $width-large){
			@content;
		}
	}
	@else if $width == medium-screens{
		@media only screen and ( max-width: $width-medium){
			@content;
		}
	}
	@else if $width == small-screens{
		@media only screen and ( max-width: $width-small){
			@content;
		}
	}

}

```

믹스인을 삽입할 대 넘겨줄 $width 변수의 값을 확인하기 위해 @if와 @else 문을 사용합니다. 
예를 들어 우리가 믹스인에 medium-screen 변수를 넘겨주면 Sass는 $width-medium 변수에 설정한 값인 `760px`을 `max-width`에 넣어 미디어쿼리를 컴파일할 것입니다. `@content`는 더 나아가 미디어쿼리를 삽입할 믹스인에 스타일 블록을 넘겨줄 수 있습니다. 

```SCSS

#content{
	float:left;
	width: 70%;
}
@media only screen and ( max-width: 1200px){
	#content{
		width:80%;
	}
}
@include responsive(wide-screens){
	#content{
		width:50%;
		font-size:14px;
	}
}
@include responsive(wide-screens){
	#content{
		float:none;
		width:100%;
        font-size:12px;
    }
}
```
컴파일 

```Css

#content{
	float:left;
	width: 70%;
}
	@include responsive(wide-screens){
		width:80%;
	}
	@include responsive(wide-screens){
		width:50%;
		font-size:14px;
	}
	@include responsive(wide-screens){
		float:none;
		width:100%;
        font-size:12px;
	}
}
```



###retinize 믹스인 

```SCSS
	
@mixin retinize($file, $type, $width, $height){ //4개의 인자설정 
	background-image:url('../img/' + $file + '.' +$type);
    //제조사 접두어 속성
	@media (-webkit-min-device-pixel-ratio: 1.5),
	       (min--moz-device-pixel-ratio: 1.5),
	       (-o-min-device-pixel-ratio: 3/2),
	       (min-device-pixel-ratio: 1.5),
	       (min-resolution: 1.5dppx){

		&{
			background-image: url('../img/' + $file + '-2x.' +$type);
			-webkit-background-size: $width $height;
			   -moz-background-size: $width $height;
			        background-size: $width $height;
		}
	}
}

```

```SCSS
	
// retinize 믹스인 사용예제 

	li.dribbble a{
		@include retinize('icon-dribbble', 'png', 24px, 24px);
	}

```

위의 retinize 믹스인안에 믹스인을 넣어 코드를 한단계 더 줄여봅시다. 

```SCSS
	
@mixin retinize($file, $type, $width, $height){ 
	background-image:url('../img/' + $file + '.' +$type);
    
    //픽셀의 밀도부분을 재사용 가능한 변수로 변경 
	@media  #{$is-hidpi} { 

		&{
			background-image: url('../img/' + $file + '-2x.' +$type);
			//background-size를 믹스인으로 변경
			@include background-size($width,$height)
		}
	}
}

```
```SCSS
$hidpi: "(-webkit-min-device-pixel-ratio: 1.5),
         (min--moz-device-pixel-ratio: 1.5),
         (-o-min-device-pixel-ratio: 3/2),
         (min-device-pixel-ratio: 1.5),
         (min-resolution: 1.5dppx)"

$mixin background-size($width, $height) {
	-webkit-background-size: $width $height;
	   -moz-background-size: $width $height;
	        background-size: $width $height;
}
```


##참고문서 
####웹사이트와 블로그 
* [Sass 참고문서](http://bkaprt.com/sass/15/)
  Sass에 관한 모든 정보가 있는 공식 문서. 

* [The Sass Way](http://bkaprt.com/sass/16/)
  'Sass와 콤파스를 이용한 Css 작성법에 대한 최신 소식과 주제를 다룹니다' ' 

* [Css Tricks](http://bkaprt.com/sass/17/)
  Css를 직접 작섷ㅇ하는 분들에게 Sass가 얼마나 유용한지에 대해 유사한 고나점을 공유할 수 있습니다. 
  크리스 코이어의 [스타일 가이드](http://bkaprt.com/sass/18/) 입니다. 

* [Sass 조립하기](http://bkaprt.com/sass/19/)
  기초부터 고급까지 배울 수 있는 코드 스쿨(coad school)의 종합코스입니다.

* [Sass 시작하기](http://bkaprt.com/sass/20/)
  데이비스 디마리(David Demaree)가 어 리스트 어파트(A List Apart)에 기고한 훌륭한 입문자용 글입니다. 

* [Sass의 미래 들여다 보기](http://bkaprt.com/sass/21/)
  데이비드 월시(David Walsh)는 Sass의 향후 버전에서 새로 추가도리 기능들ㅇ르 평가해줍니다. 


####믹스인 라이브러리 

* [콤파스.프레임워크(Compass.framwork)](http://bkaprt.com/sass/22/)
  콤파스는 크리스 엡슈타인(chris eppstenin)이 만든 Sass 확장프레임워크.  
  콤파스는 미리 작성된 수많은 Css 패턴들을 제공합니다. 이 패턴들은 각 속성이 진화하면서 업데이트 되고 이에 맞추어 개발사 접두어도 사제 가능합니다.   
  콤파스는 스프라이트 이미지와 서체를 쉽게 작업하도록 해줍니다. 

* [버번 라이브러리(Bourbon)](http://bkaprt.com/sass/23/)
  '간단하고 가벼운 Sass용 믹스인 라이브러리'라고 홍보하는 버번은 보스턴 동료들의 회사인 소트봇 (thoughtbot)을 통해 엄청난 믹스인 자료를 제공합니다. 
 
* [Handy Sass Mixins](http://bkaprt.com/sass/24/)
  제이크 브레스너한(Jake Bresnehan)의 멋진 Sass 믹스인 컬렉션 입니다.

####Sass와 반응형 디자인에 대한 추가자료.

[Sass의 반응형 웹디자인과 미디어 쿼리에 관한 글 1](http://bkaprt.com/sass/25/)
[Sass의 반응형 웹디자인과 미디어 쿼리에 관한 글 2](http://bkaprt.com/sass/26/)

* [Breakpoint](http://bkaprt.com/sass/27/)
  Sass 플러그인으로 미디어 쿼리를 좀 더 간단히 작성하게 해줍니다.

* [Susy](http://bkaprt.com/sass/28/)
  콤파스와 Sass의 동반자로 반응형 그리드 시스템을 만드는데 도움을 줍니다.

* [Sassaparilla](http://bkaprt.com/sass/29/)
  갓 서비스하기 시작한 프레임워크로 콤파스와 Sass를 이용한 반응형 웹 디자인 프로젝트를 생성합니다.

####Sass툴

* [파이어버그를 위한 파이어사스](http://bkaprt.com/sass/30/)
  디버깅 용도로 유용한 파이어폭스 애드온. 원본 Sass 파일명과 Sass로 컴파일된 스타일시트의 줄번호를 표시해줍니다.

* [Sass와 크롬 개발자도구로 개발하기](http://bkaprt.com/sass/31/)
  Sass로 개발하는 동안 크롬을 가장 활용할 수 있는 방법에 대해 알려주는 튜토리얼. 