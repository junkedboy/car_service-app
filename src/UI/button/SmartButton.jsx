import React from 'react';
import cn from './SmartButton.module.sass'
import { Link, } from 'react-router-dom'

const SmartButton = ({ children, customClass, btnBehavior, value, path }) => {
    return (
        <Link   className={customClass ? customClass : cn.button} 
                // className={[cn.button, customClass && customClass].join(' ')} 
                to={path}
                onClick={()=> {
                    if(btnBehavior && value) {
                        return btnBehavior(value)
                    }
                }}
        >
            {children}
        </Link>
    );
}

export default SmartButton;

