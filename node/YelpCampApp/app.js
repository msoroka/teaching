var express = require("express");
var app = express();
var bodyParder = require("body-parser");

app.use(bodyParder.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("homepage");
});

var campgrounds = [
    {name: "Tatry", image: "https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1440478008/campground-photos/csnhvxn0qcki2id5vxnc/mazama-campground.jpg"},
    {name: "Bieszczady", image: "https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1440478008/campground-photos/csnhvxn0qcki2id5vxnc/mazama-campground.jpg"},
    {name: "Łeba", image: "https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1440478008/campground-photos/csnhvxn0qcki2id5vxnc/mazama-campground.jpg"},
];

app.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds-new");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {
        campgrounds: campgrounds,
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;

    res.redirect("/campgrounds");
});

app.listen(3000, function () {
    console.log("App is running on port 3000");
});