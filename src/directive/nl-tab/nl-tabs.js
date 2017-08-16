app.directive("nlTabs",function(){
  return{
    restrict:"AE",
    template:'<div class="nl-tabs">\
				<ul class="nl-tabs_nav clearfix">\
					<li class="nl-tabs_item" ng-repeat="(key,val) in tabsData" ng-class="{\'active\':$first}">{{val.title}}</li>\
				</ul>\
				<div class="nl-tabs_content" ng-repeat="(key,val) in tabsData" ng-class="{\'active\':$first}">{{val.content}}</div>\
  			  </div>',
    replace:true,
    scope:{
    	tabsData:"="
    },
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