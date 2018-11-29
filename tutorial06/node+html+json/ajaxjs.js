var express = require('express');
var bodyParser = require('body-parser');
var fs=require("fs");
var data = require('./data');
var app = express();


//通过express.static访问静态文件，这里访问的是ajax.html
app.use(express.static("./"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//路由获取post方式传递的数据
app.post("/ajaxjs.js", function(request, response){
  console.log(request.body);      // this a json object
  response.send(JSON.stringify(data));    // echo the result back
});

app.listen(8888, function() {   //监听http://127.0.0.1:3000端口
    console.log("server start");
});


