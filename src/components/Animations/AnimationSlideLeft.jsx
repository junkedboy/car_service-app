import React from 'react'
import { motion } from 'framer-motion'

const AnimationSlideLeft = ({children}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100}}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100}}
            transition={{duration: .5}}
        >
            {children}
        </motion.div>
    );
}

export default AnimationSlideLeft;
