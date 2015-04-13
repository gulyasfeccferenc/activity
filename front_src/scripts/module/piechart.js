'use strict';

var $ = require('jquery');

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
