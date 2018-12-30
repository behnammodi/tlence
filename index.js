"use strict";

exports.__esModule = true;

/**
 * @param {function} func
 * @param {number} time
 */
exports.throttle = function throttle(func, time) {
  return function(args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined || this.lastCall - previousCall > time)
      func(args);
  };
};

/**
 * @param {function} func
 * @param {number} time
 */
exports.debounce = function debounce(func, time) {
  return function(args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= time)
      clearTimeout(this.lastCallTimer);
    this.lastCallTimer = setTimeout(() => func(args), time);
  };
};