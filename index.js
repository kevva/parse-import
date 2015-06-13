'use strict';
var getImports = require('get-imports');

function getPath(str) {
	return /(?:url\()(?:.*?)(?:\))|(["\'])(?:[^"\')]+)\1/ig.exec(str)[0]
		.replace(/(?:url\()/ig, '')
		.replace(/(?:\))/g, '')
		.replace(/(?:["\'])/g, '')
		.trim();
}

function getCondition(str) {
	return str.replace(/(?:url\()(?:.*?)(?:\))|(["\'])(?:[^"\')]+)\1/ig, '')
		.replace(/(?:@import)(?:\s)*/g, '')
		.trim();
}

module.exports = function (str) {
	var imports = getImports(str);

	return imports.map(function (imprt) {
		imprt = imprt.replace(/(?:;)$/g, '');

		return {
			path: getPath(imprt),
			condition: getCondition(imprt),
			rule: imprt
		};
	});
};
