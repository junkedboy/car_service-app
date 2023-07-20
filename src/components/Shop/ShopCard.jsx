import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFocus } from '../../store/focus'
import { setCart } from '../../store/cart'
import cn from './ShopCard.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { toggleVisibility, setModalTitle } from '../../store/modal'

const ShopCard = ({ product }) => {
    // now we expect product.img, product.title, product.price, product.availability
    // in future need to do a GET request to productDB on server with product id# that we got from prop's to get a product object

    // заборона Link перехода при натискані на кнопку "купити"
    const cart = useSelector(store => store.cart.cart)
    const cartIdArray = cart.map(item => item.id)
    const purchase = (event) => {
        event.preventDefault();
        if (cartIdArray.includes(product.id)) {
            alert('Товар вже у кошику')
        } else {
            dispatch(setCart({id: product.id, count: 1}))
            // modal
            dispatch(toggleVisibility(true))
            dispatch(setModalTitle('Оберіть один з варіантів...'))
        }
    };
    
    const dispatch = useDispatch()
    function focusHandler(value) {
        dispatch(setFocus(value))
    }

    return (
        <Link 
            className={[cn.main, 'material'].join(' ')} 
            to="/shop/item"
            onClick={() => focusHandler([product.id, product.title])}
        >
            <img className={cn.image} src={product.img} alt="" />
            <div className={cn.textBox}>
                <h4 className={cn.title}>{product.title}</h4>
                <div className={cn.purchase}>
                    <div className={cn.purchase__column}>
                        <div className={cn.purchase__price}>{product.price} <span>₴</span></div>
                        <p className={[cn.availability, product.availability ? cn.availability_true : cn.availability_false].join(' ')}>
                            {product.availability
                            ?   'В наявності'
                            :   'Немає в наявності'
                            }
                        </p>
                    </div>
                    <div className={cn.purchase__column}>
                        {product.availability
                        ? <button className={cn.purchase__button} onClick={purchase}>
                            <span>Купити</span>
                            <FontAwesomeIcon className={cn.purchase__buy} icon={faShoppingCart} />
                        </button>
                        : <span></span>
                        }
                    </div>
                </div>
            </div>
        </Link>  
    );
}

export default ShopCard;