/*globals QRCode, URI*/
'use strict';

var quickQr = {

    init: function(url){
        var settings = this.getSettings(url);
        this.generateCode(settings);
    },

    getSettings: function(url){
        var keys = window.localStorage.setKeys.split(',');
        var settings = {};
        for (var i = 0; i < keys.length; i++) {
            settings[keys[i]] = window.localStorage.getItem(keys[i]);
        }
        settings.url = this.parseUrl(url, settings.baseUrl);
        console.log(settings);
        return settings;
    },

    parseUrl: function(url, baseUrl){
        if(baseUrl !== undefined){
            url = URI(url).host(baseUrl);
            url = url.toString();
        }
        return url;
    },

    generateCode: function(settings){
        new QRCode('qrcode', {
            text: settings.url,
            width: 128,
            height: 128,
            colorDark : settings.bgcolor,
            colorLight : settings.fgcolor,
            correctLevel : QRCode.CorrectLevel[settings.errorCorrection]
        });
    }
};

chrome.tabs.getSelected(null, function(tab) {
    quickQr.init(tab.url);
});
