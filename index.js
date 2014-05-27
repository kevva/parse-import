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
        .trim()
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
    var regex = /(?:url\s?\((?:.*)\))|(\'|")(?:.*)\1/gi;
    var ret = {};

    var found = str.match(regex);
    if (!found) {throw new Error("Could not find a valid import path in string: "+str);}

    ret.path = trim(found.toString());
    ret.condition = str.replace(/(^|\s)@import(\s|$)/gi, '').replace(regex, '').replace(' ', '');
    ret.rule = str;

    return ret;
};
