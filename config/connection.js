//connect to mysql database and export to the orm file
//export conenction to nbe used in orm file

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
})
connection.connect(function(err) {
	if (err) 
		throw err;
	console.log("Connected as id: " + connection.threadid);

});

module.exports = connection;