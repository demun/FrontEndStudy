# grunt-contrib-cssmin

[grunt-contrib-cssmin 원문](https://github.com/gruntjs/grunt-contrib-cssmin)

`CSS` 를 압축합니다.


***

## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 의 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile)을 만들뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-cssmin --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-cssmin');
```

출력(output) 에 문제가 있을때는  `clean-CSS` 의 이슈트래커에 보고해야 합니다.


***

## Cssmin task

이 작업은 `cssmin` 명령을 실행합니다.


***



## Options

`Options` 은 [clean-css](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-programmatically) 에 전달되며 이 작업은 몇가지 추가 옵션을 정의합니다.


***


### report

Type: `string `

Choices: `min` , `gzip` 

Default: `min`


최소화된 결과물이나 최소와 gzip된 결과를 보고한다. 이것은 CSS가 얼마나 잘 clean-Performing 되어있는지 알 수 있도록 해준다. 그렇지만 gzip을 사용하는 것은 그 태스크를 완료하는데 5~10배 더 걸린다.


[출력예제](https://github.com/sindresorhus/maxmin#readme)



### sourceMap

Type: `boolean`

Choices: `true` , `false` 

Default: `false`

소스지도를 사용합니다.


***


## Usage

- 사용방법

두개의 파일을 하나의 출력파일로 만듭니다.

```javascript
cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'output.css': ['foo.css', 'bar.css']
    }
  }
}
```

***

release 디렉토리의 모든 파일을 작게하고 `.min.css` 확장자를 추가합니다.

```javascript
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/css',
      src: ['*.css', '!*.min.css'],
      dest: 'release/css',
      ext: '.min.css'
    }]
  }
}
```

***

## [릴리즈 내역](https://www.npmjs.com/package/grunt-contrib-cssmin#release-history)


***

- 이전글 [04_04_grunt_csscomb](04_04_grunt_csscomb)
- 다음글 [05_00_javascript_task](05_00_javascript_task)

