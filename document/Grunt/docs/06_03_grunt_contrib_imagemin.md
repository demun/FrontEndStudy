# grunt-contrib-imagemin

[grunt-contrib-imagemin 원문](https://github.com/gruntjs/grunt-contrib-imagemin)

이미지를 축소합니다.


***



## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 를 시작하기 전에 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야 합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile) 뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-imagemin --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-imagemin');
```

이 플러그인은 그런트의 0.4.x.와 함께 작동하도록 설계되었습니다.

v0.3.x 버젼을 사용하는 경우 `Grunt`를 [업그레이드](http://gruntjs.com/upgrading-from-0.3-to-0.4) 하는것이 좋습니다.
안그렇다면, [v0.3.2](https://github.com/gruntjs/grunt-contrib-less/tree/grunt-0.3-stable) 를 참고하세요.

***


## Imagemin task

`grunt imagemin` 명령어로 이작업을 실행합니다.

[imagemin](https://github.com/kevva/imagemin) 을 이용하여 이미지를 작게합니다.

다음 옵티마이저와 함께 제공 :

gifsicle — GIF 압축 이미지
jpegtran — JPEG 압축 이미지
optipng — PNG 압축 이미지
svgo — SVG 압축 이미지

이미지 축소에 상당히 느려질 수 있습니다만 변경된 파일에만 프로세스가 가동되는 [grunt-newer](https://github.com/tschaub/grunt-newer)를 사용하는 것이 좋습니다.


## Options


옵션은 관련 파일에 적용됩니다, 그래서 당신은 `png/jpg`에 대한 별도의 대상이 필요 없습니다.



### optimizationLevel (png)

Type: `Number`

Default: `3`

`0` 과 `7` 사이에 최적화 레벨 선택

> 최적화 레벨 `0` 은 최소한의 노력을 필용로 최적화 작업 설정을 가능하게 한다. 비트 깊이 또는 색상 유형 및 기존 IDAT 데이터 스트림없이 재압축과 같은 이미지 속성에 대한 변경 사항이 없습니다. 최적화 레벨 1은 단일 IDAT 압축 시험을 할 수 있습니다.OptiPNG는 아마도 가장 효과적이라 생각한다. 최적화 수준이 높은 여러 IDAT 압축 시험을 활성화; 자세한 실험, 높은 수준. 

The optimization level 0 enables a set of optimization operations that require minimal effort. There will be no changes to image attributes like bit depth or color type, and no recompression of existing IDAT datastreams. The optimization level 1 enables a single IDAT compression trial. The trial chosen is what. OptiPNG thinks it’s probably the most effective. The optimization levels 2 and higher enable multiple IDAT compression trials; the higher the level, the more trials.

Level and trials:

1 trial
8 trials
16 trials
24 trials
48 trials
120 trials
240 trials


### progressive (jpg)

Type: `Boolean`

Default: `true`

진보적인 무손실 변환.




### interlaced (gif)

Type: `Boolean`

Default: `true`

진보적인 렌더링을 위한 맞춤 GIF.



### svgoPlugins (svg)

Type: `array`
Default: `[]`


사용할 SVG 플러그인을 사용자 정의합니다. 자세한 내용은 [여기](https://github.com/sindresorhus/grunt-svgmin#available-optionsplugins).




### use

Type: `Array`

Default: `null`

`imagemin` [플러그인](https://npmjs.org/keyword/imageminplugin) 추가로 사용할 수 있습니다.



## Example config

당신은 정적 또는 [동적](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)으로 파일을 매핑 할 수 있습니다.

```
var mozjpeg = require('imagemin-mozjpeg');
 
grunt.initConfig({
  imagemin: {                          // Task 
    static: {                          // Target 
      options: {                       // Target options 
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      files: {                         // Dictionary of files 
        'dist/img.png': 'src/img.png', // 'destination': 'source' 
        'dist/img.jpg': 'src/img.jpg',
        'dist/img.gif': 'src/img.gif'
      }
    },
    dynamic: {                         // Another target 
      files: [{
        expand: true,                  // Enable dynamic expansion 
        cwd: 'src/',                   // Src matches are relative to this path 
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
        dest: 'dist/'                  // Destination path prefix 
      }]
    }
  }
});
 
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
```


## [Release History](https://www.npmjs.com/package/grunt-contrib-imagemin#release-history)





***

- 이전글 [06_02_grunt_contrib_copy](06_02_grunt_contrib_copy)
- 다음글 [07_00_watch_task](07_00_watch_task)


