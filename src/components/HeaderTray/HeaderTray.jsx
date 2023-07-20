import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import LocationDaemon from '../LocationDaemon'
import cn from './HeaderTray.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faHouseUser, faArrowLeft, faArrowRightToBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal/Modal'
import Authorization from '../Authorization/Authorization'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginVisibility } from '../../store/modal'
import { logOut } from '../../store/loginSession'


const HeaderTray = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })
    const location = useLocation()
    const navigate = useNavigate()

    const authorization = useSelector(state => state.loginSession)
    const loginVisibility = useSelector(state => state.modal.loginVisibility)
    // стейт для кошика (кількість товарів)
    const cartCounter = useSelector(state => state.cart.count)
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
                            <Link to="/cart" className={cn.trayCart}>
                                <FontAwesomeIcon className={[cn.trayCart__icon, cn.trayCart__icon_white].join(' ')} icon={faShoppingCart} />
                                {cartCounter > 0 && 
                                    <div className={[cn.trayCart__counter, cn.trayCart__counter_white].join(' ')}>{cartCounter}</div>}
                            </Link>
                            <Link to="/user" className={cn.trayDemo__button}>
                                <FontAwesomeIcon icon={faHouseUser} />
                                {authorization.name}
                            </Link>
                            <button className={cn.trayDemo__button}>
                                <FontAwesomeIcon 
                                    icon={faArrowRightFromBracket}
                                    onClick={() => dispatch(logOut())}
                                />
                            </button>
                        </div>
                    :   <div className={cn.trayDemo}>
                            <Link to="/cart" className={cn.trayCart}>
                                <FontAwesomeIcon className={[cn.trayCart__icon, cn.trayCart__icon_white].join(' ')} icon={faShoppingCart} />
                                {cartCounter > 0 && 
                                    <div className={[cn.trayCart__counter, cn.trayCart__counter_white].join(' ')}>{cartCounter}</div>}
                            </Link>
                            <button 
                                className={cn.trayDemo__button}
                                onClick={() => setModal(true)}
                            >
                                вхід
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </button>
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
                                <button
                                    className='trayButton'
                                    onClick={() => navigate(-1)}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} /> 
                                    <span>Назад</span>
                                </button>
                            }
                            
                        </div>
                        <div className={cn.tray__location}>
                            <span><LocationDaemon/></span>
                        </div>
                        <div className={cn.tray__leftBox}>
                            <Link to="/cart" className={cn.trayCart}>
                                <FontAwesomeIcon className={cn.trayCart__icon} icon={faShoppingCart} />
                                {cartCounter > 0 && 
                                    <div className={cn.trayCart__counter}>{cartCounter}</div>}
                            </Link>
                            {authorization.loginStatus
                            ?   <div className={cn.tray__auth}>
                                    <Link to="/user" className='trayButton'>
                                            <FontAwesomeIcon icon={faHouseUser} />
                                            {authorization.name}
                                    </Link>
                                    <button className='trayButton'>
                                        <FontAwesomeIcon 
                                            icon={faArrowRightFromBracket}
                                            onClick={() => dispatch(logOut())}
                                        />
                                    </button>
                                </div>
                            :   <div className={cn.tray__auth}>
                                    <button
                                        className="trayButton"
                                        onClick={() => setModal(true)}
                                    >
                                        вхід
                                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default HeaderTray;
