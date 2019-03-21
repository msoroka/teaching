var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/name/:name", function (req, res) {
    var name = req.params.name;

    res.render("name", {
        name: name,
    });
});

var posts = [
    {"name": "Post 1"},
    {"name": "Post 2"},
    {"name": "Post 3"},
];

app.get("/posts", function (req, res) {
    res.render("posts", {
        posts: posts,
    });
});

app.post("/add-post", function (req, res) {
    var name = req.body.post_name;
    posts.push({
        "name": name
    });
    res.redirect("/posts");
});

app.listen(3000, function () {
    console.log("Server run on port 3000");
});