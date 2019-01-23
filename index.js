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
  return function() {
    var now = Date.now();
    if (now < nextAllowed) return;
    nextAllowed = now + delay;
    func.apply(undefined, arguments);
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
  let timeoutId = null;
  return function() {
    clearTimeout(timeoutId);
    var args = arguments;
    timeoutId = setTimeout(function() {
      func.apply(undefined, args);
    }, delay);
  };
};
