import React, { useEffect, useState } from 'react'                                            // React
import { Link, useLocation } from 'react-router-dom'                                // ReactRouter
import { useMediaQuery } from 'react-responsive'                                    // ReactResponsive, бібліотека для роботи з розміром екрану
import cn from './Header.module.sass'                                               // SASS Styles
import logo from '../../assets/img/header/logo-big.png'                             // Logo image
import background from '../../assets/img/header/background.jpg' 
import { navigation } from '../../components/config'                                // !!! NavigationDB TEMP inport !!!
import HeaderTray from '../HeaderTray/HeaderTray'                                   // TRAY
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'                    // FontAwesome
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'          // FontAwesome Icons                                        

const Header = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })
    const location = useLocation()
    // скидування вмісту FOCUS при зміні маршруту\сторінки
    function focusReset () {
        dispatch(setFocus([null, null]))
    }

    // фікс липкого хедера 
    useEffect(() => {
        const handleScroll = () => {
          const header = document.getElementById('header');
          if (window.scrollY >= 300) {
            header.style.position = 'fixed';
          } else {
            header.style.position = 'sticky';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={cn.main} id='header'>
            <div className={[cn.header, !isDesktop ? cn.header__background : undefined].join(' ')}>
                <div className="header_container">
                    <div className={cn.header__inner}>

                        <div className={cn.header__logoBox}>
                            <Link className={cn.logo} to="/">
                                <img src={logo} alt="" />
                            </Link>

                            <div className={cn.text}>
                                <Link className={cn.text__topBox} to="/">
                                    <h1>Car Service</h1>
                                </Link>
                                
                                <div className={cn.text__bottomBox}>
                                    <span className={cn.text__phone}>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <a href="tel:+380975555555"> (097) 111 11-11</a>
                                    </span>
                                    
                                    <span className={cn.text__location}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <a href="https://goo.gl/maps/5jHdKn4bPswqBBKo8"> Los Santos</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {isDesktop &&
                            <nav className={cn.header__navigation}>
                                {navigation.map(item => (
                                    <Link 
                                        className={ location.pathname.includes(item.route) ? "headerActive" : undefined} 
                                        key={item.id} 
                                        to={item.route}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        }

                    </div>
                </div>
            </div>
            <HeaderTray/>
        </div>
    );
}

export default Header;
