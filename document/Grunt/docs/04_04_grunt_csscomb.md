# grunt-csscomb

[grunt-csscomb 원문](https://github.com/csscomb/grunt-csscomb)

`css` 속성을 특정 순서로 정렬하는 플러그인


***

## Getting Started

- 시작하기


이 플러그인은 `grunt` ~0.4.x 버젼이 필요합니다.

[Grunt](http://gruntjs.com/) 의 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile)을 만들뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-csscomb --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-csscomb');
```

*****


## The "csscomb" task




### Overview

- 개요

프로젝트의 `Gruntfile`에서 `grunt.initConfig`에 전달된 데이터 오브젝트인 `csscomb` 라는 섹션을 추가합니다.



```javascript
grunt.initConfig({
    csscomb: {
        options: {
            // Task-specific options go here. 
        },
        your_target: {
            // Target-specific file lists and/or options go here. 
        },
    }
});
```

*****



### Options





#### options.config

Type: `String` , Default `value: null`

`custom-csscomb.json` 파일의 경로를 지정하는데 사용되는 문자열 값입니다.




*****

### Usage Examples

- 사용예


```javascript
grunt.initConfig({
    csscomb: {
        foo: {
            files: {
                'dest/resorted-foo.css': ['src/foo.css'],
            },
        },
        bar: {
            files: {
                'dest/resorted-foo.css': ['src/foo.css'],
                'dest/resorted-bar.css': ['src/bar.css'],
            },
        }
    }
});
```

*****

### Custom Options

- 사용자 지정 옵션

당신에게 익숙한 구성을 사용하려는 경우 구성 옵션을 사용자지정에 맞게 설정할 수 있습니다.


```javascript
grunt.initConfig({
    csscomb: {
        dist: {
            options: {
                config: '/path/to/config.json'
            },
            files: {
                'dest/resorted-foo.css': ['src/foo.css'],
            }
        }
    }
});
```

***

### Dynamic Mappings

- 동적 매핑

동적매핑으로 추가 속성 디렉토리의 많은 개별 파일을 처리 할 수 있습니다.


```javascript
grunt.initConfig({
    csscomb: {
        dynamic_mappings: {
            expand: true,
            cwd: '/assets/css/',
            src: ['*.css', '!*.resorted.css'],
            dest: '/assets/dest/css/',
            ext: '.resorted.css'
        }
    }
});
```

***

## [릴리즈 내역](https://www.npmjs.com/package/grunt-csscomb#release-history)


***

- 이전글 [04_03_grunt_autoprefixer](04_03_grunt_autoprefixer)
- 다음글 [04_05_grunt_contrib_cssmin](04_05_grunt_contrib_cssmin)
