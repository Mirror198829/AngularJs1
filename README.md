

# AngualrJs API查询地址
* 英文文档：https://code.angularjs.org/1.5.11/docs/api  (推荐)
* 英文文档：http://ng.xiaocaicai.com/api/ng
* 中文文档：http://docs.ngnice.com/api
# AngularJs相关组件
* angular-ui：https://github.com/angular-ui 
* angular-ui API: https://angular-ui.github.io/bootstrap/#!#pagination (官方) http://www.cnblogs.com/pilixiami/p/5634405.html (参考文档)
* 模态框ng-dialog:https://github.com/likeastore/ngDialog
* 路由 ui-router :https://ui-router.github.io/ng1/tutorial/hellogalaxy (API)  https://github.com/angular-ui/ui-router
* ng-table: http://ng-table.com/#/
# AngualrJs生态圈
* Angular中文社区：http://www.angularjs.cn/A0a6
# AngularJs1 知识点
# 指令
## 指令示例
``` html
<nl-tabs tabs-data="tabsData" show-name="showName()" title="tabsDemo"></nl-tabs>
```
``` javascript
app.directive("nlTabs",function(){
  return{
    restrict:"AE",
    templateUrl:'src/directive/nl-tab/nl-tabs.html',
    replace:true,
    scope:{
      title:"@",       //绑定普通字符串
      tabsData:"=",    //绑定外部控制器相应变量值
      showName:"&"     //绑定外部控制器的函数
    },
    controller::['$scope',function($scope){
       $scope.title="我是指令内部控制器数据"
    }],
    link:function(scope,ele,attrs){
    	ele.delegate(".nl-tabs_item","click",function(){
    		var num=0;
    		$(this).addClass("active").siblings('.nl-tabs_item').removeClass("active");
    		num=ele.find('.nl-tabs_item').index($(this));
    		ele.find(".nl-tabs_content").removeClass("active").eq(num).addClass("active");
    	})   	
    }
  }
})
```
## 指令的命名约定
* js中指令的名称是驼峰式，如：blgMenu
* HTML中模板使用blg-meun形式（规则：html和css采用连字符分隔命名，不区分大小写，在js中命名变量使用驼峰是正确的规范，ng的html编译器遇到左侧形式，会转成对应驼峰式。）
* 指令名称唯一
* 不能使用ng开头前缀，因ng内置指令已经占用
## restrict 约束选项
restrict共有4个选项，为了指明ng在HTML模板中如何触发指令
* A: 只匹配属性名 `<div blg-menu></div>`
* E: 只匹配元素名 `<blg-menu></blg-menu>`
* C: 只匹配类名 `<div class="blg-menu"></div>`
* M: 只匹配注释 `<!--directive:blg-menu-->`
## replace
* true：替换匹配html（注意：template的结构必须有一对闭合标签包裹）
* false: 在匹配html之内创建替换template
通常设置为 restrict:'AE'
## scope (重点)
### 默认值 false
false:所有指令共享作用域，带来的问题是：一个指令作用域值发生变化，其他会一起发生变化
### 独立作用域 true
true:指令之间不再共享作用域；指令兄弟间进行独立；父子之间并未隔离
### 隔离作用域 {}
隔离作用域有3个绑定策略：@  =  &
* @ :绑定普通字符串
* = ：绑定的是外层controller里的数据，变成了变量
* & :绑定父级函数，（重点：如何传参）

作用域优先级:directive中scope的设置 > directive中controller > directive外部controller
## controller
针对自定义指令内部的控制器，自定义指令里面共享的数据可放在controller里面
## link（重点）
放置dom操作的地方
* $apply(),$apply(function(){}):$apply()方法可以在angular框架之外执行angular JS的表达式，例如：DOM事件、setTimeout、XHR或其他第三方的库
* link中使用jquery写dom操作时不要写成`$(".nl-tabs_item").removeClass('active')` （忌），非常容易造成一个页面多个相同指令引入后，获取dom数不符合预期
## 指令执行过程
``` html
<div ng-controller="testCtrl">
   <h1>用于测试执行顺序</h1>
   <nl-test></nl-test>
</div>
```
``` javascript
function logTest(text){
  console.log(text);
  debugger;
}
app.controller('testCtrl',function($scope){
   logTest('外部testCtrl');
});

app.directive('nlTest',function(){
  logTest('指令初始化');
  return{
    restrict:"AE",
    template:'<div>{{name}}</div>',
    controller:['$scope',function($scope){
      $scope.name="指令模板";
      logTest("指令内controller")
    }],
    link:function(scope,ele,attrs){
       logTest("指令内link")
    }  
  }
})
```
执行结果顺序为： 
* template内含ng指令：指令初始化 => template dom展示 => 外部testCtrl => 指令内controller => 指令内link => template ng指令调用
* template不含ng指令：指令初始化 => template dom展示 => 外部testCtrl => 指令内controller => 指令内link 
## 内置指令
### ng-repeat
* $first :循环第一个
### 事件指令
* ng-click/dbclick ng-mousedown/up ng-mouseenter/leave ng-mousemove/over/out ng-keydown/up/press ng-focus/blur ng-submit
* ng-selected
* ng-change
* ng-copy
* ng-cut
* ng-paste
# form表单
## 表单验证className
* .ng-valid{}
* .ng-invalid{}
* .ng-pristine{}
* .ng-dirty{}
# 脏检查工作过程
参考文档： http://www.angularjs.cn/A0a6
### $watch
* 每1个绑定到了dom上的数据都会向`$watch 队列`插入1个`$watch`
* 监听变化
* `$watch(watchExpression, listener, objectEquality)` 第3个参数：true，深度监听，监听对象（数组，对象）中每1个属性
### $apply
将调用事件放入`angular context执行环境`，从而触发$digest,这也是为什么对第三方库需要手动 $apply，ng内置事件指令已经将$apply封装其中
### $digest
作用：遍历 `$watch 队列`，进行`dirty-checking`,如有变化，DOM发生变化


