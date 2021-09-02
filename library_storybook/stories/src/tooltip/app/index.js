import React, {  useState , useEffect , useRef , Fragment } from 'react';

import './tooltip_class.css';

const Tooltip = ( { Tag = 'div' , className , children , tip ,  position } ) => {

    const [ height , setHeight ] = useState(0);

    const toolTipRef = useRef( 0 );

    useEffect( ( ) => {
        let { height } = toolTipRef.current.getBoundingClientRect();
        if ( position === 'left' || position === 'right' ) {
            console.log(  height )
            setHeight( `-${ height }px` );
        } 
    }, [ position ] );

    return (
      <Tag className={`reactFramit_tooltip ${ className }`} ref={ toolTipRef }>
          { children }
          <span className={ `tooltiptext tooltiptext-${ position ? position : 'bottom' } `}  style={
            position === 'left' || position === 'right' ? { bottom: height } : { }
          }>
              <p> { tip } </p>
          </span>
      </Tag>
    )
}

export default Tooltip;
