import React, { useEffect, useState } from 'react';
import './style.scss';

const delay = ( ms ) => new Promise( resolve => setTimeout( resolve , ms ) );

const AnimatedImage = ( { src } ) => {

    const [ animateWidth, setWidth ] = useState( [ '0%' , 'right' , 'hidden' ]); 

    useEffect(( ) => {
        ( async ( ) => {
            setWidth([ '100%' , 'right' , 'hidden' ]);
            await delay( 760 );
            setWidth([ '0%' , 'left' , 'visible' ]);
        })( );
    } , [ ] );

    return (
        <div className="reactFrameit_animatedImage">
                <div className="rF_aI_imageReveal" style={{ width: animateWidth[0] , float: animateWidth[1] }}> </div>
               
                <div className="rF_aI_image" style={{ visibility: animateWidth[2] }}>
                        <img src={ src } />
                </div>
        </div>
    )
}

export default AnimatedImage;