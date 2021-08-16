"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { render , cleanup } from '@testing-library/react';
// import "@testing-library/jest-dom";
// import renderer from 'react-test-renderer';
it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_index.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
}); // it('renders Dropdown correctly' , ( ) => {
//   const { getByTestId } = render(<Dropdown dropdownText='click me'> </Dropdown> )
//   expect( getByTestId('dropdown')).toHaveTextContent('click me' );
// }); 
// it('matches snapshot' , ( ) => {
//   const tree = renderer.create(
//     <Dropdown dropdownText="click me new" openOnRender={true}>
//         <li> hey  </li>
//         <li> dude </li>
//     </Dropdown> 
//   ).toJSON();  
//   expect( tree ).toMatchSnapshot();
// });

//# sourceMappingURL=dropdown.test.js.map