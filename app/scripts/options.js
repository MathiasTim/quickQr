/*globals $*/
'use strict';
$(function(){
    var options = {
        init: function(){
            this.eventListeners();
        },

        eventListeners: function(){
            var that = this;
            $('#qr_options').on('change, blur',  'input, select', function(){
                that.getData();
            });
        },

        getData: function(){
            $('#qr_options').serializeArray();
            console.log($('#qr_options').serializeArray());
        }
    };
    options.init();
});