var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    // selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
      });
  },
  insertOne: function(valOfCol) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES ?";
    connection.query(queryString, valOfCol, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(id) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";

    connection.query(queryString, id, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;