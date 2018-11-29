//expresss-demo.js file

var express = require('express');
var router = express.Router();



var app = express();


let imagedatabase = require('../public/imagedatabase');
app.get('/slide-show',function(req,res){
    res.send('Hello Foolish');
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("visit address http://%s:%s", host,port)
})