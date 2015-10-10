# 6.others task

clean , copy , imagemin 폴더와 파일을 복사, 삭제하고, 이미지를 최적화하는 모듈의 사용방법 및 예제입니다.





## clean

`clean` 모듈은 폴더와 파일을 삭제하는 모듈입니다.

작업을 할때는 대체적으로 여러번 작업을 함으로 파일을 덮어쓰지않고 삭제한후 다시 생산해서 사용합니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
clean: {
    dev: {
        files: [{
            dot: true,
            src: [
                'dev/**/*',
                'app/css',
                'dist/**/*'
            ]
        }]
    },
    dist: {
        files: [{
            dot: true,
            src: [
                'app/css',
                'dist/**/*'
            ]
        }]
    },
},
```

* 설명

이 프로젝트에서는 두개의 작업으로 나눕니다.

`dev` 작업은 개발자를 위한 작업을 했을경우 `dev` 폴더까지 삭제를 합니다.

`dist` 작업은 `app/css` 폴더와 `dist` 폴더의 모든 파일을 삭제합니다.



* 관련 문서를 참고세요.

[06_01_grunt_contrib_clean](06_01_grunt_contrib_clean.md)






## copy

`copy` 모듈은 폴더나 파일을 복사합니다.

제작된 `css` 나 자바스크립트를 복사하기도 하고, 폰트 같은것을 목적지 폴더에 복사하기도 합니다.

`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
copy: {
    basic: {
        files: [ 
            // fonts
            {
                expand: true,
                cwd: 'app/fonts/',
                src: '**',
                dest: 'dist/fonts/'
            },
            // js
            {
                expand: true,
                cwd: 'app/js/lib',
                src: ['*.js'],
                dest: 'dist/js/lib'
            }
        ]
    },
    dev: { // 개발폴더를 위한 복사
        files: [
            { // html folder
                expand: true,
                cwd: 'app/html/',
                src: '**',
                dest: 'dev/'
            },
            { // include folder
                expand: true,
                cwd: 'app/',
                src: ['include/**/*'],
                dest: 'dev/'
            },
            { // css
                expand: true,
                cwd: 'dist/css/',
                src: '**',
                dest: 'dev/css/'
            },
            { // js
                expand: true,
                cwd: 'dist/js/',
                src: '**',
                dest: 'dev/js/'
            },
            { // images
                expand: true,
                cwd: 'dist/images/',
                src: '**',
                dest: 'dev/images/'
            },
            { // fonts
                expand: true,
                cwd: 'dist/fonts/',
                src: '**',
                dest: 'dev/fonts/'
            }
        ],
    }
},
```


* 설명

`basic` 작업과 `dev` 작업으로 두개의 작업으로 나뉩니다.

기본 작업으로 `basic` 작업을 하고 개발자를 위한 복사작업은 `dev` 작업이 합니다.

`basic` 작업의 `fonts` 의 경우 동적기술법으로 소스폴더의 fonts 폴더(app/fonts/) 의 모든 파일을 목적지 폴더(dist/fonts/)에 복사합니다.

나머지도 비슷합니다.


* 관련 문서를 참고세요.

[06_02_grunt_contrib_copy](06_02_grunt_contrib_copy.md)





## imagemin

`imagemin` 모듈은 이미지를 최적화하는 모듈입니다.


`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
imagemin: {
    options: {
        title: 'Build complete',  // optional
        message: '<%= pkg.name %> build finished successfully.' //required
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'app/images/',
            src: '**/*.{png,jpeg,jpg,gif}',
            dest: 'dist/images/'
        }]
    }
},
```

* 설명

옵션으로는 성공 메시지를 보여주고, 동적기술법으로 `app/images/` 폴더의 모든 이미지를 최적화해서 `dist/images/` 로 만들어냅니다.


* 관련 문서를 참고세요.

[06_03_grunt_contrib_imagemin](06_03_grunt_contrib_imagemin.md)




***

- 이전글 [05_03_grunt_contrib_uglify](05_03_grunt_contrib_uglify.md)
- 다음글 [06_01_grunt_contrib_clean](06_01_grunt_contrib_clean.md)



