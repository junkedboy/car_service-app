import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut';
import cn from './Services.module.sass'
import cnItem from './ServicesItem.module.sass'
import { serviceCategories } from '../../components/config' // TEMPORARY FAKE DB !!!
import { service } from '../../components/config' // TEMPORARY FAKE DB !!!
import { useDispatch, useSelector } from 'react-redux'
import { setFocus } from '../../store/focus'
import Modal from '../../components/Modal/Modal';
import { toggleVisibility, toggleServiceVisibility } from '../../store/modal'
import { setModalTitle } from '../../store/modal'
import ServicesModal from './Services-modal'


const ServicesPage = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })

    const dispatch = useDispatch()
    // const id = useSelector(state => state.focus.id)

    const [ pickedService, setPickedService ] = useState(null)
    function servicePick(modal, pickedItem){
        setModal(modal)
        dispatch(setModalTitle(pickedItem.title))
        setPickedService(pickedItem.id)
    }
    // set modal visibility
    function setModal(value) {
        dispatch(toggleVisibility(value))
    }
    const serviceModalVisibility = useSelector(state => state.modal.visibility)

    // для передачі айді на сторінку /item
    function focusHandler(value) {
        dispatch(setFocus(value))
    }
    // для передачі айді в блок з контентом
    const [ pickedCategory, setPickedCategory ] = useState(null)
    const services = service.filter(item => item.category === pickedCategory)

    return (
        <>
        <Modal
            visible={serviceModalVisibility}
            setVisible={setModal}
        >
            <ServicesModal id={pickedService}/>
        </Modal>
        {isDesktop
        // desktop code
        ? <AnimationSlideLeft>
            <div className="container">
                <div className={cn.desktop}>
                    <div className={cn.desktop__category}>
                        {serviceCategories.map(item => (
                           <button
                                className={[cn.categoryButton, 'material', item.id===pickedCategory && 'active__border'].join(' ')}
                                key={item.id}
                                onClick={() => setPickedCategory(item.id)}
                           >
                                <span>{item.title}</span>
                           </button>
                        ))}
                    </div>
                    <div className={[cn.desktop__content, 'material'].join(' ')}>
                        {!pickedCategory 
                            ? <div className={cn.title}>Оберіть категорію</div>
                            : services.map(item => (
                                <AnimationFadeOut
                                    key={item.id}
                                >
                                    <div className={cnItem.services__item} onClick={() => servicePick(true, item)}> 
                                        <div className={cnItem.title}>
                                            {item.title}
                                        </div>
                                        <div className={cnItem.price}>
                                            <span>{item.price} грн.</span>
                                        </div>
                                    </div>
                                </AnimationFadeOut>

                            ))
                        }
                    </div>

                </div>
            </div>
        </AnimationSlideLeft>
        
        //mobile code
        : <AnimationSlideLeft>
            <div className="container">
                <div className={cn.category}>
                    {serviceCategories.map(item => (
                        <Link 
                            className={[cn.category__item, 'material'].join(' ')} 
                            to="/services/item" 
                            key={item.id}
                            onClick={() => focusHandler([item.id, item.title])}
                        >
                            <span>
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </AnimationSlideLeft>
        }
        </>

    );
}

export default ServicesPage;
