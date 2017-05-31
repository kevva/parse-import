# parse-import [![Build Status](http://img.shields.io/travis/kevva/parse-import.svg?style=flat)](https://travis-ci.org/kevva/parse-import)

> Parse CSS `@import` statements.


## Install

```
$ npm install --save parse-import
```


## Usage

```js
const parseImport = require('parse-import');

parseImport('@import url("foo.css");\n@import "bar.css" only screen and (min-width: 25em);');
/*
[{ 
	path: 'foo.css', 
	condition: '',
	rule: '@import url("foo.css")'
}, { 
	path: 'bar.css', 
	condition: 'only screen and (min-width: 25em)',
	rule: '@import "bar.css" only screen and (min-width: 25em)'
}]
 */
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
