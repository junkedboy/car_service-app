import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'      
import { deleteFromCart } from '../../store/cart'
import cn from './ShopPurchaseList.module.sass'
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { shopGoodsDB } from '../../components/shopGoodsDB' // TEMPORARY FAKE DB !!!
import ShopPurchaseListCounter from './ShopPurchaseListCounter';


const ShopPurchaseList = ({  }) => {
    const cartArray = useSelector(store => store.cart.cart)
    const cartIdArray = cartArray.map(item => item.id)
    const cart = shopGoodsDB.filter(item => cartIdArray.includes(item.id))

    const dispatch = useDispatch()
    function deleteFromCartHandler(id) {
        dispatch(deleteFromCart(id))
    }

    function calculatePrice (item) {
        const cartCount = cartArray.filter(cartItem => cartItem.id === item.id)[0]
        const total = item.price * cartCount.count
        return total
    }

    function focusHandler(value) {
        dispatch(setFocus(value))
    }

    return (
        <AnimationFadeOut>
            <div className={[cn.main, 'material'].join(' ')}>
                {cart.length > 0 
                ? cart.map(item => (
                    <div className={cn.main__item} key={item.id}> 
                        <div className={cn.main__column}>
                            <div className={cn.image}>
                                <img src={item.img} alt="Delete" />
                            </div>
                            <Link 
                                to="/shop/item" 
                                className={cn.title}
                                onClick={() => focusHandler([product.id, product.title])}
                            >
                                {item.title}
                            </Link>
                        </div>
                        <div className={[cn.main__column, cn.serviceTray].join(' ')}>
                            <div className={cn.count}>
                                <ShopPurchaseListCounter id={item.id}/>
                            </div>
                            <div className={cn.price}>
                                {calculatePrice(item)}
                                <span> грн</span>
                            </div>
                            <FontAwesomeIcon 
                                className={cn.delete} 
                                icon={faTrash} 
                                onClick={() => deleteFromCartHandler(item.id)}
                            />
                        </div>
                    </div>
                ))
                : <p className={cn.cartIsEmpty}>Кошик порожній, купіть щось.</p>
                }
            </div>
        </AnimationFadeOut>
            
    );
}

export default ShopPurchaseList;
