import React, { useState } from 'react';

import { AnimateSharedLayout, motion } from 'framer-motion';

import IconBurger from '../../../icons/burgerMenu/app/index';
import './style.scss';


const HeaderBar = ({ state } ) => {

        const headingAnimation = {
                full:   { width: '100px' },
                closed: { width: '0px'  }
        }

        const titleAnimation = {
                full:   { opacity: '1' }, 
                closed: { opacity: '0' }
        }

        return (
                <motion.header className="rF_h_p_2_heading" variants={ headingAnimation } animate={ !state ? 'full' : 'closed' } 
                              transition={{ duration: 1.02 }} 
                >
                    <motion.h1 variants={ titleAnimation } animate={ !state ? 'full' : 'closed' }> 
                        gloss 
                    </motion.h1>
                </motion.header>
        )       
}


const NavMenu = ( ) => {

        const item = {
                hidden: { opacity: 0 , x: 10, y: 10 },
                show: { opacity: 1,    x: 0, y: 0  }
        }

        const items = [
                { itemName: 'home'     },
                { itemName: 'about us' },
                { itemName: 'services' },
                { itemName: 'our work' }
        ]

        return (
                <motion.div className={`rF_h_p_2_nO__menu`} >
                        <motion.ul initial='hidden' animate={'show'} transition={{ delay: 2, staggerChildren: 0.2 }}>
                                { items.map(( navItem ) =>
                                   <motion.li variants={ item }> { navItem.itemName } </motion.li>
                                )}
                        </motion.ul> 
                </motion.div>
        )
}


const NavOverlay = ( { state }) => {
 
        const NavAnimation = {
                full:   { width: '100%', float: 'none'  },
                closed: { width: '0%'  , float: 'right'  }
        }

        return (
                <AnimateSharedLayout>
                        <motion.div className={"rF_h_p_2_navOverlay"} 
                        variants={ NavAnimation } animate={ state ? 'full' : 'closed' } 
                        transition={{ duration: 1.02 }}
                        >
                                { state && <NavMenu /> }
                        </motion.div> 
                </AnimateSharedLayout>
        )
}


const HeadingP2 = ( { children } ) => {

    const [ state , setNav ] = useState( false );

    const handleClick = ( state ) => {
            setNav( state );
    }

    return (

                <motion.div className="reactFrameit_heading__p_2">                    
                        <div className="rF_h_p_2__navContainer">
                                <HeaderBar state={ state } />
                                <div className="rF_h_p_2_nav">
                                        <IconBurger themeMode={ 'light' } isClicked={ handleClick } />
                                </div>
                                
                        </div>
                        <div className="rF_h_P_2__main">
                                <NavOverlay state={ state } />
                                { children }
                        </div>
                </motion.div> 
                
    )
}

export default HeadingP2;