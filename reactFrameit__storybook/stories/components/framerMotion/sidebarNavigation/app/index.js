import React , { useRef , useEffect } from "react";
import { motion, useCycle } from "framer-motion";

import MenuToggle       from "./partial/menuToggle/index";
import MotionNavigation from "./partial/navigation/index";

import './style.scss';

const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);
  
    return dimensions.current;
};

const sidebar = {
    open: (height = 1000 ) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
        }
    }),
    closed: ( height ) => ({
        clipPath: `circle(30px at 40px 40px)`,
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40
        }
    })
};


const MotionSidebar = ({ side = 'left' }) => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
  
    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={ height } ref={containerRef} className={`reactFrameit__sidebar_nav rF_s_n_side__${ side }`}>
              <motion.div className={`rF_sn__background rF_sn__background__${ side }`} variants={sidebar}> 
                  <MotionNavigation />
              </motion.div>
              <MenuToggle toggle={() => toggleOpen()} side={ side } />
        </motion.nav>
    )
  }

  export default MotionSidebar;