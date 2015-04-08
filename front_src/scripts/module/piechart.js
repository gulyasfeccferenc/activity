'use strict';

var $ = require('jquery');

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
