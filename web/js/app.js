(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
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

},{"./module/global":2,"./module/piechart":3,"./module/shame":4}],2:[function(require,module,exports){
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
(function (global){
'use strict';

var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);

module.exports = {
    init: function() {
        $('.js-chart').easyPieChart({
            animate: 1000,
            barColor: '#AE4800',
            trackColor: '#FFD8BC',
            lineWidth: 24,
            scaleColor: false,
            size: 650
        });
    },
    update: function(count) {
       $('.js-chart').data('easyPieChart').update(count);
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
// This module should be as empty as possible.
// Put everything here that's not quite modular.
module.exports = {
    init: function() {
        // Doing nothing right now
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9hcHAuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9tb2R1bGUvZ2xvYmFsLmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3BpZWNoYXJ0LmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3NoYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIHZhciBjdXRpbCA9IHJlcXVpcmUoJ2NsYW0vY29yZS91dGlsJyk7XG4vLyBjdXRpbC5tb2R1bGVDb25mLnByZWZpeCA9ICdqc2MnOyAvLyBDbGFtIHVzZXMgdGhlICdqc20nIHByZWZpeCBieSBkZWZhdWx0LlxuLy8gdmFyIG1vZHVsZSA9IHJlcXVpcmUoJy4vY2xhbV9tb2R1bGUvbW9kdWxlJyk7XG5cbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuJCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuJCA6IG51bGwpO1xudmFyIHNoYW1lID0gcmVxdWlyZSgnLi9tb2R1bGUvc2hhbWUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL21vZHVsZS9nbG9iYWwnKTtcbnZhciBlYXN5UGllQ2hhcnQgPSByZXF1aXJlKCcuL21vZHVsZS9waWVjaGFydCcpO1xuXG5cbi8vIENsYW0gbW9kdWxlc1xuLy8gY3V0aWwuY3JlYXRlUHJvdG90eXBlcyhtb2R1bGUpO1xuJChcIi5jLWNvdW50ZG93bmVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lID0gMTAwO1xuXHRjb25zb2xlLmxvZyh0aW1lKTtcblx0Y2xlYXJJbnRlcnZhbChjb3VudGVyKTtcblx0ZWFzeVBpZUNoYXJ0LnVwZGF0ZSh0aW1lKTtcblx0dmFyIGNvdW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHR0aW1lLS07XG5cdFx0Y29uc29sZS5sb2coTWF0aC5yb3VuZCh0aW1lLzEuNjcpKTtcblx0XHRpZih0aW1lIDw9IDApIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoY291bnRlcik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGVhc3lQaWVDaGFydC51cGRhdGUodGltZSk7XG5cdH0sIDEwMDApO1xufSk7XG5cbi8vIFN0YW5kYXJkIG1vZHVsZXNcbmdsb2JhbC5pbml0KCk7XG5zaGFtZS5pbml0KCk7XG5lYXN5UGllQ2hhcnQuaW5pdCgpO1xuIiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGNvbnRhaW4gXCJnbG9iYWxcIiBjb2RlLCBsaWtlIGpRdWVyeSBwbHVnaW4gY2FsbHMuXG4vLyBDb2RlIHBsYWNlZCBoZXJlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjb2RlIHBsYWNlZCBpbiB0aGUgc2hhbWUuanMgbW9kdWxlLFxuLy8gc2luY2UgYWx0aG91Z2ggdGhlIGNvZGUgd3JpdHRlbiBoZXJlIGlzIG5vdCBtb2R1bGFyLCBpdCBpcyBub3Qgc2hhbWVmdWxcbi8vIGVpdGhlci4gSXQncyBqdXN0IHRoZSB3YXkgaXQgd29ya3MuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LiQgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLiQgOiBudWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5qcy1jaGFydCcpLmVhc3lQaWVDaGFydCh7XG4gICAgICAgICAgICBhbmltYXRlOiAxMDAwLFxuICAgICAgICAgICAgYmFyQ29sb3I6ICcjQUU0ODAwJyxcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6ICcjRkZEOEJDJyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMjQsXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNpemU6IDY1MFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAkKCcuanMtY2hhcnQnKS5kYXRhKCdlYXN5UGllQ2hhcnQnKS51cGRhdGUoY291bnQpO1xuICAgIH1cbn07XG4iLCIvLyBUaGlzIG1vZHVsZSBzaG91bGQgYmUgYXMgZW1wdHkgYXMgcG9zc2libGUuXG4vLyBQdXQgZXZlcnl0aGluZyBoZXJlIHRoYXQncyBub3QgcXVpdGUgbW9kdWxhci5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBEb2luZyBub3RoaW5nIHJpZ2h0IG5vd1xuICAgIH1cbn07XG4iXX0=
