import React, { useState } from 'react'
import cn from './Services-modal.module.sass'
import { service } from '../../components/config' // TEMPORARY FAKE DB !!!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'     
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import Reservation from '../../components/Reservation/Reservation'
import { useDispatch } from 'react-redux'
import { setModalTitle } from '../../store/modal'

const ServicesModal = (id) => {
    const item = service.filter(item => item.id === id.id)
    const [ reservation, setReservation ] = useState(false)
    const dispatch = useDispatch()
    
    function reservationHandler() {
        dispatch(setModalTitle(''))
        setReservation(true)
    }

    return (
    <>
    {reservation
    ? <Reservation 
        setCategoryId={item[0].category}
        text={item[0].title}
    />

    : <div className={cn.main}>
        <div className={cn.description}>
            {item[0].description}
        </div>
        <div className={cn.properties}>
            <div className={cn.properties__item}>
                <FontAwesomeIcon 
                    icon={faDollar} 
                />
                <span>{item[0].price} грн</span>
            </div>
            <div className={[cn.properties__item, cn.properties__item_right].join(' ')}>
                <FontAwesomeIcon 
                    icon={faClock} 
                />
                <span>{item[0].time}</span>
            </div>
        </div>
        <div className={cn.buttonBox}>
            <button 
                className='buttonModal'
                onClick={reservationHandler}
            >
                Замовити послугу або отримати консультацію
            </button>
        </div>
    </div>
    }
    </>
    );
}

export default ServicesModal;
