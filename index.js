/**
 * @author Behnam Mohammadi
 */
"use strict";

exports.__esModule = true;

/**
 * @description throttle
 * @public
 * @version 1.0.4
 * @param {function} callBack
 * @param {number} threshhold
 * @param {Object} scope
 * @returns {function} throttled function
 */
var throttle = function (callBack, threshhold, scope) {
    threshhold || (threshhold = 250);
    return function () {
        var context = (scope || this), now = +new Date, args = arguments;
        if (this.last && now < this.last + threshhold) {
            // hold on to it
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(function () {
                this.last = now;
                callBack.apply(context, args);
            }, threshhold);
        } else {
            this.last = now;
            callBack.apply(context, args);
        }
    };
};
exports.throttle = throttle;



/**
 * @description debounce
 * @public
 * @version 1.0.3
 * @param {function} callBack
 * @param {number} delay
 * @param {Object} scope
 * @returns {function} debounced function
 */
var debounce = function (callBack, delay, scope) {
    delay || (delay = 250);
    return function () {
        var context = (scope || this), args = arguments;
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () {
            callBack.apply(context, args);
        }, delay);
    };
};
exports.debounce = debounce;
