import React, { Fragment , useState , useEffect , useRef } from 'react';

const ReactMovement = ( { children , elClass , distance  , tag } ) => {

    if ( !distance ) distance = 3;
    const Tag = tag || 'div';

    var oldx = 0,
        oldy = 0,
        coordinates = [ ];

    const setBack = ( e ) => {
        e.currentTarget.style.transform = "none";
    }

    const translateImage = ( e ) => {

       e.pageX < oldx ? coordinates[0] = distance : coordinates[0] = -distance;
       e.pageY < oldy ? coordinates[1] = distance : coordinates[1] = -distance;

       oldx = e.pageX;
       oldy = e.pageY;

       const xTranslate = coordinates[0] + 'px';
       const yTranslate = coordinates[1] + 'px';
       e.currentTarget.style.transform = "translate(" + xTranslate + "," + yTranslate + ")";
    }

    return (
       <Tag className={ elClass } onMouseMove={ e => translateImage( e )} onMouseLeave={ e => setBack( e ) }>
          { children }
       </Tag>
    )
}

export default ReactMovement;
