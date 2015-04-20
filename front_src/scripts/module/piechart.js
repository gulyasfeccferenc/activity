'use strict';

var $ = require('jquery');

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
