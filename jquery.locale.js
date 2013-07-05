/*
 @author Aleksandr Bykov (azbykov@gmail.ru, KiD86@list.ru)
 @version 1.0
 @date 04.06.2013
 */

(function($) {
    function Locale() {
        this.settings = {
            region: 'en',
            currencyPrefix: '&#8364; ',//€
            currencySuffix: '',
            entity: '&#8212;',
            currencySeparate: ',',
            currencyDecimalPoint: '.',
            dateSeparate: '/'
        };

        this.region = function() {
            return this.settings.region;
        };

        //dates
        this.dateObject = {};

        //Default method for integer
        this.differentNumbers = function(val, comma) {
            var str = '',
                minus = false,
                len = 0
                ;

            if (val < 0) {
                val = val * -1;
                minus = true;
            }

            val = parseFloat(val).toFixed(comma);

            val = val.split('.');

            len = val[0].length;

            if (val[0].length > 4) { //if a line contains more than four characters, making treatment
                for (var i=0; i<=val[0].length; i++) {
                    if ((i % 3 === 0) && (i !== 0)) {
                        if (str.length>0) {
                            str = val[0].slice(len-3, len) + this.settings.currencySeparate + str; //put a separator between the zeros
                        } else {
                            str = val[0].slice(len-3, len);
                        }
                        len = len - 3;
                    }
                }
                // If this is the end, the gap is not needed
                if ((3 > len) && (len !== 0)) {
                    str = val[0].substr(0, len) +
                        //put a separator between the zeros
                        this.settings.currencySeparate + str;
                }
            } else { //If a line is less than 4 characters, leave it as it is
                str = val[0];
            }

            if ((val[1])) { //if there are signs of the decimal point, then add them to the from the point of
                str += this.settings.currencyDecimalPoint + val[1];
            }
            //If the line is 0 or NaN then insert '-'
            if ((str === 0) || isNaN(parseFloat(str))) {
                str = this.settings.entity;
            }

            if (minus) {
                str = '-' + str;
            }
            return str;
        };

        //simple int
        this.int = function(val, comma) {
            if (val) {
                return this.differentNumbers(val, this.getComma(comma));
            }
            return this.settings.entity;
        };

        //price
        this.price = function(val) {
            return this.settings.currencyPrefix +
                this.differentNumbers(val, 2) +
                this.settings.currencySuffix;
        };

        this.percent = function(val, comma) {
            return this.differentNumbers(val, this.getComma(comma))+'%';
        };

        this.unLocale = function(val) {
            var space = /\s/g;
            var result;
            if (typeof val == 'number' ) {
                return val;
            }
            if (typeof val == 'undefined') {
                return NaN;
            }
            val = val.split(this.settings.currencyDecimalPoint);
            var decimal = (val[1]) ? parseFloat(val[1]) : '';
            result = val[0].replace(this.settings.currencySeparate, '');
            result = result.replace(this.settings.currencyPrefix, '');
            result = result.replace(this.settings.currencySuffix, '');
            result = result.replace(/[^\w\.\-]/gi, '');
            return parseFloat(result+'.'+decimal);
        };

        this.unDate = function(date) {
            date = date.split(this.settings.dateSeparate);
            if (date.length == 3) {
                return this.unLocaleDate(date);
            }
            return false;
        };

        //Main date method
        // if you need to locate the date of the attributes necessary
        // to pass the date (day 1 2 3 month year)
        this.setDate = function() {
            var args = arguments[0];
            //today
            if (args.length === 0) {
                var toDay = new Date();
                this.dateObject.day = toDay.getDate();
                this.dateObject.month = toDay.getMonth()+1;
                this.dateObject.year = toDay.getFullYear();
            } else if (args.length === 1) { //timestamp
                var date = new Date(args[0]);
                this.dateObject.day = date.getDate();
                this.dateObject.month = date.getMonth()+1;
                this.dateObject.year = date.getFullYear();
            } else {
                this.dateObject.day = args[0];
                this.dateObject.month = args[1];
                this.dateObject.year = args[2];
            }
            if (this.dateObject.day < 10) {
                this.dateObject.day = '0' + parseFloat(this.dateObject.day);
            }

            if (this.dateObject.month < 10) {
                this.dateObject.month = '0' + parseFloat(this.dateObject.month);
            }

            return this.dateObject;
        };

        this.getComma = function(comma) {
            return (typeof comma == 'number' && 0 < comma) ? comma : 0;
        };
    }

    $.fn.locale = function(options){};
    $.locale = new Locale();

    $.locale.date = function() {
        this.setDate(arguments);
        return this.dateObject.month + this.settings.dateSeparate +
            this.dateObject.day + this.settings.dateSeparate +
            this.dateObject.year;
    };

    $.locale.unLocaleDate = function(dateObject) {
        return new Date (dateObject[2], dateObject[0]-1, dateObject[1]);
    };
})(jQuery);