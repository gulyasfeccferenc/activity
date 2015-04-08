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
                animate: 2000,
                barColor: '#AE4800',
                trackColor: '#FFD8BC',
                lineWidth: 24,
                scaleColor: false,
                size: 650
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9hcHAuanMiLCJmcm9udF9zcmMvc2NyaXB0cy9tb2R1bGUvZ2xvYmFsLmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3BpZWNoYXJ0LmpzIiwiZnJvbnRfc3JjL3NjcmlwdHMvbW9kdWxlL3NoYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gdmFyIGN1dGlsID0gcmVxdWlyZSgnY2xhbS9jb3JlL3V0aWwnKTtcbi8vIGN1dGlsLm1vZHVsZUNvbmYucHJlZml4ID0gJ2pzYyc7IC8vIENsYW0gdXNlcyB0aGUgJ2pzbScgcHJlZml4IGJ5IGRlZmF1bHQuXG4vLyB2YXIgbW9kdWxlID0gcmVxdWlyZSgnLi9jbGFtX21vZHVsZS9tb2R1bGUnKTtcblxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy4kIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC4kIDogbnVsbCk7XG52YXIgc2hhbWUgPSByZXF1aXJlKCcuL21vZHVsZS9zaGFtZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vbW9kdWxlL2dsb2JhbCcpO1xudmFyIGVhc3lQaWVDaGFydCA9IHJlcXVpcmUoJy4vbW9kdWxlL3BpZWNoYXJ0Jyk7XG5cblxuLy8gQ2xhbSBtb2R1bGVzXG4vLyBjdXRpbC5jcmVhdGVQcm90b3R5cGVzKG1vZHVsZSk7XG5cblxuLy8gU3RhbmRhcmQgbW9kdWxlc1xuZ2xvYmFsLmluaXQoKTtcbnNoYW1lLmluaXQoKTtcbmVhc3lQaWVDaGFydC5pbml0KCk7XG4iLCIvLyBUaGlzIG1vZHVsZSBzaG91bGQgY29udGFpbiBcImdsb2JhbFwiIGNvZGUsIGxpa2UgalF1ZXJ5IHBsdWdpbiBjYWxscy5cbi8vIENvZGUgcGxhY2VkIGhlcmUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGNvZGUgcGxhY2VkIGluIHRoZSBzaGFtZS5qcyBtb2R1bGUsXG4vLyBzaW5jZSBhbHRob3VnaCB0aGUgY29kZSB3cml0dGVuIGhlcmUgaXMgbm90IG1vZHVsYXIsIGl0IGlzIG5vdCBzaGFtZWZ1bFxuLy8gZWl0aGVyLiBJdCdzIGp1c3QgdGhlIHdheSBpdCB3b3Jrcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBEb2luZyBub3RoaW5nIHJpZ2h0IG5vd1xuICAgIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuJCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuJCA6IG51bGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5qcy1jaGFydCcpLmVhc3lQaWVDaGFydCh7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZTogMjAwMCxcbiAgICAgICAgICAgICAgICBiYXJDb2xvcjogJyNBRTQ4MDAnLFxuICAgICAgICAgICAgICAgIHRyYWNrQ29sb3I6ICcjRkZEOEJDJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDI0LFxuICAgICAgICAgICAgICAgIHNjYWxlQ29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpemU6IDY1MFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbn07XG4iLCIvLyBUaGlzIG1vZHVsZSBzaG91bGQgYmUgYXMgZW1wdHkgYXMgcG9zc2libGUuXG4vLyBQdXQgZXZlcnl0aGluZyBoZXJlIHRoYXQncyBub3QgcXVpdGUgbW9kdWxhci5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBEb2luZyBub3RoaW5nIHJpZ2h0IG5vd1xuICAgIH1cbn07XG4iXX0=
