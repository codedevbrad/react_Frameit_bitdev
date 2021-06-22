import React, { useState , useEffect } from 'react';

import './style.scss';

const Dropdown = ( { openOnRender , tagName , dropdownText , children , direction , style_override } ) => {

      const [isToggle , setToggle ] = useState( openOnRender || false );

      const toggleDropdown = ( e ) => setToggle( !isToggle );

      const Tag = tagName || 'div';

      return (
        <Tag className="dropdown"  id={ style_override } data-testid='dropdown'>
              <div className="dropdown_titleArea" onClick={ e => toggleDropdown(e) }>
                  <h1> { dropdownText }  </h1>
                  <p> + </p>
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
