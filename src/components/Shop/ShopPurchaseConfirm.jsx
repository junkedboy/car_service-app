import React from 'react';
import cn from './ShopPurchaseConfirm.module.sass'

const ShopPurchaseConfirm = ({ totalPrice, totalCount, submitPurchase, isReady }) => {
    return (
        <div className={[cn.main, 'material'].join(' ')}>
            <h2>Разом</h2>
            <div className={cn.section}>
                <div className={cn.section__row}>
                    <p className='supportText'>{totalCount}x товару на суму</p>
                    <p className={cn.textToRight}>{totalPrice}₴</p>
                </div>
                <div className={cn.section__row}>
                    <p className='supportText'>Вартість доставки</p>
                    <p className={cn.textToRight}>За тарифами перевізника</p>
                </div>
            </div>
            <div className={cn.section}>
                <div className={cn.section__row}>
                    <p className='supportText'>До сплати</p>
                    <p className={[cn.finalPrice, cn.textToRight].join(' ')}>{totalPrice}₴</p>
                </div>
            </div>
            <button className={cn.button} onClick={submitPurchase}>
                {isReady.bio && isReady.delivery ? 'Замовлення підтверджую' : 'Заповніть усі поля'}
            </button>
        </div>
    );
}

export default ShopPurchaseConfirm;
