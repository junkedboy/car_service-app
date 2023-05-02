import React from 'react'
import { motion } from 'framer-motion'

const AnimationFadeOut = ({children, customClass, customDuration}) => {
    return (
        <motion.div
            className={customClass}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{duration: customDuration ? customDuration : .5}}
        >
            {children}
        </motion.div>
    );
}

export default AnimationFadeOut;
