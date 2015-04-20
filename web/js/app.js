(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
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
},{"./module/global":2,"./module/shame":3}],2:[function(require,module,exports){
// This module should contain "global" code, like jQuery plugin calls.
// Code placed here is different than the code placed in the shame.js module,
// since although the code written here is not modular, it is not shameful
// either. It's just the way it works.
module.exports = {
    init: function() {
        // Doing nothing right now
    }
};

},{}],3:[function(require,module,exports){
// This module should be as empty as possible.
// Put everything here that's not quite modular.
module.exports = {
    init: function() {
        // Doing nothing right now
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9hcHAuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9tb2R1bGUvZ2xvYmFsLmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3NoYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIHZhciBjdXRpbCA9IHJlcXVpcmUoJ2NsYW0vY29yZS91dGlsJyk7XG4vLyBjdXRpbC5tb2R1bGVDb25mLnByZWZpeCA9ICdqc2MnOyAvLyBDbGFtIHVzZXMgdGhlICdqc20nIHByZWZpeCBieSBkZWZhdWx0LlxuLy8gdmFyIG1vZHVsZSA9IHJlcXVpcmUoJy4vY2xhbV9tb2R1bGUvbW9kdWxlJyk7XG5cbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuJCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuJCA6IG51bGwpO1xudmFyIHNoYW1lID0gcmVxdWlyZSgnLi9tb2R1bGUvc2hhbWUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL21vZHVsZS9nbG9iYWwnKTtcbnZhciB0aW1lID0gNjA7XG52YXIga2FrYTtcbi8vIENsYW0gbW9kdWxlc1xuLy8gY3V0aWwuY3JlYXRlUHJvdG90eXBlcyhtb2R1bGUpO1xuXG4kKFwiLmMtb3ZlcmxheVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XG59KTtcblxudmFyIHRpeG8gPSBmdW5jdGlvbigpIHtcblx0dGltZS0tO1xuXHQkKCcuYy1jb3VudGRvd25lcicpLnZhbCh0aW1lKS50cmlnZ2VyKCdjaGFuZ2UnKTtcdFxufVxuXG4kKFwiLmMtdWlfX2FjdHVhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHR3aW5kb3cuY2xlYXJJbnRlcnZhbChrYWthKTtcblx0a2FrYSA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aXhvLCAxMDAwKTtcblx0bmV3Um91bmQoKTtcbn0pO1xuXG5mdW5jdGlvbiBuZXdSb3VuZCgpIHtcblx0JChcIi5jLW92ZXJsYXlcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHQkKFwiLmpzLXdvcmRcIikudGV4dChcImLDqWxhXCIpO1xuXHR0aW1lID0gNjA7XG5cdC8vICQoXCIuYy1jb3VudGRvd25lclwiKS5rbm9iKCk7XG5cdCQoXCIuYy1jb3VudGRvd25lclwiKS5rbm9iKHtcbiAgICAgICAgJ21heCc6IDYwLFxuICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxuICAgICAgICAndGhpY2tuZXNzJzogMC4xXG4gICAgICB9KTtcbn07XG5cbi8vIFN0YW5kYXJkIG1vZHVsZXNcbmdsb2JhbC5pbml0KCk7XG5zaGFtZS5pbml0KCk7IiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGNvbnRhaW4gXCJnbG9iYWxcIiBjb2RlLCBsaWtlIGpRdWVyeSBwbHVnaW4gY2FsbHMuXG4vLyBDb2RlIHBsYWNlZCBoZXJlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjb2RlIHBsYWNlZCBpbiB0aGUgc2hhbWUuanMgbW9kdWxlLFxuLy8gc2luY2UgYWx0aG91Z2ggdGhlIGNvZGUgd3JpdHRlbiBoZXJlIGlzIG5vdCBtb2R1bGFyLCBpdCBpcyBub3Qgc2hhbWVmdWxcbi8vIGVpdGhlci4gSXQncyBqdXN0IHRoZSB3YXkgaXQgd29ya3MuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGJlIGFzIGVtcHR5IGFzIHBvc3NpYmxlLlxuLy8gUHV0IGV2ZXJ5dGhpbmcgaGVyZSB0aGF0J3Mgbm90IHF1aXRlIG1vZHVsYXIuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIl19
