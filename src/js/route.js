app.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/404");
  $stateProvider
    .state("uiView", {
      url: "/uiView",
      templateUrl: "src/template/uiView.html"})
    .state("ngForm",{
      url:'/ngFormDemo',
      templateUrl:"src/template/ngForm.html"})
    .state("bootstrap",{
      url:'/bootstrap',
      templateUrl:'src/template/bootstrap.html'})
    .state("directive",{
      url:"/directive",
      templateUrl:"src/template/dirDemo.html"})
    .state("404",{
      url:"/404",
      template:"<h1 style='text-align:center;margin-top:100px'>I am sorry,找不到页面,404了哟</h1>"
    })
});