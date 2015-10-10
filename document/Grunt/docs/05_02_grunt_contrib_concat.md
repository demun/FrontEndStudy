# grunt-contrib-concat

[grunt-contrib-concat 원문](https://github.com/gruntjs/grunt-contrib-concat)

파일 연결하기


***

## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 를 시작하기 전에 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야 합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile) 뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-concat --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-concat');
```


***

## Concat task

이 작업은 `grunt concat` 명령을 실행합니다.

`Grunt` [작업구성](http://gruntjs.com/configuring-tasks) 가이드에 따라 작업대상, 파일 및 옵션을 지정할 수 있다.


***

## Options


***

### separator

Type: `String` , Default: `grunt.util.linefeed`

이 문자열로 파일들을 연결한다.
자바스크립트를 압축하고 합칠경우 구분자로 세미콜론(;)을 사용할 수 있습니다.


### banner

Type: `String` Default: `empty string`

이 문자열은 연결된 파일을 시작부분에 추가됩니다. 이것은 기본 옵션인 [grunt.template.precess](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess) 을 이용하여 처리됩니다.

(기본 처리 옵션은 [grunt.template.process 문서](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess) 에 설명되어 있습니다.)



### footer

Type: `String` Default: `empty string`

이 문자열은 연결된 파일을 끝부분에 추가됩니다. 이것은 기본 옵션인 [grunt.template.precess](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess) 을 이용하여 처리됩니다.

(기본 처리 옵션은 [grunt.template.process 문서](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess) 에 설명되어 있습니다.)




### stripBanners

Type: `Boolean` `Object` Default: `false`

소스파일의 자바스크립트 주석 부분을 제거합니다. 

* false - 주석을 제거하지 않습니다.
* true - /* ... */ 주석은 제거되지만 /*! ... */ 주석은 제거하지 않습니다.
* 객체 옵션:
  * 기본적으로 `true` 지 지정된걸로 동작합니다.
  * block - `true` 로 지정하면 모든 주석 블럭이 제거됩니다.
  * line - `true` 로 지정하면 `//` 된 주석이 제거됩니다.



### process

Type: `Boolean` `Object` `Function` Default: `false`

[템플릿](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md)이나 사용자정의 함수를 합치기전에 처리합니다.

* false - 처리하지 않습니다.
* true - [grunt.template.process](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess)의 기본값을 사용하여 처리합니다.
* data object - 지정된 옵션을 사용하고, [grunt.template.process](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess) 의 옵션을 사용하여 처리합니다.
* function(src, filepath) - 각 파일에 대해 한번 호출하고 주어진 함수를 사용하여 처리합니다. 반환 값은 소스 코드로 사용됩니다.
(기본 처리 옵션은 [grunt.template.process 문서](https://github.com/gruntjs/grunt-docs/blob/master/grunt.template.md#grunttemplateprocess)에 설명되어 있습니다)



### sourceMap

Type: `Boolean` Default: `false`

`true` 로 지정하면 소스맵을 만듭니다. 소스맵은 대상파일과 함께 생성되며, `.map` 확장자를 가진 동일한 파일이름으로 생성됩니다. 




### sourceMapName

Type: `String` `Function` Default: `undefined`

이름이나 생성된 소스맵의 위치를 정의하며, 소스맵을 작성하는 위치를 문자열로 전달합니다.
함수를 사용하는 경우, `concat` 대상은 인수로 전달되며, 리턴값은 파일명으로 사용됩니다.




### sourceMapStyle

Type: `String` Default: `embed`

생성된 소스지도의 유형을 결정합니다.
기본값은 임베드된 맵에 직접 소스의 콘텐츠를 놓습니다.
링크는 링크와 같은 맵에 원래 소스를 참조합니다. 인라인은 대상 파일의 데이터 `URI`로 전체 맵을 저장합니다.




## Usage Examples

- 사용 예

### Concatenating with a custom separator

- 사용자정의 분리기호와 합침

이 예제에서, `concat:dist`(`grunt concat` 은 [다중 작업](http://gruntjs.com/creating-tasks#multi-tasks)이기 때문입니다.) 실행하면 세개의 지정된 소스파일(순서대로) 합치고, `;` 로 연결하고 `dist/built.js` 작성하여 출력합니다.


```javascript
// 프로젝트 구성
grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js',
    },
  },
});
```



## Banner comments

- 배너 주석

이 예제에서, `concat:dist` 를 실행하면 `src/project.js` 에서 기존 주석을 제거하고, 새로 생성된 주석을 추가하고 합쳐서 `dist/built.js` 를 출력한다

이 생성된 배너는 `banner` 템플릿 문자열의 내용이 될것입니다. 이경우 그 속성은 오늘날짜(`pkg` 구성 속성을 사용할 수 있습니다.)이며 `package.json` 파일에서 가져온 값입니다.

참고: 외부 `json` 파일을 사용할 필요가 없습니다. 이 설정에서 `pkg` 객체에서 인라인으로 만들수도 있습니다. 이미 `json` 파일이 있는경우 그것을 참조할 수 있습니다.


```javascript
// 프로젝트 구성
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    options: {
      stripBanners: true,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
    },
    dist: {
      src: ['src/project.js'],
      dest: 'dist/built.js',
    },
  },
});
```



## Multiple targets

이 예제에서, `grunt concat` 은 별도의 설정 두개를 지정했습니다. <kbd>basic</kbd> 구성은 `src/main.js` 를 `dist/basic.js` 로 복사하고, 또다른 구성인 <kbd>extras</kbd> 은 `main.js, extras.js` 를 합쳐 `dist/with_extras.js` 로 만듭니다.

`grunt concat` 은 개별적으로 구성할 수도 있지만, `concat:basic` 나 `concat:extras` 처럼 개별적으로 구축할 수도 있습니다.
`grunt concat` 은 모든 `concat` 의 대상을 만듭니다. 이것은 `concat` 이 다중작업을 하기 때문입니다.



```javascript
// 프로젝트 구성
grunt.initConfig({
  concat: {
    basic: {
      src: ['src/main.js'],
      dest: 'dist/basic.js',
    },
    extras: {
      src: ['src/main.js', 'src/extras.js'],
      dest: 'dist/with_extras.js',
    },
  },
});
```



## Multiple files per target

- 다중파일 대상

앞의 예와같이 이 예에서 `grunt concat` 은 두개의 파일을 만듭니다. <kbd>basic</kbd>버젼은 `main.js` 를 복사해서 `basic.js` 로 만듭니다. 다른 하나는 `main.js` , `extras.js` 를 합쳐서 `dist/with_extras.js` 로 만듭니다.

이예제는 두파일이 동일한 대상을 다루는 것을 다룹니다.

파일 객체를 사용하며, 출처-목적지(source-destination) 쌍의 수에는 제한이 없습니다.


```javascript
// 프로젝트 구성
grunt.initConfig({
  concat: {
    basic_and_extras: {
      files: {
        'dist/basic.js': ['src/main.js'],
        'dist/with_extras.js': ['src/main.js', 'src/extras.js'],
      },
    },
  },
});
```



## Dynamic filenames

- 동적 파일이름

파일이름은 <kbd><%= %></kbd> 로 구분하며 동적으로 생성할 수 있습니다.

이 예에서, `concat:dist` 는 `package.json` 파일을 참고해서 대상의 이름과 대상의 버젼으로 파일 이름을 만듭니다.(<kbd>pkg</kbd> 구성 속성을 통해)

> 역자: `Gruntjfile` 파일에서 `package.json` 에 있는 <kbd>속성</kbd>과 <kbd>값</kbd>을 사용할수 있습니다. 


```javascript
// 프로젝트 구성
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    dist: {
      src: ['src/main.js'],
      dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
    },
  },
});
```


## Advanced dynamic filenames

- 고급 동적 파일이름

더 복잡한 이 예에서, `grunt concat` 은 별도의 두개의 파일을 만듭니다.(<kbd>concat</kbd>은 다중작업을 하기때문에)

대상파일의 경로가 반복적으로 필요하면 템플릿을 기반으로 동적으로 확장합니다.

예제에서, `package.json` 파일에 {"name": "awesome", "version": "1.0.0"} 이 포함된 경우, `dist/awesome/1.0.0/basic.js` 과 `dist/awesome/1.0.0/with_extras.js` 이 생성될 것입니다.


```javascript
// 프로젝트 구성
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  dirs: {
    src: 'src/files',
    dest: 'dist/<%= pkg.name %>/<%= pkg.version %>',
  },
  concat: {
    basic: {
      src: ['<%= dirs.src %>/main.js'],
      dest: '<%= dirs.dest %>/basic.js',
    },
    extras: {
      src: ['<%= dirs.src %>/main.js', '<%= dirs.src %>/extras.js'],
      dest: '<%= dirs.dest %>/with_extras.js',
    },
  },
});
```


## Invalid or Missing Files Warning

- 잘못 또는 누락된 파일 경고

`concat` 작업은 `nonull: true` 로 설정하면 해당파일이 없거나 유효하지 않으면 경고합니다.


```javascript
grunt.initConfig({
  concat: {
    missing: {
      src: ['src/invalid_or_missing_file'],
      dest: 'compiled.js',
      nonull: true,
    },
  },
});
```

구성에 대한 `Grunt` 의 [작업파일 설정](http://gruntjs.com/configuring-tasks#files)을 참고하십시요.




## Custom process function

- 사용자 지정 처리 기능


당신은 연결(합침)하기전에 사용자정의 처리를 하고자하는 경우, 사용자정의 처리 함수를 사용할 수 있습니다.


```javascript
grunt.initConfig({
  concat: {
    dist: {
      options: {
        // Replace all 'use strict' statements in the code with a single one at the top 
        banner: "'use strict';\n",
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        },
      },
      files: {
        'dist/built.js': ['src/project.js'],
      },
    },
  },
});
```



***

- 이전글 [05_01_grunt_contrib_jshint](05_01_grunt_contrib_jshint.md)
- 다음글 [05_03_grunt_contrib_uglify](05_03_grunt_contrib_uglify.md)

