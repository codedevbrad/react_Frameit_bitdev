import react , { useState , useEffect, useRef } from 'react';
import './style.scss';

const morphs = [
    {
         d: "M40,-29C55.3,-12.8,73.5,4.1,69.6,13.9C65.8,23.7,40,26.6,18.5,36.1C-3.1,45.6,-20.3,61.8,-34.2,59.5C-48.1,57.2,-58.6,36.5,-61.5,16.2C-64.4,-4.1,-59.7,-24,-48.2,-39.4C-36.7,-54.7,-18.4,-65.5,-3,-63.2C12.4,-60.8,24.8,-45.2,40,-29Z" ,
         transform: "translate(100 100)" 
    } , 
    {
        d: "M35.8,-32.2C51.3,-20.3,72.1,-10.2,73.6,1.5C75.2,13.2,57.5,26.5,42,38C26.5,49.6,13.2,59.4,-0.3,59.8C-13.9,60.1,-27.8,50.9,-36.1,39.3C-44.5,27.8,-47.3,13.9,-45.6,1.7C-43.9,-10.5,-37.7,-21,-29.3,-32.8C-21,-44.7,-10.5,-57.9,-0.2,-57.8C10.2,-57.6,20.3,-44,35.8,-32.2Z" , 
        transform: "translate(100 100)"
    }
];


const SvgMorpth = ( { color , positions = false , type = 0 } ) => {

    const morphRef = useRef( null );

    const [ size , setsize ] = useState( [ 0 , 0 ] );

    useEffect( ( ) => {
        if ( !positions ) {
            let { height } = morphRef.current.getBoundingClientRect();
            setsize( [ `-${ height / 2.5 }px` , `-30px` ] );

            console.log( height / 2.5 );
        }
    } , [ ] );

    return (
        <div className='rF_morph_svgmorph' ref={ morphRef } style={ 
            { top: size[ 0 ] , left: size[ 1 ] }
        }>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                 <path d={ morphs[ type ].d } transform={ morphs[ type ].transform } />
            </svg>
        </div>
    )
}

const MorphedContainer = ( { children , ...props } ) => {
    return (
        <div className={ 'reactFrameit_morphcontainer' }>
                <SvgMorpth { ...props } />
                <div className="rF_m_child">
                    { children }
                </div>
        </div>
    )
}

export default MorphedContainer;