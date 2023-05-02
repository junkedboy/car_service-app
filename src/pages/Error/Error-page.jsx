import React from 'react'
import cn from './Error-page.module.sass'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import img from '../../assets/img/404.jpg'

const ErrorPage = () => {
    return (
        <AnimationSlideLeft>
            <div className={cn.error}>
                <img src={img} alt="" />
                <h1><span>Трясця</span></h1>
                <p>такої сторінки нема...</p>
            </div>
        </AnimationSlideLeft>
    );
}

export default ErrorPage;
