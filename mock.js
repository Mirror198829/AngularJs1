let express = require('express'); 
let Mock=require('mockjs'); 
let app = express();

app.get('/getData', function (req, res) { 
	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	res.json(Mock.mock({ 
	    "stats":"success", 
		"message|10": [{ 
			"name": "@cname", 
			"id": "@id", 
			"age|20-35":0,
			"education|1":['本科','硕士','博士'],
			"desciption":"@csentence"
		}] 
	})); 
});
app.get('/echartsData', function (req, res) { 
	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	res.json(Mock.mock({ 
	    "stats":"success", 
		"message": [Math.floor(Math.random()*80)+20,Math.floor(Math.random()*80)+20,Math.floor(Math.random()*80)+20,Math.floor(Math.random()*80)+20,Math.floor(Math.random()*80)+20,Math.floor(Math.random()*80)+20]
	})); 
});
app.get('/gridData', function (req, res) { 
	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	res.json(Mock.mock({ 
	    "stats":"success", 
		"message|30": [{
			"id":"@id",
			"name":"@cname",
			"sex|1":['男','女'],
			"age|20-35":0,
			"company|1":['百度','阿里巴巴','华为','新大陆','腾讯','网易'],
			"hobby|1":['钓鱼','跳舞','画画','打游戏','ktv','滑雪'],
			"master|1":['本科','研究生','大专','博士'],
			"tag|1-2":true 
		}]
	})); 
});
let server=app.listen('3000',function(){
	let host=server.address().address;
	let port=server.address().port;
	console.log('Mock listening at http://localhost:'+port); 
});