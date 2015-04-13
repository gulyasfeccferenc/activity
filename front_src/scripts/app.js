'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = require('jquery');
var shame = require('./module/shame');
var global = require('./module/global');
var easyPieChart = require('./module/piechart');

var Gcounter = 100;

// Clam modules
// cutil.createPrototypes(module);
$(".c-countdowner").on("click", function() {
	console.log(Gcounter);
	clearInterval(counter);
	easyPieChart.update(Gcounter);
	var counter = setInterval(function() {
		Gcounter--;
		console.log(Math.round(Gcounter/1.67));
		if(Gcounter <= 0) {
			clearInterval(counter);
			return;
		}
		easyPieChart.update(Gcounter);
	}, 1000);
});

$(".c-overlay").on("click", function() {
	$(this).css('display', 'none');
});

$(".c-ui__actual").on("click", function() {
	newRound();
});

function newRound() {
	$(".c-overlay").css("display", "block");
	$(".js-word").text("béla");
};
// Standard modules
global.init();
shame.init();
easyPieChart.init();
