import React, {  useState , useEffect , useRef , Fragment } from 'react';

import './tooltip_class.css';

const Tooltip = ( { tagName , className , children , tip ,  position } ) => {

    const Tag = tagName || 'div';

    const [ height , setHeight ] = useState(0);

    const toolTipRef = useRef( 0 );

    useEffect( ( ) => {
      let { width , height , top , left } = toolTipRef.current.getBoundingClientRect();
      setHeight( height );
    }, []);

    return (
      <Tag className={`reactFramit_tooltip ${ className }`} ref={ toolTipRef }>
          { children }
          <span className={ ` tooltiptext tooltiptext-${ position ? position : 'bottom' } `}>
              <p> { tip } </p>
          </span>
      </Tag>
    )
}

export default Tooltip;
