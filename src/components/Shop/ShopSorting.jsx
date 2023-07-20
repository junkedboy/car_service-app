import React, { useState } from 'react';
import cn from './ShopSorting.module.sass'

const ShopSorting = ({ findValue, setFindValue, sortByPrice, menuSelectByPrice, menuSelectByPriceValue }) => {

    function sortByPriceHandler(val){
        sortByPrice(val)
    }

    function findHandler(val){
        find(val)
    }

    return (
        <div className={cn.main}>
            <input
                className={cn.search}
                value={findValue}
                onChange={(e) => setFindValue(e.target.value)} 
                type="text" 
                placeholder='Швидкий пошук...'
            />
            <div className={cn.sorting}>
                <select 
                    className={cn.byPrice}
                    value={menuSelectByPriceValue}
                    onChange={(e) => sortByPriceHandler(e.target.value)}
                >
                    <option disabled value='all'>Сортування</option>
                    {menuSelectByPrice.map(item => (
                        <option key={item.id} value={item.value}>{item.title}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default ShopSorting;
