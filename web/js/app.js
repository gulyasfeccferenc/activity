(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var cutil = require('clam/core/util');
// cutil.moduleConf.prefix = 'jsc'; // Clam uses the 'jsm' prefix by default.
// var module = require('./clam_module/module');

var $ = (typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
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
        $(".js-countdowner").knob({
            'max': 60,
            'readOnly': true,
            'thickness': 0.1,
            'font' : "Quicksand",
            'bgColor' : '#FFD8BC',
            'inputColor' : '#EB6200',
            'fgColor' : '#EB6200',
            'lineCap' : 'round'
        });
        this.resize();
        this.update(61);
    },
    update: function(count) {
       $('.js-countdowner').val(count).trigger('change'); 
    },
    resize: function() {
        $('.js-countdowner').attr('data-width', 200).attr('data-height', 200);
        $('.js-countdowner').knob({
            draw: function() {}
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9hcHAuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9tb2R1bGUvZ2xvYmFsLmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3BpZWNoYXJ0LmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3NoYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gdmFyIGN1dGlsID0gcmVxdWlyZSgnY2xhbS9jb3JlL3V0aWwnKTtcbi8vIGN1dGlsLm1vZHVsZUNvbmYucHJlZml4ID0gJ2pzYyc7IC8vIENsYW0gdXNlcyB0aGUgJ2pzbScgcHJlZml4IGJ5IGRlZmF1bHQuXG4vLyB2YXIgbW9kdWxlID0gcmVxdWlyZSgnLi9jbGFtX21vZHVsZS9tb2R1bGUnKTtcblxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy4kIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC4kIDogbnVsbCk7XG52YXIgc2hhbWUgPSByZXF1aXJlKCcuL21vZHVsZS9zaGFtZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vbW9kdWxlL2dsb2JhbCcpO1xudmFyIHBpZWNoYXJ0ID0gcmVxdWlyZSgnLi9tb2R1bGUvcGllY2hhcnQnKTtcblxudmFyIHRpbWUgPSA2MTtcbnZhciBjb3VudGVyO1xuXG52YXIgdGl4byA9IGZ1bmN0aW9uKCkge1xuXHR0aW1lLS07XG5cdHBpZWNoYXJ0LnVwZGF0ZSh0aW1lKTtcdFxufVxuXG5mdW5jdGlvbiBuZXdSb3VuZCgpIHtcblx0dGltZSA9IDYxO1xuXHR3aW5kb3cuY2xlYXJJbnRlcnZhbChjb3VudGVyKTtcblx0Y291bnRlciA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aXhvLCAxMDAwKTtcbn07XG5cbiQoXCIuYy11aV9fYWN0dWFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdCQoXCIuYy1vdmVybGF5XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblx0JChcIi5qcy13b3JkXCIpLnRleHQoXCJiw6lsYVwiKTtcblx0bmV3Um91bmQoKTtcbn0pO1xuXG4kKFwiLmMtb3ZlcmxheVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XG59KTtcbi8vIFN0YW5kYXJkIG1vZHVsZXNcbnBpZWNoYXJ0LmluaXQoKTtcbmdsb2JhbC5pbml0KCk7XG5zaGFtZS5pbml0KCk7IiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGNvbnRhaW4gXCJnbG9iYWxcIiBjb2RlLCBsaWtlIGpRdWVyeSBwbHVnaW4gY2FsbHMuXG4vLyBDb2RlIHBsYWNlZCBoZXJlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjb2RlIHBsYWNlZCBpbiB0aGUgc2hhbWUuanMgbW9kdWxlLFxuLy8gc2luY2UgYWx0aG91Z2ggdGhlIGNvZGUgd3JpdHRlbiBoZXJlIGlzIG5vdCBtb2R1bGFyLCBpdCBpcyBub3Qgc2hhbWVmdWxcbi8vIGVpdGhlci4gSXQncyBqdXN0IHRoZSB3YXkgaXQgd29ya3MuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LiQgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLiQgOiBudWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIuanMtY291bnRkb3duZXJcIikua25vYih7XG4gICAgICAgICAgICAnbWF4JzogNjAsXG4gICAgICAgICAgICAncmVhZE9ubHknOiB0cnVlLFxuICAgICAgICAgICAgJ3RoaWNrbmVzcyc6IDAuMSxcbiAgICAgICAgICAgICdmb250JyA6IFwiUXVpY2tzYW5kXCIsXG4gICAgICAgICAgICAnYmdDb2xvcicgOiAnI0ZGRDhCQycsXG4gICAgICAgICAgICAnaW5wdXRDb2xvcicgOiAnI0VCNjIwMCcsXG4gICAgICAgICAgICAnZmdDb2xvcicgOiAnI0VCNjIwMCcsXG4gICAgICAgICAgICAnbGluZUNhcCcgOiAncm91bmQnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSg2MSk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgJCgnLmpzLWNvdW50ZG93bmVyJykudmFsKGNvdW50KS50cmlnZ2VyKCdjaGFuZ2UnKTsgXG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuanMtY291bnRkb3duZXInKS5hdHRyKCdkYXRhLXdpZHRoJywgMjAwKS5hdHRyKCdkYXRhLWhlaWdodCcsIDIwMCk7XG4gICAgICAgICQoJy5qcy1jb3VudGRvd25lcicpLmtub2Ioe1xuICAgICAgICAgICAgZHJhdzogZnVuY3Rpb24oKSB7fVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuIiwiLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGJlIGFzIGVtcHR5IGFzIHBvc3NpYmxlLlxuLy8gUHV0IGV2ZXJ5dGhpbmcgaGVyZSB0aGF0J3Mgbm90IHF1aXRlIG1vZHVsYXIuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRG9pbmcgbm90aGluZyByaWdodCBub3dcbiAgICB9XG59O1xuIl19
