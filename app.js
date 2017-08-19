var express = require("express");
var app = new express();

app.use(express.static('static'));
app.listen(9000);