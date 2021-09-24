import React from 'react';
import { motion } from 'framer-motion';

const animateDown = {
    hidden: { opacity: 0 , y: -80 } , 
    show:   { opacity: 1 , y: 0 }
}

const animateUp = {
    hidden: { opacity: 0 , y: 80 } , 
    show:   { opacity: 1 , y: 0 }
}

function MotionSlideFade ({ delay = 2 , children , flow = 'up' , containerClass = '' } ) {
    return (  
        <motion.div className={ `reactFrameit_motion__slidefade ${containerClass}` }
          variants={ flow == 'up' ? animateUp : animateDown } 
           initial='hidden' animate='show'
        transition={{ delay: delay }}>

                { children }

                { flow }
                
        </motion.div>
    );
}

export default MotionSlideFade;