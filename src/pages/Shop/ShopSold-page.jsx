import React from 'react';
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import image from '../../assets/img/temp/sold.jpeg'

const ShopSoldPage = () => {
    return (
        <AnimationSlideLeft>
            <div className='container'>
                <img src={image} height="80%" alt="" />
            </div>
        </AnimationSlideLeft>

    );
}

export default ShopSoldPage;
