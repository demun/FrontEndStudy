# grunt-autoprefixer

[grunt-autoprefixer 원문](https://github.com/ndmitry/grunt-autoprefixer)

CSS를 파싱하고 데이터베이스를 이용하여 사전 지정한 CSS속성에 밴더를 추가할수 있습니다. Autoprefixer를 기반으로...


## Getting Started

- 시작하기

이 플러그인은 Grunt~0.4.0을 필요로 한다.
만일 이전에 Grunt를 사용한 경험이 없다면, [Gruntfile](http://gruntjs.com/sample-gruntfile)을 어떻게 생성하는가와 설치방법, 플러그인의 사용법 등을  설명하고 있는 [그런트 시작하기 가이드](http://gruntjs.com/getting-started)를 꼭 읽어보기 바란다. 그내용을 숙지했다면 아래의  명령어로 이 플러그인을 설치할 수 있을것이다.

```
npm install grunt-autoprefixer --save-dev  
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-autoprefixer');  
```

***



## The "autoprefixer" task




### Overview

- 살펴보기

당신의 프로젝트 Gruntfile에 grunt.initConfig().의 데이타오브젝트에 autoprefixer라는 이름의 섹션을 추가하라.

```javascript
grunt.initConfig({
	autoprefixer: {
		options: {
			// 작업별 옵션은 여기.
		},
		your_target: {
			// 대상-특정 파일 목록 및/또는 옵션은 여기.
		},
	},
})
```




## Options




### options.browser

타입: `Array`   디폴트값: [기본 브라우저](https://github.com/ai/browserslist)의 Array

아래와 같은 옵션으로 구체적인 브라우저를 지정할 수 있다.


```javascript
options: {
	browsers: ['last 2 versions', 'ie 8', 'ie 9']
}
```

아니면 프로젝트 루트에 browserslist라는 이름의 글로벌 config 파일을 사용할 수 있다.


```
# Browsers that we support

> 5% in US
Last 2 versions
```

[여기](https://github.com/ai/browserslist)에서 브라우저 리스트를 살펴볼 수 있다.




### options.cascade

타입: `Boolean` , 기본값: `true`

‘cascade’의 들여쓰기를 사용하지 않기 위해서는 false값을 지정한다. 
[더보기](https://github.com/postcss/autoprefixer#visual-cascade)




### options.remove

타입: `Boolean` 기본값: `true`

구버전의 prefixe를 자동으로 제거하지 않으려면 false값을 지정한다. 
[더보기](https://github.com/postcss/autoprefixer/releases/tag/4.0.0)





### options.diff

타입: `Boolean` | `String` 기본값: `false`

아웃풋 패치파일을 얻기 위해서는 값을 true로 설정한다.

```javascript
options: {
	diff: true // or 'custom/path/to/file.css.patch' 
}
```

또한 이파일을 저장한는 경로를 지정할 수 있습니다. [Gruntfile](https://github.com/nDmitry/grunt-autoprefixer/blob/master/Gruntfile.js) 의 더 많은 예제




### options.diff

타입: `Boolean` | `String` 기본값: `false`

아웃풋 패치파일을 얻기 위해서는 값을 true로 설정한다.


```javascript
options: {
	diff: true // or 'custom/path/to/file.css.patch' 
}
```

또한 이파일을 저장할 곳으로 경로를 규정할 수 있다.
[Gruntfile](https://github.com/nDmitry/grunt-autoprefixer/blob/master/Gruntfile.js) 샘플 더 보기 





### options.map

타입: `Boolean` | `Object`  기본값: `false`

map 옵션이 규정되지 않았거나 `false`로 설정되었다면 `Autoprefixer`는 소스맵을 생성하지도 업데이트 하지도 않는다.
만일 `true`로 설정한다면 `Autoprefixer`는 주석 커맨트를 이용한 이전 컴파일 단계에서 소스맵을 찾으려 할것이다(예: Sass로부터...) 

그리고 이전 찾았던것(아니면 순차로 형성된 새로운 소스맵을 생성하거나...)맵을 기본으로 한 새로운 소스맵을 생성한다. 이전 소스맵이 무었 이었나에 따라 그 생성된 소스맵은 분리되거나 바로 처리될 수 있다.

맵옵션에 객체를 세팅함으로써 소스맵의 생성(자동 생성?)을 넘어 보다 더 컨트롤이 가능하다.

- `prev` (`string` or `false`): 기존 소스맵이 있던 디렉터리 경로 (e.g. path/). 기본적으로 Autoprefixer는 주석문에 있는 경로를 통해 기존  소스맵을 찾으려고 한다.(또는 맵이 차례대로 처리되어 있을경우 주석의 코멘트 자체를 이용함) 
- `inline` (boolean): 소스맵이 인라인으로 처리되든 아니든 기본적으로 이전 소스맵에서 인라인 처리된 소스와 같다.
- `annotation` (string): 이 옵션은 주석 코멘트가 위치할 경로를 지정한다. 예: path/file.css.map (기본적으로 Autoprefixer가 자동 으로 소스맵을 CSS를 저장한 디렉토리에 저장한다). 이 옵션은 false나 미규정되기 위해서 인라인을 필요로 한다.
- `sourcesContent` (boolean): 오리지날 컨텐츠(예: Sass sources)라도 소스맵에 포함될 것이다. 기본적으로 Autoprefixer 가 새로운  소스맵이나 그것들을 포함하고 있는 이전 소스맵에만  콘텐츠를 추가할 것이다.





### options.safe

타입: `Boolean` 기본값: `false`

가능 또는 불가능 [PostCSS safe mode](https://github.com/postcss/postcss#safe-mode)
  
```javascript
options: {
  safe: true
}
```


추가 예제 프로젝트의 [Gruntfile.js](https://github.com/nDmitry/grunt-autoprefixer/blob/master/Gruntfile.js)를 확인하십시오.




### Updating prefixes database

```
npm update caniuse-db
```





***

- 이전글 [04_02_grunt_contrib_csslint](04_02_grunt_contrib_csslint.md)
- 다음글 [04_04_grunt_csscomb](04_04_grunt_csscomb.md)

