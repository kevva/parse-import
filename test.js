import test from 'ava';
import m from '.';

test('parse bare string @import', t => {
	t.deepEqual(m('@import "foo.css" only screen and (min-width: 25em);'), [{
		path: 'foo.css',
		condition: 'only screen and (min-width: 25em)',
		rule: '@import "foo.css" only screen and (min-width: 25em)'
	}]);
});

test('parse url() quoted @import', t => {
	t.deepEqual(m('@import url("foo.css") only screen and (min-width: 25em);'), [{
		path: 'foo.css',
		condition: 'only screen and (min-width: 25em)',
		rule: '@import url("foo.css") only screen and (min-width: 25em)'
	}]);
});

test('parse url() non-quoted @import', t => {
	t.deepEqual(m('@import url(foo.css) only screen and (min-width: 25em);'), [{
		path: 'foo.css',
		condition: 'only screen and (min-width: 25em)',
		rule: '@import url(foo.css) only screen and (min-width: 25em)'
	}]);
});

test('parse multiple @imports', t => {
	t.deepEqual(m('@import "bar.css";\n@import url(foo.css) only screen and (min-width: 25em);'), [{
		path: 'bar.css',
		condition: null,
		rule: '@import "bar.css"'
	}, {
		path: 'foo.css',
		condition: 'only screen and (min-width: 25em)',
		rule: '@import url(foo.css) only screen and (min-width: 25em)'
	}]);
});
