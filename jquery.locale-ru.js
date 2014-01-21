/* Russian (UTF-8) initialisation for the jQuery locale plugin. */
/* Written by Aleksandr Bykov (azbykov@gmail.com). */
jQuery(function($){
	$.locale.region = 'ru';
    $.locale.settings['ru'] = {
        //rubles
        currencySuffix: '&#160р.',
        currencySeparate: '&#160;',
        currencyDecimalPoint: ',',
        dateSeparate: '.',
        currencyPrefix: '',
        entity: '&#8212;'
    };

    $.locale.date = function() {
        this.setDate(arguments);
        return [
            this.dateObject.day,
            this.dateObject.month,
            this.dateObject.year
        ].join(this.settings.dateSeparate);
    };

    $.locale.unLocaleDate = function(dateObject) {
        return new Date (dateObject[2], dateObject[1]-1, dateObject[0]);
    };
});
