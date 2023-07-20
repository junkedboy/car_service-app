import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import cn from './Modal.module.sass'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'     
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setModalTitle, toggleVisibility } from '../../store/modal'

const Modal = ({children, title, visible, setVisible}) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const titleState = useSelector(state => state.modal.title)
    const titleMixer = title ? title : titleState

    // close
    function closeModal() {
        setVisible ? setVisible(false) : dispatch(toggleVisibility(false))
        dispatch(setModalTitle(''))
    }
    // ESC to close
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                closeModal()
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
                                {titleMixer}
                            </p>
                            <FontAwesomeIcon 
                                icon={faWindowClose} 
                                className={cn.closeButton}
                                onClick={closeModal}
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
