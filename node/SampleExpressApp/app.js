var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there!");
});

app.get("/bye", function (req, res) {
    res.send("Bye!");
});

app.get("/:one", function (req, res) {
    var one = req.params.one;

    res.send("Param one: " + one);
});

app.get("/:one/more/:two/", function (req, res) {
    var one = req.params.one;
    var two = req.params.two;

    res.send("One: " + one + " Two: " + two);
});

app.get("/counter/:number", function (req, res) {
    var number = req.params.number;
    var result = "";

    for (var i = 0; i < number; i++) {
        result += "It works: " + (i + 1) + "\n";
    }

    res.send(result);
});

app.get("*", function (req, res) {
    res.send("Any get request");
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});