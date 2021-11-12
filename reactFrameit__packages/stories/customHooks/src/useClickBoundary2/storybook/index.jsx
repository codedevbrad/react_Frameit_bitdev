import React, { useState , useRef } from 'react';

import useClickOutside from '../hook/index';

const ClickBox = ({ onClickOutside }) => {
    const clickRef = useRef();
    useClickOutside(clickRef, onClickOutside);
    return (
      <div
        className="click-box"
        ref={clickRef}
        style={{
          border: '2px dashed orangered',
          height: 200,
          width: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>Click out of this element</p>
      </div>
    );
};

export default ClickBox;