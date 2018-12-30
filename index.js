/**
 * @author Behnam Mohammadi
 */
"use strict";

exports.__esModule = true;

/**
 * @description throttle
 * @public
 * @version 1.0.3
 * @param {function} func
 * @param {number} time
 * @returns {function} throttled function
 */
exports.throttle = function throttle(func, time) {
  return function() {
    if (this.blocked) return;
    setTimeout(() => {
      this.blocked = false;
    }, time);
    this.blocked = true;
    func(arguments);
  };
};

/**
 * @description debounce
 * @public
 * @version 1.0.2
 * @param {function} func
 * @param {number} time
 * @returns {function} debounced function
 */
exports.debounce = function debounce(func, time) {
  return function() {
    clearTimeout(this.timeoutId);
    var args = arguments;
    this.timeoutId = setTimeout(function() {
      func(args);
    }, time);
  };
};
