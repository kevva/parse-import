'use strict';

var parseImport = require('./');
var test = require('ava');

test('parse bare string @import', function (t) {
	var ret = parseImport('@import "foo.css" only screen and (min-width: 25em);');

	t.assert(ret[0].path === 'foo.css');
	t.assert(ret[0].condition === 'only screen and (min-width: 25em)');
	t.end();
});

test('parse url() quoted @import', function (t) {
	var ret = parseImport('@import url("foo.css") only screen and (min-width: 25em);');

	t.assert(ret[0].path === 'foo.css');
	t.assert(ret[0].condition === 'only screen and (min-width: 25em)');
	t.end();
});

test('parse url() non-quoted @import', function (t) {
	var ret = parseImport('@import url(foo.css) only screen and (min-width: 25em);');

	t.assert(ret[0].path === 'foo.css');
	t.assert(ret[0].condition === 'only screen and (min-width: 25em)');
	t.end();
});

test('parse multiple @imports', function (t) {
	var ret = parseImport([
		'@import "bar.css";',
		'@import url(foo.css) only screen and (min-width: 25em);'
	].join(' '));

	t.assert(ret[0].path === 'bar.css');
	t.assert(ret[1].path === 'foo.css');
	t.assert(ret[1].condition === 'only screen and (min-width: 25em)');
	t.end();
});
