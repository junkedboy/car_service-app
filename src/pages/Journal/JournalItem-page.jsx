import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import cn from './JournalItem-page.module.sass'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut';
import { serviceCategories } from '../../components/config' // TEMPORARY FAKE DB !!!
import { journalDB } from '../../components/journalDB' // TEMPORARY FAKE DB !!!
import { usersDB } from '../../components/usersDB' // TEMPORARY FAKE DB !!!

const JournalItemPage = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })
    // отримуємо айді юзера та його машини
    const pickedId = useSelector(state => state.focus.id)
    // за домопомою айді вище фільтруємо масив та отримуємо журнал тільки даного користувача та прокидуємо туди title

    const userJournal = journalDB
        .filter(item => (item.userId === pickedId.userId && item.userCarId === pickedId.carId))
        .map(item => {
            const category = serviceCategories.filter(category => category.id === item.categoryId)
            return {
                id: item.id,
                userId: item.userId,
                userCarId: item.userCarId,
                categoryId: item.categoryId,
                categoryTitle: category[0].title,
                date: item.date,
                odometer: item.odometer,
                text: item.text
            }
        })
    // стейт сортування за категорією
    const [sortedByCategory, setSortedByCategory] = useState('all')
    // стейт сортування за по одометру (нові / старі)
    const [sortedByOdometer, setSortedByOdometer] = useState('new')
    // стейт сортування за пошуком
    const [search, setSearch] = useState('')

    // сортування за одометром та категоріями
    const journalSorted = useMemo(() => {
        // відображаємо усі записи з усих категорій та сортуємо їх по одометру
        if (sortedByCategory === 'all') {
            if (sortedByOdometer === 'old') {
                return [...userJournal.sort((a, b) => a.odometer > b.odometer ? 1 : -1)]
            }
            else {
                return [...userJournal.sort((a, b) => a.odometer < b.odometer ? 1 : -1)]
            }
        }
        // відображаємо записи тільки вибраної категорії та сортуємо їх по одометру
        else {
            if (sortedByOdometer === 'old') {
                return [...userJournal.sort((a, b) => a.odometer > b.odometer ? 1 : -1)
                                      .filter(item => item.categoryId === parseInt(sortedByCategory))]
            }
            else {
                console.log(sortedByCategory)
                return [...userJournal.sort((a, b) => a.odometer < b.odometer ? 1 : -1)
                                      .filter(item => item.categoryId === parseInt(sortedByCategory))]
            }
        }
    }, [[sortedByCategory, sortedByOdometer], userJournal])

    // сортування за пошуком
    const journalSortedAndSearched = useMemo(() => {
        return journalSorted.filter(item => item.text.toLowerCase().includes(search.toLowerCase()))
    }, [search, journalSorted])



    return (
        <>
        {isDesktop
        ? // desktop
        <AnimationSlideLeft>
            <div className="container">
                <div className={cn.desktop}>
                    <div className={cn.desktop__buttons}>
                        <div className={cn.byOdometr}>
                            <button 
                                className={[cn.byOdometr__btn, cn.byOdometr__btn_1, 'material', sortedByOdometer==='new' && 'active__border'].join(' ')}
                                onClick={() => setSortedByOdometer('new')}
                            >
                                <span>Нові</span>
                            </button>
                            <button 
                                className={[cn.byOdometr__btn, cn.byOdometr__btn_2, 'material', sortedByOdometer==='old' && 'active__border'].join(' ')}
                                onClick={() => setSortedByOdometer('old')}
                            >
                                <span>Старі</span>
                            </button>
                        </div>
                        <button 
                            className={[cn.desktop__button, 'material', sortedByCategory==='all' && 'active__border'].join(' ')}
                            onClick={() => setSortedByCategory('all')}
                        >
                            <span>Усі</span>
                        </button>
                        {serviceCategories.map(item => (
                            <button 
                                className={[cn.desktop__button, 'material', item.id===sortedByCategory && 'active__border'].join(' ')}
                                key={item.id}
                                onClick={() => setSortedByCategory(item.id)}
                            >
                                <span>{item.title}</span>
                            </button>
                        ))}
                        
                    </div>
                    <div className={[cn.desktop__content, 'material'].join(' ')}>
                        <div className={cn.search}>
                            <input
                                onChange={(e) => setSearch(e.target.value)} 
                                type="text" 
                                placeholder='Швидкий пошук...'
                            />
                        </div>
                        {journalSortedAndSearched.map(item => (
                        <AnimationFadeOut
                            key={item.id}
                        >
                            <div className={cn.desktopItem}>
                                <div className={[cn.desktopItem__category, cn.desktopItem__serv].join(' ')}>
                                    {item.categoryTitle}
                                </div>
                                <div className={[cn.desktopItem__odometer, cn.desktopItem__serv].join(' ')}>
                                    {item.odometer}<span>км</span>
                                </div>
                                <div className={[cn.desktopItem__date, cn.desktopItem__serv].join(' ')}>
                                    {item.date}
                                </div>
                                <div className={cn.desktopItem__text}>
                                    {item.text}
                                </div>
                            </div>  
                        </AnimationFadeOut>   
                        ))}
                    </div>
                </div>
            </div>
        </AnimationSlideLeft>

        : // mobile
        <AnimationSlideLeft>
            <div className="container">
                <div className={cn.mobile}>
                    <div className={cn.mobile__tray}>
                        <input
                            className={cn.searchMobile}
                            onChange={(e) => setSearch(e.target.value)} 
                            type="text" 
                            placeholder='Швидкий пошук...'
                        />
                        <select defaultValue={sortedByCategory} onChange={(e) => setSortedByCategory(e.target.value)}>
                            <option value='all'>Усі категорії</option>
                            {serviceCategories.map(item => (
                                <option value={item.id} key={item.id}>{item.title}</option>
                            ))}
                        </select>
                        <select defaultValue={sortedByOdometer} onChange={(e) => setSortedByOdometer(e.target.value)}>
                            <option value="new">По пробігу (нові)</option>
                            <option value="old">По пробігу (старі)</option>
                        </select>
                    </div>
                    <div className={cn.mobile__content}>
                        {journalSortedAndSearched.map(item => (
                            <AnimationFadeOut
                                key={item.id}
                            >
                                <div className={[cn.mobileItem, 'material'].join(' ')}>
                                    <div className={cn.mobileItem__category}>
                                        {item.categoryTitle}
                                    </div>
                                    <div className={cn.mobileItem__text}>
                                        {item.text}
                                    </div>
                                    <div className={cn.mobileItem__bottomBox}>
                                        <div className={cn.mobileItem__date}>
                                            {item.date}
                                        </div>
                                        <div className={cn.mobileItem__odometer}>
                                            {item.odometer}<span>км</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimationFadeOut>   
                        ))}
                    </div>
                </div>
            </div>
        </AnimationSlideLeft>
        }
        </>
    );
}

export default JournalItemPage;
