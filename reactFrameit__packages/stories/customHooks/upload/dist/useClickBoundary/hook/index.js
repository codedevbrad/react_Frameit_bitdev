"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** 
 * @param conditions- elements that are allowed to be clicked which wont trigger close.
 * @param type - defines the current tooltp being used. usage for testing.
 */
function useComponentVisible(state, closeTooltips, conditions, type) {
  var ref = (0, _react.useRef)(null);

  var cycleClassNodes = function cycleClassNodes(node) {
    return node.parentNode;
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (state) {
      var i = 0;
      var el = event.target;
      var found = false;
      var elTag = el.tagName;

      if (elTag === 'BODY' || elTag === 'HTML' || elTag === undefined) {
        console.log('clicked body');
        closeTooltips();
        return;
      }

      var _loop = function _loop() {
        var next = cycleClassNodes(el);

        var array = _toConsumableArray(next.classList);

        var test = conditions.some(function (el) {
          return array.includes(el);
        });

        if (array.length > 0 && test) {
          found = true;
          return {
            v: void 0
          };
        }

        el = next;
        i++;
      };

      while (i < 4) {
        var _ret = _loop();

        if (_typeof(_ret) === "object") return _ret.v;
      } // clck outside ...


      if (ref.current && !ref.current.contains(event.target) && !found) {
        console.log('clicked outside', type);
        closeTooltips();
      }
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener("click", handleClickOutside, true);
    return function () {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return {
    ref: ref
  };
}

var _default = useComponentVisible;
exports["default"] = _default;