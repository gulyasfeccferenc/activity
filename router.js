/**
* Router.js
* ~~~~~~~~~
* It will deal with the browser requests.
*/
var randomWord = require('./randomword'),
	renderer = require('./renderer'),
	fs = require('fs'),
	commonHeader = {'Content-Type': 'text/html'};
/**
* This is the function to deal with the '/' typed requests.
* In case of GET, it will render the page.
* In case of POST, it will generate a new random word.
*/
function home(requests, response) {
	//if url == '/' & it's a GET
	//redirect to the game
	if (requests.url === '/') {
		response.writeHead(200, commonHeader);
		renderer.view('header', {}, response);
		renderer.view('activity', {'randomWord': 'Fecc', 'counter': 60}, response);
		renderer.view('footer', {}, response);
		response.end();
	} 
}

//generate a new random word
function generate(request, response) {
  //if url == "/...."
  var path = request.url.replace("/", "");
  if(path === 'random') {
     randomWord.generate(function(e) {
        response.writeHead(200, {'Content-Type':'plain/text'});  
        response.end(e);   
     })   
  }
}

function serve(request, response) {
	if(request.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile(__dirname + request.url, function (err, data) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(data);
        response.end();
      });

    }

  if(request.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
    fs.readFile(__dirname + request.url, function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(data);
      response.end();
    });

  }

  if(request.url.indexOf('.mp3') != -1){ //req.url has the pathname, check if it conatins '.css'
    fs.readFile(__dirname + request.url, function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'audio/mpeg'});
      response.write(data);
      response.end();
    });

  }
}

//Export
module.exports.home = home;
module.exports.generate = generate;
module.exports.serve = serve;