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
let server=app.listen('3000',function(){
	let host=server.address().address;
	let port=server.address().port;
	console.log('Mock listening at http://localhost:'+port); 
});