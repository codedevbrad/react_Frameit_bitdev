import React from 'react';
import './style.scss';

const ElementAnimatedWidth = ( { open , customWidth = false , children , flow = 'left' } ) => {
        return (
            <div className={`reactFrameit_animatedWidth reactFrameit_flow-${ flow }`} style={ { width: open ? `${ customWidth ? `${customWidth}px` : '100%'}` : '0px' } }>
                    { children }  
            </div>
        )
}

export default ElementAnimatedWidth;