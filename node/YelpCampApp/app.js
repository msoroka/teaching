var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("homepage");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {
        
    });
});

app.listen(3000, function(){
    console.log("App is running on port 3000");
});