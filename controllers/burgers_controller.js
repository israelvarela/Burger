var express = require("express");

var router = express.Router();

// Import burger.js to use its database functions.

var burger = require("../models/burger.js");

// Create routes 

router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log("GET from db:", data)
      var hbsObject = {
          burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
      
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    //Send back ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {

burger.update(req.params.id, function(result) {
console.log(result); res.sendStatus(200);
  })
});

// Delete burger from db

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  console.log("condition", condition);

  burger.delete(condition, function(result) {
      if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404.
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

// export routes for server.js to use.
module.exports = router;