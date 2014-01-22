Jquery.locale.js
========
v.1.2

Very small Jquery plugin for locale numbers, prices, dates, percents


## Installation

```html
<script src="/path/to/jqueryLocale.js"></script>
```


## Usage

Locale number:
```javascript
var int = $.locale.int(10000); // => 10,000 - string
```
You can add how many symbols showing after comma with add second argument
```javascript
var int = $.locale.int(10000,4); // => 10,000.0000 - string
```

Locale pricing:
```javascript
var euro = $.locale.price(25); // => € 25.00 - string
```

Locale percent:
```javascript
var percent = $.locale.percent(33); // => 33% - string
```


#### Locale date

If you want locale date, use method date(options)
If call method date without options, you get localized today date

Options:
* options - empty
* options - {Number} timestamp
* options - {Array} [day, month, year]

```javascript
var date = $.locale.date(); // => today format mm/dd/yyyy - string
var date = $.locale.date(1388534400); // => 01/01/2014 - string
var date = $.locale.date(31, 12, 2013); // => 12/31/2013 - string
```


#### Unlocale

If you want unlocale use unlocale method
```javascript
var price = $.locale.unlocale('€ 25,75'); // => 25.75 - number
var percent = $.locale.unlocale('33%'); // => 33 - number
var integer = $.locale.unlocale('10,000,000'); // => 10000000 - number
var date = $.locale.unlocale('01/01/2014'); // => 1388534400 - number
```


## Add new region to jqueryLocale

To add a location, you need to add settings object
```javascript
    $.locale.settings[regionId] = {
        currencySuffix,
        currencySeparate,
        currencyDecimalPoint,
        dateSeparate,
        currencyPrefix,
        entity
    };
```

On the page add first:
```javascript
$.locale.region(regionId);

```

## Work with some regions on 1 page

