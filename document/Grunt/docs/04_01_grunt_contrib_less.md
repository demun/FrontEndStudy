# grunt-contrib-less

[grunt-contrib-less 원문](https://github.com/gruntjs/grunt-contrib-less)

`LESS` 파일을 `CSS` 파일로 컴파일 합니다.


***

## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.5 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 의 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile)을 만들뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-less --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-less');
```

이 플러그인은 그런트의 0.4.x.와 함께 작동하도록 설계되었습니다.

v0.3.x 버젼을 사용하는 경우 `Grunt`를 [업그레이드](http://gruntjs.com/upgrading-from-0.3-to-0.4) 하는것이 좋습니다.
안그렇다면, [v0.3.2](https://github.com/gruntjs/grunt-contrib-less/tree/grunt-0.3-stable) 를 참고하세요.


***


## Less task

`grunt less` 명령은 `less` 작업을 실행합니다.

작업대상 파일 및 옵션은 [Grunt 작업 구성가이드](http://gruntjs.com/configuring-tasks)에 따라 지정될 수 있습니다.


***

### Options

- 옵션






***

#### paths

Type: `String` `Array` `Function` , Default: 입력 파일의 디렉토리

구문 분석 할 때 @import 지시어에 따른 디렉토리를 지정합니다. 기본값은 아마 당신이 원하는 소스의 디렉토리일겁니다.


이 기능을 지정하면 소스 파일 경로는 첫 번째 인수가 될 것입니다. 당신은 문자열이나 배열 경로 중 하나를 사용하고 반환 할 수 있습니다.





### rootpath

Type: `String` , Default: `""`

모든 URL 앞부분에 경로를 추가 한다.




### compress

Type: `Boolean` , Default: `false`

일부 공백을 제거하여 출력을 압축합니다.




### plugins

Type: `Array` , Default: `null`

플러그인을 허용합니다.





### ieCompat

Type: `Boolean` , Default: `true`

CSS의 출력은 인터넷 익스플로러 8과 호환되도록 적용합니다.

예를들어, data-uri 함수는 Base64 파일로 인코딩 하고 data-URI 로 생성된 CSS 파일로 임베드 한다

Internet Explorer 8을 제한 data-URI 을 32KB까지 제한 때문에, ieCompat 옵션이 초과되는 것을 막기때문이다.






### optimization

Type: `Integer` , Default: `null`

파서를 최적화 레벨로 설정합니다.

숫자가 낮을수록, 더 적은 노드는 트리에서 생성됩니다.

당신이 트리에서 개별 노드에 액세스하려는 경우 디버깅 문제, 또는 수 있습니다.







### strictImports

Type: `Boolean` , `Default: `false`

imports 를 강제 평가합니다.





### strictMath

Type: `Boolean` , Default: `false`

활성화하면, 연산은 괄호 안에 할 필요가있다.





### strictUnits

Type: `Boolean` , Default: `false`

활성화하면, 덜 사용되는 단위의 유효성을 검사합니다.







### syncImport

Type: `Boolean` , Default: `false`


@import 된 파일을 동기적으로 디스크에서 읽는다.





### dumpLineNumbers

Type: `String` , Default: `false`

-sass-debug-info 사용해서 구성합니다.

comments, mediaquery, all 값을 받습니다.







### relativeUrls

Type: `Boolean` , Default: `false`

상대적인 url 로 재작성합니다. 실패시 url 은 수정되지 않습니다.






### customFunctions

Type: `Object` , Default: `none`

LESS 는 스타일시트내에서 사용할 수 있도록 사용자 정의 함수를 정의합니다.

함수의 이름은 소문자 여야합니다.

정의에서 첫번째 인수는 less 객체이며, 이후의 인수는 less 함수 호출에서입니다.

함수에 전달 된 값은 타입내 정의하고, 리턴 값은 프리미티브 또는 이들 중 어느 하나 일 수있다.

사용 가능한 유형에 대한 자세한 내용은 less 설명서를 참조하십시오.





### sourceMap

Type: `Boolean` , Default: `false`

소스맵를 사용합니다.







### sourceMapFilename

Type: `String` , Default: `none`


주어진 파일 이름으로 별도의 파일에 소스맵를 작성합니다.






### sourceMapURL

Type: `String` , Default: `none`


컴파일 된 CSS 파일에서 소스맵을 가리키는 기본 URL을 재정의합니다






### sourceMapBasepath

Type: `String` , Default: `none`


소스맵 less 파일 경로에 대한 기본 경로를 설정한다.







### sourceMapRootpath

Type: `String` , Default: `none`


소스맵에 less 파일 경로에 이 경로를 추가합니다.






### outputSourceFiles

Type: `Boolean` , Default: `false`


이것을 참조하는 대신 맵에 less 파일을 저장합니다.





### modifyVars

Type: `Object` , Default: `none`


전역 변수를 대체합니다. less 옵션에서 --modify-vars='VAR=VALUE' 는 동등을 의미합니다.




### banner

Type: `String` , Default: `none`


***


## Usage Examples

- 사용예

```javascript
less: {
	development: {
		options: {
			paths: ["assets/css"]
		},
		files: {
			"path/to/result.css": "path/to/source.less"
		}
	},
	production: {
		options: {
			paths: ["assets/css"],
			plugins: [
				new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
				new require('less-plugin-clean-css')(cleanCssOptions)
			],
			modifyVars: {
				imgPath: '"http://mycdn.com/path/to/images"',
				bgColor: 'red'
			}
		},
		files: {
			"path/to/result.css": "path/to/source.less"
		}
	}
}
```

***

## [릴리즈 내역](https://www.npmjs.com/package/grunt-contrib-less#release-history)





***

- 이전글 [04_00_css_task](04_00_css_task)
- 다음글 [04_02_grunt_contrib_csslint](04_02_grunt_contrib_csslint)

