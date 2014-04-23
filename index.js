'use strict';

/**
 * Trim string
 *
 * @param {String} str
 * @api private
 */

function trim(str) {
    str = str
        .replace(/^url\s?\(/, '')
        .replace(/\)$/, '')
        .replace(/^("|\')/, '')
        .replace(/("|\')$/, '');

    return str;
}

/**
 * Get @import statements from a string
 *
 * @param {String} str
 * @api public
 */

module.exports = function (str) {
    var regex = /(url\s?\()?(\'|")(.*)(\'|")(\))?/gi;
    var ret = {};

    ret.path = trim(str.match(regex).toString());
    ret.condition = str.replace(/(^|\s)@import(\s|$)/gi, '').replace(regex, '').replace(' ', '');
    ret.rule = str;

    return ret;
};
