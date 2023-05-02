import React from 'react'
import { Link } from 'react-router-dom'
import cn from './Intro-page.module.sass'
import { useMediaQuery } from 'react-responsive'
import SmartButton from '../../UI/button/SmartButton';
import { navigation } from '../../components/config' // navigation tempp inport !!!
import Reservation from '../../components/Reservation/Reservation'
import Modal from '../../components/Modal/Modal'
import { toggleVisibility, toggleReservationVisibility } from '../../store/modal'
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut'
import { useSelector, useDispatch } from 'react-redux'

const IntroPage = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })

    const reservationVisibility = useSelector(state => state.modal.visibility)
    const dispatch = useDispatch()
    function setModal(value) {
        dispatch(toggleVisibility(value))
    }

    return (
        <>
        <Modal
            visible={reservationVisibility}
            setVisible={setModal}
        >
            <Reservation/>
        </Modal>
        {isDesktop
        // -------------------------------------------- DESKTOP --------------------------------------------------- //
        ? <AnimationFadeOut customClass={[cn.main, cn.main__desktop].join(' ')} >
            <div className="container">
                <div className={cn.desktop}>
                    <div className={cn.desktop__textBox}>
                        <span>Ремонт автомобілів</span>
                        <h1>СТО</h1>
                        {/* <p>Найкращий сервіс в Україні!</p> */}
                    </div>
                    <SmartButton 
                        customClass={[cn.button, cn.button__desktop].join(' ')}
                        btnBehavior={setModal}
                        value={true}
                    >
                        <span>Консультація та запис на СТО</span>
                    </SmartButton>
                </div>
            </div>
        </AnimationFadeOut>

        // -------------------------------------------- MOBILE ---------------------------------------------------- //
        : <AnimationFadeOut customClass={[cn.main, cn.main__mobile].join(' ')}>
            <div className="container">
                <div className={cn.mobile}>
                    <nav className={cn.mobile__menu}>
                        {navigation.map(item => (
                            <Link 
                                className={[cn.mobile__item, 'material'].join(' ')} 
                                to={item.route} 
                                key={item.id}
                            >
                                <div className={cn.mobile__column}>
                                    <p>{item.description}</p>
                                    <h4>{item.title}</h4>
                                </div>
                                <div className={cn.mobile__column}>
                                    <img src={item.img} alt="" />
                                </div>
                            </Link>
                        ))}
                    </nav>
                    <SmartButton 
                        customClass={[cn.button, cn.button__mobile].join(' ')}
                        btnBehavior={setModal}
                        value={true}
                    >
                        Консультація та запис на СТО
                    </SmartButton>
                </div>
            </div>
        </AnimationFadeOut>
        }</>
    )
}

export default IntroPage;
