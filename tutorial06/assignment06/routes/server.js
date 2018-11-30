var express = require('express');
var bodyParser = require('body-parser');
var imagedatabase = require('./imagedatabase');

var app = express();
app.use(express.static("./"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));



app.get("../routes/server.js", function(request, response){
    console.log(imagedatabase);      // this a json object
    response.send(JSON.stringify(imagedatabase));    // echo the result back
  });
  
  app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
      console.log("server start");
  });