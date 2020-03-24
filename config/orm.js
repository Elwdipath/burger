var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [all], function(err, result){
            if (err) throw err;
            console.log(result)
        })
    },
    insertOne: function(burger, condition, callback){
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(queryString, burger_name, function(err, res){
            if (err) throw err;
            callback(res);
        })   
    }
}

module.export = orm;