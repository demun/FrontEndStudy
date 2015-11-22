# RestFul


## REST란?
HTTP URI를 통해 Resource를 명시하고, HTTP Method(Post, Get, Put, Delete)를 통해 해당 Resource에 대한 CRUD Operation을 적용한다. 즉, REST는 ROA(Resource Oriented Architecture) 설계의 중심에 Resource가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미한다.
HTTP Method와 CRUD Operation은 일반적으로 아래 표와 같이 맵핑된다.

Method | CRUD
---- | ----
POST | Create
GET | Read
PUT | Update
DELETE | delete

## REST의 장점.
Open API를 제공하기 쉽다. Mashup이 활발해진 배경에는 REST의 영향을 무시할 수 없다.
멀티 플랫폼(Web, iOS, Android) 지원 및 연동이 용이하다.
원하는 타입(json, xml, rss…)으로 데이터를 주고 받을 수 있다.
기존 웹 인프라(HTTP)를 그대로 활용할 수 있다. (방화벽 문제에서 자유롭고, 로드 밸런서 등의 장비도 그대로 사용 가능하다)
Resource가 Unique한 URI로 표현되도록 설계하면 웹 캐시 서버도 이용 가능하다.
쉽다! 개인적으로는 가장 큰 장점이라고 생각한다.

## REST의 단점.
사용할 수 있는 Method가 4가지 밖에 없다. 즉, CRUD로 표현하기 모호한 작업을 처리하기 애매하다.
HTTP 의존적이다. (처음에는 단점이었으나 HTTP로 대동단결하는 현재 분위기에서는 단점이라고 보기 어렵다)
표준이 없어 관리가 어렵다.
