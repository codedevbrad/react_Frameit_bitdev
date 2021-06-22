"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ReactMovement = function ReactMovement(_ref) {
  var children = _ref.children,
      elClass = _ref.elClass,
      distance = _ref.distance,
      tag = _ref.tag;
  if (!distance) distance = 3;
  var Tag = tag || 'div';
  var oldx = 0,
      oldy = 0,
      coordinates = [];

  var setBack = function setBack(e) {
    e.currentTarget.style.transform = "none";
  };

  var translateImage = function translateImage(e) {
    e.pageX < oldx ? coordinates[0] = distance : coordinates[0] = -distance;
    e.pageY < oldy ? coordinates[1] = distance : coordinates[1] = -distance;
    oldx = e.pageX;
    oldy = e.pageY;
    var xTranslate = coordinates[0] + 'px';
    var yTranslate = coordinates[1] + 'px';
    e.currentTarget.style.transform = "translate(" + xTranslate + "," + yTranslate + ")";
  };

  return /*#__PURE__*/_react["default"].createElement(Tag, {
    className: elClass,
    onMouseMove: function onMouseMove(e) {
      return translateImage(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return setBack(e);
    }
  }, children);
};

var _default = ReactMovement;
exports["default"] = _default;
