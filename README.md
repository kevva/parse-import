# parse-import [![Build Status](http://img.shields.io/travis/kevva/parse-import.svg?style=flat)](https://travis-ci.org/kevva/parse-import)

> Parse CSS `@import` statements.

## Install

```sh
$ npm install --save parse-import
```

## Usage

```js
var parseImport = require('parse-import');

parseImport('@import "test/foo.css" (min-width: 25em)');
//=> { path: 'test/foo.css', condition: '(min-width: 25em)', rule: '@import "test/foo.css" (min-width: 25em)' }
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
