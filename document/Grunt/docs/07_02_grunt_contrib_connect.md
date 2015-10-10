# grunt-contrib-connect

[grunt-contrib-connect 원문](https://github.com/gruntjs/grunt-contrib-connect)

connect web server를 시작 합니다.



## Getting Started

- 시작하기

이 플러그인은 Grunt~0.4.0을 필요로 한다.

만일 이전에 Grunt를 사용한 경험이 없다면, [Gruntfile](http://gruntjs.com/sample-gruntfile)을 어떻게 생성하는가와 설치방법, 플러그인의 사용법 등을  설명하고 있는 [그런트 시작하기 가이드](http://gruntjs.com/getting-started)를 꼭 읽어보기 바란다. 그내용을 숙지했다면 아래의  명령어로 이 플러그인을 설치할 수 있을것이다.

```
npm install grunt-contrib-connect --save-dev
```

플러그인이 설치되면, Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용할 수 있습니다 :

```
grunt.loadNpmTasks('grunt-contrib-connect');
```

***



## Connect task

grunt connect command으로 작업을 시작하세요


이 서버는 Grunt가 수행되는 만큼 작동 된다. Grunt의 업무가 완료되면 웹서버는 멈춘다. 
이 동작은 킵얼라이브[keepalive](https://www.npmjs.com/package/grunt-contrib-connect#keepalive) 옵션으로 변경 할수 있으며, `grunt connect:keepalive` 와 같은 업무를 실행하여 `ad-hoc` 을 활성화 할수 있다. 
  

이 작업은 qunit 작업처럼, [grunt-contrib-qunit](https://github.com/gruntjs/grunt-contrib-qunit) 플러그인 이후에 실행되는 다른 작업과 함께 사용하도록 설계되었습니다.



## Options




### port

Type: `Integer`

Default: `8000`

웹 서버가 응답하는 포트. 작업([useAvailablePort](https://www.npmjs.com/package/grunt-contrib-connect#useavailableport)이 설정되어 있지 않으면)에 지정된 포트가 사용중인 경우 실패합니다.
당신은 시스템에서 할당한 포트를 사용하는데 특정값 `0`이나 `?`를 사용할 수 있다.




### protocol

Type: `String` , Default: `'http'`

May be 'http' or `'https'`.

> 프로토콜로 기본값이 `'http'` 고 `'https'` 도 가능합니다.



### hostname

Type: `String` , Default: `'0.0.0.0'`


웹서버에 접근 할수 있는 호스트 이름

'0.0.0.0'과 같은, '*'로 설정하면 '127.0.0.1' 및 이더넷 또는 무선 인터페이스('192.168.0.x' or '10.0.0.x' 처럼)에 할당 된 IP와 같은 임의의 로컬 IPv4 주소로부터 서버에 액세스 할 수 있도록 한다. [추가정보](http://en.wikipedia.org/wiki/0.0.0.0)


`open`이 `true` 일 경우, 호스트 설정은 와일드 카드 호스트 이름이 지정된 경우 로컬 호스트의 디폴트 브라우저가 열리고 URL을 생성하기 위해 사용될 것이다.

> 웹서버의 호스트명



### base

Type: `String` or `Array` or `Object` 

Default: `'.'`

| Type          | Result                | Example
|---------------|-------------------------------------------------|------------------------------------------------------|
| String        | 파일이 제공되는 베이스(또는 루트) 디렉토리. 프로젝트 Gruntfile의 기본 디렉토리로  설정됩니다.| `'public'`
| Array         | 베이스 문자열 (또는 개체)의 배열은 여러 디렉토리 서비스를 제공합니다. 주어진 마지막 베이스[디렉토리] [] `browse-able`이 될 수 있습니다.| `['public','www-root']`
| Object        | 경로와 옵션키를 포함하는 지도. 옵션은 [connect.static](http://www.senchalabs.org/connect/static.html) 모듈에 전달됩니다.| `{ path: 'public', options: { maxAge: 1000*60*5 }` }


> 정적 파일을 제공할 루트 경로



### directory

Type: `String` , Default: `null`


`browse-able`로 원하는 디렉토리를 설정합니다. 기본 옵션 `browse-able` 디렉토리를 무시하는 데 사용됩니다..

> 웹브라우져에서 보여줄 파일 목록 디렉토리


### keepalive

Type: `Boolean` . Default: `false`



서버가 계속 실행된채로 유지한다. 이 옵션을 사용 할 경우 참조하고, 이 작업 이후에 지정된 모든 작업이 실행되지 않습니다. `default`에 의해 Grunt 작업이 완료되었다면 웹서버를 정지한다. 이 옵션은 그 행위를 변경 한다.


이 옵션은 또한, `grunt connect:targetname:keepalive`같은 작업을 실행함으로서 `ad-hoc`를 가능하게 한다.




### debug

Type: `Boolean` , Default: `false`

Set the debug option to true to enable logging instead of using the --debug flag.
`--debug flag`를 사용하는 대신, 로그인이 가능하도록 `Debug option`을 `true`로 설정하라.




### livereload

Type: `Boolean` or `Number` , Default: `false`

`connect-livereload`를 사용하는 당신의 페이지에 `connect-livereload` 스크립트 태그를 삽입한 포트넘버나 `true`를 설정해라.

이 라이브 리로딩은 수행하지 않는다. 그것은 `grunt-contrib-watch` 또는 파일 변경에 live reload 서버를 트리거 할 다른 작업과 병행 사용하기 위한 것입니다.



### open

Type: `Boolean` or `String` or `Object` , Default: `false`

당신의 기본 브라우저에서 제공되는 페이지를 엽니다.

이건 다음 중 하나가 됩니다.

- `true`로 지정하면 기본 서버 URL(프로토콜, 호스트 이름 및 포트 설정에서 발생)을 엽니다.
- `URL`을 지정하면 해당 `URL`을 엽니 다
- 직접 `open` 구성하려면 객체에 다음 키를 사용하여 지정합니다


```javascript
{
  target: 'http://localhost:8000', // target url to open 
  appName: 'open', // name of the app that opens, ie: open, start, xdg-open 
  callback: function() {} // called when the app has opened 
}
```



### useAvailablePort

Type: `Boolean` , Default: `false`


`true`의 경우 작업은 포트 옵션 설정 후 다음 사용 가능한 포트를 찾습니다.



### onCreateServer

Type: `unction` or `Array` , Default: `null`

서버 객체를 만든 후 함수는 서버 객체를 액세스하는 라이브러리를 통합 할 수 있도록 합니다.

A Socket.IO example:

```javascript
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 8000,
        hostname: '*',
        onCreateServer: function(server, connect, options) {
          var io = require('socket.io').listen(server);
          io.sockets.on('connection', function(socket) {
            // do something with socket 
          });
        }
      }
    }
  }
});
```



### middleware

정적 파일 및 디렉터리 검색에 대한 `options.base`를 사용하는 커넥트 미들웨어의 배열

As an Array:

```javascript
grunt.initConfig({
  connect: {
    server: {
      options: {
        middleware: [
          function myMiddleware(req, res, next) {
            res.end('Hello, world!');
          }
        ],
      },
    },
  },
});
```


As a function:

```javascript
grunt.initConfig({
  connect: {
    server: {
      options: {
        middleware: function(connect, options, middlewares) {
          // inject a custom middleware into the array of default middlewares 
          middlewares.unshift(function(req, res, next) {
            if (req.url !== '/hello/world') return next();
 
            res.end('Hello, world from port #' + options.port + '!');
          });
 
          return middlewares;
        },
      },
    },
  },
});
```



당신은 당신 소유의 커넥트 미들웨어에 추가 할 수 있다.이 옵션은 미들웨어의 배열을 돌려주는 기능을 한다. 
사용예로 [project Gruntfile](https://github.com/gruntjs/grunt-contrib-connect/blob/master/Gruntfile.js) 과 [project unit tests](https://github.com/gruntjs/grunt-contrib-connect/blob/master/test/connect_test.js)를 찾아라. 



## Usage examples

- 사용 예



### Basic Use


이 예에서, `grunt connect` (또는 더 자세하게 말하면, `grunt connect:server`) `http://localhost:9001/`에서 정적 웹 서버를 시작합니다, 그것은 기본 경로로 `gruntfile`에 `www`가 상대적 루트 디렉토리로 설정하고 이후에 실행되는 작업에 액세스 할 수 있습니다.


```javascript
// Project configuration. 
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'www-root'
      }
    }
  }
});
```




웹 서버 기본 옵션을 사용하려면, 단지 옵션 객체를 생략합니다.
당신은 여전히, 대상(이 예에서는 `uses_defaults`)을 지정해야 합니다
하지만 대상의 구성 개체는 비어있거나 존재하지 않는 수 있습니다.

`grunt connect`(더 자세히 말하면, `grunt connect:uses_defaults`)는 기본 옵션을 사용하여 정적 웹 서버를 시작합니다.


```javascript
// Project configuration. 
grunt.initConfig({
  connect: {
    uses_defaults: {}
  }
});
```



### Multiple Servers

당신은 단독 실행하거나 각 서버를 위해 타겟 생성을 동시에 하는 다중 서버를 설정 할 수 있습니다. 
이 예에서  `grunt connect:site1` 와 `grunt connect:site2` 로 웹서버를 시작 할 수 있습니다. 
그러나 `grunt connect` 는 모두다 실행합니다. 
[keepalive](https://www.npmjs.com/package/grunt-contrib-connect#keepalive) 옵션이 지정되는 모든 서버는가 모든 작업 또는 대상을 막을 수 있습니다.


```javascript
// Project configuration. 
grunt.initConfig({
  connect: {
    site1: {
      options: {
        port: 9000,
        base: 'www-roots/site1'
      }
    },
    site2: {
      options: {
        port: 9001,
        base: 'www-roots/site2'
      }
    }
  }
});
```


### Connect.static Options

당신은 `connect.static` 모듈의 각 인스턴스에 전달하는 옵션을 지정할 수 있습니다 :

```javascript
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 8000,
        base: {
          path: 'www-root',
          options: {
            index: 'somedoc.html',
            maxAge: 300000
          }
        }
      }
    }
  }
});
```


### Roll Your Own

[Basic Use](https://www.npmjs.com/package/grunt-contrib-connect#basic-use)된 예와 같이, 이 예제는 `http://localhost:9001/`에서 정적 웹서버를 시작합니다
이는 `gruntfile`에 `www-root` 디렉토리에 상대적으로 설정된 기본 경로입니다.
이와 달리 다른 예는, 이것은 완전히 새로운 작업을 생성하여 수행됩니다.
사실, 이 플러그인이 설치되어 있지도 않습니다!


```javascript
// Project configuration. 
grunt.initConfig({ /* Nothing needed here! */ });
 
// After running "npm install connect --save-dev" to add connect as a dev 
// dependency of your project, you can require it in your gruntfile with: 
var connect = require('connect');
 
// Now you can define a "connect" task that starts a webserver, using the 
// connect lib, with whatever options and configuration you need: 
grunt.registerTask('connect', 'Start a custom static web server.', function() {
  grunt.log.writeln('Starting static web server in "www-root" on port 9001.');
  connect(connect.static('www-root')).listen(9001);
});
```


### Support for HTTPS

- (HTTPS 지원)


인증서 및 키 파일이 제공되며, `pre- configured` 사용을 위한 프로토콜이 `https`로 설정되었을 때 기본적으로 권한을 증명합니다.

참고 : 인증서 없음 암호를 설정합니다. Google 크롬에서 경고를 받고 있다면, 키체인(`node_modules/tasks/certs`에서)에 `server.crt`를 추가합니다.
OS X에서 `server.crt`를 추가 한 후, 인증서 클릭 오른쪽 선택 'Get Info' - 'Trust' - 'Always Trust', 그리고 창을 닫고 크롬을 재시작합니다.

[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) 의 [HTTPS livereload 마지막 예](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload)를 참조하십시오.




#Advanced HTTPS config

기본 인증서 설치가 당신의 환경에서 부적합하다면, `OpenSSL`은 로컬 `ca root`를 자체 서명된 인증서의 세트를 생성하는데 사용될 수있다.

```
### Create ca.key, use a password phrase when asked 
### When asked 'Common Name (e.g. server FQDN or YOUR name) []:' use your hostname, i.e 'mysite.dev' 
openssl genrsa -des3 -out ca.key 1024
openssl req -new -key ca.key -out ca.csr
openssl x509 -req -days 365 -in ca.csr -out ca.crt -signkey ca.key
 
### Create server certificate 
openssl genrsa -des3 -out server.key 1024
openssl req -new -key server.key -out server.csr
 
### Remove password from the certificate 
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
 
### Generate self-siged certificate 
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```


`SSL`을 구성 할 때 설정할 수있는 다양한 옵션에 대한 자세한 내용은 [TLS](http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener)에 대한 노드 설명서를 참조하시기 바랍니다.

Grunt configuration would become

```javascript
// Project configuration. 
grunt.initConfig({
  connect: {
    server: {
      options: {
        protocol: 'https',
        port: 8443,
        key: grunt.file.read('server.key').toString(),
        cert: grunt.file.read('server.crt').toString(),
        ca: grunt.file.read('ca.crt').toString()
      },
    },
  },
});
```


## Grunt Events


서버가 시작되면, `connect.{taskName}.listening` 이름으로 `connect` 플러그인은 그런트 이벤트를 만든다.
keepalive server에 대한 것을 구동시키는 이 이벤트를 수신 할수 있다. 예륻들면:


```javascript
grunt.registerTask('jasmine-server', 'start web server for jasmine tests in browser', function() {
  grunt.task.run('jasmine:tests:build');
 
  grunt.event.once('connect.tests.listening', function(host, port) {
    var specRunnerUrl = 'http://' + host + ':' + port + '/_SpecRunner.html';
    grunt.log.writeln('Jasmine specs available at: ' + specRunnerUrl);
    require('open')(specRunnerUrl);
  });
 
  grunt.task.run('connect:tests:keepalive');
});
```




***

- 이전글 [07_01_grunt_contrib_watch](07_01_grunt_contrib_watch)
- 다음글 [08_00_최적화](08_00_최적화)

