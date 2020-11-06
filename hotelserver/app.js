var express = require('express');
var app = express();
var hotelList= require('./hotels.json');

var cors = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }
app.use(cors); 

app.get("/ListOfHotels",function(req,res){
    res.status(200).send(hotelList);
});

app.get("/HotelsByCity",function(req,res){
    var city=req.query.city;
    var newHotelList=[];
    hotelList.forEach(hotel => {
        if(hotel.city==city){
            newHotelList.push(hotel);
        }
        
    });
    res.status(200).send(newHotelList);
});

app.get("/HotelsByType1",function(req,res){
    var veg=req.query.veg;
    var newHotelList=[];
    hotelList.forEach(hotel => {
        if(hotel.type==veg){
            newHotelList.push(hotel);
        }
        
    });
    res.status(200).send(newHotelList);
});

app.get("/HotelsByType2",function(req,res){
    var nonveg=req.query.nonveg;
    var newHotelList=[];
    hotelList.forEach(hotel => {
        if(hotel.type==nonveg){
            newHotelList.push(hotel);
        }
        
    });
    res.status(200).send(newHotelList);
});

app.get("/HotelsByCuisine1",function(req,res){
    var indian=req.query.indian;
    var newHotelList=[];
    hotelList.forEach(hotel => {
        if(hotel.cuisine==indian){
            newHotelList.push(hotel);
        }
        
    });
    res.status(200).send(newHotelList);
});

app.get("/HotelsByCuisine2",function(req,res){
    var chinese=req.query.chinese;
    var newHotelList=[];
    hotelList.forEach(hotel => {
        if(hotel.cuisine==chinese){
            newHotelList.push(hotel);
        }
        
    });
    res.status(200).send(newHotelList);
});


app.listen('3000',function(){
    console.log('server listening to port 3000')
});
