//set up connection

//express, express handelbars, body parser, method override, mysql

var express = require('express');
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded( {
		extended: false
	}));
app.use(methodOverride('_method'));
app.engine('handlebars', exhbs({
		defaultLayout: 'main'
	}));
app.set('view engine', 'handlebars');
//reference route files
var route = require('./controllers/routes.js');
app.use('/', route);

var port = 3000;
app.listen(port);
console.log('You are listening on port: ' + port + '. woot woot!');