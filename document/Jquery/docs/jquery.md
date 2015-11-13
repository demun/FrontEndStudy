# jQuery


<table>
	<tr>
		<th>분류</th>
		<th>내용</th>
		<th>프로퍼티 및 매서드</th>
	</tr>
	<tr>
		<td rowspan="4">일반노드찾기</td>
		<td>아이디로 찾기</td>
		<td>$('#아이디')</td>
	</tr>
	<tr>
		<td>아이디로 찾기</td>
		<td>$('#아이디')</td>
	</tr>
	<tr>
		<td>클래스이름으로</td>
		<td>$('클래스이름')</td>
	</tr>
	<tr>
		<td>속성으로 찾기</td>
		<td>$('[속성이름=값]')</td>
	</tr>
	<tr>
		<td rowspan="7">찾은노드 <br>다루기</td>
		<td>찾은 개수 구하기</td>
		<td>$대상.length</td>
	</tr>
	<tr>
		<td>n번째 노드 접근하기</td>
		<td>$대상.eq(index)</td>
	</tr>
	<tr>
		<td>DOM 객체접근</td>
		<td>$대상.get(index) , $대상[index]</td>
	</tr>
	<tr>
		<td>순차적으로 접근하기</td>
		<td>
			<p>$대상.each(function(index) {</p>
			<p>&nbsp;&nbsp; $(this) 또는 $대상.eq(index)</p>
			<p>})</p>
<!-- <pre><code>
$대상.each(function(index) {
	$(this) 또는 $대상.eq(index)
})
</code></pre> -->
		</td>
	</tr>
	<tr>
		<td>노드중에서 특정노드만 찾기</td>
		<td>$대상.filter('선택자')</td>
	</tr>
	<tr>
		<td>노드의 자손노드중 특정노드 찾기</td>
		<td>$대상.find('선택자')</td>
	</tr>
	<tr>
		<td>인덱스 값 구하기</td>
		<td>
			<p>$대상.index()</p>
			<p>$목록.index($대상)</p>
			<p>$목록.index(대상DOM객체)</p>
		</td>
	</tr>

	<tr>
		<td rowspan="5">자식노드찾기</td>
		<td>모든 자식 노드 찾기</td>
		<td>$대상.children()</td>
	</tr>
	<tr>
		<td>특정자식노드만 찾기</td>
		<td>$대상.children('선택자')</td>
	</tr>
	<tr>
		<td>첫번째 자식 노드 찾기</td>
		<td>
			<p>$대상.children().first()</p>
			<p>$대상.children().eq(0)</p>
			<p>$대상.children(':first')</p>
			<p>$대상.children(':eq(0)')</p>
		</td>
	</tr>
	<tr>
		<td>마지막번째 자식 찾기</td>
		<td>
			<p>$대상.children().last()</p>
			<p>$대상.children(':last')</p>
			<p>$대상.children().eq($대상.children().length-1)</p>
			<p>$대상.children(':eq('+$대상.children().length-1+')')</p>
			<p>$대상.children().eq(-1)</p>
			<p>$대상.children(':eq(-1)')</p>
		</td>
	</tr>
	<tr>
		<td>n번째 자식노드찾기</td>
		<td>
			<p>$대상.children().eq(index)</p>
			<p>$대상.children(':eq('+index=')')</p>
		</td>
	</tr>
	<tr>
		<td rowspan="2">부모 노드찾기</td>
		<td>부모 노드찾기</td>
		<td>$대상.parent()</td>
	</tr>
	<tr>
		<td>조상 노드찾기</td>
		<td>$대상.parents(['선택자'])</td>
	</tr>
	<tr>
		<td rowspan="2">형제 노드찾기</td>
		<td>이전 형제 노드찾기</td>
		<td>
			<p>$대상.prev()</p>
			<p>$대상.prevAll(['선택자'])</p>
		</td>
	</tr>
	<tr>
		<td>다음 형제 노드찾기</td>
		<td>
			<p>$대상.next()</p>
			<p>$대상.nextAll(['선택자'])</p>
		</td>
	</tr>

	<tr>
		<td rowspan="5">노드 생성/추가</td>
		<td>노드 생성</td>
		<td>$('추가노드Dom 문자열')</td>
	</tr>
	<tr>
		<td>첫번째 자식노드추가</td>
		<td>
			<p>$부모노드.prepend($추가노드)</p>
			<p>$추가노드.prependTo($부모노드)</p>
		</td>
	</tr>
	<tr>
		<td>마지막번째 자식노드추가</td>
		<td>
			<p>$부모노드.append($추가노드)</p>
			<p>$추가노드.appendTo($부모노드)</p>
		</td>
	</tr>
	<tr>
		<td>특정노드의 이전위치에 추가</td>
		<td>
			<p>$추가노드.insertBefore($기준노드)</p>
			<p>$기준노드.before($추가노드)</p>
		</td>
	</tr>
	<tr>
		<td>특정노드의 다음위치에 추가</td>
		<td>
			<p>$추가노드.insertAfter($기준노드)</p>
			<p>$기준노드.after($추가노드)</p>
		</td>
	</tr>

	<tr>
		<td rowspan="4">노드 이동</td>
		<td>첫번째 자식 노드로 이동</td>
		<td>
			<p>$부모노드.prepend($이동노드)</p>
			<p>$이동노드.prependTo($추가노드)</p>
		</td>
	</tr>
	<tr>
		<td>마지막번째 자식 노드로 이동</td>
		<td>
			<p>$부모노드.append($이동노드)</p>
			<p>$이동노드.appendTo($추가노드)</p>
		</td>
	</tr>
	<tr>
		<td>특정 노드의 이전 노드로 이동</td>
		<td>
			<p>$이동노드.insertBefor($기준노드)</p>
			<p>$기준노드.before($이동노드)</p>
		</td>
	</tr>
	<tr>
		<td>특정 노드의 다음 노드로 이동</td>
		<td>
			<p>$이동노드.insertAfter($기준노드)</p>
			<p>$기준노드.after($이동노드)</p>
		</td>
	</tr>
	<tr>
		<td rowspan="2">노드 제거</td>
		<td>특정 노드 제거</td>
		<td>$대상.remove()</td>
	</tr>
	<tr>
		<td>모든 자식 노드 제거</td>
		<td>$대상.children().remove()</td>
	</tr>

	<tr>
		<td rowspan="4">노드 내용 <br>읽기 및 변경</td>
		<td>노드 내용을 문자열로 읽기</td>
		<td>
			<p>$대상.html() // 태그내용포함</p>
			<p>$대상.text() // 태그내용제외</p>
		</td>
	</tr>
	<tr>
		<td>노드 내용 수정하기</td>
		<td>
			<p>$대상.html('수정할 태그 문자열')</p>
			<p>$대상.text('수정할 텍스트')</p>
		</td>
	</tr>
	<tr>
		<td>노드내용을 이용해 여러개의 자식 노드 추가하기</td>
		<td>$대상.html('추가할 태그 문자열')</td>
	</tr>
	<tr>
		<td>노드 내용을 이용해 모든 자식 노드 제거하기</td>
		<td>$대상.html(')</td>
	</tr>

	<tr>
		<td rowspan="4">스타일 다루기</td>
		<td>스타일 값 구하기</td>
		<td>
			<p>$대상.css('스타일속성이름')</p>
			<p>$대상.css(['스타일속성이름',])</p>
		</td>
	</tr>
	<tr>
		<td>스타일 값 설정하기</td>
		<td>
			<p>$대상.css('스타일속성이름', 값)</p>
			<p>$대상.css({'스타일속성이름': 값, '스타일속성이름': 값})</p>
		</td>
	</tr>
	<tr>
		<td>클래스 추가</td>
		<td>
			<p>$대상.addClass('클래스이름')</p>
			<p>$대상.addClass('클래스이름1 클래스이름2 ...')</p>
		</td>
	</tr>
	<tr>
		<td>클래스 삭제</td>
		<td>
			<p>$대상.removeClass('클래스이름')</p>
			<p>$대상.removeClass('클래스이름1 클래스이름2 ...')</p>
		</td>
	</tr>
	<tr>
		<td rowspan="2">속성 다루기</td>
		<td>속성값 구하기</td>
		<td>
			<p>$대상.attr('속성이름')</p>
			<p>$대상.data('data-속성이름')</p>
		</td>
	</tr>
	<tr>
		<td>속성값 설정하기</td>
		<td>
			<p>$대상.attr('속성이름', '값')</p>
			<p>$대상.data('data-속성이름', '값')</p>
		</td>
	</tr>

	<tr>
		<td rowspan="7">이벤트 다루기</td>
		<td>일반 이벤트 등록</td>
		<td>$대상.on('이벤트이름', 이벤트리스너)</td>
	</tr>
	<tr>
		<td>단축 이벤트 등록</td>
		<td>$대상.단축이벤트(이벤트리스너)</td>
	</tr>
	<tr>
		<td>등록한 이벤트 제거</td>
		<td>
			<p>$대상.off('click', 삭제하고 싶은 이벤트리스너명)</p>
			<p>$대상.off('click')</p>
			<p>$대상.off()</p>
		</td>
	</tr>
	<tr>
		<td>이벤트 한번만 실행</td>
		<td>$대상.one(이벤트이름, 이벤트리스너)</td>
	</tr>
	<tr>
		<td>기본 행동 취소</td>
		<td>이벤트객체.preventDefault()</td>
	</tr>
	<tr>
		<td>버블링 멈추기</td>
		<td>이벤트객체.stopPropagation()</td>
	</tr>
	<tr>
		<td>버블링활용 하나의 이벤트</td>
		<td>$대상.on('이벤트명', '선택자', 이벤트리스너)</td>
	</tr>

	<tr>
		<td rowspan="5">요소의 위치 <br>및 <br>크기 관련기능</td>
		<td>부모 좌표 노드 구하기</td>
		<td>$대상.offsetParent()</td>
	</tr>
	<tr>
		<td>지역 좌표 위치 다루기</td>
		<td>
			<p>지역좌표 위치 구하기</p>
			<p>$대상.position().left</p>
			<p>$대상.position().top</p>
			<p>&nbsp;</p>
			<p>지역좌표 위치 설정하기</p>
			<p>$대상.css('left', 위치값)</p>
			<p>또는</p>
			<p>$대상.css({left: 위치값, top: 위치값})</p>
		</td>
	</tr>
	<tr>
		<td>전역 좌표 위치 다루기</td>
		<td>
			<p>전역좌표 위치 구하기</p>
			<p>$대상.offset().left</p>
			<p>$대상.offset().top</p>
			<p>&nbsp;</p>
			<p>전역좌표 위치 설정하기</p>
			<p>$대상.offset({left: 위치값, top: 위치값})</p>
		</td>
	</tr>
	<tr>
		<td>요소 크기 다루기</td>
		<td>
			<p>기본 크기 구하기</p>
			<p>$대상.width()</p>
			<p>$대상.height()</p>
			<p>&nbsp;</p>
			<p>기본 크기 + padding 크기 구하기</p>
			<p>$대상.innerWidth()</p>
			<p>$대상.innewHeight()</p>
			<p>&nbsp;</p>
			<p>기본크기 + padding + border 크기 구하기</p>
			<p>$대상.outerWidth()</p>
			<p>$대상.outerHeight()</p>
			<p>&nbsp;</p>
			<p>기본크기 + padding + border + margin 크기 구하기</p>
			<p>$대상.outerWidth(true)</p>
			<p>$대상.outerHeight(true)</p>
			<p>&nbsp;</p>
			<p>기본 크기 설정하기</p>
			<p>$대상.width(크기값)</p>
			<p>$대상.height(크기값)</p>
			<p>&nbsp;</p>
			<p>기본 크기 + padding 크기 설정하기</p>
			<p>$대상.innerWidth(크기값)</p>
			<p>$대상.innerHeight(크기값)</p>
		</td>
	</tr>
	<tr>
		<td>요소 스크롤 위치 다루기</td>
		<td>
			<p>스크롤 위치 구하기</p>
			<p>$대상.scrollLeft()</p>
			<p>$대상.scrollTop()</p>
			<p>&nbsp;</p>
			<p>스크롤 위치 설정하기</p>
			<p>$대상.scrollLeft(위치값)</p>
			<p>$대상.scrollTop(위치값)</p>
		</td>
	</tr>

	<tr>
		<td>문서의 위치 <br>및 크기 관련 기능</td>
		<td>문서 크기 구하기</td>
		<td>
			<p>$(document).width()</p>
			<p>$(document).height()</p>
		</td>
	</tr>
	<tr>
		<td rowspan="7">화면의 위치 <br>및 <br>크기 관련기능 <br><br>윈도우의 위치 <br>및 <br>크기 관련기능</td>
		<td>전체 화면 크기 구하기</td>
		<td>
			<p>screen.width</p>
			<p>screen.height</p>
		</td>
	</tr>
	<tr>
		<td>유효한 전체 화면 크기 구하기</td>
		<td>
			<p>screen.availWidth</p>
			<p>screen.availHeight</p>
		</td>
	</tr>
	<tr>
		<td>윈도우 크기 구하기</td>
		<td>
			<p>기본 크기 구하기</p>
			<p>window.innerWidth</p>
			<p>window.innerHeight</p>
			<p>&nbsp;</p>
			<p>기본 크기+메뉴바+툴바 영역이 포함된 크기 구하기</p>
			<p>$(window).width()</p>
			<p>$(window).height()</p>
			<p>&nbsp;</p>
			<p>기본 크기+메뉴바+툴바+스크롤바 영역이 포함된 크기 구하기</p>
			<p>window.outerWidth</p>
			<p>window.outerHeight</p>
		</td>
	</tr>
	<tr>
		<td>윈도우 크기 설정하기</td>
		<td>window.resizeTo(width, height)</td>
	</tr>
	<tr>
		<td>윈도우 변경 이벤트 처리</td>
		<td>$(window).on('resize', function(){})</td>
	</tr>
	<tr>
		<td>윈도우 위치 다루기</td>
		<td>
			<p>위치값 구하기</p>
			<p>window.screenLeft</p>
			<p>window.screenTop</p>
			<p>&nbsp;</p>
			<p>위치값 설정하기</p>
			<p>window.moveTo(dx, dy)</p>
			<p>window.moveBy(dx, dy)</p>
		</td>
	</tr>
	<tr>
		<td>윈도우 스크롤 다루기</td>
		<td>
			<p>스크롤 위치값 구하기</p>
			<p>window.pageXOffset</p>
			<p>window.pageYOffset</p>
			<p>&nbsp;</p>
			<p>스크롤 위치 설정하기</p>
			<p>window.scrollTo(x, y)</p>
			<p>window.scrollBy(x, y)</p>
			<p>&nbsp;</p>
			<p>스크롤 이벤트 처리하기</p>
			<p>$(window).on('scroll', function(){})</p>
		</td>
	</tr>
	<tr>
		<td rowspan="2">마우스의 위치 및 크기 관련기능</td>
		<td>클릭한 전역 위치</td>
		<td>
			<p>윈도우 영역을 기준으로 하는 전역 위치</p>
			<p>mouseEvent.clientX</p>
			<p>mouseEvent.clientY</p>
			<p>&nbsp;</p>
			<p>문서 영역을 기준으로 하는 전역 위치</p>
			<p>mouseEvent.pageX</p>
			<p>mouseEvent.pageY</p>
		</td>
	</tr>
	<tr>
		<td>클릭한 지역 위치</td>
		<td>
			<p>var offsetX = mouseEvent.pageX - $(타킷).offset()</p>
			<p>var offsetY = mouseEvent.pageY - $(타킷).offset()</p>
		</td>
	</tr>

	<tr>
		<td rowspan="3">일반 효과 다루기</td>
		<td>나타나고 사라지는 효과</td>
		<td>
			<p>나타나기</p>
			<p>$대상.show()</p>
			<p>&nbsp;</p>
			<p>사라지기</p>
			<p>$대상.hide()</p>
		</td>
	</tr>
	<tr>
		<td>페이드 인/아웃 효과</td>
		<td>
			<p>페이드 인</p>
			<p>$대상.fadeIn()</p>
			<p>&nbsp;</p>
			<p>페이드 아웃</p>
			<p>$대상.fadeOut()</p>
		</td>
	</tr>
	<tr>
		<td>슬라이드 업/다운 효과</td>
		<td>
			<p>슬라이드 업</p>
			<p>$대상.slideUp()</p>
			<p>&nbsp;</p>
			<p>슬라이드 다운</p>
			<p>$대상.slideDown()</p>
		</td>
	</tr>
</table>
