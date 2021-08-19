import React , { useState } from 'react';
import './style.css';
import '../icon_styles.css';

function NavItem ( { children , dropdownProvider , theme = 'default' } ) {

    const [ open, setOpen ] = useState(false);
  
    return (
      <li className="reactFrameit-dp-nav-item">
          <div className={`reactFrameit-dp-icon reactFrameit-dp-fb-icon-${theme}`} onClick={() => setOpen(!open)}>
            { dropdownProvider }
          </div>
    
          { open && children }
      </li>
    );
  }

  export default NavItem;