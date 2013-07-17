Jquery.locale.js
========

Jquery plugin for locale numbers, prices, dates, percents


## Usage

```javascript
//simple
var int = $.locale.int(10000);
console.log(int);
//10,000 - string;


var euro = $.locale.price(25);
console.log(euro);
//€ 25.00 - string;

//unlocale
var price = $.locale.unlocale('€ 25');
console.log(price);
//25 - integer;

//percent
var percent = $.locale.percent(33);
console.log(percent);
//33% - string;

//date
var today = $.locale.date();
console.log(today);
//today format mm/dd/yyyy - string
```
