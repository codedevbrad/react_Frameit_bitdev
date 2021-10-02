import { motion } from 'framer-motion';
import React from 'react';

const MotionWidth = ( { children } ) => {

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `square(100px at 0px 40px)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2
            }
        }),
        closed: {
            clipPath: "square(0px at 0px 0px)",
            transition: {
              delay: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 40
            }
        }
    };
    
    return (
        <motion.div className="reactFrameit_motion_width" initial={ closed} >
                { children }
        </motion.div>
    )
}

export default MotionWidth;