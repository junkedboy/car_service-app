import React from 'react'
import { Link } from 'react-router-dom'
import cn from './Gallery-page.module.sass'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft'
import { gallery } from '../../components/config'
import { useDispatch } from 'react-redux'
import { setFocus } from '../../store/focus'

const preview = gallery.map(item => {
    return {
        url: item.url[0],
        title: item.title,
        id: item.id
    }
})

const GalleryPage = () => {
    const dispatch = useDispatch()

    function focusHandler(value) {
        dispatch(setFocus(value))
    }

    return (
        <AnimationSlideLeft>
            <div className="container">
                <div className={cn.gallery}>
                    {preview.map(item => (
                        <Link 
                            className={[cn.item, 'material'].join(' ')} 
                            key={item.id}
                            to="/gallery/item"
                            onClick={() => focusHandler([item.id, item.title])}
                        >
                            <div className={cn.inner}>
                                <img src={item.url} alt="" />
                                <span>{item.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </AnimationSlideLeft>
    );
}

export default GalleryPage;
