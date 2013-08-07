var express = require('express');
var fs=require('fs');
var htmlfile="index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  /*var fs=require("fs");
  var content=fs.readFileSync("index.html");
  var buffer=new Buffer(content, "utf-8");
  response.send(buffer.toString());*/
    var html=fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080/*8080*/;
app.listen(port, function() {
  console.log("Listening on " + port);
});
