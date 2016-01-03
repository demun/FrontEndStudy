# 자바스크립트 로드맵

작성자 : 임성은

작성일 : 2015-12-07 14:22

## 공통 진행사항

- 매주 일요일 밤 10~11시 정기 후기 회의 진행 결정
- 스터디 주차는 발표 문서에 대한 정리 및 발표 준비

## 1차 진행

- 분량 나누기(11월 14일 발표 분량)

**[동기 vs 비동기 통신](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/1.%EB%8F%99%EA%B8%B0vs%EB%B9%84%EB%8F%99%EA%B8%B0_%ED%86%B5%EC%8B%A0.md) (1주차-10/19~25)**

- 차이점    
- 정의 및 특징   
  
**실무에 자주 쓰이는 함수**    

- [타이머함수](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-1.%ED%83%80%EC%9D%B4%EB%A8%B8%ED%95%A8%EC%88%98.md) __(1주차-10/19~25)__

    - setTimeout(function,millisecond)
    - setInterval(function,millisecond)clearTimeout(id)
    - clearINterval(id)
    - __setTimeout과 setInterval의 차이점__ (중요함)
    
- [인코딩/디코딩 함수escape() / unescape()](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-2.%EC%9D%B8%EC%BD%94%EB%94%A9_%EB%94%94%EC%BD%94%EB%94%A9_%ED%95%A8%EC%88%98.md) __(2주차-10/26~11/1)__

    - encodeURI(url) / decodeURI(encodeURI)
    - encodeURIComponent(uriComponent) / decodeURIComponent(encodedURI)
    
- [코드 실행 함수](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-3.%EC%BD%94%EB%93%9C%EC%8B%A4%ED%96%89_%ED%95%A8%EC%88%98.md) __(2주차-10/26~11/1)__

    - eval(String)
    
- [숫자 확인 함수](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-4.%EC%88%AB%EC%9E%90%ED%99%95%EC%9D%B8_%ED%95%A8%EC%88%98.md) __(3주차-11/2~8)__

    - isFinite()
    - isNaN()
- [형변환 함수](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-5.%ED%98%95%EB%B3%80%ED%99%98_%ED%95%A8%EC%88%98.md) __(3주차-11/2~8)__

    - parseInt(String)
    - parseFloat(String)
    - String(number)
    - Number(String)
    - Boolean(String)
    
- [기타](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-6.%EA%B8%B0%ED%83%80_%ED%95%A8%EC%88%98.md) __(3주차-11/2~8)__

    - typeof()
    - confirm(String)
    - prompt(String)
    

------------

## 2차 진행

- 분량 나누기(12월 5일 발표 분량, 12월 19일 발표 분량)

- **[함수지향1](https://github.com/demun/FrontEndStudy/tree/master/document/Javascript/docs/Team/04_%ED%95%A8%EC%88%98%EC%A7%80%ED%96%A51(%EC%A0%84%EC%B2%B4%EC%9A%94%EC%95%BD%26%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84%26%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98)) (11/23~29_ 전체에 대한 요점파악식)**

	- [유효범위](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/3-1.%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84.md) __(12/7~13)__ 
	- [값으로서의 함수와 콜백](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/3-2.%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98.md) __(12/7~13)__
- **[함수지향2](https://github.com/demun/FrontEndStudy/tree/master/document/Javascript/docs/Team/05_%ED%95%A8%EC%88%98%EC%A7%80%ED%96%A52(%ED%81%B4%EB%A1%9C%EC%A0%80%26arguments%26%ED%95%A8%EC%88%98%ED%98%B8%EC%B6%9C))**
	- 클로저
	- arguments
	- 함수의 호출

- **객체지향**

	- 객체지향 프로그래밍
	- 생성자와 new
	- 전역객체
	- this
	- 상속
	- prototype
	- 표준 내장 객체의 확장
	- Object
	- 데이터 타입
	- 참조

- **패턴**

	- 재귀함수

- **정규표현식**

----

**사용자 정의 함수**

* 정의 및 정의 방법    
  (앞의 로드맵을 모두 스터디 하면 최종적으로 이 부분으로 도달 할 겁니다. 깊이 파고들면 복잡하므로 이러한방법이 있다라는 정도만 스터디 진행하고 완료할 것.)
    * 사용자 정의 함수 - [http://spongi.tistory.com/33](http://spongi.tistory.com/33)
    * 사용자 정의 객체 - [https://opentutorials.org/course/49/2912](https://opentutorials.org/course/49/2912)
    * 사용자 정의 이벤트 - [http://sean86.tistory.com/10](http://sean86.tistory.com/10)
    
* 향후 심화 과정으로 그룹 스터디 진행합니다~

** web socket **

  HTML5 스터디하면 할까 하다 Javascript 실무에서 많이 쓰이다 보니 여기서 스터디 하겠습니다.
* HTML5에서 추가로 도입한 Socket 통신 방법(javascript로 코딩)
* 개념 및 기초
  https://www.websocket.org/ , http://html5korea.com/%EC%9B%B9%EC%86%8C%EC%BC%93websocket-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EA%B0%95%EC%9D%98%EB%B2%88%EC%97%AD/ 를 바탕으로 스터디함

** web worker **

 HTML5 스터디하면 할까 하다 Javascript 실무에서 많이 쓰이다 보니 여기서 스터디 하겠습니다.
 http://www.w3schools.com/html/html5_webworkers.asp 를 바당으로 스터디 할 것


----


> - 자바스크립트 기본
> 	- 숫자와 문자
> 	- 변수
> 	- 주석
> 	- 줄바꿈과 여백
> 	- 비교
> 	- 조건문
> 	- 반복문
> 	- 함수
> 	- 배열
> 	- 객체
> 	- 모듈
> 	- UI와 API 그리고 문서보는 법


----

##바로가기

* [1.동기vs비동기_통신.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/1.%EB%8F%99%EA%B8%B0vs%EB%B9%84%EB%8F%99%EA%B8%B0_%ED%86%B5%EC%8B%A0.md)
* 2. 실무에서 자주쓰이는 함수.
  - [2-1.타이머함수.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-1.%ED%83%80%EC%9D%B4%EB%A8%B8%ED%95%A8%EC%88%98.md)
  - [2-2.인코딩_디코딩_함수.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-2.%EC%9D%B8%EC%BD%94%EB%94%A9_%EB%94%94%EC%BD%94%EB%94%A9_%ED%95%A8%EC%88%98.md)
  - [2-3.코드실행_함수.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-3.%EC%BD%94%EB%93%9C%EC%8B%A4%ED%96%89_%ED%95%A8%EC%88%98.md)
  - [2-4.숫자확인_함수.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-4.%EC%88%AB%EC%9E%90%ED%99%95%EC%9D%B8_%ED%95%A8%EC%88%98.md)
  - [2-5.형변환_함수.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-5.%ED%98%95%EB%B3%80%ED%99%98_%ED%95%A8%EC%88%98.md)
  - [2-6.기타_함수.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/2-6.%EA%B8%B0%ED%83%80_%ED%95%A8%EC%88%98.md)  
* [3. 함수지향.](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/3-0.%ED%95%A8%EC%88%98%EC%A7%80%ED%96%A5.md)
  - [3-1.유효범위.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/3-1.%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84.md)
  - [3-2.값으로서의 함수와 콜백.md](https://github.com/demun/FrontEndStudy/blob/master/document/Javascript/docs/3-2.%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98.md)
  
----


* [FrontEndStudy](../../../../)


