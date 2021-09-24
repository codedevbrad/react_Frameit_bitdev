import React from 'react';
import './style.scss';


const AnimatedElement = ( { start = true , children , animated = 'fade' , classNames = false } ) => {
     return (
         <div className={ `reactFrameit_animated rF_a_animated-${ start ? animated : 'disabled' } ${ classNames ? classNames : ''}`}>

                { children }

        </div>
     )
}

export default AnimatedElement;
