/**
* Router.js
* ~~~~~~~~~
* It will deal with the browser requests.
*/
var randomWord = require('./randomword.js');

/**
* This is the function to deal with the '/' typed requests.
* In case of GET, it will render the page.
* In case of POST, it will generate a new random word.
*/
function home(requests, response) {
	//if url == '/' & it's a GET
	//redirect to the game
	if (requests.url === '/') {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Header');
		response.write('Content');
		response.send('o/\n');
		response.end('Footer');
	}
}

//Export
module.exports.home = home;