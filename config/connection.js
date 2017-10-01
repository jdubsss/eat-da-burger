//connect to mysql database and export to the orm file
//export conenction to nbe used in orm file

var mysql = require("mysql");

var connection = mysql.createConnection({
		host: 'h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'qg19gi9uh7s7xxb9',
		password: 'kuteprego6v6rq5e',
		database: 'm2zh4a0bvu1lflnf'
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
