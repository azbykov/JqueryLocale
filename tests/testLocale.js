test('Test int method', function() {
    ok($.locale.int(10) === '10');
    ok($.locale.int(10, 2) === '10.00');
    ok($.locale.int(10, 5) === '10.00000');
    ok($.locale.int(123456) === '123,456');
    ok($.locale.int(12345600000) === '12,345,600,000');
    ok($.locale.int(-125) === '-125');
    ok($.locale.int() === '&#8212;');
    ok($.locale.int('') === '&#8212;');
    ok($.locale.int('sdfsd') === '&#8212;');
    ok($.locale.int('sdfsd', 2) === '&#8212;');
    ok($.locale.int('sdfsd', 'sfsdf') === '&#8212;');
});

test('Price method', function() {
    ok($.locale.price(10) === '&#8364; 10.00');
    ok($.locale.price(123456) === '&#8364; 123,456.00');
    ok($.locale.price(12345600000) === '&#8364; 12,345,600,000.00');
    ok($.locale.price(-125) === '&#8364; -125.00');
    ok($.locale.price() === '&#8364; &#8212;');
    ok($.locale.price('') === '&#8364; &#8212;');
    ok($.locale.price('asdas') === '&#8364; &#8212;');
});

test('Percent method', function() {
    ok($.locale.percent(10) === '10%');
    ok($.locale.percent(10, 2) === '10.00%');
    ok($.locale.percent(123456) === '123,456%');
    ok($.locale.percent(12345600000) === '12,345,600,000%');
    ok($.locale.percent(-125) === '-125%');
    ok($.locale.percent() === '&#8212;%');
    ok($.locale.percent('') === '&#8212;%');
    ok($.locale.percent('', 2) === '&#8212;%');
    ok($.locale.percent('sdfs', 2) === '&#8212;%');
});

test('unlocale method', function() {
    ok($.locale.unLocale('10%') === 10);
    ok($.locale.unLocale('123,456%') === 123456);
    ok($.locale.unLocale('12,345,600,000%') === 12345600000);
    ok($.locale.unLocale('123,456') === 123456);
    ok($.locale.unLocale('-125%') === -125);
    ok(isNaN($.locale.unLocale()));
    ok(isNaN($.locale.unLocale('')));
    ok(isNaN($.locale.unLocale('dsfsfs')));
});

test('date method', function() {
    var date = $.locale.date();
    ok($.locale.unDate(date).getTime() == new Date(date).getTime());
});
