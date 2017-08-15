app.directive("nlTabs",function(){
  return{
    restrict:"AE",
    templateUrl:'src/directive/nl-tab/nl-tabs.html',
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