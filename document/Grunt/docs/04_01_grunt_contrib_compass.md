# grunt-contrib-compass 

[grunt-contrib-compass 원문](https://github.com/gruntjs/grunt-contrib-compass)

'Compass' 를 사용하여 `CSS` 를 `Sass` 로 컴파일합니다.


***

## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.

[Grunt](http://gruntjs.com/) 의 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile)을 만들뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-compass --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-compass');
```




## Compass task

`grunt compass` 명령은 이 작업을 실행합니다.

`Compass`는 `Sass css`의 전처리를 위한 오픈 소스 제작 프레임워크 입니다.
그것은 당신이 [Sass](http://sass-lang.com/)의 `mixin` 과 `함수`, 고급 도구를 위한 `spriting`, 파일 기반 `sass` 구성 및 빌드와 `commpass` 확장을 사용하는 간단한 패턴을 포함하여 작업흐를을 향상시켜 거대한 라이브러리와 빠른 스타일시트를 구축하는 데 도움이 됩니다.

이 작업을 할때는 [Ruby](), [Sass](), 그리고 [Compass]() 1.0.1 버젼 이상이 설치되어 있어야 합니다.
만약 `OS X` 또는 리눅스라면 아마 루비가 설치되어 있을겁니다. 테스트로 터미널에서 `ruby -v` 해보세요.
루비를 설치한적이 있으면 `gem update --system && gem install compass` 해서 `Compass` 와 `Sass` 를 설치하고 업데이트 하기 바랍니다.

`Compass` 는 폴더 레벨에서 작동합니다. 왜냐면 어떤 `src/dest` 지정하는 대신 옵션의 `sassDir` 와 `cssDir` 를 지정하기 때문입니다.




## Options

`Compass` 는 `CLI` 를 통해 모든 옵션을 노출하지 않고도 작업을 할수 있습니다.
옵션 설정에서 `config.rb` 파일의 경로를 지정할 수 있습니다. 그러면 아래 언급한 옵션이 필요하거나 `raw` 옵션에 직접 포함됩니다.
당신의 `Gruntfile` 에 정의된 옵션보다 `config.rb` 또는 `raw` 속성이 우선합니다.
`config` 와 `raw` 는 상호 배타적입니다.



#### sourcemap

Type: `Boolean`

Default: `false`

소스지도를 생성합니다.



#### config

Type: `String`

Default: 당신의 `Gruntfile`과 같은 경로

명시적으로 [Compass 구성 파일](http://compass-style.org/help/documentation/configuration-reference/)의 위치를 지정합니다.


#### raw

Type: `String`

[Compass 구성 파일](http://compass-style.org/help/documentation/configuration-reference/)의 문자열 형태.



#### basePath

Type: `String`

`Compass` 실행 경로입니다. 당신의 `Gruntfile`과 같은 경로로 기본 설정됩니다.



#### banner

Type: `String`

출력 파일에 지정된 문자열 앞에 추가해서 출력합니다. 라이센스 정보로 유용합니다.
Note: 이것은 단지 지정 옵션과 함께 작동하고 `sourcemap` 과 충돌 할 수 있습니다.



#### app

Type: `String`

Default: stand_alone

어떤 종류의 어플리케이션이 compass와 통합되었는지 지정해라.
stand_alone 또는 rails 이 될수 있다.



#### sassDir

Type: `String`

`Sass` 파일의 경로


#### cssDir

Type: `String`

`CSS` 파일의 경로


#### specify

Type: `String|Array`


컴파일 할 파일을 지정할 수 있습니다. 전체 폴더를 컴파일하지 않으려면 `Globbing` 형식을 지원하니 밑줄로 시작하는 파일 이름을 무시합니다. 경로는 Gruntfile를 기준으로합니다.




#### imagesDir

Type: `String`

이미지 경로



#### javascriptsDir

Type: `String`

자바스크립트 경로



#### fontsDir

Type: `String`

폰트 경로



#### environment

Type: `String`

Default: `development`

현재 환경에 대한 합리적인 기본값을 사용합니다. `development` 또는 `production` 일수 있습니다.



#### outputStyle

Type: `String`

`CSS` 의 출력모드. `nested`, `expanded`, `compact`, `compressed` 일수 있습니다.



#### relativeAssets

Type: `Boolean`

assets의 상대 URL을 생성합니다. `Compass`의 `asset` 도우미를 확인하세요.



#### noLineComments

Type: `Boolean`

줄 주석 비활성화.



#### httpPath

Type: `String`

Default: `/`

웹 서버에서 실행하는 경우 프로젝트 경로.



#### cssPath

Type: `String`

CSS 스타일시트가 보관되어있는 디렉토리. 그것은 `projectPath`에 상대적입니다. `stylesheets` 가 기본값.



#### httpStylesheetsPath

Type: `String`

Default: `httpPath + "/" + cssDir`

웹 서버에서 스타일시트의 전체 HTTP 경로.



#### sassPath

Type: `String`

Default: `sass`

Sass 스타일 시트가 보관되어 있는 디렉토리. 그것은 `projectPath`에 상대적입니다.



#### imagesPath

Type: `String`

Default: `images`

이미지가 보관되어 있는 디렉토리. 그것은 `projectPath`에 상대적입니다.



#### httpImagesPath

Type: `String`

Default: `httpPath + "/" + imagesDir`

웹 서버에있는 이미지에 대한 전체 HTTP 경로.



#### generatedImagesDir

Type: `String`
Default: value of `imagesDir`

생성된 이미지가 보관되어 있는 디렉토리. 그것은 `projectPath`에 상대적입니다.



#### generatedImagesPath

Type: `String`

Default: value of `projectPath/generatedImagesDir`

생성된 이미지의 전체 경로



#### httpGeneratedImagesPath

Type: `String`

Default: `httpPath + "/" + generatedImagesDir`

웹 서버에 생성된 이미지의 전체 HTTP 경로.



#### spriteLoadPath

Type: `String|Array`

Default: value of `imagesPath`

`sprites` 찾기 위해 위치를 추가합니다. `imagesPath` 는 항상 이 목록의 마지막 항목입니다.



#### javascriptsPath

Type: `String`

Default: `projectPath/javascriptsDir`

자바스크립트가 보관되는 곳의 전체 경로입니다.



#### httpJavascriptsPath

Type: `String`

Default: `httpPath + "/" + javascriptsDir`

웹 서버에서의 자바스크립트에 대한 전체 HTTP 경로.



#### fontsPath

Type: `String`

Default: `projectPath/fontsDir`

글꼴 파일이 보관되어 있는 위치의 전체 경로입니다.



#### httpFontsPath

Type: `String`

웹 서버에 있는 글꼴파일의 전체 HTTP 경로



#### httpFontsDir

Type: `String`

웹 서버에 있는 글꼴파일의 HTTP 상대 경로



#### extensionsPath

Type: `String`

Default: `project_root/extensions`


`ad-hoc` 확장에 대한 전체 HTTP 경로는 웹 서버의 폴더입니다.
이것은 Compass (예를 들면 [bower](https://github.com/bower/bower)를 통해) 프로젝트에 직접 설치한 플러그인 대신 현재의 `gems`에 액세스하는데 사용됩니다.
Compass >= 0.12.2 버젼만.




#### extensionsDir

Type: `String`

`ad-hoc` 확장에 대하여 HTTP 경로는 웹 서버에서 폴더. Compass >= 0.12.2 버젼만.



#### assetCacheBuster

Type: `Boolean`

Default: true

`false`로 설정하면,이 기본 asset 캐시 버스터를 사용하지 않습니다.



#### cacheDir

Type: `String`
Default: `.sass-cache`

`sass` 캐시 파일이 생성되는 폴더에 대한 상대 경로.



#### require

Type: `String|Array`

명령을 실행하기 전에 지정된 루비 라이브러리를 필요로 한다.
이것은 프로젝트 구성 파일을하지 않고 `Compass` 플러그인에 액세스하는 데 사용됩니다.



#### load

Type: `String|Array`

지정된 디렉토리에있는 프레임 워크 또는 확장을로드합니다.



#### loadAll

Type: `String|Array`

지정된 디렉토리에있는 모든 프레임 워크 또는 확장을 로드합니다.



#### importPath

Type: `String|Array`

`Sass`의 `@import` 지시어 지정된 폴더에 파일을 만듭니다.



#### debugInfo

Type: `Boolean`


선택자는 브라우저가 이해할수 있는 형식으로 CSS로 컴파일되고 정의되는 행 번호 및 파일을 만든다.
`outputStyle`로 `compressed`를 사용하는 경우 자동으로 비활성화



#### quiet

Type: `Boolean`

자동 모드.



#### trace

Type: `Boolean`

오류의 전체 스택 트레이스를 표시합니다.



#### force

Type: `Boolean`

`Compass`는 기존 파일을 덮어 쓸 수 있습니다.



#### boring

Type: `Boolean`

색상화 출력을 끕니다.



#### bundleExec

Type: `Boolean`

Run compass compile with bundle exec: bundle exec compass compile.



#### clean

Type: `Boolean`

생성된 파일 및 `sass` 캐시를 제거합니다. `compass` 를 실행하면 깨끗한 `compass` 컴파일한다.



#### watch

Type: `Boolean`


`compass` 컴파일 대신 `compass watch`를 실행.
기본 `watch` 명령을 사용하면, 이 `Sass` 파일에 대한 변경 사항을 수신하고 변화한 `CSS`를 다시 컴파일 합니다.
`compass`는 `Sass`를 컴파일 할 때마다, 컴파일하는 것보다 훨씬 빠르게 `Compass` 작업을 차단한다.
이것은 당신이 다른 작업을 차단하면서 이것을 사용하려는 경우, `watch`는 `grunt-concurrent`를 사용해서 병렬 작업으로 사용할 필요가 있다는 것을 의미합니다.







## Usage Examples

- 사용 예제



### Example config

- 설정파일 예제

```javascript
grunt.initConfig({
  compass: {                  // Task 
    dist: {                   // Target 
      options: {              // Target options 
        sassDir: 'sass',
        cssDir: 'css',
        environment: 'production'
      }
    },
    dev: {                    // Another target 
      options: {
        sassDir: 'sass',
        cssDir: 'css'
      }
    }
  }
});
 
grunt.loadNpmTasks('grunt-contrib-compass');
 
grunt.registerTask('default', ['jshint', 'compass']);
```




## Example usage

- 사용 예



### Use external config file

- 외부 구성파일을 사용한 예제

```javascript
grunt.initConfig({
  compass: {
    dist: {
      options: {
        config: 'config/config.rb'
      }
    }
  }
});
```


### Override setting in external config file

- 외부 구성파일의 설정을 재정의한 예제

```javascript
grunt.initConfig({
  compass: {
    dist: {
      options: {
        config: 'config/config.rb',  // css_dir = 'dev/css' 
        cssDir: 'dist/css'
      }
    }
  }
});
```


### Use raw option

- `raw` 옵션을 사용한 예제

```javascript
grunt.initConfig({
  compass: {
    dist: {
      options: {
        sassDir: 'sass',
        cssDir: 'css',
        raw: 'preferred_syntax = :sass\n' // Use `raw` since it's not directly available 
      }
    }
  }
});
```


