var express = require('express');
var app = express();

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

app.get("/posts", function (req, res) {
    var posts = [{
            title: "Post 1",
            author: "Author 1",
        },
        {
            title: "Post 2",
            author: "Author 2",
        },
        {
            title: "Post 3",
            author: "Author 3",
        },
    ];

    res.render("posts", {
        posts: posts,
    });
});

app.listen(3000, function () {
    console.log("Server run on port 3000");
});