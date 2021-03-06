var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Post = require("./api/models/blogModel"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Blogdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/blogRoutes");
routes(app);

app.listen(port);
console.log("blog RESTful API server started on port: "+port);
