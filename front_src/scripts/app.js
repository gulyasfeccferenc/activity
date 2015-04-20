'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = require('jquery');
var shame = require('./module/shame');
var global = require('./module/global');
var piechart = require('./module/piechart');

var time = 61;
var counter;

var tixo = function() {
	time--;
	piechart.update(time);	
}

function newRound() {
	time = 61;
	window.clearInterval(counter);
	counter = window.setInterval(tixo, 1000);
};

$(".c-ui__actual").on("click", function() {
	$(".c-overlay").css("display", "block");
	$(".js-word").text("béla");
	newRound();
});

$(".c-overlay").on("click", function() {
	$(this).css('display', 'none');
});
// Standard modules
piechart.init();
global.init();
shame.init();