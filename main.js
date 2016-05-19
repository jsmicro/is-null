'use strict';

if (!global.hasOwnProperty('isNull')) global.isNull = isNull;
if (!global.hasOwnProperty('isNotNull')) global.isNotNull = isNotNull;

/**
 * Check does the given javascript object is a Null.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNull(object) {
    return toString.call(object) === '[object Null]';
}

/**
 * Check does the given javascript object is not a Null.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotNull(object) {
    return !isNull(object);
}

module.exports = {isNull, isNotNull};
