# grunt-newer

[grunt-newer 원문](https://github.com/tschaub/grunt-newer)

> 작업중


Grunt 태스크를 가동시키려면 성공적으로 실행된 최종 파일 이후 수정된 소스파일들과 같이 실행하라 

새로운 newer파일들 하고만 함께 실행되도록 Grunt 태스크를 설정하라

Synopsis: newer 태스크가 또다른 태스크를 src파일(a, b)들과 함께 실행하기 위해 환경설정을 할것이다.
dest 파일보다 새로운 
최종 성공적으로 실행된 파일보다 새로운(dest파일이 없을 경우..)


## Getting Started

- 시작하기


이플러그인은 Grunt~0.4.1을 필요로 한다.
만일 이전에 Grunt를 사용한 경험이 없다면 gruntfile.js를 어떻게 생성하는가와 설치방법, 플러그인의 사용법등을 설명하고 있는 그런트 시작하기 가이드를 꼭 읽어보기 바란다.

그 내용을 숙지했다면 아래의 명령어로 이 플러그인을 설치할 수 있을것이다.

```
npm install grunt-newer --save-dev
```

그리고 플러그인이 설치되면 아래 자바스크립트 문구와 같이 gruntfile.js에 나타날 것이다.

```
grunt.loadNpmTasks('grunt-newer');
```



## The newer task

newer태스크는 어떤 특별한 설정도 필요로 하지 않는다. 사용하기 위해서는 다른 태스크가 실행될때 단지 newer를첫번째 인수로 추가하면 된다. 

예를 들어 이전 몇몇 파일들이 축소된 최종 파일보다 새로울때 소스를 축소하기 위하여 uglify를 사용하고자 한다면 uglify태스크를 환경설정하라, 그리고 맨앞에 새롭게 태스크를 등록하라.

```javascript
grunt.initConfig({
  uglify: {
    all: {
      files: {

        'dest/app.min.js': ['src/**/*.js']
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-newer');

grunt.registerTask('minify', ['newer:uglify:all']);
```


위의 설정으로 만일 하나 이상의 src/**/*.js파일들이 dest/app.min.js파일보다 새롭다면 축소된 태스크가 uglify를 실행시킬것이다.

위의 예에서  newer태스크가 어떻게 src와 dest파일을 규정하는 다른 태스크들과 함께 작업하는지 볼 수 있다. 이 케이스에서 보면 어떤 src파일들이 포함되어 있는지 알기 위해서 src파일들의 수정 시간과 상대적인 dest파일들의 수정시간과 비교된다.

newer태스크 또한 어떠한 dest파일도 생성하지 않는 태스크와 함께 사용될 수 있다.
이 케이스에서 newer는 같은 태스크의 최종 성공적으로 실행된 파일보다 새로운 파일들만을 사용하려한다.

예를 들어 최종적으로 성공적으로 실행된 이후 수정된 파일들에서만 JSHint를 실행하고자 한다면 jshint 태스크를 환경설정하라, 그리고 앞단에 새롭게 태스크를 등록하라.

```javascript
grunt.initConfig({
  jshint: {
    all: {
      src: 'src/**/*.js'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-newer');

grunt.registerTask('lint', ['newer:jshint:all']);
```

위의 설정과 함께 실행된 grunt lint 가 jshint(같은 태스크의 최종 성공적실행 이후 수정된 jshint.all.src config안의 파일들만을 사용하기 위한 모든 태스크들)를 설정할것이다. 

처음 jshint:newer(모든 태스크가 실행된다) 모든 소스 파일들이 사용되어진다. 그이후 수정한  그 파일들만이 linter를 통해 실행될것이다.

또다른 예는 watch접속사안의 newer태스크를 사용하기 위한 예이다. 예를 들어 하나라도 수정이 된 .js파일들에 linter를 실행하기 위해서는 watch를 셋업해야 할것이다.

newer태스크에서 모든 파일에 linter를 재실행 하는 대신에 변경된 파일에만 실행될 필요가 있다. 

```javascript
var srcFiles = 'src/**/*.js';

grunt.initConfig({
  jshint: {
    all: {
      src: srcFiles
    }
  },
  watch: {
    all: {
      files: srcFiles,
      tasks: ['newer:jshint:all']
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-newer');
``` 

위의 설정과 같이 실행중인 grunt jshint watch 가  jshint 와 함께 모든 파일을 첫번째 lint 할것이다. 그리고 watch를 셋업할 것이다. 소스파일에 어떤 변화라도 생기면 jshint태스크가 수정된 파일에만 실행되어질것이다.

노트: 만일 dest파일들과 함께 태스크가 설정되어지면 newer가 해당하는 dest파일보다 새로운 파일에만 실행되어질 것이다.


## Options for the newer task

대부분의 경우 `newer` 태스크를 위해 어떤 특별한 설정을 더할 필요가 없다.
`grunt.loadNpmTasks('grunt-newer')` 그리고 newer를 접미사로서 다른 태스크에 사용할 수 있다. 아래의 옵션들은 고급사용과정에서 사용할 수 있다. 


### options.cache

type: `string`
default: `node_modules/grunt-newer/.cache`

성공적인 실행을 위한 타임스탬프를 지속적으로 추적하기 위하여 `newer`태스크는 캐쉬 디렉토리에 기록한다. `grunt-newer`가 설치된 디렉터리에 `.cache` 디렉터리를 사용하는 것이 기본값이다.
만일 타임스탬프에 대한 정보가 다른 위치에 쓰여지길 원한다면 태스크의 캐쉬옵션을 설정하라.

`cache` 옵션에 대한 사용예:


```javascript
grunt.initConfig({
  newer: {
    options: {
      cache: 'path/to/custom/cache/directory'
    }
  }
});
```

### options.override

type: `function(Object, function(boolean))`
default: `null`

`newer`태스크가 파일 수정시간에 근거한 특정 태스크를 위해 포함한 파일을 결정한다.
파일이 수정이 안되었음에도 불구하고 어떤곳에 파일을 포함하고 싶을때가 발생한다.
예를들어 LESS파일이 몇몇 다른 파일을 이입하고 싶을때 어떠한 이입된 파일이 수정이 된다면 그것을 포함하고자 할 것이다.
이내용을 살펴보기 위해 2개의 인수를 가진 무효화 기능을 제공할수 있다.


- details - `Object`
    - task - `string` 현재 가동중인 태스크 명.
    - target - `string` 현재 가동중인 타겟.
    - path - `string` "older"(아래의 시간이후 수정되지 않은…)를 나타내는 src파일에 대한 경로.
    - time - `Date` 비교시간. `dest`파일의 태스크를 위해 이것은 `dest`파일의 수정 시간이다. `dest`파일이 없는 태스크를 위하여 이것은 같은 태스크의 최종 성공 실행시간이다.
- include - `function(boolean)` 이 `src` 파일이 포함되어져야 하는지에 대해 확인 시켜주는 콜백(재호출).



override 옵션에 대한 사용예:

```javascript
  grunt.initConfig({
    newer: {
      options: {
        override: function(detail, include) {
          if (detail.task === 'less') {
            checkForModifiedImports(detail.path, detail.time, include);
          } else {
            include(false);
          }
        }
      }
    }
  });
```

## That's it

- 알려드립니다.


만일 어떠한 문제점이 발견되면 [이슈사항](https://github.com/tschaub/grunt-newer/issues)을 보내주세요.
개선을 위한 기부나 제안을 환영합니다.




## Known limitations

- 알려진 제한 사항

`newer`태스크는 [src/dest 매핑](http://gruntjs.com/configuring-tasks#files)을 명시하기 위해 `Grunt`의 형식에 의존한다. 따라서 이것은 2가지 타입의 태스크와 함께 작동되리라 보면 된다.

1) `src`파일과 `dest`파일 모두를 명시하는 태스크. 이 경우에는 `newer`에 의해 프리픽스(접두어화?)된 태스크가 대응되는 `dest`파일보다 새로운 `src`파일과 함께 실행될수 있도록 설정될것이다.(파일의 `mtime`을 근거로한)


2) `src`파일만을 명시하는 태스크. 이 경우에는 `newer`에 의해 프리픽스(접두어화?)된 태스크가 동일 태스크의 이전 성공적인 실행파일보다 새로운 `src`파일을 수용하기 위해 설정되어 질것이다.

`newer` 태스크는 다음 작업의 접두사로 작동하지 않습니다 :

- [grunt-rsync](http://npmjs.org/package/grunt-rsync) - 이 태스크가 `src`파일과 `dest`파일을 명시할지라도 `dest` 파일은 `src`파일을 근거로 하여 생성되지는 않는다.(대신 그것은 디렉토리이다)


***

- 이전글 [08_00_최적화](08_00_최적화)
- 다음글 [08_02_grunt_concurrent](08_02_grunt_concurrent)

