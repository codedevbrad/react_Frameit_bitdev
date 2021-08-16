import React from 'react';
import './load.css';

const Loader = ( { customLoadingClass = '' }) => {
    return (
        <div className={ `loading ${ customLoadingClass }` }> 
            <div className="loader"> </div>
        </div> 
    )
}

export default Loader;