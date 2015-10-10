# grunt-contrib-clean

[grunt-contrib-clean 원문](https://github.com/gruntjs/grunt-contrib-clean)


폴더 및 파일을 삭제합니다.


***



## Getting Started

- 시작하기

이 플러그인은 `Grunt` ~0.4.0 버젼이상이 필요.


[Grunt](http://gruntjs.com/) 를 시작하기 전에 [Grunt 시작하기](http://gruntjs.com/getting-started)를 확인해야 합니다. 
이 문서는 [Gruntfile](http://gruntjs.com/sample-gruntfile) 뿐만 아니라 설치하고 `Grunt` 플러그인을 사용합니다.

이 과정에 익숙하다면, 당신은 다음 명령으로 이 플러그인을 설치할 수 있습니다:

```
npm install grunt-contrib-clean --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-clean');
```

이 플러그인은 그런트의 0.4.x.와 함께 작동하도록 설계되었습니다.

v0.3.x 버젼을 사용하는 경우 `Grunt`를 [업그레이드](http://gruntjs.com/upgrading-from-0.3-to-0.4) 하는것이 좋습니다.
안그렇다면, [v0.3.2](https://github.com/gruntjs/grunt-contrib-less/tree/grunt-0.3-stable) 를 참고하세요.

***



## Clean task

- Clean 작업

`grunt clean` 명령으로 이 작업을 실행합니다.


작업대상 파일 및 옵션은 [Grunt 작업 구성가이드](http://gruntjs.com/configuring-tasks)에 따라 지정될 수 있습니다.

작업의 파괴적인 특성때문에 항상 clean 경로에 주의하십시요.




## Options



#### force

Type: `Boolean` , Default: `false`

이것이 현재 작업하고 있는 디렉터리(CWD)외의 폴더를 지우는 것을 방지하는것으로부터 이 태스크를 무시한다.
주의해서 사용하세요.



#### no-write

Type: `Boolean` , Default: `false`

작업이 실행되었지만 실제로 파일을 삭제하지 못한 경우 무슨일이 일어났는지 메시지를 기록합니다.



## Usage Examples

이 작업을 실행하는 데 사용할 수있는 세 가지 형식이있다.




### Short

clean: ["path/to/dir/one", "path/to/dir/two"]
Medium (글로벌 옵션으로 특정 대상)

```javascript
clean: {
  build: ["path/to/dir/one", "path/to/dir/two"],
  release: ["path/to/another/dir/one", "path/to/another/dir/two"]
},
```

Long (대상 옵션 마다 특정 목표)


```javascript
clean: {
  build: {
    src: ["path/to/dir/one", "path/to/dir/two"]
  }
}
```

### Skipping Files


```javascript
// 모든 .js 파일을 삭제하지만, min.js 파일을 건너뜁니다 
clean: {
  js: ["path/to/dir/*.js", "!path/to/dir/*.min.js"]
}
```


"Compact" 와 "파일 배열" 형식은 숨겨진 파일, 프로세스 동적 매핑등을 다루는데 몇 가지 추가 속성을 지원합니다.





***

- 이전글 [06_00_others_task](06_00_others_task)
- 다음글 [06_02_grunt_contrib_copy](06_02_grunt_contrib_copy)


