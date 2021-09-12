import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../dropdown/index';
import { render , cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Dropdown correctly' , ( ) => {
  const { getByTestId } = render(<Dropdown dropdownText='click me'> </Dropdown> )
  expect( getByTestId('dropdown')).toHaveTextContent('click me' );
}); 

it('matches snapshot' , ( ) => {
  const tree = renderer.create(
    <Dropdown dropdownText="click me new" openOnRender={true}>
        <li> hey  </li>
        <li> dude </li>
    </Dropdown> 
  ).toJSON();  
  expect( tree ).toMatchSnapshot();
});