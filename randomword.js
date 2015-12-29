var fs = require('fs'),
	words = words || 'asdf';

function chunkData(data) {
	var array = data.split(",");

	return array[Math.round(Math.random() * array.length)];
}

function getRandomWord(callback) {
	fs.readFile('./words.csv', 'utf8', function(error, data) {
		if (error) throw error;
		chunkData(data);
		callback(chunkData(data));
	});
}

module.exports.generate = getRandomWord;