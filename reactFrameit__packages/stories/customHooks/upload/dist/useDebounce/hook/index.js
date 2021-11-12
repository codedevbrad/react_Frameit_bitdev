"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDebounce;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var useTimeout = function useTimeout(callback, delay) {
  var callbackRef = (0, _react.useRef)(callback);
  var timeoutRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    callbackRef.current = callback;
  }, [callback]);
  var set = (0, _react.useCallback)(function () {
    timeoutRef.current = setTimeout(function () {
      return callbackRef.current();
    }, delay);
  }, [delay]);
  var clear = (0, _react.useCallback)(function () {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);
  (0, _react.useEffect)(function () {
    set();
    return clear;
  }, [delay, set, clear]);
  var reset = (0, _react.useCallback)(function () {
    clear();
    set();
  }, [clear, set]);
  return {
    reset: reset,
    clear: clear
  };
};

function useDebounce(callback, delay, dependencies) {
  var _useTimeout = useTimeout(callback, delay),
      reset = _useTimeout.reset,
      clear = _useTimeout.clear;

  (0, _react.useEffect)(reset, [].concat(_toConsumableArray(dependencies), [reset]));
  (0, _react.useEffect)(clear, []);
}