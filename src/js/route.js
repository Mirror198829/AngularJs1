app.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/relation");
  $stateProvider
    .state("uiView", {
      url: "/uiView",
      templateUrl: "src/template/uiView.html",
      controller:'viewController'
    })
    .state("uiView.vue",{         //嵌套路由：在父路由状态下后“.子路由名称”
      url:"/vue",
      template:"<div>我是vue</div>"
     })
    .state("uiView.ng",{
      url:"/ng/:id",
      template:"<div>我是AngularJs,我获取到的参数 Id为:<br/><strong>{{Id}}</strong></div>",
      controller:'ngController',
     })
    .state("uiView.react",{
      url:"/react",
      template:"<div>我是react</div>"
     })
    .state("ngForm",{
      url:'/ngFormDemo',
      templateUrl:"src/template/ngForm.html"})
    .state("bootstrap",{
      url:'/bootstrap',
      templateUrl:'src/template/bootstrap.html'})
    .state("directive",{
      url:"/directive",
      templateUrl:"src/template/dirDemo.html"})
    .state("relation",{
      url:"/relation",
      templateUrl:"src/template/ctrlAndDirective.html"})
    .state("404",{
      url:"/404",
      template:"<h1 style='text-align:center;margin-top:100px'>I am sorry,找不到页面,404了哟</h1>"
    })
});