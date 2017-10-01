//connect to mysql database and export to the orm file
//export conenction to nbe used in orm file

var mysql = require('mysql');
var connection;


connection.connect(function(err) {
	if (err) 
		throw err;
	console.log("Connected as id: " + connection.threadid);

});

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'qg19gi9uh7s7xxb9',
		password: 'kuteprego6v6rq5e',
		database: 'burgers_db'
	})
}

module.exports = connection;