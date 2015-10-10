# grunt-contrib-jshint

[grunt-contrib-jshint 원문](https://github.com/gruntjs/grunt-contrib-jshint)

`JSHint` 로 파일을 검증합니다.


***

## Getting Started

- 시작하기


이 플러그인은 `grunt` ~0.4.0 버젼이 필요합니다.

[Grunt](http://gruntjs.com/) 의 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile)을 만들뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-jshint --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-jshint');
```

***


## Jshint task

`grunt jshint` 명령으로 이 작업을 실행합니다.



작업대상 파일 및 옵션은 [Grunt 작업 구성가이드](http://gruntjs.com/configuring-tasks)에 따라 지정될 수 있습니다.


`JSHint` 의 오류에 대한 자세한 설명은 [jslinterrors.com](jslinterrors.com) 을 방문하십시요.


*****



## Options

모든 옵션은 [jshint](http://jshint.com/) 에 전달되고, `jshint` 가 지원하는 옵션을 지정할 수 있습니다.

지원되는 옵션의 목록은 [JSHint 문서](http://jshint.com/docs/) 를 참고하십시요.

몇 가지 추가 옵션이 지원됩니다





### globals

Type: `Object`

Default: `null`

이름과 같은 키와 부울값을 할당 할 경우 그것이 전역 변수인지 확인합니다.

이것은 세번째 인수로 `JSHINT` 함수에 전달되지만, 표준 JSHint 옵션이 아닙니다.

자세한 내용은 [JSHint 설명서](http://jshint.com/docs/)를 참조하십시오.




### jshintrc

Type: `String` or `true`

Default: `null`

`true` 로 설정하면, `jshint` 로 전송되지 않고, 설정된 파일 기준으로 `.jshintrc` 파일을 검색합니다.


파일 이름을 지정하면, 거거에 정의된 전역 옵션이 사용됩니다.


`jshintrc` 파일은 유효한 `json` 의 형태여야 합니다.


```javascript
{
	"curly": true,
	"eqnull": true,
	"eqeqeq": true,
	"undef": true,
	"globals": {
		"jQuery": true
	}
}
```

`jshintrc` 설정은 `Grunt` 옵션과 병합되지 않으니 주의하십시요.




### extensions

Type: `String`

Default: `''`

`non-dot-js` 확장의 목록을 검사합니다.




### ignores

Type: `Array`

Default: `null`

파일과 디렉토리 목록을 무시합니다. 설정 및 병합하지 않는 경우는 `.jshintignore` 파일을 대체합니다.




### force

Type: `Boolean`

Default: `false`

`true` 로 설정하면 `jshint` 오류를 보고하지 않지만 작업은 실패합니다.





### reporter

Type: `String`

Default: `null`

이 플러그인의 출력을 수정할 수 있습니다.

기본적으로는 내장된 `Grunt reporter` 를 사용합니다.

사용자 정의 리포터 또는 `jshint` 에 내장된 리포터 중 하나의 경로로 설정해야 합니다:  `jslint` 또는 `checkstyle`.

참조 : [자신의 JSHint 리포터를 작성](http://jshint.com/docs/reporters/)


또한 외부 리포터를 사용할 수 있습니다.
예를들어 [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) :

> 역자: 아래는 `jshint-stylish` 를 설치하고 사용하는 방법을 알려줍니다

```
$ npm install --save-dev jshint-stylish
```

```javascript
options: {
    reporter: require('jshint-stylish')
}
```



### reporterOutput

Type: `String`

Default: `null`

리포터 결과를 파일로 지정합니다. reporterOutput가 지정되면 모든 출력은 지정된 파일 경로에 기록하는 대신 표준 출력에 인쇄됩니다.






## Usage examples

- 사용 예




### Wildcards

이 예에서, `grunt jshint` 실행하는 `all` 은 `jshint` 의 기본 옵션으로, 프로젝트의 `Gruntfile.js` 뿐만아니라 `lib` 에 있는 모든 자바스크립트 파일과 `test` 디렉토리와 그것의 서브디렉토리를 검사 한다.

```javascript
// 프로젝트 구성
grunt.initConfig({
  jshint: {
    all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
  }
});
```

### Linting before and after concatenating

- 선 검사 후 병합

이 예에서, `grunt jshint` 의 실행은 "beforeconcat" 의 파일들을 "afterconcat" 로 설정합니다.
이것은 [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) 플러그인의 `concat` 작업으로 `dist/output.js` 가 만들어진 후에 검사되기 때문에 적합하지 않다.

이경우, 먼저 "beforeconcat" 파일들을 실행하고, `concat` 실행하고, 그런후에 "afterconcat" 파일들을 실행해야 합니다. 그러면 `grunt` 는 `jshint:beforeconcat` 작업하고 `jshint:afterconcat` 후에 합니다.

> 즉 `jshint` 플러그인을 먼저 실행하고, 그 후에 `concat` 플러그인을 실행하라는 이야기 인것 같습니다.

```javascript
// 프로젝트 구성.
grunt.initConfig({
	concat: {
		dist: {
			src: ['src/foo.js', 'src/bar.js'],
			dest: 'dist/output.js'
		}
	},
	jshint: {
		beforeconcat: ['src/foo.js', 'src/bar.js'],
		afterconcat: ['dist/output.js']
	}
});
```



### Specifying JSHint options and globals

- `jshint` 옵션 및 전역 설정

이 예에서 사용자정의 `jshint` 옵션을 지정합니다.

참고: `jshint:uses_defaults` 은 기본 옵션을 사용하고, `jshint:with_overrides` 는 해당 작업의 옵션으로 검사됩니다.

> 역자: `uses_defaults` 는 전역옵션을 사용하고, `with_overrides` 는 하위에 있는 지역옵션을 사용한다는 이야기 입니다.

```javascript
// 프로젝트 구성
grunt.initConfig({
	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			eqnull: true,
			browser: true,
			globals: {
				jQuery: true
			},
		},
		uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js'],
		with_overrides: {
			options: {
				curly: false,
				undef: true,
			},
			files: {
				src: ['dir3/**/*.js', 'dir4/**/*.js']
			},
		}
	},
});
```



### Ignoring specific warnings

- 특정 경고를 무시

특정 경고를 무시하려는 경우 :

```
[L24:C9] W015: Expected '}' to have an indentation at 11 instead at 9.
```

> 역자: 이것은 경고문구 입니다. 들여쓰기 세로라인을 의미하는것 같습니다. 
> '}' 대신 9에서 11로 들여쓰기하라는 경고 문구를 무시할때를 말하는것 같습니다.


옵션으로 경고 `id` 에 `-` 를 추가 할 수 있습니다.


```javascript
grunt.initConfig({
	jshint: {
		ignore_warning: {
			options: {
				'-W015': true,
			},
			src: ['**/*.js'],
		},
	},
});
```

## [릴리즈내역](https://www.npmjs.com/package/grunt-contrib-jshint#release-history)



***

- 이전글 [05_00_javascript_task](05_00_javascript_task)
- 다음글 [05_02_grunt_contrib_concat](05_02_grunt_contrib_concat)


