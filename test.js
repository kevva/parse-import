/*global describe, it */
'use strict';

var assert = require('assert');
var parseImport = require('./');

describe('parseImport()', function () {
    it('should parse @import', function (cb) {
        var ret = parseImport('@import "test/foo.css" (min-width: 25em)');

        assert.strictEqual(ret.path, 'test/foo.css');
        assert.strictEqual(ret.condition, '(min-width: 25em)');

        cb();
    });
});
