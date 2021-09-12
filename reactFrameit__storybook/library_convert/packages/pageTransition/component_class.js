import React , { Fragment , useEffect , useState , useRef } from 'react';
import { delay } from '../../_helper_global/helper.delay';

import './component_style.css';

const TransitionBetween = ( { children , intiial } ) => {
    var slider = useRef( null );

    useEffect( async ( ) => {
        if ( inital ) {
          await delay(200);
          slider.current.classList.add('slide__in');
          await delay(1000);
          slider.current.classList = 'transitionBetween__color slide__out';
        } else {
          await delay(300);
          slider.current.classList = 'transitionBetween__color slide__out';
        }
    } , [] );

    return (
        <div>
            <div className={`transitionBetween__color ${ intiial ? 'slide__in' : '' }`} ref={ slider }> </div>
            { children }
        </div>
    )
}

export default TransitionBetween;
