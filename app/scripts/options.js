/*globals $*/
'use strict';
$(function(){
    var options = {
        init: function(){
            this.setData();
            this.eventListeners();
        },

        eventListeners: function(){
            var that = this;
            $('#qr_options').on('submit', function(e){
                e.preventDefault();
                that.saveData();
            });
        },

        saveData: function(){
            var data = $('#qr_options').serializeArray();
            var setKeys = [];
            $.each(data, function(key, value){
                window.localStorage.setItem(value.name, value.value);
                if(value.value !== ''){
                    setKeys.push(value.name);
                }
            });
            window.localStorage.setItem('setKeys', setKeys);
        },

        setData: function(){
            var keys = window.localStorage.setKeys;
            if(keys !== undefined){
                keys = keys.split(',');
                $.each(keys, function(key, value){
                    var $value = $('#' + value);
                    var content = '';
                    if($value.data('type') === 'select'){
                        content = window.localStorage[value];
                        $value.children('[value=' + content + ']').attr('selected', 'selected');
                    } else if($value.data('type') === 'text'){
                        $value.val(window.localStorage[value]);
                    }
                });
            }
        }
    };
    options.init();
});