import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from './ServicesItem.module.sass'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft'
import { service } from '../../components/config' // TEMPORARY FAKE DB !!!
import Modal from '../../components/Modal/Modal';
import { toggleVisibility, toggleServiceVisibility } from '../../store/modal'
import { setModalTitle } from '../../store/modal'
import ServicesModal from './Services-modal'

const ServicesItemPage = () => {
    const id = useSelector(state => state.focus.id)
    const services = service.filter(item => item.category === id)
    const [ pickedService, setPickedService ] = useState(null)

    const serviceModalVisibility = useSelector(state => state.modal.visibility)
    const dispatch = useDispatch()

    function servicePick(modal, pickedItem){
        setModal(modal)
        dispatch(setModalTitle(pickedItem.title))
        setPickedService(pickedItem.id)
    }

    function setModal(value) {
        dispatch(toggleVisibility(value))
    }

    return (
        <>
        <Modal
            visible={serviceModalVisibility}
            setVisible={setModal}
        >
            <ServicesModal id={pickedService}/>
        </Modal>

        <AnimationSlideLeft>
            <div className="container">
                <div className={[cn.services, 'material'].join(' ')}>
                    {services.map(item => (
                        <div 
                            className={cn.services__item} 
                            key={item.id}
                            onClick={() => servicePick(true, item)}
                        > 
                            <div className={cn.title}>
                                {item.title}
                            </div>
                            <div className={cn.price}>
                                <span>{item.price} грн.</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </AnimationSlideLeft>
        </>

    );
}

export default ServicesItemPage;
