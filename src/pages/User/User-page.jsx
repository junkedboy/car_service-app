import React from 'react'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft'
import cn from './User-page.module.sass'


const UserPage = () => {
    return (
        <AnimationSlideLeft>
            <div className="container">
                user page
            </div>
        </AnimationSlideLeft>
    );
}

export default UserPage;
