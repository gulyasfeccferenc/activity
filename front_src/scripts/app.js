'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = require('jquery');
var shame = require('./module/shame');
var global = require('./module/global');
var time = 60;
var kaka;
// Clam modules
// cutil.createPrototypes(module);

$(".c-overlay").on("click", function() {
	$(this).css('display', 'none');
});

var tixo = function() {
	time--;
	$('.c-countdowner').val(time).trigger('change');	
}

$(".c-ui__actual").on("click", function() {
	window.clearInterval(kaka);
	kaka = window.setInterval(tixo, 1000);
	newRound();
});

function newRound() {
	$(".c-overlay").css("display", "block");
	$(".js-word").text("béla");
	time = 60;
	// $(".c-countdowner").knob();
	$(".c-countdowner").knob({
        'max': 60,
        'readOnly': true,
        'thickness': 0.1
      });
};

// Standard modules
global.init();
shame.init();