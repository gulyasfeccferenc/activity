'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = require('jquery');
var shame = require('./module/shame');
var global = require('./module/global');
var easyPieChart = require('./module/piechart');


// Clam modules
// cutil.createPrototypes(module);
$(".c-countdowner").on("click", function() {
	var time = 100;
	console.log(time);
	clearInterval(counter);
	easyPieChart.update(time);
	var counter = setInterval(function() {
		time--;
		console.log(Math.round(time/1.67));
		if(time <= 0) {
			clearInterval(counter);
			return;
		}
		easyPieChart.update(time);
	}, 1000);
});

// Standard modules
global.init();
shame.init();
easyPieChart.init();
