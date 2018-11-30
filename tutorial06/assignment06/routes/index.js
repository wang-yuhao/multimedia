//expresss-demo.js file

var express = require('express');
var bodyParser = require('body-parser');
var data = require('./routes/index.js');
var router = express.Router();



var app = express();
app.use(express.static("./"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

let imagedatabase = require('../public/imagedatabase');
app.get('/slide-show',function(req,res){
    res.send('Hello Foolish');
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("visit address http://%s:%s", host,port)
})