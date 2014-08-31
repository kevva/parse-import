'use strict';

var parseImport = require('./');
var test = require('ava');

test('parse bare string @import', function (t) {
    var ret = parseImport('@import "test/foo.css" (min-width: 25em)');

    t.assert(ret.path === 'test/foo.css');
    t.assert(ret.condition === '(min-width: 25em)');
});

test('parse url() quoted @import', function (t) {
    var ret = parseImport('@import url("test/foo.css") (min-width: 25em)');

    t.assert(ret.path === 'test/foo.css');
    t.assert(ret.condition === '(min-width: 25em)');
});

test('parse url() non-quoted @import', function (t) {
    var ret = parseImport('@import url(test/foo.css) (min-width: 25em)');

    t.assert(ret.path === 'test/foo.css');
    t.assert(ret.condition === '(min-width: 25em)');
});
