import React from 'react';
import Dropdown from '../dropdown/index';
import './renderStyles.scss';

const DropdownRender = ( ) => {
        return (
                <div className="dropdown_render">
                        <Dropdown openOnRender={true} dropdownText={ 'dropdown' } direction={ 'left' } style_override={ 'dropdown__1' }>
                                <li> first element   </li>
                                <li> secrond element </li>
                                <li> third element   </li>
                        </Dropdown>
                        <Dropdown openOnRender={false} dropdownText={ 'dropdown' } direction={ 'right' } style_override={ 'dropdown__1' }>
                                <li> first element   </li>
                                <li> secrond element </li>
                                <li> third element   </li>
                        </Dropdown>
                </div>
        )
}

export default DropdownRender;