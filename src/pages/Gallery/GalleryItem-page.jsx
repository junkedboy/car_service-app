import React from 'react'
import { useSelector } from 'react-redux'
import cn from './GalleryItem-page.module.sass'
import ImageGallery from 'react-image-gallery'
import { gallery } from '../../components/config' // TEMP
// import "react-image-gallery/styles/css/image-gallery.css"
import "react-image-gallery/styles/scss/image-gallery.scss"
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft'

const GalleryItemPage = () => {
    const id = useSelector(state => state.focus.id)
    const galleryItem = gallery.filter(item => item.id === id)
    const galleryUrl = galleryItem[0].url.map(item => {
        return {
            original: item,
            thumbnail: item,
        }
    })

    return (
        <AnimationSlideLeft>
            <div className="container">
                <div className={[cn.gallery, 'material'].join(' ')}>
                    <ImageGallery 
                        items={galleryUrl}
                        showPlayButton={false}
                    />
                    {galleryItem[0].description &&
                        <div className={cn.description}>
                            <span className={cn.description__title}>опис</span>
                            {galleryItem[0].description}
                        </div>
                    }
                </div>
            </div>
        </AnimationSlideLeft>
    );
}

export default GalleryItemPage;
