# grunt-includes

[grunt-includes 원문](https://github.com/vanetix/grunt-includes)


이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.

파일내에 다른 파일을 포함하는 grunt 작업입니다.(php 포함)

모든 부모와 자식들의 들여 쓰기를 그대로 유지합니다.



***



## Getting Started

- 시작하기



프로젝트의 `Gruntfile.js` 에 플러그인을 설치합니다.

```
npm install grunt-includes --save-dev
```

그런다음 프로젝트의 `Gruntfile.js` 다음줄를 추가합니다.

```
grunt.loadNpmTasks('grunt-includes');
```

[grunt-includes-example](https://github.com/vanetix/grunt-includes-example) 에서 예제를 볼수 있습니다.


***



## Options





### flatten

Type: `String` , Default: `false`

대상 디렉토리에 있는 모든 파일소스를 병합하여 나열합니다.

`source/file/path.html` 는 `path.html` 처럼 짧게 변경되기도 합니다.





### banner

Type: `String` , Default: `''`

`grunt.template.process` 로 컴파일된 모든 파일 앞부분에 문자열로 추가됩니다.





### duplicates

Type: `Boolean` , Default: `true`

중복으로 포함되는 파일을 허용합니다.





### debug

Type: `Boolean` , Default: `false`

디버그 모드로 컴파일합니다.

인클루드된 파일의 경로가 표시됩니다.





### silent

Type: `Boolean` , Default: `false`

성공메시지를 알리지않고 조용히 처리합니다.






### includePath

Type: `String` , Default: `''`

포함된 파일의 경로를 지정합니다.

인클루드 문에 사용된 상태경로를 기본 디렉토리로 지정합니다. 





### filenamePrefix

Type: `String` , Default: `''`

파일이름에 정의된 문자열을 접두사로 추가합니다. [Release History 사용중지](https://www.npmjs.com/package/grunt-includes#release-history)

`include_file.ext` 를 `file.ext` 로 만듭니다.






### filenameSuffix

Type: `String` , Default: `''`

파일이름에 정의된 문자열을 접미사로 변경합니다. [Release History 사용중지](https://www.npmjs.com/package/grunt-includes#release-history)

`file.ext` 를 `file` 로 변경합니다.






### templateFileRegexp

Type: `RegExp` , Default: `/\{\{\s?file\s?\}\}/`

일치된 템플릿 텍스트를 교체하는 정규 표현식.

Example: Start of template | {{file}} | End of template.





### template

Type: `String`

템플릿으로 렌더링하면, {{fileName}} 과 {{file}} 를 filename 과 file 로 대체됩니다..






### includeRegexp

Type: `RegExp`

Default: `/^(\s*)include\s+"(\S+)"\s*$/` 

Matches: `include "some/file.html"`

include 문을 찾기 위해 사용되는 정규 표현식을 설정합니다.

정규식 기는 포함 명령문의 중요한 부분을 식별하는 데 사용된다.

자신의 정규식을 구성 할 때, (정규 표현식에 괄호 ()로 표시) 두 그룹까지 포함 할 수 있습니다 :


- 1.들여 쓰기 공백이 포함 된 파일의 내용의 전면에 추가한다.
- 2.파일위치
- 3.모든 정규 표현식은 적어도 하나의 그룹을 포함해야합니다. 하나의 그룹 만이 사용되는 경우, 파일 경로를 포함한다고 가정한다.



***


## Usage

- 사용법

당신은 `html` 템플릿을 구성하는데 이 플러그인을 사용할 수 있습니다.


```javascript
includes: {
    files: {
        src: ['path/to/foo.html', 'path/to/bar.html'], // Source files 
        dest: 'tmp', // Destination directory 
        flatten: true,
        cwd: '.',
        options: {
            silent: true,
            banner: '<!-- I am a banner <% includes.files.dest %> -->'
        }
    }
}
```


또는 정적으로 파일을 구성할 수 있습니다.


```javascript
includes: {
    js: {
        options: {
            includeRegexp: /^\/\/\s*import\s+['"]?([^'"]+)['"]?\s*$/,
            duplicates: false,
            debug: true
        },
        files: [{
            cwd: 'assets/js/',
            src: '**/*.js',
            dest: 'assets/dist/js/',
        }],
    },
},

watch: {
    js: {
        files: ['assets/js/**/*.js'],
        tasks: ['includes:js', 'jshint']
    },
},
```


## Troubleshooting

- 문제해결

그런트가 잘못된 위치에 파일을 잘못 복사합니다.

당신은 `src`, `dest`, `cwd` 객체를 멀티 태스크로 사용하는 경우, 파일을 배열 형식으로 사용하는식으로 배열을 제공해야합니다.

당신이 파일을 `{src : ...}` 식으로 설정하여 그것을 나타내는 경우,  파일 형식 객체를 `src`, `dest`, `cwd` 디렉토리에 인공 결과물을 복사하는등, 그런트는 잘못 해석됩니다.

이는 멀티 태스크 사용에 영향을 미칠 것입니다.


- [릴리즈 내역](https://www.npmjs.com/package/grunt-includes#release-history) 과 [라이센스](https://www.npmjs.com/package/grunt-includes#license-mit) 원문 참고.


***


- 이전글 [03_00_html_task](03_00_html_task.md)
- 다음글 [03_02_grunt_htmlhint](03_02_grunt_htmlhint.md)

