/**
* Index.js
* ~~~~~~~~
* The main file of the Online Activity game
* 
*/
var http = require('http'),
	mongodb = require("mongodb"),
	router = require('./router'),
	MongoClient = require('mongodb').MongoClient,
	assert = require('assert'),
	uri = "mongodb://admin:admin@ds037415.mongolab.com:37415/oac__word",
	wordList = new Array();

function mongoAccess(callback) {
	MongoClient.connect(uri, function(err, db) {
		var words = db.collection('words');
		if(err) throw err;

		words.find().toArray(function (err, docs) {
			if (err) throw err;

			docs.forEach(function(doc) {
				wordList.act += doc['act'];
				wordList.draw += doc['draw'];
				wordList.describe += doc['describe'];
			})

		console.log('Needed data fetched');
		});
	});
	callback();
}

function serverInit() {
	http.createServer(function (request, response) {
		router.home(request, response);
		router.generate(request, response, wordList);
		router.serve(request, response);
	}).listen(process.env.PORT || 80);
}

mongoAccess(serverInit);
console.log('Server initialized at port ' + (process.env.PORT || 80));