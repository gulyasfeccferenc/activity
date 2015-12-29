/**
* Index.js
* ~~~~~~~~
* The main file of the Online Activity game
* 
*/
var http = require('http'),
	router = require('./router');

http.createServer(function (request, response) {
  router.home(request, response);
  router.generate(request, response);
  router.serve(request, response);
}).listen(process.env.PORT || 80);
console.log('Server initialized at port ' + (process.env.PORT || 80));
