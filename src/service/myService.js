/**
 * Created by caojing on 2017/8/18
 */
angular.module('myService',[])
.factory('$notice', function() {
    var service = {};
    var option={
      type:'success',
      text:'成功'
    };
    service.open = function(option){
        var optionType = option.type ? option.type : 'info';
        var optionTxt = option.text ? option.text : '提示信息';
        var noticeColor = "";
        var noticeIcon="";
        if(optionType == 'info'){
           noticeColor = "#50bfff";
           noticeIcon="glyphicon-question-sign";
        }else if(optionType == 'warning'){
          noticeColor = "#f7ba2a";
          noticeIcon="glyphicon-info-sign";
        }else if(optionType =="success"){
          noticeColor = "#13ce66";
          noticeIcon="glyphicon-ok-sign";
        }else if(optionType =="error"){
          noticeColor="#ff4949";
          noticeIcon="glyphicon-remove-sign";
        }else{
           noticeColor="#50bfff";
           noticeIcon="glyphicon-question-sign";
        }  
        var htmlWrap=document.createElement("div");
        var HTML=['<div style="position: fixed;top:10px;left:50%;box-shadow:1px 1px 1px 0px #666;transform: translate(-50%,0);z-index:1000000;color:#fff;padding:10px 50px 10px 35px;width:400px;border-radius: 3px;word-break: wrap;font-size:14px;',
              'background-color:',
              noticeColor,
              ';">',
              '<i class="glyphicon ',
              noticeIcon,
              '" style="position: absolute;left:10px;top:13px;font-size: 16px;"></i>',
              optionTxt,
             '<i class="glyphicon glyphicon-remove" style="position: absolute;right: 10px;top:13px;cursor: pointer;font-size: 16px;" onclick="event.stopPropagation();document.body.removeChild(this.parentNode.parentNode)"></i></div>'].join('');
        htmlWrap.innerHTML=HTML;
        htmlWrap.id="promptBox";
        document.body.appendChild(htmlWrap);
    }
    return service;//返回这个Object对象
});