# 7.watch task

watch , connect 변경된 파일을 감시하여 실시간으로 동기화하고, 로컬서버로 연결하여 브라우져로 확인하는 예제와 방법입니다.



## watch

`watch` 모듈은 파일을 감시해서 실시간으로 재생산하께끔 해주는 모듈입니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
watch: {
    options: {livereload: true},
    gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['newer:jshint:grunt']
    },
    js: {
        files: ['app/js/**/*.js'],
        tasks: ['newer:jshint:dist','concat','uglify']
    },
    less: {
        files: ['app/less/**/*.less'],
        tasks: ['less','csslint','autoprefixer','csscomb','concat']
    },
    img: {
        files: ['app/images/**/*.{gif,jpeg,jpg,png}'],
        tasks: ['newer:imagemin']
    },
    html: {
        files: ['app/docs/**/*.html'],
        tasks: ['htmlhint','includes']
    }
},
```

* 설명

옵션으로는 `livereload: true` 로 설정해서 리로드가 되게끔합니다.

작업별로 `gruntfile`, `js`, `less`, `img`, `html` 지정했으며 실질적으로 작업하는 모든 파일을 감시합니다.



* 관련 문서를 참고세요.

[07_01_grunt_contrib_watch](07_01_grunt_contrib_watch)




## connect

`connect` 모듈은 서버를 이용해서 브라우져로 파일을 열수 있게끔 만들어줍니다.


`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
connect: {
    server: {
        options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729,
            // keepalive: true,
            base: 'dist',
            open: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>/category1/page-01.html'
        }
    }
},
```


* 설명

옵션으로는 포트와 호스트네임, livereload를 이용하고, `base` 로 목적지 디렉토리인 `dist` 를 지정했으며, `open` 으로 `page-01.html` 를 브라우져로 엽니다.



* 관련 문서를 참고세요.

[07_02_grunt_contrib_connect](07_02_grunt_contrib_connect.md)




***

- 이전글 [06_03_grunt_contrib_imagemin](06_03_grunt_contrib_imagemin.md)
- 다음글 [07_01_grunt_contrib_watch](07_01_grunt_contrib_watch.md)


