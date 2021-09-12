import React from 'react';
import './style.css';

const FlexBoxes = ( { children , layout , stretch } ) => {

    return (
        <div className={ `flexboxes flex-${ layout } ${ stretch ? 'flex-grow' : '' }`} > 
                { children }
        </div>
    )
}

export default FlexBoxes;