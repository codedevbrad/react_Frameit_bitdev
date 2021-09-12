import React, { Fragment , useState , useRef , useEffect , useLayoutEffect } from 'react';

import './style.scss';

const browserSpecificAnimation = ( curr , animation ) => {
    curr.style.transform = animation;
    curr.style.webkitTransform = animation;
    curr.style.msTransform = animation;
}

const transition = ( { curr , toMove , directionNext } , { totalSets , currentPostition , updatePosition } ) => {

    if ( !directionNext && currentPostition == 1 || directionNext && currentPostition === ( totalSets ) ) {
      return;
    } 
    else {
      let direction  = directionNext ? '-' : '';
      // current translate property value.
      let translateX =
          curr.style.transform.replace(/[^\d.]/g, '') ||
          curr.style.webkitTransform.replace(/[^\d.]/g, '') ||
          curr.style.msTransform.replace(/[^\d.]/g, '');

      if (translateX == '' || translateX == undefined) translateX = 0;

      let translateXNum = parseFloat( translateX );
      let amount = directionNext ? toMove +translateXNum : -translateXNum + toMove;

      // do not move if left if 0 position or right if at end.
      let animation = "translateX(" + direction + amount + "px)";
      browserSpecificAnimation( curr , animation );
      updatePosition( directionNext ? currentPostition + 1 : currentPostition - 1 );
    }
}

const Carousel = ( { className , debug , children , l , m , s } ) => {

    const [ state , setState ] = useState( 're renders component');

    const [ currentPostition , updatePosition ] = useState( 1 );
    const [ boxWidth , setBoxWidth ] = useState( 0 );
    const [ carouselWidth , setCarouselWidth ] = useState( 0 );

    const [ carouselLength , setCarouselLength ] = useState( children.length );
    const carousel_move  = useRef( null );
    const carousel_child = useRef( null );

    const getCurrScreen = ( ) => {
        var found;
        [ l , m , s ].forEach( ( each ) => {
              if ( each !== undefined ) {
                  let [ pixel_control , boxes_control ] = each;
                  var sizeMax = window.matchMedia(`(max-width: ${ pixel_control.max })`).matches;
                  var sizeMin = window.matchMedia(`(min-width: ${ pixel_control.min })`).matches;

                  if ( sizeMax && sizeMin ) found = boxes_control;
            }
        });
        return found;
    }

    const [ toShow    , setToShow ] = useState( 4 );
    const [ totalSets , setTotalSets ] = useState( 0 );

    const setSizeOfBoxes = ( toShow ) => {
        let boxWidth = carousel_move.current.offsetWidth / toShow;
        setBoxWidth( boxWidth );
        const boxes = [...carousel_child.current.querySelectorAll('.box')];
        boxes.forEach( ( item , i ) => item.style.width = boxWidth + 'px' );
        setCarouselWidth( boxWidth * carouselLength );
        setTotalSets( Math.ceil( ( children.length + 1 ) - toShow ) );
    }
    let doit;
    window.onresize = ( ) => {
          clearTimeout(doit);
          doit = setTimeout( () => {
               setState( Math.random() );
          } , 500 );
    }

    useEffect( ( ) => {
        let animationStart = "translateX(0px)";
        browserSpecificAnimation( carousel_child.current , animationStart );
        updatePosition( 1 );
        let boxesToRender = getCurrScreen();
        setToShow( boxesToRender );
        setSizeOfBoxes( boxesToRender );
        // eslint-disable-next-line
    } , [  state ]);

    return (
      <div className={`reactFrameit_carousel ${ className }`} >
            { debug &&
              <div>
                  <h1> width: { boxWidth } </h1>
                  <h1> carouselwidth : { carouselWidth } </h1>
                  <h1> boxes to show : { toShow } </h1>
              </div>
            }

            <div className="carousel_move" ref={ carousel_move }>
                <div className="carousel_content" ref={ carousel_child } style={ { width: `${carouselWidth}px` }}>
                    { children }
                </div>
            </div>
            <ul className="slide_buttons">
                <section>
                    <li onClick={ e => transition(
                          { curr : carousel_child.current, toMove: boxWidth , directionNext : false } ,
                          { totalSets , currentPostition , updatePosition }
                    ) }> prev </li>
                    <li onClick={ e => transition(
                          { curr : carousel_child.current, toMove: boxWidth , directionNext : true  } ,
                          { totalSets , currentPostition , updatePosition }
                    ) }> next </li>

                    { currentPostition } / { totalSets }
                </section>
            </ul>
      </div>
    );
}

export default Carousel;
