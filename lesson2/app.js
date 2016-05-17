  var express = require('express');
  var utility = require('utility');

  var app = express();

  app.get('/', function(req, res) {
    var showValue = "Hello World";
    if(req.query.q) {
      var q = req.query.q;
      showValue = utility.md5(q);  
    } 
    res.send(showValue);
  });

  app.listen(3000, function() {
    console.log("app is listening at port 3000")
  });