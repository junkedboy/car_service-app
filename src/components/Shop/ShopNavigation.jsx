import React from 'react';
// import { useDispatch } from 'react-redux'
import cn from './ShopNavigation.module.sass'
import { shopCategory } from '../config' // TEMPORARY FAKE DB !!!
import ShopNavButton from './ShopNavButton';

const ShopNavigation = ({ sortByCategory, sortBySubCategory, isMobile, subCategoryValue, setSubCategoryValue  }) => {
    
    return (
        <div className={[cn.main, 'material', isMobile && cn.mobileFix].join(' ')}>
            {shopCategory.map(item => (
                <ShopNavButton 
                    key={item.id} 
                    shopCategoryId={item.id}
                    sortByCategory={sortByCategory}
                    sortBySubCategory={sortBySubCategory}
                    subCategoryValue={subCategoryValue}
                    setSubCategoryValue={setSubCategoryValue}
                />
            ))}
        </div>
    );
}

export default ShopNavigation;

