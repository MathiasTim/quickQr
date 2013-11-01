/*globals QRCode, $*/
'use strict';

var quickQr = {
    init: function(url){
        new QRCode('qrcode', {
            text: url,
            width: 128,
            height: 128,
            colorDark : '#000000',
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.M
        });
    }
};

chrome.tabs.getSelected(null, function(tab) {
    quickQr.init(tab.url);
});
