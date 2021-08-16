import React, {  useState , useEffect , Fragment } from 'react';
import { ShevronDownIcon } from '../../packages_util/svgIcons/index';

import './style.scss';

const Dropdown = ( { tagName , dropdownText , children , direction , style_override } ) => {

      const [isToggle , setToggle ] = useState(false);

      const toggleDropdown = ( e ) => setToggle( !isToggle );


      const Tag = tagName || 'div';

      return (
        <Tag className="dropdown"  id={ style_override }>
              <div className="dropdown_titleArea" onClick={ e => toggleDropdown(e) }>
                  <h1> { dropdownText }  </h1>
                  <ShevronDownIcon />
              </div>
              { isToggle &&
                <div className={ `dropdown-content dropdown__${  direction }` }>
                      <ul id="navigation">
                        { children }
                      </ul>
                </div>
              }
        </Tag>
      )
}
export default Dropdown;
