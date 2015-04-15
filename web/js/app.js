(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9hcHAuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9tb2R1bGUvZ2xvYmFsLmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3NoYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyB2YXIgY3V0aWwgPSByZXF1aXJlKCdjbGFtL2NvcmUvdXRpbCcpO1xuLy8gY3V0aWwubW9kdWxlQ29uZi5wcmVmaXggPSAnanNjJzsgLy8gQ2xhbSB1c2VzIHRoZSAnanNtJyBwcmVmaXggYnkgZGVmYXVsdC5cbi8vIHZhciBtb2R1bGUgPSByZXF1aXJlKCcuL2NsYW1fbW9kdWxlL21vZHVsZScpO1xuXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LiQgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLiQgOiBudWxsKTtcbnZhciBzaGFtZSA9IHJlcXVpcmUoJy4vbW9kdWxlL3NoYW1lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9tb2R1bGUvZ2xvYmFsJyk7XG52YXIgdGltZTtcbi8vIENsYW0gbW9kdWxlc1xuLy8gY3V0aWwuY3JlYXRlUHJvdG90eXBlcyhtb2R1bGUpO1xuXG4kKFwiLmMtb3ZlcmxheVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XG59KTtcblxuJChcIi5jLXVpX19hY3R1YWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0Y2xlYXJJbnRlcnZhbChrYWthKTtcblx0dmFyIGtha2EgPSB0aW1lcigpO1xuXHRuZXdSb3VuZCgpO1xufSk7XG5cbmZ1bmN0aW9uIG5ld1JvdW5kKCkge1xuXHQkKFwiLmMtb3ZlcmxheVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cdCQoXCIuanMtd29yZFwiKS50ZXh0KFwiYsOpbGFcIik7XG59O1xuXG5mdW5jdGlvbiB0aW1lcigpIHtcblx0dGltZSA9IDYwO1xuXHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0XHR0aW1lLS07XG5cdFx0XHQkKCcuYy1jb3VudGRvd25lcicpLnZhbCh0aW1lKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHR9LCAxMDAwKTtcblxuXHRcbn1cbi8vIFN0YW5kYXJkIG1vZHVsZXNcbmdsb2JhbC5pbml0KCk7XG5zaGFtZS5pbml0KCk7IiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGNvbnRhaW4gXCJnbG9iYWxcIiBjb2RlLCBsaWtlIGpRdWVyeSBwbHVnaW4gY2FsbHMuXG4vLyBDb2RlIHBsYWNlZCBoZXJlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjb2RlIHBsYWNlZCBpbiB0aGUgc2hhbWUuanMgbW9kdWxlLFxuLy8gc2luY2UgYWx0aG91Z2ggdGhlIGNvZGUgd3JpdHRlbiBoZXJlIGlzIG5vdCBtb2R1bGFyLCBpdCBpcyBub3Qgc2hhbWVmdWxcbi8vIGVpdGhlci4gSXQncyBqdXN0IHRoZSB3YXkgaXQgd29ya3MuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGJlIGFzIGVtcHR5IGFzIHBvc3NpYmxlLlxuLy8gUHV0IGV2ZXJ5dGhpbmcgaGVyZSB0aGF0J3Mgbm90IHF1aXRlIG1vZHVsYXIuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIl19
