import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setShopCategoryFocus } from '../../store/focus'
import cn from './ShopNavButton.module.sass'
import { shopCategory, shopSubCategory } from '../config' // TEMPORARY FAKE DB !!!
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut';

const ShopNavButton = ({ shopCategoryId, sortByCategory, sortBySubCategory, subCategoryValue, setSubCategoryValue }) => {
    const dispatch = useDispatch()
    // витягуємо категорію (shopCategoryid) по якій ТКНУВ користувач
    const pickedCategory = useSelector(store => store.focus.shopCategory)
    // -NO API- з масиву категорій отримуємо одну конкретну
    const currentCategory = shopCategory.filter(item => item.id === shopCategoryId)[0]
    // -NO API- з допомогою currentCategory отримуємо його підкатегорії з массиву підкатегорій
    const currentSubCategory = shopSubCategory.filter(item => item.categoryId === currentCategory.id)
    

    function categoryHandler(shopCategoryIdValue, ){
        // якщо категорія компонента співпадає з тим що клікнув користувач - меню підкатегорій ховається
        if (shopCategoryIdValue === pickedCategory) {
            dispatch(setShopCategoryFocus(null))
        } else {
            dispatch(setShopCategoryFocus(shopCategoryIdValue))
        }
        sortByCategory(shopCategoryIdValue)
        setSubCategoryValue([])
        
    }
    function subCategoryHandler(subCategoryId, isChecked) {
        sortBySubCategory(subCategoryId, isChecked);
        if (isChecked) {
            setSubCategoryValue([...subCategoryValue, subCategoryId])
        }
        if (!isChecked) {
            const filtered = subCategoryValue.filter(item => item !== subCategoryId)
            setSubCategoryValue(filtered)
        }
    }

    return (
        <div className={cn.main} >
            <div 
                className={[cn.title, shopCategoryId === pickedCategory && 'active__border'].join(' ')}
                onClick={() => categoryHandler(shopCategoryId)}
            >
                <span>{currentCategory.title}</span>
            </div>
            {/* {shopCategoryId === pickedCategory && */}
            { shopCategoryId === pickedCategory &&
                <AnimationFadeOut>
                    <form className={cn.subCategoryBox}>
                        {currentSubCategory.map(item => (
                            <div 
                                className={cn.subCategoryItem} 
                                key={item.id} 
                            >
                                <input 
                                    type="checkbox" 
                                    id={item.id} 
                                    name={item.title}
                                    checked={subCategoryValue.includes(item.id)}
                                    onChange={(e) => subCategoryHandler(item.id, e.target.checked)}
                                />
                                <label htmlFor={item.id}>{item.title}</label>
                            </div>
                        ))}
                    </form>
                </AnimationFadeOut>
            }
        </div>
    );
}

export default ShopNavButton;