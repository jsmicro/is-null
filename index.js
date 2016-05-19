(function() {
    'use strict';

    if (!window.hasOwnProperty('isNull')) window.isNull = isNull;
    if (!window.hasOwnProperty('isNotNull')) window.isNotNull = isNotNull;

    function isNull(object) {
        return toString.call(object) === '[object Null]';
    }

    function isNotNull(object) {
        return !isNull(object);
    }
})();
