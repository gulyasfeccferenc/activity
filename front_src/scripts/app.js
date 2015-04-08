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


// Standard modules
global.init();
shame.init();
easyPieChart.init();
