
import React from 'react';

import './styles.scss';

const HamburgerIcon = ( { className , Uniquestyle } ) => {
    return (
      <svg viewBox="0 0 24 24" className={`react_frameitSVG hamburger ${ className } `} style={ Uniquestyle } >
           <path d="M 4 6 L 20 6 M 4 12 L 20 12 M 4 18 L 20 18"
                  fill="transparent"
            />
      </svg>
    )
}

export default HamburgerIcon;
