import React from 'react'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft'
import cn from './About-page.module.sass'
import facebook from '../../assets/img/social/facebook.png'
import instagram from '../../assets/img/social/instagram.png'
import telegram from '../../assets/img/social/telegram.png'
import youtube from '../../assets/img/social/youtube.png'
import photo from '../../assets/img/temp/about__photo.jpg'


const AboutPage = () => {
    return (
        <AnimationSlideLeft>
            <div className="container">
                <div className={cn.main}>
                    <div className={cn.about}>
                        <div style={{backgroundImage: `url(${photo})`}} className={[cn.about__photo, 'material'].join(" ")} ></div>
                        <h2 className={cn.about__header}>Назва СТО CarService</h2>
                        <p className={cn.about__text}>
                            Ми команда професіоланів Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempora. Sapiente, amet. Praesentium veniam maiores numquam sapiente suscipit cum voluptatem.
                        </p>
                        <p className={cn.about__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorum ipsa autem nam dignissimos quaerat, facilis modi dolores quae mollitia optio aliquid minima nisi aspernatur quis. Assumenda, distinctio tempore! Veniam pariatur molestias, recusandae qui molestiae reprehenderit nemo voluptatibus tempora sunt.
                        </p>
                        <h4 className={cn.about__header_sub}>Наша спеціалізація</h4>
                        <ul>
                            <li>Ремонт та діагностика основних вузлів авто</li>
                            <li>Компʼютерна діагностика</li>
                            <li>Обслуговування та ТО</li>
                            <li>Кузовний ремонт</li>
                            <li>Слюсарні роботи</li>
                            <li>Тюнінг</li>
                        </ul>
                    </div>
                    <div className={[cn.contacts, 'material'].join(' ')}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d844852.7658975256!2d-119.3877431!3d34.1922097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb7fbb47941c7%3A0x43fa0e9807234c50!2sWest%20Coast%20Customs!5e0!3m2!1sen!2sua!4v1679562468946!5m2!1sen!2sua" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className={cn.contacts__infoBox}>
                            <span>Адреса</span>
                            <p>м. Київ, вулиця Пушкіна 184, буд. калатушкіна 42</p>
                            <span>Контактні номери</span>
                            <a className={cn.contacts__telephone} href="tel:+380975555555">(097) 111 11-11</a>
                            <a className={cn.contacts__telephone} href="tel:+380665555555">(066) 111 11-11</a>
                            <a className={cn.contacts__telephone} href="tel:+380635555555">(063) 111 11-11</a>
                            <span>Ми в соціальних мережах</span>
                            <div className={cn.contacts__social}>
                                <a href="#">
                                    <img src={facebook} alt="" />
                                </a>
                                <a href="#">
                                    <img src={instagram} alt="" />
                                </a>
                                <a href="#">
                                    <img src={telegram} alt="" />
                                </a>
                                <a href="#">
                                    <img src={youtube} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationSlideLeft>
    );
}

export default AboutPage;
