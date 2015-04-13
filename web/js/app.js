(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
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
       $('.c-countdowner__chart__percent').text(count);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9hcHAuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9tb2R1bGUvZ2xvYmFsLmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3BpZWNoYXJ0LmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3NoYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gdmFyIGN1dGlsID0gcmVxdWlyZSgnY2xhbS9jb3JlL3V0aWwnKTtcbi8vIGN1dGlsLm1vZHVsZUNvbmYucHJlZml4ID0gJ2pzYyc7IC8vIENsYW0gdXNlcyB0aGUgJ2pzbScgcHJlZml4IGJ5IGRlZmF1bHQuXG4vLyB2YXIgbW9kdWxlID0gcmVxdWlyZSgnLi9jbGFtX21vZHVsZS9tb2R1bGUnKTtcblxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy4kIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC4kIDogbnVsbCk7XG52YXIgc2hhbWUgPSByZXF1aXJlKCcuL21vZHVsZS9zaGFtZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vbW9kdWxlL2dsb2JhbCcpO1xudmFyIGVhc3lQaWVDaGFydCA9IHJlcXVpcmUoJy4vbW9kdWxlL3BpZWNoYXJ0Jyk7XG5cbnZhciBHY291bnRlciA9IDEwMDtcblxuLy8gQ2xhbSBtb2R1bGVzXG4vLyBjdXRpbC5jcmVhdGVQcm90b3R5cGVzKG1vZHVsZSk7XG4kKFwiLmMtY291bnRkb3duZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2coR2NvdW50ZXIpO1xuXHRjbGVhckludGVydmFsKGNvdW50ZXIpO1xuXHRlYXN5UGllQ2hhcnQudXBkYXRlKEdjb3VudGVyKTtcblx0dmFyIGNvdW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRHY291bnRlci0tO1xuXHRcdGNvbnNvbGUubG9nKE1hdGgucm91bmQoR2NvdW50ZXIvMS42NykpO1xuXHRcdGlmKEdjb3VudGVyIDw9IDApIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoY291bnRlcik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGVhc3lQaWVDaGFydC51cGRhdGUoR2NvdW50ZXIpO1xuXHR9LCAxMDAwKTtcbn0pO1xuXG4kKFwiLmMtb3ZlcmxheVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XG59KTtcblxuJChcIi5jLXVpX19hY3R1YWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0bmV3Um91bmQoKTtcbn0pO1xuXG5mdW5jdGlvbiBuZXdSb3VuZCgpIHtcblx0JChcIi5jLW92ZXJsYXlcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXHQkKFwiLmpzLXdvcmRcIikudGV4dChcImLDqWxhXCIpO1xufTtcbi8vIFN0YW5kYXJkIG1vZHVsZXNcbmdsb2JhbC5pbml0KCk7XG5zaGFtZS5pbml0KCk7XG5lYXN5UGllQ2hhcnQuaW5pdCgpO1xuIiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGNvbnRhaW4gXCJnbG9iYWxcIiBjb2RlLCBsaWtlIGpRdWVyeSBwbHVnaW4gY2FsbHMuXG4vLyBDb2RlIHBsYWNlZCBoZXJlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjb2RlIHBsYWNlZCBpbiB0aGUgc2hhbWUuanMgbW9kdWxlLFxuLy8gc2luY2UgYWx0aG91Z2ggdGhlIGNvZGUgd3JpdHRlbiBoZXJlIGlzIG5vdCBtb2R1bGFyLCBpdCBpcyBub3Qgc2hhbWVmdWxcbi8vIGVpdGhlci4gSXQncyBqdXN0IHRoZSB3YXkgaXQgd29ya3MuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LiQgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLiQgOiBudWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5qcy1jaGFydCcpLmVhc3lQaWVDaGFydCh7XG4gICAgICAgICAgICBhbmltYXRlOiAxMDAwLFxuICAgICAgICAgICAgYmFyQ29sb3I6ICcjQUU0ODAwJyxcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6ICcjRkZEOEJDJyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMjQsXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNpemU6IDY1MFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oY291bnQpIHtcbiAgICAgICAkKCcuanMtY2hhcnQnKS5kYXRhKCdlYXN5UGllQ2hhcnQnKS51cGRhdGUoY291bnQpO1xuICAgICAgICQoJy5jLWNvdW50ZG93bmVyX19jaGFydF9fcGVyY2VudCcpLnRleHQoY291bnQpO1xuICAgIH1cbn07XG4iLCIvLyBUaGlzIG1vZHVsZSBzaG91bGQgYmUgYXMgZW1wdHkgYXMgcG9zc2libGUuXG4vLyBQdXQgZXZlcnl0aGluZyBoZXJlIHRoYXQncyBub3QgcXVpdGUgbW9kdWxhci5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBEb2luZyBub3RoaW5nIHJpZ2h0IG5vd1xuICAgIH1cbn07XG4iXX0=
