import React, { useState } from 'react';

import { motion } from 'framer-motion';

import MotionMenuItems from '../../../framerMotion/menuItems/app/index';

import IconBurger from '../../../icons/burgerMenu/app/index';
import './style.scss';


const HeaderBar = ( { state, animateSteps, animationEnd } ) => {

        const headingAnimation = {
                full:   { width: '100px' },
                closed: { width: '0px'  }
        }

        const titleAnimation = {
                full:   { opacity: 1 }, 
                closed: { opacity: 0 }
        }

        return (
                <motion.header className="rF_h_p_2_heading" variants={ headingAnimation } animate={ !state && animateSteps == 0 ? 'full' : 'closed' } 
                              transition={{ duration: 0.61, ease: 'easeInOut' }} onAnimationComplete={definition => {
                                      if ( definition == 'closed' ) {
                                         animationEnd();
                                      }
                               }}
                >
                    <motion.h1 variants={ titleAnimation } animate={ !state ? 'full' : 'closed' }> 
                        gloss 
                    </motion.h1>
                </motion.header>
        )       
}

const useTimeout = (callback, delay) => {
        const savedCallback = React.useRef();
      
        React.useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        React.useEffect(() => {
          const tick = () => {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
          }
        }, [delay]);
};


const NavMenu = ( ) => {

        const [ allowed, setAllowed ] = useState(false);

        useTimeout( () => {
                setAllowed( true );
        },  1200 );

        const items = [
                { itemName: 'home'     },
                { itemName: 'about us' },
                { itemName: 'services' },
                { itemName: 'our work' }
        ]

        return ( 
                <>
                        { allowed && 
                                <motion.div className={`rF_h_p_2_nO__menu`} transition={{ staggerChildren: 0.2 }}>
                                       <MotionMenuItems state={ allowed } />
                                </motion.div>
                        }
                </>
        )
}


const NavOverlay = ( { state, animateSteps, animationEnd }) => {
 
        const NavAnimation = {
                full:   { width: '100%', float: 'none'  },
                closed: { width: '0%'  , float: 'right' }
        }

        return (
                <motion.div className={"rF_h_p_2_navOverlay"} 
                variants={ NavAnimation } animate={ state && animateSteps == 1 ? 'full' : 'closed' } 
                transition={{ duration: 0.78, ease: 'easeInOut' }} onAnimationComplete={ definition => {
                        if ( definition == 'closed' ) {
                           animationEnd();
                        }
                 }}
                >
                        { state && animateSteps == 1 && <NavMenu /> }
                </motion.div> 
        )
}


// 0 header bar > 1 nav open > 2 items show.

const HeadingP2 = ( { children, side = 'left' } ) => {

    const [ animateSteps, setAnimate ] = useState(0);

    const [ state , setNav ] = useState( false );

    const handleClick = ( state ) => {
        setNav( state );
    }

    const endHeaderAnimation = ( ) => setAnimate( 1 );
    const endNavOverlayAnimation = ( ) => setAnimate( 0 );

    return (
        <motion.div className={`reactFrameit_heading__p_2 reactFrameit_heading_p_2__${ side }`}>           
                <div className="rF_h_p_2__navContainer">
                        <HeaderBar state={ state } animateSteps={ animateSteps } animationEnd={ endHeaderAnimation } />
                        <div className="rF_h_p_2_nav">
                                <IconBurger themeMode={ 'light' } isClicked={ handleClick } />
                        </div>
                        
                </div>
                <div className="rF_h_P_2__main">
                        <NavOverlay state={ state } animateSteps={ animateSteps } animationEnd={ endNavOverlayAnimation } />
                        { children }
                </div>
        </motion.div>     
    )
}

export default HeadingP2;