/**
 * @author Behnam Mohammadi
 */
"use strict";

exports.__esModule = true;

/**
 * @description throttle
 * @public
 * @version 1.0.5
 * @param {function} func
 * @param {number} delay
 * @returns {function} throttled function
 */
exports.throttle = function throttle(func, delay) {
  var nextAllowed = 0;
    return {
        run: function () {
            var now = Date.now();
            if (now < nextAllowed) return;
            nextAllowed = now + delay;
            func(arguments);
        },
        reset: function () {
            nextAllowed = 0;
        }
    };
};

/**
 * @description debounce
 * @public
 * @version 1.0.5
 * @param {function} func
 * @param {number} delay
 * @returns {function} debounced function
 */
exports.debounce = function debounce(func, delay) {
  return function() {
    clearTimeout(this.timeoutId);
    var args = arguments;
    this.timeoutId = setTimeout(function() {
      func(args);
    }, delay);
  };
};
