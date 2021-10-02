import React , { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MotionNavigation from "./navigation/index";

import './style.scss';


const MotionMenuItems = ({ state }) => {

    const [isOpen, toggleOpen] = useState( false );
   
    useEffect(( ) => {
        toggleOpen( state );
    } , [ state] );
  
    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className={`reactFrameit__menu`}>
             <MotionNavigation />
        </motion.nav>
    )
  }

  export default MotionMenuItems;