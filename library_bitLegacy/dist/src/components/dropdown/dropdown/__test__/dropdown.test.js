"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("../index"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_index.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});
it('renders Dropdown correctly', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, {
    dropdownText: "click me"
  }, " ")),
      getByTestId = _render.getByTestId;

  expect(getByTestId('dropdown')).toHaveTextContent('click me');
});
it('matches snapshot', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    dropdownText: "click me new",
    openOnRender: true
  }, /*#__PURE__*/_react.default.createElement("li", null, " hey  "), /*#__PURE__*/_react.default.createElement("li", null, " dude "))).toJSON();

  expect(tree).toMatchSnapshot();
});

//# sourceMappingURL=dropdown.test.js.map