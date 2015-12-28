var http = require('http');
var userName = 'chalkers';
function printMessage(name, anyad, fasz) {
	var message = name+', you had '+anyad+' and some serious ' + fasz;
	console.log(message);
};

var request = http.get("http://teamtreehouse.com/"+userName+".json", function(response) {
	console.dir(response.statusCod)e;
});