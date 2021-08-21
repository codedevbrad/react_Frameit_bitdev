import React , { useEffect , useRef , useState } from 'react';
import './animate.min.css';

function AnimateCSS_helper ( ) {
    const [ state , changeState ] = useState( false );

    this.state = state;
    this.startAnimation = ( ) => {
        changeState( true );
    }
}

function AnimateCSS_chainHelper ( ) {
    this.startAnimations = ( states ) => {
        states.forEach( ( state , i ) => {
            state.startAnimation();
        });
    }
}

const AnimateCSS = ( { className , TagName , type , speed , delay , children , onFinish } ) => {

    const start = true;
    const animateRef = useRef( null );
    const Tag = TagName || 'div';

    useEffect( ( ) => {
          animateRef.current.addEventListener('animationend', () => {
              onFinish ? onFinish() : console.log('animation ended');
          });
    } , [ ] );

    return (
        <Tag className={` ${ className } animate__animated animate__${ start ? type : 'not_started' }  animate__delay-${ delay } animate__speed-${ speed }`} ref={ animateRef }>
              { children }
        </Tag>
    )
}

export default AnimateCSS;
