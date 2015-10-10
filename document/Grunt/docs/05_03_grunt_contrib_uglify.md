# grunt-contrib-uglify

[grunt-contrib-uglify 원문](https://github.com/gruntjs/grunt-contrib-uglify)

`UglifyJS` 는 파일을 작게 만듭니다.



***



## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 를 시작하기 전에 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야 합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile) 뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-uglify --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-uglify');
```


***



## Uglify task

이 작업은 `grunt uglify` 명령을 실행합니다.

`Grunt` [작업구성](http://gruntjs.com/configuring-tasks) 가이드에 따라 작업대상, 파일 및 옵션을 지정할 수 있다.

### 2.x에서 3.x으로 마이그레이션 하기

버전 3.x 은 소스 맵 구성에 대한 변경 사항을 소개했습니다. 소스 맵 옵션을 사용하지 않는 경우, 당신은 완벽하게 업그레이드 할 수 있어야 한다. 소스 맵을 사용 할 경우, 아래를 참조하십시오.



#### 제거된 옵션
sourceMappingURL - This is calculated automatically now sourceMapPrefix - No longer necessary for the above reason

#### 변경된 옵션
sourceMap - 부울값만 받음. `sourceMapRoot` 에 기본 이름을 가진 맵을 생성 - `sourceMap`이 `true`로 설정되어있을 때, 소스의 위치는 계산되지만 필요한 경우 수동으로 소스 루트를 설정할 수 있습니다

#### 새로운 옵션
sourceMapName - 문자열이나 함수는 맵에 `sourceMapIncludeSources`의 위치나 이름을 변경하는것을 허용합니다. - 직접 맵 표현식으로 소스 파일의 내용을 삽입합니다. - 부울값을 받습니다. 한개의 표현식(`JSON` 이나 단일함수)으로 `quoteStyle` 를 분석합니다. - 정수 0(기본값) 1,2,3 적용 또는 따옴표 스타일을 유지하는것을 허용합니다.


***

### Options

이 작업은 기본적으로 [UglifyJS2](https://github.com/mishoo/UglifyJS2) 이하기에, 고급구성에 대한 읽기와 [UglifyJS 문서](http://lisperator.net/uglifyjs/)를 고려하시기 바랍니다.




#### mangle

Type: `Boolean` `Object` , Default: `{}`

기본적으로 `mangling` 을 키거나 끕니다.(on or off) 객체가 지정되어있는 경우, `ast.mangle_names()` 과 `ast.compute_char_frequency()` 을 직접 전달합니다.(동작[behavior] 명령행 모방) [모든 옵션 보기](https://github.com/mishoo/UglifyJS2#mangler-options)



#### compress
Type: `Boolean` `Object` , Default: `{}`

기본적으로 `compress` 을 키거나 끕니다.(on or off) 객체가 지정되어있는 경우, `UglifyJS.Compressor()` 에 옵션으로 전달됩니다. [모든 옵션 보기](https://github.com/mishoo/UglifyJS2#compressor-options)



#### beautify
Type: `Boolean` `Object` , Default: `false`

생성된 소스코드의 beautification(정렬해서 보기) 를 켭니다. `UglifyJS.OutputStream()`로 객체를 병합하고 옵션과 함께 전달됩니다. [모든 옵션 보기](https://github.com/mishoo/UglifyJS2#beautifier-options)



#### expression
Type: `Boolean` , Default: `false`

프로그램보다는 표현식을 분석(json을 통해)합니다.



#### report
Choices: `'min'`, `'gzip'` , Default: `'min'`

`gzip` 결과와 압축한 보고서 또는 축소한 결과 하나만 보고한다.
`clean-css` 을 사용하여 작업하여 정확하게 볼 수 있지만 `gzip` 으로 작업하면 작업을 완료하기위히 5-10x 정도 더 오래걸린다.

[출력예제](https://github.com/sindresorhus/maxmin#readme)



#### sourceMap

Type: `Boolean` , Default: `false`

`true`의 경우, 소스맵 파일은 `dest` 파일과 같은 디렉토리에 생성됩니다.
기본적으로 `dest` 파일과 같은 베이스 이름을 가지고 있지만 `.map` 확장자을 가지고 있을 것이다.



#### sourceMapName

Type: `String` `Function` , Default: `undefined`

이름 또는 생성된 소스지도의 위치를 사용자정의 하려면, 원본지도를 작성하는 위치를 표시하는 문자열을 전달해야 합니다.
함수가 제공되는 경우, 목적지는 `uglify` 인수로 전달되며, 리턴값은 파일명으로 사용된다.



#### sourceMapIn

Type: `String` `Function` , Default: `undefined`


함수가 제공되는 경우, 목적지는 `uglify` 인수로 전달되며, 리턴값은 소스맵 이름으로 사용된다.
하나의 소스 파일이 있을 경우에만 의미가 있습니다.

이전의 compilation 으로부터 입력 소스맵의 위치. 예를들면 커피스크립트에서




#### sourceMapIncludeSources

Type: `Boolean` , Default: `false`

`sourcesContent` 속성과 소스맵에서 소스 파일의 내용을 포함 할 경우 이 플래그를 전달합니다.




#### sourceMapRoot

Type: `String` , Default: `undefined`

이 옵션을 사용하면 소스를 찾을 때 브라우저가 사용하는 루트 URL을 사용자 정의 할 수 있습니다.

절대 URL이 아닌 경우 소스 `sourceMapRoot`의 앞에 추가한 후, 소스는 소스맵과 관련하여 해석된다.



#### enclose

Type: `Object` , Default: `undefined`

인수/매개 변수 목록을 설정한 클로져에 모든 코드를 감싼다.
둘러싼 객체안의 키-값의 각쌍이 효과적인 인수-매개변수 쌍이다 


#### wrap

Type: `String` , Default: `undefined`

아무것도 유출되지 않게 하기 위해 모든 코드를 감싸는 것이 가장 쉬운 방법입니다.
공통 보내기(export)와 글로벌 변수를 사용할 수 있다.
`wrap`의 값은 글로벌 변수 보내기(export) 등을 사용할 수있다.


#### maxLineLen

Type: `Number` , Default: `32000`

문자의 행 길이를 제한합니다. 이 안전 기능을 비활성화하면 maxLineLen = 0을 전달합니다.


#### ASCIIOnly

Type: `Boolean` , Default: `false`

`\uXXXX`와 같이 `non-ASCII` 문자를 인코딩 할 수 있습니다.



#### exportAll

Type: `Boolean` , Default: `false`

`wrap`을 사용하는 경우 이 export 변수를 통해 모든 전역 함수와 변수를 사용할 수 있도록 합니다.



#### preserveComments

Type: `Boolean` `String` `Function` , Default: `undefined` , Options: `false` `'all'` `'some'`


주석을 어떤형식으로  남길지 설정합니다.


- `false` 모든 주석을 제거합니다.
- `'all'` 모든 주석을 유지합니다.
- `'some'` `!` 로 시작하는 주석은 유지합니다. 또는 컴파일러 스타일의 지시문은 유지합니다.(@preserve @license @cc_on)
- `Function` 는 자신의 주석을 보존할지 지정합니다. 현재 노드와 현재의 의견을 전달하고 true 또는 false를 반환 할 것으로 예상된다



#### banner

Type: `String` , Default: empty string

축소된 출력(output) 에 문자열을 덧붙입니다. 템플릿 문자열(예: <%= config.value %>) 은 자동으로 확장됩니다.




#### footer

Type: `String` ,Default: empty string

축소된 출력(output) 에 문자열을 추가합니다. 템플릿 문자열(예: <%= config.value %>) 은 자동으로 확장됩니다.



#### screwIE8

Type: `Boolean` , Default: `false`

인터넷 익스플로러 6~8 까지 단점을 완벽하게 준수하지 않아도 되는 경우 이 플래그를 전달합니다.



#### mangleProperties

Type: `Boolean` , Default: `false`

객체 속성 이름으로 `mangling`을 플래그로 사용합니다.


#### reserveDOMProperties

Type: `Boolean` , Default: `false`

내장 브라우저 개체 속성을 방지하기 위해 `mangleProperties`와 함께 이 플래그를 사용하십시오.



#### exceptionsFiles

Type: `Array` , Default: `[]`


`mangleProperties로` 는 변수와 개체 속성의 목록을 포함하는 하나 이상의 JSON 파일을 전달합니다. 파일 구문에 대한 자세한 정보를 원하시면 [UglifyJS](https://www.npmjs.com/package/uglify-js)의 문서를 참조하십시오.




#### nameCache

Type: `String` , Default: empty string

`uglify`의 여러 실행간에 `mangling`의 기호를 조정하는데 사용하고, 작성할 uglify JSON 캐시 파일의 경로인 문자열.
Note: 이 생성된 파일은 `exceptionsFiles` 파일과 같은 `JSON` 포맷을 사용한다.



#### quoteStyle

Type: `Integer` , Default: `0`

따옴표 스타이릉 유지 또는 적용한다.

- 0 은 바이트 수를 최소화하기 위해 작은 따옴표 나 큰 따옴표를 사용합니다(모두 사용할 때 따옴표를 선호한다)
- 1 은 작은 따옴표를 사용한다.
- 2 는 큰 따옴표를 사용한다.
- 3 은 인용부호를 사용한다.

***


## Usage examples

- 사용 예


## Basic compression

디폴트 옵션을 사용하여 입력 파일을 압축하는 것이다.

```javascript
// 프로젝트 구성
grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['src/input1.js', 'src/input2.js']
      }
    }
  }
});
```


### No mangling

Specify mangle: 변수와 함수 이름을 변경되는 것을 방지하기 위해 `false` 를 사용.


```javascript
// 프로젝트 구성
grunt.initConfig({
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```

### 예약 식별자

`mangle` 옵션의 배열을 제외하고 손길이 닿지 않는 식별자를 지정할 수 있습니다.


```javascript
// 프로젝트 구성
grunt.initConfig({
  uglify: {
    options: {
      mangle: {
        except: ['jQuery', 'Backbone']
      }
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```

### Source maps

`sourceMap` 옵션을 `true`로 설정하여 소스 맵을 생성합니다.
생성된 소스맵은 대상 파일과 같은 디렉토리에 있을 것입니다.
그것의 이름은 `.map` 확장자를 가진 대상 파일의 기본 이름이 될 것입니다.
`sourceMapName` 속성이 이러한 기본값을 재정의합니다.


```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    my_target: {
      options: {
        sourceMap: true,
        sourceMapName: 'path/to/sourcemap.map'
      },
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```

### Advanced source maps

`sourceMapIncludeSources` 을 `true` 로 설정하면 맵에 소스를 직접 포함합니다.
이전 편집에서 소스맵을 포함하려면 `sourceMapIn` 옵션의 값으로 전달합니다.

```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    my_target: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        sourceMapIn: 'example/coffeescript-sourcemap.js', // input sourcemap from a previous compilation 
      },
      files: {
        'dest/output.min.js': ['src/input.js'],
      },
    },
  },
});
```


자세한 내용은 [UglifyJS SourceMap](http://lisperator.net/uglifyjs/codegen#source-map) 문서를 참조하십시오.



### Turn off console warnings
### 콘솔 경고를 해제


`true` 는 압축 옵션의 일부로 `*` 기능은 콘솔에서 호출하는 것을 무시합니다.


```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    options: {
      compress: {
        drop_console: true
      }
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```


### Beautify

Specify beautify: 디버깅이나 문제 해결을 위해 코드를 아릅답게 하는 경우 `true` 로 지정.
UglifyJS.OutputStream() 로 직접 전달하면 다른 출력 옵션을 구성하는 개체를 전달한다.

자세한 것은 [UglifyJS Codegen 문서](http://lisperator.net/uglifyjs/codegen) 를 참조하십시요.

출력 코드가 정리되어 표현되길 원하면, 옵션에서 수동으로 `beautify: true` 로 설정하면 명시적으로 코드를 잘 정리되어 표현되어 집니다.



```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    my_target: {
      options: {
        beautify: true
      },
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    },
    my_advanced_target: {
      options: {
        beautify: {
          width: 80,
          beautify: true
        }
      },
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```


### Banner comments

이 예에서, `uglify:my_target` 의 객체 구성은 banner 템플릿 문자열을 참조하여 생성된 banner 를 앞쪽에 추가합니다.
그 속성이 오늘날짜(pkg 구성 속성을 통해 사용할 수 있습니다.)는 `package.json` 파일에서 가져온 값입니다.

참고 : 외부 JSON 파일을 사용할 필요가 없습니다.
이 설정에서 PKG 객체에서 인라인으로 만드는것도 유효합니다.
`JSON` 파일이 있는경우 이것을 참조할 수 있습니다.


```javascript
// 환경구성
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```


## Conditional compilation

-조건부 컴파일

UglifyJS 조건부 컴파일을 활성화 할 수 있습니다.
이것은 일반적으로 제품 빌드에 디버그 코드 블록을 제거하는 데 사용됩니다.

자세한 내용은 [UglifyJS 글로벌 정의 설명서](http://lisperator.net/uglifyjs/compress#global-defs)를 참조하십시오.



```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    options: {
      compress: {
        global_defs: {
          "DEBUG": false
        },
        dead_code: true
      }
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```


### Compiling all files in a folder dynamically

- 동적 폴더에있는 모든 파일을 컴파일

이 구성은 동적으로 압축 파일을 만드는 것입니다.


```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'dest/js'
      }]
    }
  }
});
```


### Turn on object property name mangling 

- 객체 속성 이름인 mangling 기능을 켜기

이 구성은 객체 속성 이름인 `mangle` 기능을 키면 브라우져에 내장된 객체 속성으로 압축(mangle)하지 않습니다
또한 `myExceptionsFile.json` 에 변수와 객체속성 목록이 압축되어 변경되어 집니다
더 많은 정보는 [UglifyJS의 문서](https://www.npmjs.com/package/uglify-js)를 참조하십시오.



```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    options: {
      mangleProperties: true,
      reserveDOMCache: true,
      exceptionsFiles: [ 'myExceptionsFile.json' ]
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```



### Turn on use of name mangling cache

- 이름 변환(name mangling) 캐시 사용 기능 켜기

출력에 `uglify` 파일 간의 변환된 문자를 조정하기 위해 이름 `mangling`에 캐시 사용 기능을 켭니다.
옵션으로 제공되는 이름의 JSON 캐시 파일을 생성합니다.
참고: 생성된 `exceptionsFiles` 파일은 같은 `json` 포맷을 사용합니다.


```javascript
// 환경구성
grunt.initConfig({
  uglify: {
    options: {
      nameCache: '.tmp/grunt-uglify-cache.json',
    },
    my_target: {
      files: {
        'dest/output1.min.js': ['src/input1.js'],
        'dest/output2.min.js': ['src/input2.js']
      }
    }
  }
});
```

## [릴리즈 내역](https://www.npmjs.com/package/grunt-contrib-uglify#release-history)




***

- 이전글 [05_02_grunt_contrib_concat](05_02_grunt_contrib_concat)
- 다음글 [06_00_others_task](06_00_others_task)

