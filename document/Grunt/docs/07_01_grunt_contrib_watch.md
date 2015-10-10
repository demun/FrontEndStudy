# grunt-contrib-watch

[grunt-contrib-watch 원문](https://github.com/gruntjs/grunt-contrib-watch)

변경 또는 삭제,  파일 패턴이 추가 될 때마다 감시하여 미리 정의된 작업을 실행




## Getting Started

- 시작하기

이 플러그인은 Grunt~0.4.0을 필요로 한다.

만일 이전에 Grunt를 사용한 경험이 없다면, [Gruntfile](http://gruntjs.com/sample-gruntfile)을 어떻게 생성하는가와 설치방법, 플러그인의 사용법 등을  설명하고 있는 [그런트 시작하기 가이드](http://gruntjs.com/getting-started)를 꼭 읽어보기 바란다. 그내용을 숙지했다면 아래의  명령어로 이 플러그인을 설치할 수 있을것이다.

```
npm install grunt-contrib-watch --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-watch');
```

***

## Watch task

`grunt watch` 의 명령으로 이 작업을 실행 합니다.


### Settings

사용가능한 옵션들이 여기 있습니다.
[minimatch 옵션은 여기](https://github.com/isaacs/minimatch#options)를 참고하세요.
뿐만 아니라 다음과 같은 몇 가지 추가 옵션을 사용할 수 있다.



### files

Type: `String|Array`

이것은 어떤 파일의 패턴을 정의합니다.(이 작업은 관찰(watch) 할 것입니다.)
문자열이나 파일의 배열 그리고/또는 minimatch 패턴이 될 수 있습니다.



### tasks

Type: `String|Array`

이것은 파일 감시 이벤트가 발생할 때 실행되는 작업을 정의한다.



### options.spawn

Type: `Boolean` Default: `true`


자식 프로세스에서 작업 실행을 생성할지 여부를 지정합니다. 
이 옵션의 세팅은  false에 대한 감시반응 시간을 증가 시킴니다.(보통  대부분 500ms로 빠르다.)
그리고 후속 작업은 동일한 콘텍스트를 나누는 작업 입니다. 설정하지 않는 작업은, 작업진행이 실패하는 부분을 감시 할 수 있게 만듬니다. 필요에따라 사용하시면 됩니다.

예:

```javascript
watch: {
  scripts: {
    files: ['**/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
},
```

이전 버전과의 호환성을 위해 옵션 `nospawn` 옵션은 여전히 가능하며, `spawn` 옵션은 반대 입니다.


### options.interrupt

Type: `Boolean` , Default: `false`


파일이 수정되면, 이 감시업무가 자식 프로세스에서 작업을 생성할 것 입니다. 
이전 프로세스가 완료되면 기본 동작은 대상에 따라 새로운 자식 프로세스를 생성 합니다. 
`interrupt` 옵션을 `true` 로 설정하면, 이전 프로세스를 종료하고 나중에 변경되는 작업을 생성합니다.


에:

```javascript
watch: {
  scripts: {
    files: '**/*.js',
    tasks: ['jshint'],
    options: {
      interrupt: true,
    },
  },
},
```


### options.debounceDelay

Type: `Integer` , Default: `500`


같은 파일경로와 상태에 대한 연속 이벤트를 방출 하기 전에 대기하는 시간. 
예를 들어 당신의 `grunt file.js` 파일이 변경되면, 변경 이벤트는 주어진 밀리세컨드 후 다시 발생 됩니다.

에:

```javascript
watch: {
  scripts: {
    files: '**/*.js',
    tasks: ['jshint'],
    options: {
      debounceDelay: 250,
    },
  },
},
```



### options.interval

Type: `Integer` , Default: `100`


간격은 `fs.watchfile`에게 전달 됩니다. 
간격은 `fs.watchfile` 에 의해 사용되고, 이 감시자(watcher) 또한 `fs.watch`를 사용하기 때문에 이 옵션을 무시 하는 것이 좋습니다. 기본값은 100ms 입니다




### options.event

Type: `String|Array` , Default: `'all'`

지정된 작업 트리거 유형 감시 이벤트를 지정합니다. `'all'`, `'changed'`, `'added'` 와 `'deleted'` : 이 옵션은 하나 또는 다수 일 수 있습니다.

예:

```javascript
watch: {
  scripts: {
    files: '**/*.js',
    tasks: ['generateFileManifest'],
    options: {
      event: ['added', 'deleted'],
    },
  },
},
```



### options.reload

Type: `Boolean` , Default: `false`

기본적으로, `Gruntfile.js` 를 감시하는 경우, 다음에 대한 변경 사항은 감시 작업을 다시 트리거합니다 , 그리고 `Gruntfile.js`에 변경된것을 다시 로드합니다.
`reload: true` 로 설정하면, 감시 파일의 모든 변경 사항은 감시업무가 다시 트리거합니다.
이것은 다른 파일이 `Gruntfile.js` 에 의존하는 경우에 특히 유용합니다.


```javascript
watch: {
  configFiles: {
    files: [ 'Gruntfile.js', 'config/*.js' ],
    options: {
      reload: true
    }
  }
}
```



### options.forever

Type: `Boolean` , Default: `true`


이것은 단지 태스트 레벨옵션이며, 타겟 단위로 구성될 수 없습니다. 
기본적으로 감시 업무는 `punchgrunt.fatal` 를 닫고, `grunt.warn` 를 시도하고, 감시 프로세스에서 나가는 것을 막습니다. 당신이 `wantgrunt.fatal` 와 `grunt.warn` 이 오버라이드 되게 세팅하지 않는다면, `forever` 옵션을 `false`로 설정합니다.




### options.dateFormat

Type: `Function`

이것은 단지 작업 수준 옵션이며, 목표단위로 구성 할 수 없습니다 . 감시가 실행중인 작업을 완료 할 때 기본적으로 이 완료메시지를 표시합니다

함수 사용하는 경우:

```javascript
watch: {
  options: {
    dateFormat: function(time) {
      grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
      grunt.log.writeln('Waiting for more changes...');
    },
  },
  scripts: {
    files: '**/*.js',
    tasks: 'jshint',
  },
},
```



### options.atBegin

Type: `Boolean` , Default: `false`

이 옵션은 감시자의 시작시 지정된 각 작업의 실행을 트리거합니다.




### options.livereload

Type: `Boolean|Number|Object` , Default: `false`

`true` 또는 포트번호로 `livereload: 1337` 로 설정하여 라이브 리로드를 활성화 할수 있습니다. 기본 권장 포트는 35729 입니다


활성화되면 라이브 리로드 서버는 목표단위별 감시작업으로 시작됩니다. 표시된 작업을 실행 한 후 그 다음 , 라이브 리로드 서버는 수정된 파일로 트리거합니다.


[HTML에 livereload을 사용하는 방법](https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html)을 참조하십시오.

예:

```javascript
watch: {
  css: {
    files: '**/*.sass',
    tasks: ['sass'],
    options: {
      livereload: true,
    },
  },
},
```

`HTTPS` 연결을 통해 `livereload` 작업에 접근할 수 있습니다.
이렇게 하려면, 지정된 키와 인증서 경로를 `livereload` 객체에 전달합니다.

예:

```javascript
watch: {
  css: {
    files: '**/*.sass',
    tasks: ['sass'],
    options: {
      livereload: {
        port: 9000,
        key: grunt.file.read('path/to/ssl.key'),
        cert: grunt.file.read('path/to/ssl.crt')
        // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener 
      }
    },
  },
},
```



### options.cwd

Type: `String|Object` , Default: `process.cwd()`

기본값 `process.cwd` 는 현재 작업 디렉토리를 설정 하는 기능입니다.
`files` 및 `spawn` 작업이 일치하도록 `cwd` 를 설정하는 문자열 입니다.
아니면 객체는 각각 독립적으로 설정합니다.
이와 같은 옵션 `{ cwd: { files: 'match/files/from/here', spawn: 'but/spawn/files/from/here' } }`




### options.livereloadOnError

Type: `Boolean` , Default: `true`


실행 된 작업에 오류가 발생 하는 경우 `livereload` 옵션을 중지합니다. `false`로 설정하면 모든 작업이 성공적으로 완료되고, `livereload` 만 발생됩니다 .

예:

```javascript
// 파일을 추가, 변경 또는 삭제 될 때마다 jshint 실행하는 간단한 설정
grunt.initConfig({
  watch: {
    files: ['**/*'],
    tasks: ['jshint'],
  },
});
```

```javascript
// 고급 설정. 특정 파일이 추가, 변경 또는 삭제되는 특정 작업을 실행합니다.

grunt.initConfig({
  watch: {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint:gruntfile'],
    },
    src: {
      files: ['lib/*.js', 'css/**/*.scss', '!lib/dontwatch.js'],
      tasks: ['default'],
    },
    test: {
      files: '<%= jshint.test.src %>',
      tasks: ['jshint:test', 'qunit'],
    },
  },
});
```


### Using the watch event


감시 파일이 수정되었을 경우, 이 작업은 감시 이벤트를 발생 합니다 . 
파일을 편집 할 때 간단한 알림을 사용하려는 경우 또는 다른작업과 직렬로 사용하는 경우에 이 작업이 유용합니다. 
여기는 감시 이벤트를 사용하는 예제 입니다.


```javascript
grunt.initConfig({
  watch: {
    scripts: {
      files: ['lib/*.js'],
    },
  },
});
grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});
```

감시 이벤트를 구성하고 작업을 실행 하기 위한 표준 그런트 API를 대체 하기 위한 것이 아닙니다 . 
감시 이벤트 내에서 작업을 실행 하려는 경우, 잘못 할 가능성이 많습니다.  
환경설정 업무를 읽어 보십시오.




### Compiling Files As Needed


일반적인 요청은 필요한 파일만 컴파일 하는 것입니다. 
이것은 `jshint` 작업으로 파일를 변경하는 예 입니다.


```javascript
grunt.initConfig({
  watch: {
    scripts: {
      files: ['lib/*.js'],
      tasks: ['jshint'],
      options: {
        spawn: false,
      },
    },
  },
  jshint: {
    all: {
      src: ['lib/*.js'],
    },
  },
});
 
// on watch events configure jshint:all to only run on changed file 
grunt.event.on('watch', function(action, filepath) {
  grunt.config('jshint.all.src', filepath);
});
```


당신이 동적으로 설정을 수정해야 하는 경우, `spawn` 옵션은 동일한 컨텍스트에서 감시업무를 사용하지 않도록 설정해야 합니다 .
동시에 여러 파일을 저장하면 당신은 더 강력한 방법을 선택할 수 있습니다 :


```javascript
var changedFiles = Object.create(null);
var onChange = grunt.util._.debounce(function() {
  grunt.config('jshint.all.src', Object.keys(changedFiles));
  changedFiles = Object.create(null);
}, 200);
grunt.event.on('watch', function(action, filepath) {
  changedFiles[filepath] = action;
  onChange();
});
```



### Live Reloading


라이브 리로드는 감시업무에 내장되어 있습니다. 사용자 지정 포트 `livereload : 1337` 또는 기본 포트 `port35729` 를 사용하는것은  `livereload` 옵션 설정을 `true`로 설정합니다.

모든 감시 대상에 라이브 리로드를 추가 하는 가장 간단한 방법은 작업에서 `livereload` 를 `true`로 설정 하는 것입니다. 

이것은 모든 감시 대상에 대해서 라이브 리로드를 하나의 라이브 리로드 서버로 트리거합니다.



```javascript
grunt.initConfig({
  watch: {
    options: {
      livereload: true,
    },
    css: {
      files: ['public/scss/*.scss'],
      tasks: ['compass'],
    },
  },
});
```



또한 개별 감시대상에 대해 라이브 리로드를 구성하거나 다수의 라이브 리로드 서버를 실행할 수 있습니다. 
다른 포트에서 작동하는 여러 대의 서버를 시작하는 것과 같습니다 :


```javascript
grunt.initConfig({
  watch: {
    css: {
      files: ['public/scss/*.scss'],
      tasks: ['compass'],
      options: {
        // 기본 포트 35729에서 라이브 리로드 서버를 시작합니다
        livereload: true,
      },
    },
    another: {
      files: ['lib/*.js'],
      tasks: ['anothertask'],
      options: {
        // 포트 1337에 다른 라이브 리로드 서버를 시작합니다
        livereload: 1337,
      },
    },
    dont: {
      files: ['other/stuff/*'],
      tasks: ['dostuff'],
    },
  },
});
```



### Enabling Live Reload in Your HTML

- HTML 에서 라이브 리로드 기능 활성화

라이브 리로드 서버를 시작한 후에 라이브 리로드 스크립트에 액세스 할 수 있습니다.
페이지에 라이브 리로드를 사용하려면, `</body>` 태그 앞에 스크립트 태그를 추가하면 됩니다.

```html
<script src="//localhost:35729/livereload.js"></script>
```


템플릿에 스크립트를 추가하고 `dev` 플래그의 일종으로 전환.


### Using Live Reload with the Browser Extension

- 브라우저 확장과 라이브 리로드 사용

브라우져 확장기능 사용법과 설치는 [브라우져 확장기능 설치 도움말](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)를 방문하세요.

페이지에 스크립트 태그를 추가하는 대신, 브라우저 확장을 설치하여 페이지를 리로드 할 수 있습니다. 
확장 브라우저 인스톨 지원을 위하여 확장 브라우저의 사용과 인스톨을 하는 방법을 확인하기 위해 방문하여 주십시오.


일단 자동으로 `<script>` 태그를 필요로 하지 않고, 페이지를 다시 로드 할 기본 라이브 리로드 포트 35729 및 브라우저 확장기능을 설치하여 사용하시기 바랍니다  




### Using Connect Middleware

- 미들웨어(Middleware) 연결해서 사용하기

개발시, 라이브 리로드가 사용되므로, 당신은 제품을 위해 빌드를 비활성화 할 수 이습니다.(그리고 브라우저 익스텐션을 사용할수 없습니다.) 하나의 방법은 당신의 페이지에 스크립트 태그를 삽입하여 미들웨어 연계를 사용 하는것 입니다.
당신의 페이지에 라이브 리로드 스크립트를 주입하기 위한 `connect-livereload livereload middleware` 를 사용해보십시오.




### Rolling Your Own Live Reload

- 라이브 리로드 롤링(Rolling)


라이브 리로드는 라이브러리 [tiny-lr](https://github.com/mklabs/tiny-lr) 에 의해 쉽게 만들어 질 수 있습니다. 그것은 `tiny-lr`의 설명서를 참고 하십시오. 
당신이 라이브 리로드 서버를 직접 트리거하려는 경우, 단순히 `URL:http://localhost:35729/changed` 에 파일을 게시 할 수 있습니다.
또는 당신은 오히려 자신의 라이브 리로드를 롤합니다.

구현은 다음 예제를 사용 :

```javascript
// Create a live reload server instance 
var lrserver = require('tiny-lr')();
 
// Listen on port 35729 
lrserver.listen(35729, function(err) { console.log('LR Server Started'); });
 
// Then later trigger files or POST to localhost:35729/changed 
lrserver.changed({body:{files:['public/css/changed.css']}});
```




### Live Reload with Preprocessors

- 전 처리기(Preprocessors)와 라이브 리고침

감시 파일이 `livereload` 옵션을 사용하여 편집 할 때마다 이 파일은 라이브 리로드 서버로 전송됩니다.
당신이 원하는  몇가지 편집파일은 그러한 전처리 때와 같이 라이브로드 서버로 전송 해 왔습니다. (sass, less, coffeescript, etc).
As any file not recognized will reload the entire page as opposed to just the css or javascript.

감시 파일이 옵션이 사용가능한 라이버로드를 편집할 때마다, 파일은 라이브로드서버로 전송됩니다. 
당신이 원하는  몇가지 편집파일은 그러한 전처리 때와 같이 라이브로드 서버로 전송 해 왔습니다. (sass, less, coffeescript, etc). 인지되지 못한 파일은 CSS나 자바스크립트와 반대로 전체페이지를 리로드 할 겁니다.


솔루션은 대상 파일에 livereload 감시 대상을 가리킵니다 :

```javascript
grunt.initConfig({
  sass: {
    dev: {
      src: ['src/sass/*.sass'],
      dest: 'dest/css/index.css',
    },
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here 
      files: ['src/sass/*.sass'],
      tasks: ['sass'],
    },
    livereload: {
      // Here we watch the files the sass task will compile to 
      // These files are sent to the live reload server after sass compiles to them 
      options: { livereload: true },
      files: ['dest/**/*'],
    },
  },
});
```




## [FAQs](https://www.npmjs.com/package/grunt-contrib-watch#faqs)



## [릴리즈내역](https://www.npmjs.com/package/grunt-contrib-watch#release-history)





***

- 이전글 [07_00_watch_task](07_00_watch_task.md)
- 다음글 [07_02_grunt_contrib_connect](07_02_grunt_contrib_connect.md)


