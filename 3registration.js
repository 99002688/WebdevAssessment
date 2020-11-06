var express = require('express');
var app = express();
var regist= require('./regist.json');

var cors = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }
app.use(cors); 

app.get("/usernamevalid",function(req,res){
    var name=req.query.name;
    var newList=[];
    regist.forEach(details => {
        if(details.name==name){
            alert("Choose different username")
        }
        else{
            alert("welcome")
        }
        
    });
    res.status(200).send(newList);
});