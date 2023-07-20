import React from 'react';
import { useDispatch } from 'react-redux'
import cn from './ShopTwoChairs.module.sass'
import twoChairs from '../../assets/img/shop/twoChairs.jpg'
import { Link } from 'react-router-dom'
import { setModalTitle, toggleVisibility } from '../../store/modal'

const ShopTwoChairs = () => {
    const dispatch = useDispatch()
    function closeModal() {
        dispatch(setModalTitle(''))
        dispatch(toggleVisibility(false))
    }
    
    return (
        <div className={cn.main}>
            <img height="300px" src={twoChairs} alt="" />
            <div className={cn.buttonBox}>
                <Link className={cn.button} onClick={closeModal}>
                    Продовжити покупки
                </Link>
                <span className={cn.buttonBox__separator}></span>
                <Link className={cn.button} to="/cart" onClick={closeModal}>
                    Оформити замовлення
                </Link>
            </div>
        </div>
    );
}

export default ShopTwoChairs;
