# grunt-concurrent

[grunt-concurrent 원문](https://github.com/sindresorhus/grunt-concurrent)

그런트 작업을 동시에 실행합니다.


![grunt-concurrent image](https://raw.githubusercontent.com/sindresorhus/grunt-concurrent/master/screenshot.png)


`Coffee` 와 `Sass` 같은 느린작업을 동시에 실행하면 잠재적으로 빌드시간을 크게 향상시킬수 있습니다.

`nodemon` 과 `watch` 같은 다수의 작업[multiple blocking tasks](https://www.npmjs.com/package/grunt-concurrent#logconcurrentoutput)을 실행하고 한번에 관찰하는 경우 이 작업은 유용합니다.




## Install

```
npm install --save-dev grunt-concurrent
```


## Usage

```javascript
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 과 같은 겁니다.

grunt.initConfig({
    concurrent: {
        target1: ['coffee', 'sass'],
        target2: ['jshint', 'mocha']
    }
});
 
grunt.registerTask('default', ['concurrent:target1', 'concurrent:target2']);
```

***


## Options



### limit

Type: `number`

Default: Twice the number of CPU cores with a minimum of 2

동시에 실행할 작업을 제한합니다.



### logConcurrentOutput

Type: `boolean`

Default: `false`

`logConcurrentOutput` 옵션을 선택적으로 지정하여 동시진행 작업의 출력을 기록 할 수 있습니다.

여기에 시작하고, 모든 터미널 탭의 자산(asset) 변화를 보기 위해 노드 서버와 `grunt-contrib-watch` 를 모니터링 하고 `grunt-nodemon` 을 실행하는 예는 다음과 같습니다.


```javascript
grunt.initConfig({
    concurrent: {
        target: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-concurrent');
grunt.registerTask('default', ['concurrent:target']);
```

특정 작업을 결합 할 때의 출력은 혼란스러울 것이다.
이 옵션은 가장 긴 동시 작업 실행의 출력을 모니터링하는 `watch`와 `nodemon` 같이 종료되지 않는 작업에 사용됩니다.





***

- 이전글 [08_01_grunt_newer](08_01_grunt_newer.md)
- 다음글 [08_03_time_grunt](08_03_time_grunt.md)

