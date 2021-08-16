import React from 'react';
import './style.css';

const Grid = ( { children , classname , ...props } ) => {

    return (
        <div className={`row ${ classname }`} { ...props }> 
            { children }
        </div>
    )
}

export default Grid;