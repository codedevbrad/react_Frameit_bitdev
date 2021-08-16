import React, { Component , Fragment , useEffect , useState , useRef } from 'react';
import { ShevronDownIcon } from '../../packages_util/svgIcons/index';

import './module_styling.scss';

const Accordition = ( { tagname , title  , children , containerClass } ) => {

    const Tag = tagname || 'div';

    const elementRef = useRef( null );

    const onToggle = ( ) => {
        let panel = elementRef.current;

        if (panel.style.maxHeight) {
           panel.style.maxHeight = null;
         } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
         }
    }

    return (
        <Tag className={ `reactFrameit_accordion ${ containerClass } ` } onClick={ ( ) => onToggle() }>
              <div className="title">
                  { title }
                  <ShevronDownIcon />
              </div>
              <div ref={ elementRef } className="panel">
                  { children }
              </div>
        </Tag>
    )
}

export default Accordition;
