# 4.css task

css 작업인 less , csslint , autoprefixer , csscomb , cssmin 사용방법 및 예제입니다.

`css` 를 만드는 작업입니다.



## less

`less` 는 `css` 를 만드는 작업입니다.


`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
less: {
    dist: {
        options: {
            banner: '<%= banner %>',
            dumpLineNumbers : 'comments'
        },
        src: 'app/less/style.less',
        dest: 'app/css/style.css'
    },
},
```
- 설명

`src` 는 소스코드의 경로입니다. `dest` 는 목적지 경로입니다. 즉 `src` 의 `less` 파일을 `dest` 폴더에 `css` 파일로 만듭니다.

옵션은 그런트에서 지원하는 변수인 `<%= banner %>` 를 이용해서 `css` 상단에 배너를 추가하고, 디버깅 할수있게 `dumpLineNumbers` 를 사용하여 `less` 파일의 경로를 표시하게 했습니다.



* 관련 문서를 참고세요.

[04_01_grunt_contrib_less](04_01_grunt_contrib_less.md)



## csslint

`csslint` 는 `css` 의 오류를 검사하는 모듈입니다.


`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascirpt
csslint: {
    options: {
        csslintrc: 'gruntConfig/.csslintrc'
    },
    dist: {
        src: '<%= less.dist.dest %>'
    }
},
```

* 설명

바로 위 작업인 `less` 작업의 `dist` 에서 소스파일을 가져옵니다. 

경로는 `<%= less.dist.dest %>` 로 사용하기도 하는데 이는 `less` 작업부분에서 `dist.dest` 부분이 경로가 됩니다.

그 부분을 가져와서 `csslint` 의 설정파일인 `.csslintrc` 로 검사를 합니다.



* 관련 문서를 참고세요.

[04_02_grunt_contrib_csslint](04_02_grunt_contrib_csslint.md)


## autoprefixer

`autoprefixer` 모듈은 크로스브라우징에 맞게 각 브라우져의 벤더를 삽입합니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
autoprefixer: {
     options: {
        browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24', // Firefox 24 is the latest ESR
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]
    },
    dist: { // app -> dest 이동
        expand: true,
        cwd: 'app/css/',
        src: ['*.css',],
        dest: 'dist/css/'
    }
},
```

- 설명

옵션으로 각 브라우져의 버젼에 맞게 설정을 하고, 동적매핑으로 `app/css` 폴더의 모든 css파일을  `dist/css` 에 만듭니다.



* 관련 문서를 참고세요.

[04_03_grunt_autoprefixer](04_03_grunt_autoprefixer.md)




## csscomb

`csscomb` 는 `css` 의 속성을 정렬해주는 모듈입니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
csscomb: {
    options: {
        config: 'gruntConfig/.csscomb.json'
    },
    dist: {
        src: '<%= autoprefixer.dist.dest %>',
        dest: '<%= autoprefixer.dist.dest %>'
    }
},
```

- 설명

`src` 는 소스폴더이고, `dest` 목적지 폴더입니다.

`csscomb` 의 설정이 들어있는 `.csscomb.json` 을 이용해서 정렬합니다.



* 관련 문서를 참고세요.

[04_04_grunt_csscomb](04_04_grunt_csscomb.md)




## cssmin

`cssmin` 모듈은 `css` 파일을 압축하는 모듈입니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
cssmin: {
    options: {
        // compatibility: 'ie8',
        keepSpecialComments: 1,
        // default - '!'가 붙은 주석은 보존,
        // 1 - '!'가 붙은 주석 중 첫번째 주석만 보존
        // 0 - 모든 주석 제거
        // noAdvanced: true,
    },
    dist: {
        src: '<%= csscomb.dist.dest %>',
        dest: 'dist/css/style.min.css'
    }
},
```

- 설명

주석에도 있듯이 '!'가 붙은 주석 중 첫번째 주석만 보존해서 css를 압축합니다.



* 관련 문서를 참고세요.

[04_05_grunt_contrib_cssmin](04_05_grunt_contrib_cssmin.md)

***

- 이전글 [03_02_grunt_htmlhint_option](03_02_grunt_htmlhint_option.md)
- 다음글 [04_01_grunt_contrib_less](04_01_grunt_contrib_less.md)

