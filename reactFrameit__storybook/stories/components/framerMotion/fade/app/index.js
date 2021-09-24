import { motion } from 'framer-motion';
import React from 'react';

const variants = {
    hidden:  { opacity: 0 } , 
    visible: { opacity: 1 }
}

const MotionFade = ( { delay = 2 , children , containerClass = '' } ) => {
    return (
        <motion.div className={ `reactFrameit_motion__fade ${containerClass}` } initial="hidden" animate="visible" variants={ variants } transition={{ delay: delay } }>
                { children }
        </motion.div>
    )
}

export default MotionFade;