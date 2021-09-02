import React from 'react';
import './style.scss';

const Theme = ( { themeMode , children } ) => {
        return (
            <div className={`reactFrameit_color reactFrameit_color-${ themeMode }`}>
                    { children }  
            </div>
        )
}

export default Theme;