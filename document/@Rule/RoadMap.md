## 각 언어별 Load Map
> **모든 스터디에는 *sample 예제* 가 있어야 한다.**


### JQuery 실무

**특징(tutorial) 및 자주 쓰이는 함수**

  - [http://api.jquery.com/](http://api.jquery.com/) 을 참고.

**크게 3종류의 API가 있습니다.**   

  - JQuery API(공통 API)
  - JQuery UI API(UI 플러그인 관련) -  
  이걸 때셔야 플러그인 조사하실 때 쉽게 소스 분석할 수 있습니다.
  - JQuery Mobile API(모바일 UI 플러그인 관련)  
  반응형 / 모바일 웹 관련 API (최근에 나온거라 저도 안해봤음. 추후 따로 빼서 스터디 그룹하면 좋을듯)

**QUnit API (Jquery 단위 Test 관련 API)** - 중요하진 않으나 추후 스터디 고려는 할 수 있음

**Jquery Plugin**

- 오픈 소스용 또는 상용 버전의 Plugin들을 조사한다.    
  [http://plugins.jquery.com/](http://plugins.jquery.com/) 을 참조하여 조사함
    - 그래프(차트), 테이블(grid), datepicker, colorpicker, tree, multiselect 등의 UI 관련 plugin
    - Upload / downlaod 등의 ajax 관련 plugin
    - animation plugin
    - slider / responsive 관련 plugin 등
   


<br><br>

    

### Angular JS

* 교제 선정 및 그것을 중심으로 스터디 진행.
* 10/15(목)에 교제 선정 완료 및 로드맵 진행.
* 교제 선정 완료.
  - 프로 Angular JS
  - [http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788994774879&orderClick=LEA&Kc=](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788994774879&orderClick=LEA&Kc=)
* 스터디 진행 순서
  - Chapter 1에 나와있는 개발환경 세팅에 대한 실습 진행(node.js를 이용한 Connect 설치 및 구동 확인)
  - MVC 패턴에 대한 이해
  - RESTful 서비스 이해
  - 그 외 AngularJS 이해와 관련된 내용
  - Chapter6 ~ 8 까지는 빠르게 진행(한 타임에 다 하는 방향으로)
  - 그 후 중요한 사항 5가지를 놓고 각자 맡아서 진행할 계획
    - 탬플릿
    - 컨트롤러
    - 필터
    - 디렉티브
    - 뷰어
* 스터디 진행기간은 대략 4~5개월정도 예상  
_위 로드맵은 그런트 실습 후 다시 미팅을 할 것이며 Chapter 6 이후에 대한 부분은 중간에 수정될 수 있음_


<br><br>





### SASS 
* SASS 설치 및 설정 및 변환 방법
* SASS 기초(Tutorial)
 http://sass-guidelin.es/ko/#section-6 ,  http://sass-lang.com/guide 를 참고하여 스터디 
 - Preprocessing
 - Variables
 - Nesting
 - Partials
 - Import
 - Mixins
 - Inheritance
 - Operators
 - 조건문 `@if, @else if, @else`
 - 반복문
 - 경고와 오류
 - [Sass scripting](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sassscript):
    - '!global'
    - 보간법 `#{$selector}`


<br><br>


### postcss
 - https://github.com/postcss/postcss 를 참고로하여 스터디



#### [PostCSS Benchmarks](https://github.com/postcss/benchmark)

```sh
PostCSS:   61 ms
Rework:    72 ms   (1.2 times slower)
libsass:   129 ms  (2.1 times slower)
Less:      152 ms  (2.5 times slower)
Stylus:    161 ms  (2.6 times slower)
Stylecow:  171 ms  (2.8 times slower)
Ruby Sass: 1042 ms (17.0 times slower)
```

=

* [FrontEndStudy](../../../../)
