# time-grunt

[time-grunt 원문](https://github.com/sindresorhus/time-grunt)

그런트 작업의 경과된 시간을 표시합니다.

![time-grunt](https://raw.githubusercontent.com/sindresorhus/time-grunt/master/screenshot.png)


## Install


```
npm install --save-dev time-grunt
```


## Usage

```javascript
// Gruntfile.js 
module.exports = function (grunt) {
    // 이것은 상위에 요구되며, 그런트 인스턴스로 전달한다.
    require('time-grunt')(grunt);
 
    grunt.initConfig();
}
```



## Optional callback

- 선택적 콜밸

타이밍 통계를 수집할 경우, 콜백에 전달합니다.


```javascript
require('time-grunt')(grunt, function (stats, done) {
    // 원하는대로 통계를 가져온다
    uploadReport(stats);
 
    // 종료할때 그런트에 알려준다.
    done();
});
```



## Clean layout

- 깨끗한 레이아웃

전체 시간의 1% 미만을 작업할때는 복잡해지지 않도록 숨겨집니다.

`grunt --verbose` 은 모든 작업을 볼 수 있습니다.





***

- 이전글 [08_02_grunt_concurrent](08_02_grunt_concurrent)
- 다음글 [08_04_load_grunt_tasks](08_04_load_grunt_tasks)

