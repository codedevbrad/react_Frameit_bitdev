import React from 'react';

const PlusIcon = ( { Uniquestyle , className } ) => {
    return (
      <svg className={`react_frameitSVG plusIcon ${ className } `} style={ Uniquestyle } viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none"> </circle>
        <line x1="32.5" y1="50" x2="67.5" y2="50"> </line>
        <line x1="50" y1="32.5" x2="50" y2="67.5"> </line>
      </svg>
    )
}

const MinusIcon = ( { Uniquestyle , className } ) => {
    return (
      <svg className={`react_frameitSVG minusIcon ${ className } `} style={ Uniquestyle } viewBox="0 0 100 100">
          <line x1="32.5" y1="50" x2="67.5" y2="50"> </line>
      </svg>
    )
}

export {
  PlusIcon , MinusIcon
}
