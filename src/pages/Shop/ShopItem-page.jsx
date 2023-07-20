import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../store/cart'
import cn from './ShopItem-page.module.sass'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import { shopGoodsDB } from '../../components/shopGoodsDB' // TEMPORARY FAKE DB !!!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut';
import Modal from '../../components/Modal/Modal'
import ShopTwoChairs from '../../components/Shop/ShopTwoChairs';
import { toggleVisibility, setModalTitle } from '../../store/modal'

const ShopItemPage = () => {
    // const productId = match.params.id;
    const productId = useSelector(store => store.focus.id)
    const product = shopGoodsDB.filter(item => item.id === productId)[0]
    // console.log(product)
    const [ descriptionState, setDescriptionState ] = useState('info')

    const cart = useSelector(store => store.cart.cart)
    const cartIdArray = cart.map(item => item.id)
    const dispatch = useDispatch()
    
    function purchase(event) {
        event.preventDefault();

        if (cartIdArray.includes(product.id)) {
            alert('Товар вже у кошику')
        } else {
            dispatch(setCart({id: productId, count: 1}))
            dispatch(toggleVisibility(true))
            // modal
            dispatch(setModalTitle('Оберіть один з варіантів...'))
        }
    }

    // modal
    const twoChairsVisibility = useSelector(state => state.modal.visibility)

    return (
        <>
        <Modal
            visible={twoChairsVisibility}
        >
            <ShopTwoChairs />
        </Modal>
        <AnimationSlideLeft>
            <div className="container">
                <div className={cn.main}>
                    <div className={cn.main__column}>
                        <div className={[cn.photo, 'material'].join(' ')}>
                            <img className='meterial' src={product.img} alt=""  />
                        </div>
                    </div>

                    <div className={cn.main__column}>
                        <div className={[cn.purchaseBox, 'material'].join(' ')}>
                            <h3 className={cn.purchaseBox__title}>{product.title}</h3>
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
                                    ?< button className={cn.purchase__button} onClick={purchase}>
                                        <span>Купити</span>
                                        <FontAwesomeIcon className={cn.purchase__buy} icon={faShoppingCart} />
                                    </button>
                                    : <span></span>
                                    }
                                    
                                </div>
                                
                            </div>
                        </div>

                        <div className={[cn.description, 'material'].join(' ')}>
                            <div className={cn.description__bar}>
                                <button 
                                    className={[cn.description__button, descriptionState==='info' && cn.buttonActive].join(' ')} 
                                    onClick={() => setDescriptionState('info')}
                                >
                                    Опис
                                </button>
                                <button 
                                    className={[cn.description__button, descriptionState==='characteristics' && cn.buttonActive].join(' ')} 
                                    onClick={() => setDescriptionState('characteristics')}
                                >
                                    Характеристики
                                </button>
                            </div>
                            {descriptionState === 'info'
                            ? <AnimationFadeOut key={'info'}>
                            <div className={cn.info}>
                                {product.description 
                                ?   product.description 
                                :   'Опис відсутній'
                                }
                            </div>
                            </AnimationFadeOut>            

                            : <AnimationFadeOut key={'characteristics'}>
                            <div className={cn.characteristics}>
                                {product.characteristics 
                                ? product.characteristics.map(item => (
                                    <div className={cn.characteristics__item} key={item.id}> 
                                        <div className={cn.characteristics__title}>
                                            {item.title}:
                                        </div>
                                        <div className={cn.characteristics__text}>
                                            {item.text}
                                        </div>
                                    </div>
                                ))
                                : 'Характеристики відсутні'
                                }
                            </div>
                            </AnimationFadeOut>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </AnimationSlideLeft>
        </>
    );
}

export default ShopItemPage;
