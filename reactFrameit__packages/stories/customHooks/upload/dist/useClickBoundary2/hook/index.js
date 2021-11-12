"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useClickOutside = function useClickOutside(ref, callback) {
  var handleClick = function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  _react["default"].useEffect(function () {
    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  });
};

var _default = useClickOutside;
exports["default"] = _default;