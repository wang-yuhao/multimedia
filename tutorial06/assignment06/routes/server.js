var express = require('express');
var bodyParser = require('body-parser');
var fs=require("fs");
var imagedatabase = require('./imagedatabase');

var app = express();
// app.use(express.static("../"));
// app.use(express.static(__dirname + '/public'));
app.use(express.static('../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get("/server.js", function(request, response){
    // console.log(request.body);      // this a json object
    console.log("/server.js start");
    console.log(imagedatabase[1].url); 
    response.send(JSON.stringify(imagedatabase));    // echo the result back
  });
  
  app.get("/images/Landscape", function(request, response){
    // console.log(request.body);      // this a json object
    console.log("/server.js start");
    console.log(imagedatabase); 
    response.send(JSON.stringify(imagedatabase));    // echo the result back
  });

  app.get("/images", function(request, response){
    // console.log(request.body);      // this a json object
    console.log("/server.js start");
    //console.log(imagedatabase); 
    response.send(JSON.stringify(imagedatabase));    // echo the result back
  });
  app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
      console.log("server start");
  });