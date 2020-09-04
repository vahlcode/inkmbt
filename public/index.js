"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*

Author : Valentine Elum
For : Desyn Open Source
Twitter : @VahlCode
License : MIT License 

*/
var inkmbt = function inkmbt(number) {
  if (number > 999 && number <= 999999) {
    var output = Math.floor(number / 1000) + 'k';
    return output;
  } else if (number > 999999 && number <= 999999999) {
    var _output = Math.floor(number / 1000000) + 'M';

    return _output;
  } else if (number > 999999999 && number <= 999999999999) {
    var _output2 = Math.floor(number / 1000000000) + 'B';

    return _output2;
  } else if (number > 999999999999) {
    var _output3 = Math.floor(number / 1000000000000) + 'T';

    return _output3;
  } else {
    return number;
  }
};

var _default = inkmbt;
exports["default"] = _default;
module.exports = exports.default;