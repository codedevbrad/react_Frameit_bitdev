import React from 'react';
import './style.scss';

const Theme = ( { themeMode , br = false , children } ) => {
        return (
            <div className={`rf_color rf_color-${ themeMode } ${ br ? 'rf-border' : '' }`}>
                    { children }  
            </div>
        )
}

export default Theme;