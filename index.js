/**
 * @author Behnam Mohammadi
 * @ref https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07
 */
"use strict";

exports.__esModule = true;

/**
 * @description throttle
 * @public
 * @version 1.0.1
 * @param {function} func
 * @param {number} time
 * @returns {function} throttled function
 */
exports.throttle = function throttle(func, time) {
  return function() {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined || this.lastCall - previousCall > time)
      func(arguments);
  };
};

/**
 * @description debounce
 * @public
 * @version 1.0.1
 * @param {function} func
 * @param {number} time
 * @returns {function} debounced function
 */
exports.debounce = function debounce(func, time) {
  return function() {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= time)
      clearTimeout(this.lastCallTimer);
    this.lastCallTimer = setTimeout(() => func(arguments), time);
  };
};