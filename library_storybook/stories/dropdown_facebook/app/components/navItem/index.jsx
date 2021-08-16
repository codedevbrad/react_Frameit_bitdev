import React , { useState } from 'react';
import './style.css';
import '../../icon_styles.css';

function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <button className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </button>
  
        { open && props.children }
      </li>
    );
  }

  export default NavItem;