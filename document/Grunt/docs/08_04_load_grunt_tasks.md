# load-grunt-tasks

[load-grunt-tasks 원문](https://github.com/sindresorhus/load-grunt-tasks)

글로빙 패턴(globbing patterns) 을 사용하여 여러개의 그런트 작업을 로드합니다.

보통은 각 작업을 모두 로드해야 합니다.

이 모듈은 `package.json` 의 `dependencies/devDependencies/peerDependencies/optionalDependencies` 를 읽고, 제공된 패턴과 일치하는 그런트 작업을 로드합니다.



### Before

```javascript
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-recess');
grunt.loadNpmTasks('grunt-sizediff');
grunt.loadNpmTasks('grunt-svgmin');
grunt.loadNpmTasks('grunt-styl');
grunt.loadNpmTasks('grunt-php');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-bower-requirejs');
```

### After

```javascript
require('load-grunt-tasks')(grunt);
```


### 설치

```
npm install --save-dev load-grunt-tasks
```


## Install

```javascript
// Gruntfile.js 
module.exports = function (grunt) {
ㄴ    // ['grunt-*', '@*/grunt-*'] 패턴과 일치하는 모든 그런트 작업을 로드
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({});
    grunt.registerTask('default', []);
}
```


## Usage

> 역자: 아래는 `load-grunt-tasks` 작업의 여러가지 사용 예제입니다.





## Examples


### Load all grunt tasks

- 모든 그런트 작업을 로드

```javascript
require('load-grunt-tasks')(grunt);
```

- 위와 똑같은 예제.

```javascript
require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '@*/grunt-*']});
```

### Load all grunt-contrib tasks

- 모든 `grunt-contrib` 작업을 로드

```javascript
require('load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});
```




### Load all grunt-contrib tasks and another non-contrib task

- 모든 `grunt-contrib` 작업을 로드하고, `contrib` 작업이 아닌 다른작업 로드


```javascript
require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-shell']});
```




### Load all grunt-contrib tasks excluding one

- 모든 `grunt-contrib` 작업을 로드하고, 하나의 작업을 제외

글로빙 패턴(globbing pattern) 의 부정기호 `!` 를 사용하여 작업에서 제외시킬수 있습니다.

```javascript
require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', '!grunt-contrib-coffee']});
```



#### Set custom path to package.json

- `package.json` 의 사용자 지정 경로로 설정

```javascript
require('load-grunt-tasks')(grunt, {config: '../package'});
```



#### Only load from `devDependencies`

- `devDependencies` 에서만 로드

```javascript
require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
```



### Only load from `devDependencies` and `dependencies`

- `devDependencies` 와 `dependencies` 에서만 로드

```javascript
require('load-grunt-tasks')(grunt, {scope: ['devDependencies', 'dependencies']});
```



### All options in use
- 사용중인 모든 옵션

```javascript
require('load-grunt-tasks')(grunt, {
    pattern: 'grunt-contrib-*',
    config: '../package.json',
    scope: 'devDependencies'
});
```

***



## Options


### pattern

Type: `string`, `array`

Default: `['grunt-*', '@*/grunt-*']` [globbing pattern](https://github.com/isaacs/minimatch)



### config

Type: `string`, `object`

Default: 인접한 `package.json` 경로



### scope

Type: `string`, `array`

Default: `['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']`
Values: `'dependencies'`, `'devDependencies'`, `'peerDependencies'`, `'optionalDependencies'`, `'bundledDependencies'`





***

- 이전글 [08_03_time_grunt](08_03_time_grunt)
- 다음글 [09_00_task_실행](09_00_task_실행)



