//link to express and router
//export route to be used by server.js
//bring in burgerlist which has database list of burgers available

var express = require('express');
var route = express.Router();
var burger = require('../models/burgerlist.js');

route.get('/', function(req, res) {
	burger.all(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	})
});

//for connection to update burgers once been devoured
route.put('/burgers/update', function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect('/');
	});
});

route.post('/burgers/create', function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		res.redirect('/');
	})
})

module.exports = route;