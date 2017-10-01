 //pull in connection to mysql database
//export orm file to be used by burgerlist.js
var connection = require('./connection.js');

//select all from database
var orm = {
	all: function(tableInput, callback) {
		connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
			if (err)
				throw err;
			callback(result);
		})
	},
	//table inout is burgers, 
	update: function(tableInput, condition, callback) {
		connection.query('UPDATE ' + tableInput + ' SET DEVOURED=true WHERE id=' + condition + ';', function(err, result) {
			if(err)
				throw err;
			callback(result);
		})
	},
	//create a new burger
	create: function(tableInput, value, callback) {
		connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + value + "');", function(err, result) {
			if (err)
				throw err;
			callback(result);
		})
	}	
}

module.exports = orm;