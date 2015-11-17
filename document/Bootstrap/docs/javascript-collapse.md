# Collapse

쉽게 토글 행동을 하기위한 몇 개의 클래스 들을 이용하는 유연한 플러그인 입니다.

## Collapse 예제

### 에제
.collapse 컨텐츠를 숨겨 줍니다.
.collapsing 전환 중에 적용됩니다.
.collapse.in 컨텐츠를 보여줍니다.

아래는 버튼을 누르면 나타나고 사라지는 예제 입니다.  
jsfiddle [예제](http://jsfiddle.net/luensys/2e6jm9hm/)  
codepen.io [예제](http://codepen.io/luensys/pen/epxjWw)
```
<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
	Link with href
</a>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
	Button with data-target
</button>
<div class="collapse" id="collapseExample">
	<div class="well">
		...
	</div>
</div>
```

### Accordion 예제
패널 콤포넌트와 Accodion을 만드려면 기본 컬랩스 행위를 확장하세요.  
  
jsfiddle [예제](http://jsfiddle.net/luensys/2e6jm9hm/1/)  
codepen.io [예제](http://codepen.io/luensys/pen/avXjmz)  
```
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```
위 예제의 경우 두 개 이상이 확장되지 않는데요.
그 이유는 panel 그룹으로 묶여 있어 그렇습니다.
가장 상위 div를 삭제하 되면 각각은 독립적으로 동작하게 됩니다.

또한 .panel-body 들을 .list-group 들로 교환하는 것도 가능합니다.
따라서 그 반대인 .list-group 들을 .panel-body 들로 교환하는 것도 가능합니다.
```
<div class="panel-group" role="tablist">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="false" aria-controls="collapseListGroup1">
          Collapsible list group
        </a>
      </h4>
    </div>
    <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
      <ul class="list-group">
        <li class="list-group-item">Bootply</li>
        <li class="list-group-item">One itmus ac facilin</li>
        <li class="list-group-item">Second eros</li>
      </ul>
      <div class="panel-footer">Footer</div>
    </div>
  </div>
</div>
```

### 이벤트 예제

아래는 Collapse를 이용해 대상을 숨길 때 이벤트가 생기는 예제 입니다
참고로 script에 ready를 넣은 것은 단독 페이지에서는 이 함수를 써야 jQuery가 동작하기 때문입니다.
```
<script>
	$(document).ready(function(){
		$('.panel').on('hidden.bs.collapse', function (e) {
		    alert('Event fired on #' + e.currentTarget.id);
		  })
	});
</script>
<div class="panel-group" id="accordion">
  <div class="panel panel-default" id="panel1">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default" id="panel2">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
          Collapsible Group Item #2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default" id="panel3">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
          Collapsible Group Item #3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```

아래 예제는 이벤트 타이밍을 볼 수 있는 예제입니다.
```
<div class="container">
  <h2>Collapsible Methods</h2>
  <p>The toggle method toggles the collapsible content.</p>
  <p>The show method shows the collapsible content.</p>
  <p>The hide method hides the collapsible content.</p>
  <button type="button" class="btn btn-primary">Toggle</button>
  <button type="button" class="btn btn-success">Show</button>
  <button type="button" class="btn btn-warning">Hide</button> 
    
  <div class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div>

<script>
$(document).ready(function(){
    $(".btn-primary").click(function(){
        $(".collapse").collapse('toggle');
    });
    $(".btn-success").click(function(){
        $(".collapse").collapse('show');
    });
    $(".btn-warning").click(function(){
        $(".collapse").collapse('hide');
    });
    $(".collapse").on('show.bs.collapse', function(){
        alert('The collapsible content is about to be shown.');
    });
    $(".collapse").on('shown.bs.collapse', function(){
        alert('The collapsible content is now fully shown.');
    });
    $(".collapse").on('hide.bs.collapse', function(){
        alert('The collapsible content is about to be hidden.');
    });
    $(".collapse").on('hidden.bs.collapse', function(){
        alert('The collapsible content is now hidden.');
    });
});
</script>
```
예제를 보면 show의 경우 내용이 보여지기 전에 알림창이 보이는 것을 볼 수 있고,
shown의 경우 내용이 보여진 후 알림창이 보이는 것을 볼 수 있습니다.


