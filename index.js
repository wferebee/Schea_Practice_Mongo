var express = require("express");
var path = require('path');


var mongoose = require('mongoose');
var User = require("./model/index.js");
var conString = 'mongodb://127.0.0.1/williesUserSchema';
mongoose.connect(conString, {useNewUrlParser: true, useUnifiedTopology: true});


var userRouter = require("./routes/index.js");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);


var PORT = 3000;
app.listen(PORT, console.log("good to go on 3000"))


module.exports = app;