import { motion } from 'framer-motion';
import React from 'react';

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
       staggerChildren: 1
      }
    }
}
  
const item = {
      hidden: { opacity: 0 , y: -80 } , 
      show:   { opacity: 1 , y: 0 }
}


function MotionAnimatedList ({ items , containerClass }) {

    return ( 
        <motion.div className={ `reactFrameit_motion__animatedList ${containerClass}` } variants={ container } initial='hidden' animate={'show'}>
            { items.map( ( element , index ) => 
                <motion.div variants={ item } key={ index } className={ 'reactFrameit_m_aL__eachchild' }>
                   { element.element }
                </motion.div>
            )}
        </motion.div>   
    );
}

export default MotionAnimatedList;