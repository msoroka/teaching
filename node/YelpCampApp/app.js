var express = require("express"),
    app = express(),
    bodyParder = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {
    useNewUrlParser: true,
});

app.use(bodyParder.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("homepage");
});

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {
                campgrounds: allCampgrounds,
            });
        }
    });
});

app.get("/campgrounds/create", function (req, res) {
    res.render("campgrounds/create");
});

app.get("/campgrounds/:id", function (req, res) {
    var id = req.params.id;

    Campground.findById(id, function (err, foundCampground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/show", {
                campground: foundCampground,
            });
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;

    Campground.create({
        name: name,
        image: image,
        description: description,
    }, function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds/create");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.listen(3000, function () {
    console.log("App is running on port 3000");
});