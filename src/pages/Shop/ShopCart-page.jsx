import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { cleanCart } from '../../store/cart'
import cn from './ShopCart-page.module.sass'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import ShopPurchaseList from '../../components/Shop/ShopPurchaseList';
import ShopPurchaseBio from '../../components/Shop/ShopPurchaseBio';
import ShopPurchaseConfirm from '../../components/Shop/ShopPurchaseConfirm';
import ShopPurchaseDelivery from '../../components/Shop/ShopPurchaseDelivery';
import { shopGoodsDB } from '../../components/shopGoodsDB' // TEMPORARY FAKE DB !!!


const ShopCartPage = () => {
    const dispatch = useDispatch()
    const cartArray = useSelector(store => store.cart.cart)
    const cartIdArray = cartArray.map(item => item.id)
    const cart = shopGoodsDB.filter(item => cartIdArray.includes(item.id))

    const [bio, setBio] = useState({name: null, telephone: null, email: null})
    const [address, setAddress] = useState({city: null, department: null})
    const [total, setTotal] = useState({price: 0, count: 0})
    const [isReady, setIsReady] = useState({bio: false, delivery: false})
    const navigate = useNavigate();

    const handleValidityChange = (validity) => {
        setIsReady({...isReady, bio: validity});
    }

    useEffect(() => {
        if (address.city && address.department) {
            setIsReady({...isReady, delivery: true});
        } else {
            setIsReady({...isReady, delivery: false});
        }
    }, [address.department])

    function submitPurchase () {
        if (isReady.bio && isReady.delivery) {
            console.log(
                "Покупець: " + bio.name +  "\n" +
                "Телефон: " + bio.telephone + "\n" +
                "Email: " + bio.email + "\n" +
                "Місто: " + address.city + "\n" +
                "Відділення: " + address.department + "\n" +
                "Разом до сплати: " + total.price + "грн" + "\n"
            )
            cart.map(product => {
                const cartArrayItem = cartArray.filter(item => item.id === product.id)[0]
                console.log("Товар: " + product.title + " " + cartArrayItem.count + " шт")
            })
            dispatch(cleanCart())
            navigate('/shop/sold')
        }
        handleValidityChange()
    }


    // отримуємо загальну кількість товарів у кошику та їх загальну ціну
    useEffect(() => {
        let totalPrice = 0
        let totalCount = 0
        cartArray.forEach(element => {
            const price = shopGoodsDB.filter(item => item.id === element.id).map(item => item.price)
            const count = element.count
            const totalItemPrice = price * count
            totalCount += count
            totalPrice += totalItemPrice
        });
        setTotal({...total, price: totalPrice, count: totalCount});
    }, [cartArray]);
    
    return (
        <AnimationSlideLeft>
            <div className="container">
                <div className={cn.main}>
                    <ShopPurchaseList/>
                    {cartArray.length > 0 && 
                        <div className={cn.purchase}>
                            <div className={cn.purchase__column}>
                                <ShopPurchaseBio bio={bio} setBio={setBio} onValidityChange={handleValidityChange}/> 
                                <ShopPurchaseDelivery address={address} setAddress={setAddress}/>
                            </div>
                            <div className={cn.purchase__column}>
                                <ShopPurchaseConfirm 
                                    totalPrice={total.price} 
                                    totalCount={total.count} 
                                    submitPurchase={submitPurchase}
                                    isReady={isReady}
                                />
                            </div>
                        </div>
                    }
                    
                    
                </div>
            </div>
        </AnimationSlideLeft>
    );
}

export default ShopCartPage;
