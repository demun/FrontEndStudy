# grunt-contrib-copy

[grunt-contrib-copy 원문](https://github.com/gruntjs/grunt-contrib-copy)

폴더 및 파일을 복사합니다.

***



## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 를 시작하기 전에 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야 합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile) 뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-copy --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-copy');
```

이 플러그인은 그런트의 0.4.x.와 함께 작동하도록 설계되었습니다.

v0.3.x 버젼을 사용하는 경우 `Grunt`를 [업그레이드](http://gruntjs.com/upgrading-from-0.3-to-0.4) 하는것이 좋습니다.
안그렇다면, [v0.3.2](https://github.com/gruntjs/grunt-contrib-less/tree/grunt-0.3-stable) 를 참고하세요.

***



## Copy task

`grunt copy` 명령어로 이작업을 실행합니다.


작업대상 파일 및 옵션은 [Grunt 작업 구성가이드](http://gruntjs.com/configuring-tasks)에 따라 지정될 수 있습니다.



## Options


### process

Type: `Function(content, srcpath)`

이 옵션은 복사된 파일의 내용을 제어하는 방법으로서 향상된 `grunt.file.copy` 전달된다.

옵션 이름은 추후에 제거되기때문에 `processContent`를 처리하기 위해 이름이 변경되었습니다



### noProcess

Type: `String`

이 옵션은 처리되는 파일의 내용을 제어하는 방법으로서 향상된 `grunt.file.copy` 전달된다.

`processContentExclude`는 `noProcess로` 옵션이름이 변경되었으며 추후에 제거됩니다.


### encoding

Type: `Strin`g , Default: `grunt.file.defaultEncoding`

파일 인코딩을 사용하여 파일을 복사합니다.



### mode

Type: `Boolean` or `String` , Default: `false`

상관없이 복사하거나 대상 파일 및 디렉토리 권한을 설정합니다. 기존 파일 및 디렉토리 권한을 복사하려면 true로 설정합니다. 아니면 i.e.: 0644 모드로 설정되거나 그 복사된 파일에 설정됩니다.



### timestamp

Type: `Boolean` , Default: `false`

파일을 복사 할 때 타임스탬프 특성(atime 과 mtime)를 유지할지 여부를 판단합니다.. 파일의 타임 스탬프를 유지하기 위해 `true`로 설정합니다.
파일 내용 또는 이름을 복사하는 동안 변경되면 타임 스탬프가 유지되지 않습니다.




## Usage Examples

- 사용 예

```javascript
copy: {
  main: {
    files: [
      // includes files within path 
      {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
 
      // includes files within path and its sub-directories 
      {expand: true, src: ['path/**'], dest: 'dest/'},
 
      // makes all src relative to cwd 
      {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
 
      // flattens results to a single level 
      {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
    ],
  },
},
```

이 작업은 그런트가 지원하는 모든 파일에 매핑 형식을 지원합니다.
[Globbing patterns](http://gruntjs.com/configuring-tasks#globbing-patterns) 및 파일을 추가하는 세부 사항을 위해 [동적으로 객체를 구축](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)하는 방법을 읽어 보시기 바랍니다.

여기에 다음 파일 트리의 몇 가지 추가적인 예는 다음과 같습니다.

```
$ tree -I node_modules
.
├── Gruntfile.js
└── src
    ├── a
    └── subdir
        └── b

2 directories, 3 files
```

#### Copy a single file tree

- 하나의 파일 트리를 복사합니다

```javascript
copy: {
  main: {
    src: 'src/*',
    dest: 'dest/',
  },
},
```

```
$ grunt copy
"copy:main" 작업 실행
1개 디렉토리 생성, 1개 파일 복사
 
오류없이 완료.
$ tree -I node_modules
.
├── Gruntfile.js
├── dest
│   └── src
│       ├── a
│       └── subdir
└── src
    ├── a
    └── subdir
        └── b
 
5 directories, 4 files
```



#### Flattening the filepath output

- 파일 경로 출력을 Flattening

```javascript
copy: {
  main: {
    expand: true,
    cwd: 'src/',
    src: '**',
    dest: 'dest/',
    flatten: true,
    filter: 'isFile',
  },
},
```

```
$ grunt copy
Running "copy:main" (copy) task
Copied 2 files
 
Done, without errors.
$ tree -I node_modules
.
├── Gruntfile.js
├── dest
│   ├── a
│   └── b
└── src
    ├── a
    └── subdir
        └── b
 
3 directories, 5 files
```


#### Copy and modify a file

- 복사 한 파일 수정

다음과 같이 복사할 때 파일의 내용을 변경하여, `options.process` 기능을 설정 :

```javascript
copy: {
  main: {
    src: 'src/a',
    dest: 'src/a.bak',
    options: {
      process: function (content, srcpath) {
        return content.replace(/[sad ]/g,"_");
      },
    },
  },
},
```

여기서 문자 "s", "a"와 "d",뿐만 아니라 모든 공간 모두의 발행은, "a.bak"에 밑줄로 변경한다.
물론, 당신은 단지 정규식 교체(replacements) 사용에 한정되지 않는다.

디렉토리에서 모든 파일을 처리하기 위해, `process` 기능은 동일하게 사용된다.

참고 : 프로세스가 작동하지 않는 경우는 `processContent v0.4.1` 및 이전에 호출되었을때를 주의하십시오.


### Troubleshooting

- 문제해결

파일이나 디렉토리가 발견되지 않은 경우 기본적으로 조용히 무시됩니다.
파일이 존재해야하고, `non-existence`에 오류가 발생하는 경우, 다음에 `nonull:true` 추가합니다.

예를 들어, Gruntfile.js 에서 이 항목은:


```javascript
copy: {
  main: {
    nonull: true,
    src: 'not-there',
    dest: 'create-me',
  },
},
```

이 출력을 제공합니다 :

```
$ grunt copy
"copy:main" 작업 실행
Warning: "not-there" 파일을 읽을 수 없습니다 (Error code: ENOENT). Use --force to continue.
 
Aborted due to warnings.(경고로 인해 중단되었습니다.)
```


## [Release History](https://www.npmjs.com/package/grunt-contrib-copy#release-history)





***

- 이전글 [06_01_grunt_contrib_clean](06_01_grunt_contrib_clean)
- 다음글 [06_03_grunt_contrib_imagemin](06_03_grunt_contrib_imagemin)


