import React from 'react';
import './style.css';

const GridItem = ( { size , children , classname = '' , ...props } ) => {
        return (
            <div className={ `gridItem col-${ size } ${classname }` } { ...props }>   
                   { children }
            </div>
        )
}

export default GridItem;