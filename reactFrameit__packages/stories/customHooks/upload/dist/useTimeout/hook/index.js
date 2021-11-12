"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTimeout = function useTimeout(callback, delay) {
  var savedCallback = _react["default"].useRef();

  _react["default"].useEffect(function () {
    savedCallback.current = callback;
  }, [callback]);

  _react["default"].useEffect(function () {
    var tick = function tick() {
      savedCallback.current();
    };

    if (delay !== null) {
      var id = setTimeout(tick, delay);
      return function () {
        return clearTimeout(id);
      };
    }
  }, [delay]);
};

var _default = useTimeout;
exports["default"] = _default;