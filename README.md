# Usage
1. 下载工程依赖<br/>
`npm install`或者`cnpm install`
2. 在工程根目录启动mock数据 <br/>
`node mock.js`  (页面数据通过$http进行请求)
3. 在工程目录热加载启动页面<br/>
`npm run serve`

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
* ng-echarts:https://github.com/liekkas/ng-echarts
* ui-grid: http://ui-grid.info/docs (棒棒的！)
# AngualrJs组件使用说明
## ui-grid 
### usage
下载依赖<br/>
`npm install angular-ui-grid` <br/>
引入文件<br/>
`<link rel="stylesheet" type="text/css" href="node_modules/angular-ui-grid/ui-grid.min.css" />` <br/>
`<script src="node_modules/angular-ui-grid/ui-grid.min.js"></script>` <br/>
html:
```html
<div class="gridStyle" ui-grid="gridOptions1" ui-grid-pagination ui-grid-edit ui-grid-selection ui-grid-move-columns ui-grid-resizeColumns ui-grid-resize-columns></div>
```
js:<br/>
` $scope.gridOptions1 = {} `
### 相关指令
* ui-grid-edit: grid 编辑指令；
* ui-gird-pagination : grid 分页指令；
* ui-grid-selection : grid 选择行所需指令；
* ui-grid-exporter : grid 导出功能所需指令；
* ui-grid-resize-columns: grid 列宽可以拉伸所需指令；
* ui-grid-auto-resize : 解决grid布局 自动适应div 高度和宽度问题（非常有用）；
* ui-grid-pinning:固定列
## nl-echarts  echarts组件
引入相关文件
``` html
<script type="text/javascript" src="node_modules/echarts/dist/echarts.min.js"></script>
<script type="text/javascript" src="src/directive/nl-echarts/nl-echarts.js"></script>
```
ng引入模块
``` javascript
var app = angular.module('myApp',['nlEcharts']);
```
html：
``` html
<div ng-controller="echartsController">
	<nl-echarts class="col-md-4 echartCss" nl-config="lineConfig" nl-option="lineOption3"></nl-echarts>
</div>
```
js控制器中初始配置
``` javascript
//echarsController
app.controller('echartsController',['$scope',function($scope){
   function onClick(params){
        console.log(params);
    };            
    $scope.lineConfig = {
        theme:'default',
        event: [{click:onClick}],
        dataLoaded:true
    };
    $scope.lineOption1 = {
       title: {
            text: 'ECharts demo1'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar'
        }]
    };
}])
```
## nl-icheck  icheck组件
引入相关文件:
``` html
<link rel="stylesheet" href="node_modules/icheck/skins/flat/blue.css" >
<script type="text/javascript" src="node_modules/icheck/icheck.min.js"></script>
<script type="text/javascript" src="src/directive/nl-icheck/nl-icheck.js"></script>
```
ng引入模块
``` javascript
var app = angular.module('myApp',['nlIcheck']);
```
html使用:
``` html
<input id="ng1" ng-checked="true" nl-icheck type="radio" ng-model="userdata.frame" name="sex" value="AngularJs1">
```

# AngualrJs生态圈
* Angular中文社区：http://www.angularjs.cn/A0a6
# AngularJs1 知识点wiki
https://github.com/Mirror198829/AngularJs1/wiki
