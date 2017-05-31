'use strict';
const getImports = require('get-imports');

const getPath = str => /(?:url\()(?:.*?)(?:\))|(["'])(?:[^"')]+)\1/ig.exec(str)[0]
	.replace(/(?:url\()/ig, '')
	.replace(/(?:\))/g, '')
	.replace(/(?:["'])/g, '')
	.trim();

const getCondition = str => str.replace(/(?:url\()(?:.*?)(?:\))|(["'])(?:[^"')]+)\1/ig, '')
	.replace(/(?:@import)(?:\s)*/g, '')
	.trim();

module.exports = str => getImports(str).map(x => {
	x = x.replace(/(?:;)$/g, '');

	return {
		path: getPath(x),
		condition: getCondition(x) || null,
		rule: x
	};
});
