import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

const LocationDaemon = () => {
    const location = useLocation()
    const focus = useSelector(state => state.focus.title)

    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })

    // function servicesSmartTitle () {
    //     if (isDesktop) {
    //         if (focus) {
    //             return focus
    //         } else {
    //             return "Послуги та ціни"
    //         }
    //     } else {
    //         return "Послуги та ціни"
    //     }
    // }

    function whereIm() {
        switch (location.pathname) { 
            case '/'                : return 'Головна'
            case '/intro'			: return "Головна"
            case '/navigation'		: return "Головна"
            case '/login'			: return "Авторизація"
            case '/user'			: return "Кабінет"      
            case '/journal'			: return "Бортжурнал"
            case '/journal/item'	: return focus
            case '/market'		    : return "Магазин"
            // case '/market/item'     : return focus
            case '/services'		: return "Послуги та ціни"
            case '/services/item'	: return focus
            case '/gallery'		    : return "Галерея"
            case '/gallery/item'	: return focus
            case '/social'		    : return "Соціальні мережі"
            case '/tuning'		    : return "Тюнінг"
            // case '/tuning/item'	    : return focus
            case '/about'		    : return "Про наше СТО"
            case '/reservation'	    : return "Бронювання"
            default                 : return "404"
        }
    }

    return (
        <>
            {whereIm()}
        </>
    );
}

export default LocationDaemon;


