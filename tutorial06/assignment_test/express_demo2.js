var express = require('express');
var app = express();


app.use(express.static('image'));
//homepage output "Hello SB"
app.get('/',function(req,res){
    console.log("homepage Get request");
    res.send('Hello Get');
})

//POST request
app.post('/',function(req,res){
    console.log("homepage POST request");
    res.send('Hello Post');
})

//del.user page response
app.get('/del_user',function(req,res){
    console.log("/del_user response DELETE request")
    res.send('delete page');
})

//   /list_user page GET request
app.get('/list_user',function(req,res){
    console.log("/list_user GET request");
    res.send('user list page');
})

app.get('/ab*cd',function(req,res){
    console.log("/ab*cd GET request");
    res.send('rule match');
})


var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("application instance, visit address is http://%s:%s",host,port)
})



