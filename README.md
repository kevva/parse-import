# parse-import [![Build Status](https://travis-ci.org/kevva/parse-import.png?branch=master)](http://travis-ci.org/kevva/parse-import)

Parse CSS `@import` statements.

## Getting started

* [npm](https://npmjs.org/package/parse-import): `npm install parse-import`
* [component](https://github.com/component/component): `component install kevva/parse-import`
* [bower](http://bower.io): `bower install parse-import`

## Examples

```js
var parseImport = require('parse-import');

parseImport('@import "test/foo.css" (min-width: 25em)');
// => { path: 'test/foo.css', condition: '(min-width: 25em)', rule: '@import "test/foo.css" (min-width: 25em)' }
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](https://github.com/kevva)
