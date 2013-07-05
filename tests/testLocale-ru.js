test('Test int method', function() {
    ok($.locale.int(10) === '10');
    ok($.locale.int(10, 2) === '10,00');
    ok($.locale.int(10, 5) === '10,00000');
    ok($.locale.int(123456) === '123&#160;456');
    ok($.locale.int(12345600000) === '12&#160;345&#160;600&#160;000');
    ok($.locale.int(-125) === '-125');
    ok($.locale.int() === '&#8212;');
    ok($.locale.int('') === '&#8212;');
    ok($.locale.int('sdfsd') === '&#8212;');
    ok($.locale.int('sdfsd', 2) === '&#8212;');
    ok($.locale.int('sdfsd', 'sfsdf') === '&#8212;');
});

test('Price method', function() {
    ok($.locale.price(10) === '10,00&#160р.');
    ok($.locale.price(123456) === '123&#160;456,00&#160р.');
    ok($.locale.price(12345600000) === '12&#160;345&#160;600&#160;000,00&#160р.');
    ok($.locale.price(-125) === '-125,00&#160р.');
    ok($.locale.price() === '&#8212;&#160р.');
    ok($.locale.price('') === '&#8212;&#160р.');
    ok($.locale.price('asdas') === '&#8212;&#160р.');
});

test('Percent method', function() {
    ok($.locale.percent(10) === '10%');
    ok($.locale.percent(10, 2) === '10,00%');
    ok($.locale.percent(123456) === '123&#160;456%');
    ok($.locale.percent(12345600000) === '12&#160;345&#160;600&#160;000%');
    ok($.locale.percent(-125) === '-125%');
    ok($.locale.percent() === '&#8212;%');
    ok($.locale.percent('') === '&#8212;%');
    ok($.locale.percent('', 2) === '&#8212;%');
    ok($.locale.percent('sdfs', 2) === '&#8212;%');
});

test('unlocale method', function() {
    ok($.locale.unLocale('10%') === 10);
    ok($.locale.unLocale('123,45%') === 123.45);
    ok($.locale.unLocale('12 345 600,000%') === 12345600);
    ok($.locale.unLocale('123 456') === 123456);
    ok($.locale.unLocale('-125%') === -125);
    ok(isNaN($.locale.unLocale()));
    ok(isNaN($.locale.unLocale('')));
    ok(isNaN($.locale.unLocale('dsfsfs')));
});
