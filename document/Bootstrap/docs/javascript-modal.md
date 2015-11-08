# 모달(Modals)

모달은 간소화 되어있고 최소한의 기능을 가지고 스마트하게 표현할 수 있는 대화 창 입니다.

## 모달 예제

### 정적 예제

아래의 예제를 사용하면 모달 창의 기본적인 모습을 확인할 수 있습니다.
```
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
```
위 예제를 실행시켜 보면 알 수 있듯이
```
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
```
안에 넣는 것이 주요 컨텐츠 입니다.

### 버튼 데모

아래의 예제를 사용하면 버튼을 눌렀을 때 모달창이 나타나는 것을 볼 수 있습니다.
```
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```
참고로 모달창에 동영상을 플레이하려면 부트스트랩 모달만으로는 구현이 어렵고 커스터마이징을 해야합니다.


### 모달 크기 옵션

모달은 2개의 선택 가능한 옵션이 있습니다. .modal-dialog에 그 클래스를 적용하는 것이 가능합니다.
```
<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>

<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>

<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
```
위의 예제에서 modal-sm, modal-lg 를 이용하는 것을 볼 수 있으며,
위 예제 코드는 부트스트랩의 아래 코드 부분을 보면 이해할 수 있습니다.
```
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
```

### 애니메이션 제거

모달이 나오는 것을 간단하게 하기 위해 애니메이션을 제거하는 것도 가능합니다.
```
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".modal">Open modal no Animation</button>

<div class="modal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
```

### 그리드 시스템을 사용하는 것
모달에서는 부트스트랩 그리드 시스템의 이점을 얻기위해서는 `.modal-body`안에 `.row`를 사용해 일반적인 그리드 시스템 클래스를 사용할 수 있습니다.
```
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#gridSystemModal">
	Launch demo modal
</button>

<div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" style="display: none;">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
				<h4 class="modal-title" id="gridModalLabel">Modal title</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-4">.col-md-4</div>
					<div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
				</div>
				<div class="row">
					<div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
					<div class="col-md-2 col-md-offset-4">.col-md-2 .col-md-offset-4</div>
				</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
				</div>
				<div class="row">
					<div class="col-sm-9">
						Level 1: .col-sm-9
						<div class="row">
							<div class="col-xs-8 col-sm-6">
								Level 2: .col-xs-8 .col-sm-6
							</div>
							<div class="col-xs-4 col-sm-6">
							Level 2: .col-xs-4 .col-sm-6
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
```

### 트리거 버튼을 기반으로한 다양한 모달 컨텐츠








