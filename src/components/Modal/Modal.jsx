import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import cn from './Modal.module.sass'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'     
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setModalTitle } from '../../store/modal'

const Modal = ({children, visible, setVisible}) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const title = useSelector(state => state.modal.title)

    function buttonHandler() {
        dispatch(setModalTitle(''))
        setVisible(false)
    }

    // ESC to close
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                setVisible(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    className={[cn.modal, location.pathname==='/' && cn.right ].join(' ')}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                >
                    <motion.div
                        className={[cn.content, 'material'].join(' ')}
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={cn.content__tray}>
                            <p className={cn.title}>
                                {title}
                            </p>
                            <FontAwesomeIcon 
                                icon={faWindowClose} 
                                className={cn.closeButton}
                                onClick={buttonHandler}
                            />
                        </div>
                        <div className={cn.content__box}>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
