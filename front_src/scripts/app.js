'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = require('jquery');
var shame = require('./module/shame');
var global = require('./module/global');
var time;
// Clam modules
// cutil.createPrototypes(module);

$(".c-overlay").on("click", function() {
	$(this).css('display', 'none');
});

$(".c-ui__actual").on("click", function() {
	clearInterval(kaka);
	var kaka = timer();
	newRound();
});

function newRound() {
	$(".c-overlay").css("display", "block");
	$(".js-word").text("béla");
};

function timer() {
	time = 60;
		setInterval(function(){
			time--;
			$('.c-countdowner').val(time).trigger('change');
		}, 1000);

	
}
// Standard modules
global.init();
shame.init();