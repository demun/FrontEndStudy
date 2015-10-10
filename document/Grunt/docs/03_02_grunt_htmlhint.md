# grunt-htmlhint

[grunt-htmlhint 원문](https://github.com/yaniswang/grunt-htmlhint)

`html` 을 `htmlhint` 로 검증합니다.


***

## Getting Started

- 시작하기

이 플러그인은 `grunt` ~0.4.1 버젼 이상이 필요합니다.

[Grunt](http://gruntjs.com/) 의 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile)을 만들뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-htmlhint --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-htmlhint');
```



## The "htmlhint" task


### Overview

- 개요

프로젝트의 `Gruntfile` 에서 `grunt.initConfig()` 에 전달된 데이터 객체에 `htmlhint` 색션을 추가할 수 있습니다.




### Options

규칙은 다음 주소를 참고하세요. : [https://github.com/yaniswang/HTMLHint/wiki/Rules](https://github.com/yaniswang/HTMLHint/wiki/Rules)

[https://github.com/yaniswang/HTMLHint/wiki/Rules 번역](https://github.com/yaniswang/HTMLHint/wiki/Rules)

옵션이 비어있으면 아무작업도 하지 않습니다.



#### options.htmlhintrc

Type: `String` , Default `value: null`

파일 이름을 지정하면, 전역으로 지정된 옵션이 사용됩니다.

작업 및 대상 옵션은 `htmlhint` 파일내에 지정된 옵션으로 대체합니다.

`htmlhint` 파일은 유효한 `json` 의 형태여야 합니다.

```javascript
{
  "tag-pair": true,
}
```


### options.force

Type: `Boolean` , Default `value: false`

`htmlhint` 에 `errors` 가 발생하면 작업하지 않습니다.(Report HTMLHint errors but dont fail the task)



### Usage Examples

- 사용 예


### Direct options

- 직접적인 옵션의 사용예제

```javascript
htmlhint: {
	html1: {
		options: {
			'tag-pair': true
		},
		src: ['path/to/**/*.html']
	  },
	html2: {
		options: {
			'tag-pair': true
		},
		src: ['path/to/**/*.html']
	}
}
```




### Config file

- 설정 파일을 포함한 예제

```javascript
htmlhint: {
	options: {
		htmlhintrc: '.htmlhintrc'
	},
	html1: {
		src: ['path/to/**/*.html']
	},
	html2: {
		src: ['path/to/**/*.html']
	}
}
```



***

- 이전글 [03_01_grunt_includes](03_01_grunt_includes)
- 다음글 [03_02_grunt_htmlhint_option](03_02_grunt_htmlhint_option)
