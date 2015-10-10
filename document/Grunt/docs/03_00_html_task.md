# 3.html task

`html` 작업인 `includes` , `htmlhint` 모듈의 사용방법 및 예제입니다.

`html task` 에서는 `includes` , `htmlhint` 등의 플러그인을 통해서 `html` 을 만듭니다.


예제에서 `html` 을 생성하는 `docs` 의 폴더구조는 아래와 같습니다.

```
+---docs
|   +---html
|   |   +---category1
|   |   |       page-01.html
|   |   |       page-02.html
|   |   |
|   |   \---category2
|   |           page-01.html
|   |           page-02.html
|   |
|   \---include
|       |   head.html
|       |   js.html
|       |
|       \---other
|               lorem.html
|               lorem2.html
```

예제에 사용된 프로젝트 저장소는 [grunt-template](https://github.com/demun/grunt-template) 입니다.



## htmlhint


`htmlhint` 는 작성한 `html` 코드가 오류가 있는지, 최적화는 되었는지 등등을 판단해서 코드를 관리하게 해줍니다.

유지보수를 위해 `gruntConfig` 폴더를 만들고 그 안에 `grunt` 와 관련된 설정파일을 넣습니다.

`htmlhint` 옵션에 사용되는 규칙은 `gruntConfig/.htmlhintrc` 에 넣어두었습니다.



`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
htmlhint: {
    options: {
        htmlhintrc: 'gruntConfig/.htmlhintrc'
    },
    dist: [
        'app/docs/html/**/*.html',
        'app/docs/inclode/**/*.html'
    ]
},
```


* 설명

`app/docs/html` 폴더의 모든 html 파일과 `app/docs/inclode` 폴더의 모든 html 파일을 옵션 설정 파일인 `.htmlhintrc` 이용해서 검사합니다.



* 관련 문서를 참고세요.

[03_02_grunt_htmlhint](03_02_grunt_htmlhint.md)

[03_02_grunt_htmlhint_option](03_02_grunt_htmlhint_option.md)





## includes

`includes` 는 `html` 내에 `html` 을 포함할 수 있습니다.

자주 사용하는 부분을 분리해서 `인클루드문` 을 통해 제작 및 유지보수를 쉽게 할 수 있습니다.

`includes` 의 장점은 모든 `html` 파일의 부모 자식간의 들어쓰기가 그대로 유지 됩니다.

만약 `html` 에서 변수를 사용하여 문자 등을 변경하고 싶으면, [grunt-include-replace](https://www.npmjs.com/package/grunt-include-replace) , [grunt-contrib-handlebars](https://www.npmjs.com/package/grunt-contrib-handlebars) , [grunt-mustache-html](https://www.npmjs.com/package/grunt-mustache-html) 등을 사용하세요. 


`Gruntfile.js` 에서 사용하는 예제는 아래와 같습니다.

```javascript
includes: {
    dist: {
        cwd: 'app/docs/html/',
        src: ['**/*.html'],
        dest: 'dist',
        options: {
            flatten: true,
            // debug: true,
            includePath: 'app/docs/include/'
        }
    }
},
```


* 설명

소스 파일은 `app/docs/html` 폴더에 하위 자식을 포함한 모든 `html` 을 대상으로(**/*.html) `includes` 플러그인을 실행하여 목적지(dist) 폴더에 생성합니다.

`flatten: true` 옵션을 이용하여 인클루드 경로는 `app/docs/include/` 로 합니다.

즉, `category1` 폴더의 `category1-1.html` 에서 `include` 폴더에 `head.html` 을 인클루드하려면 아래처럼 합니다.

```html
include "../include/head.html"
```



* 관련 문서를 참고세요.

[03_01_grunt_includes](03_01_grunt_includes.md)


***

- 이전글 [02_00_grunt_소개](02_00_grunt_소개.md)
- 다음글 [03_01_grunt_includes](03_01_grunt_includes.md)

