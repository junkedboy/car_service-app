import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import LocationDaemon from '../LocationDaemon'
import cn from './HeaderTray.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faHouseUser, faArrowLeft, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import SmartButton from '../../UI/button/SmartButton'
import Modal from '../Modal/Modal'
import Authorization from '../Authorization/Authorization'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginVisibility } from '../../store/modal'
import { setLoginSession } from '../../store/loginSession'


const HeaderTray = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })
    const location = useLocation()
    const navigate = useNavigate()

    const authorization = useSelector(state => state.loginSession)
    const loginVisibility = useSelector(state => state.modal.loginVisibility)
    const dispatch = useDispatch()
    function setModal(value) {
        dispatch(toggleLoginVisibility(value))
    }

    return (
        <>
        <Modal
            visible={loginVisibility}
            setVisible={setModal}
        >
            <Authorization/>
        </Modal>
        {(location.pathname === '/' & isDesktop)
        ?   <div>
                <div className="header_container">
                        {authorization.loginStatus
                        ?   <div className={cn.trayDemo}>
                                <SmartButton customClass={cn.trayDemo__button}>
                                    <FontAwesomeIcon icon={faHouseUser} />
                                    {authorization.name}
                                </SmartButton>
                                <SmartButton customClass={cn.trayDemo__button}>
                                    <FontAwesomeIcon 
                                        icon={faArrowRightFromBracket}
                                        onClick={() => dispatch(setLoginSession(false))}
                                    />
                                </SmartButton>
                            </div>
                        :   <div className={cn.trayDemo}>
                                <SmartButton 
                                    customClass={cn.trayDemo__button}
                                    btnBehavior={setModal}
                                    value={true}
                                >
                                    вхід
                                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                                </SmartButton>
                            </div>
                        }
                </div>
                <div style={{padding: "0", border: "none"}} className={cn.tray}></div>
            </div>
        

        :   <div className={cn.tray}>
                <div className="header_container">
                    <div className={cn.tray__inner}>
                        <div className={cn.tray__navigaton}>
                            {location.pathname != "/" &&
                                <SmartButton
                                    btnBehavior={navigate}
                                    value={-1}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} /> 
                                    <span>Назад</span>
                                </SmartButton>
                            }
                            
                        </div>
                        <div className={cn.tray__location}>
                            <span><LocationDaemon/></span>
                        </div>
                        {authorization.loginStatus
                        ?   <div className={cn.tray__auth}>
                                <SmartButton>
                                        <FontAwesomeIcon icon={faHouseUser} />
                                        {authorization.name}
                                </SmartButton>
                                <SmartButton>
                                    <FontAwesomeIcon 
                                        icon={faArrowRightFromBracket}
                                        onClick={() => dispatch(setLoginSession(false))}
                                    />
                                </SmartButton>
                            </div>
                        :   <div className={cn.tray__auth}>
                                <SmartButton
                                    btnBehavior={setModal}
                                    value={true}
                                >
                                    вхід
                                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                                </SmartButton>
                            </div>
                        }
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default HeaderTray;
