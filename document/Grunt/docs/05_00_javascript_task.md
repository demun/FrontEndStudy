# 5.javascript task

javascript 작업인 jshint , concat , uglify 모듈의 사용방법 및 예제입니다.




## jshint

`jshint` 는 자바스크립트의 오류를 검사하는 모듈입니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
jshint: {
    options: {
        jshintrc: 'grunt/.jshintrc',
        force: true, // error 검출시 task를 fail 시키지 않고 계속 진단
        reporter: require('jshint-stylish') // output을 수정 할 수 있는 옵션
    },
    grunt: {
        src: ['Gruntfile.js']
    },
    dist: {
        expand: true,
        cwd: 'app/js/site',
        src: ['*.js'],
        dest: 'app/js/site'
    }
},
```

* 설명

옵션으로는 설정파일인 `.jshintrc` 를 이용합니다. 나머지는 주석을 참고하세요.

`grunt` 는 `Gruntfile.js` 를, `dist` 는 `app/js/site` 폴더의 모든 자바스크립트를 검사합니다.


* 관련 문서를 참고세요.

[05_01_grunt_contrib_jshint](05_01_grunt_contrib_jshint.md)






## concat

`concat` 은 파일을 병합하는 모듈입니다. 주로 자바스크립트에 사용하지만 `css` 도 병합할수 있습니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
concat: {
    dist: {
        options: {
            banner: '<%= banner %>'
        },
        src: 'app/js/site/*.js',
        dest: 'dist/js/site/site.js'
    }
},
```

* 설명

옵션으로는 상단에 배너를 추가하고 소스폴더의 모든 자바스크립트를 목적지 폴더에 만듭니다.

* 관련 문서를 참고세요.

[05_02_grunt_contrib_concat](05_02_grunt_contrib_concat.md)






## uglify

`uglify` 모듈은 자바스크립트를 압축합니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
uglify: {
    options: {
        banner: '<%= banner %>'
    },
    dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/site.min.js'
    }
},
```

* 설명

옵션으로는 배너를 삽입하고, 소스폴더의 모든 자바스크립트를 목적지 폴더에 `site.min.js` 로 만듭니다.

* 관련 문서를 참고세요.

[05_03_grunt_contrib_uglify](05_03_grunt_contrib_uglify.md)



***

- 이전글 [04_05_grunt_contrib_cssmin](04_05_grunt_contrib_cssmin.md)
- 다음글 [05_01_grunt_contrib_jshint](05_01_grunt_contrib_jshint.md)

