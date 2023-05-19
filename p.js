const express=require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const https=require("https");


app.listen(4000,function(){
    console.log("procedure started.. .. .. .. .. ..")
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/p.html");
});

app.post("/",function(req,res){
    var url;
    var a;
    a=req.body.first;
    url="https://api.weatherapi.com/v1/current.json?key=Api="+a+"&aqi=no";
    https.get(url,function(response){
        response.on("data",function(data){
            var reqdata;
            reqdata=JSON.parse(data);
            var b;
            res.send("City name is "+reqdata.location.name );
        });
    });
});
