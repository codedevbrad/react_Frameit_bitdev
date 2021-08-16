import React from 'react';

import './class_style.scss';

const AnimatedElement = ( { start , children , animated , wrapper , speed } ) => {
     return (
         <div className={ `animated_element animated-${ start ? animated : 'disabled' } ${ wrapper ? wrapper : ''}`}>

                { children }

        </div>
     )
}

export default AnimatedElement;
