# parse-import [![Build Status](https://travis-ci.org/kevva/parse-import.png?branch=master)](http://travis-ci.org/kevva/parse-import)

> Parse CSS `@import` statements.

## Install

```bash
$ npm install --save parse-import
```

```bash
$ component install kevva/parse-import
```

```bash
$ bower install --save parse-import
```

## Usage

```js
var parseImport = require('parse-import');

parseImport('@import "test/foo.css" (min-width: 25em)');
// => { path: 'test/foo.css', condition: '(min-width: 25em)', rule: '@import "test/foo.css" (min-width: 25em)' }
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
