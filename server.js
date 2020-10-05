var express = require("express");

var PORT = 8080;

var app = express();

// Static Content gets served up from the "public" directory.
app.use(express.static("public"));

// Parses the application body
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser,urlencoded({ extended: true }));
app.use(express.json());

// Sets Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports routes and gives the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server so it can listen to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});