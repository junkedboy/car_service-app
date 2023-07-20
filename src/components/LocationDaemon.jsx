import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

const LocationDaemon = () => {
    const location = useLocation()
    const focus = useSelector(state => state.focus.title)
    const loggedUser = useSelector(state => state.loginSession.name)

    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })

    function whereIm() {
        switch (location.pathname) { 
            case '/'                : return 'Головна'
            case '/intro'			: return "Головна"
            case '/navigation'		: return "Головна"
            case '/journal'			: return "Бортжурнал"
            case '/journal/item'	: return focus
            case '/shop'		    : return "Магазин"
            case '/shop/item'       : return focus
            case '/shop/sold'       : return "Дякуємо за покупку"
            case '/services'		: return "Послуги та ціни"
            case '/services/item'	: return focus
            case '/gallery'		    : return "Галерея"
            case '/gallery/item'	: return focus
            case '/social'		    : return "Соціальні мережі"
            case '/user'		    : return `Кабінет користувача ${loggedUser}`
            case '/admin'		    : return "Панель керування сайтом"
            case '/about'		    : return "Про наше СТО"
            case '/reservation'	    : return "Бронювання"
            case '/cart'	        : return "Кошик"
            default                 : return "Хто зна де ти, братан..."
        }
    }

    return (
        <>
            {whereIm()}
        </>
    );
}

export default LocationDaemon;


