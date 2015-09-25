# sass 시작

sass 는 `sass` 와 `scss` 두개가 있습니다.
일반적으로 둘다 사스(sass) 라고 부릅니다.

이둘은 약간의 차이점이 있습니다.
가장 큰차이점은 문법에서 세미콜론 `;` 과 중괄호 `{}` 가 있고 없고의 차이입니다.

예:

```scss
// scss
body {
	color: #333;
	background: #fff;
}
.header {
	color: #333;
	background: #fff;
}
```

```sass
// sass
body
	color: #333
	background: #fff
.header
	color: #333
	background: #fff
```


## sass 환경설정

[Ruby](https://www.ruby-lang.org/ko/), [Node.js](https://nodejs.org/)




## sass 설치

[Ruby Sass](http://sass-lang.com/), [Node Sass](https://github.com/sass/node-sass)


* Sublimetext
[Syntax Highlighting for Sass](https://github.com/P233/Syntax-highlighting-for-Sass)


## Ruby, Gem

```sh
$ ruby --version # ruby -v
$ gem -v
$ gem list

$ gem update --system # 시스템 업데이트

$ gem install sass   # gem i sass 설치
$ gem list sass      # 설치 목록 확인
$ gem uninstall sass # 제거
```


## sass 명령어


```sh
$ sass -h # 도움말 보기
$ sass [options] [INPUT] [OUTPUT] # 컴파일 (1회)
$ sass --watch [INPUT]:[OUTPUT] # sass -w [INPUT]:[OUTPUT], 지속적 관찰
$ sass -w -t compact [INPUT]:[OUTPUT] # nested expanded compact compressed
```

## Windows 환경에서 한글(CP949) 오류 발생 시, 언어 인코딩 UTF-8로 설정

```sh
$ sass -E utf-8 sass/style.scss css/style.css # 인코딩 옵션 설정 -E utf-8
```



