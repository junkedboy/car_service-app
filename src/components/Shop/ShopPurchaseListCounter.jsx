import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increaseItemCounter, decreaseItemCounter } from '../../store/cart'
import cn from './ShopPurchaseListCounter.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { shopGoodsDB } from '../../components/shopGoodsDB' // TEMPORARY FAKE DB !!!

const ShopPurchaseListCounter = ({ id }) => {
    const dispatch = useDispatch()

    const cartArray = useSelector(store => store.cart.cart)
    const count = cartArray.filter(item => item.id === id)
                                 .map(item => item.count)


    const cart = shopGoodsDB.filter(item => item.id === id)[0]
    const maxCount = cart.availability
    function decrease () {
        dispatch(decreaseItemCounter(id))
    }

    function increase () {
        dispatch(increaseItemCounter({id: id, maxCount: maxCount}))
    }
    
    return (
        <div className={cn.main}>
            <button
                className={[cn.button, count < 2 && cn.button_inactive].join(' ')}
                onClick={decrease}
            >
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={cn.count}>
                {count}
            </div>
            <button 
                className={[cn.button, count >= maxCount && cn.button_inactive].join(' ')}
                onClick={increase}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default ShopPurchaseListCounter;
