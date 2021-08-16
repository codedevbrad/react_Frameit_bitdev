import React from 'react';
import './style.css';

const FlexItem = ( { size , children , classname = ''} ) => {
        return (
            <div className={ `flexitem ${classname }`} style={ { flex: `${ size}%` }} > 
                   { children }
            </div>
        )
}

export default FlexItem;