(function () {
    'use strict';

    var trim = function (str) {
        str = str
            .replace(/^url\s?\(/, '')
            .replace(/\)$/, '')
            .replace(/^("|\')/, '')
            .replace(/("|\')$/, '');

        return str;
    };

    var getImport = function (str) {
        var regex = /(url\s?\()?(\'|")(.*)(\'|")(\))?/gi;
        var ret = {};

        ret.path = trim(str.match(regex).toString());
        ret.condition = str.replace(/(^|\s)@import(\s|$)/gi, '').replace(regex, '').replace(' ', '');
        ret.rule = str;

        return ret;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = getImport;
    } else {
        window.getImport = getImport;
    }
})();
