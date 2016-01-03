var fs = require('fs'),
	words = words || new Array();

function getRandomWord(wordList, callback) {
	var array = wordList[Math.round(Math.random() * wordList.length)];//.split(",");

		console.log(wordList);
		//array[Math.round(Math.random() * array.length)];
		callback('kaka');		
}

module.exports.generate = getRandomWord;