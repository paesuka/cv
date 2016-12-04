var express = require("express");
var path = require("path");
var auth = require("http-auth");

var basic = auth.basic({
    realm: "my realm"
  }, (username, password, callback) => { 
    // Custom authentication 
    // Use callback(error) if you want to throw async error. 
    callback(username === "merkel" && password === "de");
  }
);


var app = express();
app.use(auth.connect(basic));
app.use(express.static(path.join(__dirname,"../dist")));
app.listen(process.env.PORT || 7777,function(){
    console.log("Started listening on port", 7777);
})
