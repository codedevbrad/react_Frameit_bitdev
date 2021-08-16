import React from 'react';

import './styles.scss';

const ShevronDownIcon = ( { Uniquestyle , className } ) => {
    return (
      <svg className={`react_frameitSVG chevron ${ className } `} style={ Uniquestyle } viewBox="0 0 16 16" fill="none" strokeWidth="7"  strokeLinecap="round" strokeLinejoin="round">
        <path d="M1.0606601717798212 5 L8 11.939339828220179 L14.939339828220179 5"></path>
      </svg>
    )
}

export {
  ShevronDownIcon
}
