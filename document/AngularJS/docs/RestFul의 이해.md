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

## REST Architecture 6가지 원칙
* 클라이언트/서버 구조: 일관적인 인터페이스로 분리되어야 한다
* 무상태(Stateless): 각 요청 간 클라이언트의 콘텍스트가 서버에 저장되어서는 안 된다
* 캐시 처리 가능(Cacheable): WWW에서와 같이 클라이언트는 응답을 캐싱할 수 있어야 한다.
잘 관리되는 캐싱은 클라이언트-서버 간 상호작용을 부분적으로 또는 완전하게 제거하여 scalability와 성능을 향상시킨다.
* 계층화(Layered System): 클라이언트는 보통 대상 서버에 직접 연결되었는지, 또는 중간 서버를 통해 연결되었는지를 알 수 없다. 중간 서버는 로드 밸런싱 기능이나 공유 캐시 기능을 제공함으로써 시스템 규모 확장성을 향상시키는 데 유용하다.
* Code on demand (optional) - 자바 애플릿이나 자바스크립트의 제공을 통해 서버가 클라이언트가 실행시킬 수 있는 로직을 전송하여 기능을 확장시킬 수 있다.
* 인터페이스 일관성: 아키텍처를 단순화시키고 작은 단위로 분리(decouple)함으로써 클라이언트-서버의 각 파트가 독립적으로 개선될 수 있도록 해준다.

## Web API Design
*  기본 URL에는 동사가 아닌 명사를 사용하며, 리소스마다 2개의 기본 URL을 유지

```
/dogs(Collection), /dogs/1234(Element)
```

*  HTTP 동사(POST, GET, PUT, DELETE)를 사용해 집합(컬렉션)이나 개별 요소를 오퍼레이션.
POST(create), GET(read), PUT(update), DELETE(delete)를 명심

* 복수형 명사와 구체적인 이름을 사용.
- 단수보다 복수 형태를 사용하는 편이, 그리고 추상적인 이름보다 구체적인 이름을 사용하는 편이, 직관적인 API다.
```
예)Foursquare : /checkins, GroupOn : /deals, Zappos : /Product
```

*  자원 간의 관계를 간단하게 하여 URL 계층이 깊어지는 것을 피하자.
* 자원간의 관계, 매개 변수 및 속성과 같은 복잡한 것은 HTTP 물음표 뒤에 가지고 가자.

```
예) GET /owners/5678/dogs, GET /dogs?color=red&state=running&location=park
```

*  오류 처리를 명확하게 해라.
*  HTTP 상태코드를 정하고(많아도 안좋음), 개발자들을 위한 오류 메세지 정의, 상세 정보 링크 등을 넣어주면 좋다.

```
200 - OK
400 - Bad Request
500 - Internal Server Error
201 - Created
304 - Not Modified
404 - Not Found
401 - Unauthorized
403 - Forbidden
```

*  code, message, more_info 필드를 두어서 결과값을 먼저 파악할 수 있도록 한다.

```
예) {"status" : "401", "message":"Authenticate","code": 20003,
 "more info": "http://www.twilio.com/docs/errors/20003"}
```

*  버전 관리를 해라.
- 접두사 "v"로 버전을 지정하고 1계층에 두자.
- 인터페이스로서 구현이 아님을 강조하기 위해 간단한 정수를 사용하자. 버전 일렬번호는 소수점 쓰지 마라.
- 필요시 헤더에 버전을 디자인할 수도 있다.(단점은 개발자들이 잊을 수 있다.)
```
  예) GET /v1/dogs
```

*  부분적 응답과 페이징 처리를 하라.
- 리턴해 달라는 필드를 지정하려면(부분 응답) 쉼표로 구분된 목록을 사용하자.
```
  예) /dogs?fields=name,color,location
```
- 페이징을 할 경우 상대 위치(offset)와 범위(limit)를 사용, 기본 값은 limit=10&offset=0을 사용한다.
```
  예) /dogs?limit=25&offset=50
```

*  데이터 베이스에 없는 자원에 대한 응답일 경우 동사를 사용하라.
*  리소스가 아닌 응답을 전송하는 경우 명사가 아니라 동사를 사용하는 것이 알기 쉽다.
*  계산(Calculate), 번역(Translate), 변환(Convert) 등의 경우처럼 알고리즘 계산이나 번역, 환율 변환 등에 요청이 올경우 명사가 아니라 동사를 사용하라.
```
  예) /convert?from=EUR&to=CNY&amount=100
```

*  다양한 형식(컨텐트 타입)을 지원하는 경우 도트 형식의 서식으로 하라.
- JSON과 XML과 같이 API 다른 응답 형식을 지원하는 것을 추천한다.
- 기본 형식은 json이다.
- Accept 헤더에 타입을 지정하거나, URL속에 type 매개변수를 사용할 수 있다. 권장 방식은 명사.type(도트 형식의 서식)으로 하는게 낫다.
```
  예) dogs.json, /dogs/1234.json
```
* 속성(attribute)의 네이밍은 Javascript의 관습을 따르고 카멜 케이스 (CamelCase)를 사용하자.
- 기본값으로 JSON을 사용하고, 속성의 이름은 Javascript의 관습을 따른다. 중간 부분에 대문자를 사용(카멜 케이스)
```
  예) "createdAt": 1320296464
```
*  검색 팁
-전체 검색은 동사 "search"와 쿼리 매개 변수 "q"를 사용하자.
```
  예) /search?q=fluffy+fur
```
- 범위 한정 검색은 /리소스/리소스 ID/리소스?q=XXX(리소스 ID가 5678 인 주인의 개를 검색) 형태로 한다.
```
  예) /owners/5678/dogs?q=fluffy+fur
```
- 도트 형식의 서식을 사용하여 검색 결과 형식을 지정하자.
```
  예) /search.xml?q=fluffy+fur
```

*  하위 도메인의 독립적인 API 요청 처리는 여러 개를 만들지 말고 통일하라.
- 여러 기능적으로 독립된 url을 여러개 만들지 말고 모든 API 요청을 하나의 API 하위 도메인에 정리하자. api.company.com 같은 것을 사용하는 것이다.
- developers.company.com 같은 개발자 전용 포털을 만들자.
- 사용자가 브라우저에서 API 하위 도메인을 여는 등 요청에 대한 원하는 정보가 없다면 개발자 포털로 리다이렉트 해라.

*  예외 처리를 위한 팁
- 클라이언트가 HTTP 오류 코드를 차단하는 경우(Adobe Flash 경우), 응답을 클라이언트에서 먹어버림으로 응용 프로그램 개발자가 오류 코드를 차단하는 기회가 없어진다. 그래서 트위터처럼 suppress_response_codes가 있으면 무조건 200으로 리턴하게 한다.

- 클라이언트가 지원하는 HTTP 메소드가 제한되는 경우 URL에서 method형태로 호출하게 한다.
```
 Create : /dogs?method=post, Read : /dogs,
 Update : /dogs/1234?method=put&location=park,
 Delete : /dogs/1234?method=delete
```

*  권한 관리(OAuth)는 2.0을 사용하라.
- OAuth 1.0a보다 2.0을 사용하라. 더 안전하고 웹과 모바일 모두 사용자에게 더 나은 경험을 제공한다.

*  API상에서 요청을 구성해보면 아래와 같다.
- Al라는 갈색 개를 생성.
```
POST /dogs
name=Al&furColor=brown
응답
200 OK
{
"dog": {
"id": "1234"
"name": "Al"
"furColor": "brown"
}
}
```
- Al의 이름을 Rover로 수정
```
PUT /dogs/1234
name=Rover
응답
200 OK
{
"dog": {
"id": "1234"
"name": "Rover"
"furColor": "brown"
}
}
```
- 특정 개에 관하여 조회
```
GET /dogs/1234
응답
200 OK
{
"dog": {
"id": "1234"
"name": "Rover"
"furColor": "brown"
}
}
```
- 모든 개에 관해 조회
```
GET /dogs
응답
200 OK
{
"dogs":
{ "dog": {
"id": "1233"
"name": "Fido"
"furColor": "white"}}
{ "dog": {
"id": "1234"
"name": "Rover"
"furColor": "brown"}}
"_metadata":
[{ "totalCount": 327 "limit"25 "offset": 100}]
}
```
- Rover개 삭제
```
DELETE / dogs/1234
응답
200 OK
```
