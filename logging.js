/**
 * This module is a simple wrapper around the standard console.log
 */

var dateFormat = require('dateformat');
var _ = require('lodash');

/**
 * Use npm dateFormat module to format date
 * Refer to: http://blog.stevenlevithan.com/archives/date-time-format
 *
 * @returns {*}
 */
function dateNow() {
  return dateFormat(new Date(), "dd-mmm-yyyy HH:MM:ss");
}

/**
 * When multiple arguments to function, JavaScript "arguments" becomes a key-value object
 * For single argument it is what gets passed down (array, string or other objects, functions etc)
 *
 * This function is only interested in processing it if it is an object otherwise otherwise it will
 * return it without modification.
 * @param arg
 * @returns {*}
 */
function processArgument(arg) {
  var stingConcat;
  if (typeof arg == "object") {
    _.forOwn(arg, function (value, key) {
      var stringifiedValue = typeof value == "object" ? JSON.stringify(value) : value;
      if (key == "0")
        stingConcat = stringifiedValue;
      else
        stingConcat += ' ' + stringifiedValue;
    });
    return stingConcat;
  }
  else
    return arg;
}

/**
 * Log error
 * @param msg
 */
module.exports.error = function () {
  var args = processArgument(arguments);
  console.log(dateNow(), "ERROR", args);
};

/**
 * Log information
 * @param msg
 */
module.exports.info = function () {

  var args = processArgument(arguments);
  console.log(dateNow(), "INFO", args);
};

/**
 * Log warning
 * @param msg
 */
module.exports.warning = function () {
  var args = processArgument(arguments);
  console.log(dateNow(), "WARN", args);
};


