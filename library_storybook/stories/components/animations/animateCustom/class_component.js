import React from 'react';

import './class_style.css';

const AnimatedElement = ( { start , children , animated , wrapper } ) => {
     return (
         <div className={ `animated_element animated-${ start ? animated : 'disabled' } ${ wrapper ? wrapper : ''}`}>

                { children }

        </div>
     )
}

export default AnimatedElement;
