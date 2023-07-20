import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import cn from './Shop-page.module.sass'
import { useMediaQuery } from 'react-responsive'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft';
import AnimationFadeOut from '../../components/Animations/AnimationFadeOut';
import ShopCard from '../../components/Shop/ShopCard';
import ShopSorting from '../../components/Shop/ShopSorting';
import ShopNavigation from '../../components/Shop/ShopNavigation';
import { shopGoodsDB } from '../../components/shopGoodsDB' // TEMPORARY FAKE DB !!!
import Modal from '../../components/Modal/Modal'
// import { toggleVisibility } from '../../store/modal'
import ShopTwoChairs from '../../components/Shop/ShopTwoChairs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const ShopPage = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 960px)'
    })
    const dispatch = useDispatch()

    // тут лежить список флажків у сабкатегорій
    const [subCategoryValue, setSubCategoryValue] = useState([])

    const menuSelectByPrice = [
        // {
        //     id: 1,
        //     value: 'all',
        //     title: 'Сортування',
        // },
        {
            id: 2,
            value: 'cheap',
            title: 'Від дешевих до дорогих',
        },
        {
            id: 3,
            value: 'expensive',
            title: 'Від дорогих до дешевих',
        },
    ]
    const [menuSelectByPriceValue, setMenuSelectByPriceValue] = useState('all')
    const [findValue, setFindValue] = useState('')

    // const [subGoodsAviability, setSubGoodsAviability] = useState(true)
    // стейт відсортованих по категоріям товарів 
    const [goodsByCategories, setGoodsByCategories] = useState([...shopGoodsDB])
    // резервний стейт-масив товарів вибраної категорії
    const [goodsByCategoriesLifebuoy, setGoodsByCategoriesLifebuoy] = useState([...shopGoodsDB])
    const handleSortByCategory = (shopCategoryId) => {
        // сортуємо та оримуємо масив товарів по вибраній категорії
        const sorted = shopGoodsDB.filter(item => item.categoryId === shopCategoryId)
        // кладемо його у стейт
        setGoodsByCategories(sorted)
        // кладемо його в резервний масив щоб можна було повертутися до початкового стану якщо користувач зніме усі чекбокси
        setGoodsByCategoriesLifebuoy(sorted)
        setMenuSelectByPriceValue('all')
    }

    // Функція для додавання або видалення підкатегорії зі списку вибраних
    const handleSortBySubCategory = (shopSubCategoryId, isChecked) => {
        // перевіряємо чи вибрана підкатегорія є у массиві, якщо є то TRUE / нема FALSE
        const idExistsInArray = goodsByCategories.some(
            item => item.subCategoryId === shopSubCategoryId
        );
        
        if (idExistsInArray) {
            // якщо id вибраної підкатегорії є у масиві то перевіряємо чи на дану педкатегорію стоїть галочка
            if (isChecked) {
                // чекбокс стоїть - у масиві лишаються тільки товари вибраної підкатегорії, решта видаляється 
                // спрацьовує лише 1 раз, коли користувач ставить першу галочку у чекбоксі
                const filtered = goodsByCategories.filter(item => item.subCategoryId === shopSubCategoryId);
                setGoodsByCategories(filtered);
                setMenuSelectByPriceValue('all')
                
            } else {
                // галочка у чекбоксі знята - видаляємо з масиву товари цієї підкатегорії
                const filtered = goodsByCategories.filter(item => item.subCategoryId !== shopSubCategoryId);
                setGoodsByCategories(filtered);
                setMenuSelectByPriceValue('all')
            }
        } else {
            // вибраний id підкатегорії відсутній - з ОСНОВНОГО масиву товарів отримуємо товари підкатегорії які вибрав користувач
            // та додаємо їх до нашого відсортованого масиву товарів
            const filtered = shopGoodsDB.filter(item => item.subCategoryId === shopSubCategoryId);
            setGoodsByCategories([...goodsByCategories, ...filtered]);
            setMenuSelectByPriceValue('all')
        }
    };
    // повертаємо усі товари вибраної категорії, якщо користувач зняв галочки з усіх чекбоксів підкатегорій
    useEffect(() => {
        if (goodsByCategories.length  === 0) {
            setGoodsByCategories(goodsByCategoriesLifebuoy);
        }
    }, [goodsByCategories, goodsByCategoriesLifebuoy]);


    function handleSortByPrice (sortingBy) {
        setMenuSelectByPriceValue(sortingBy)
        if (sortingBy === 'expensive') {
            const sortedGoods = [...goodsByCategories].sort((a, b) => a.price < b.price ? 1 : -1);
            setGoodsByCategories(sortedGoods);
        } else if (sortingBy === "cheap") {
            const sortedGoods = [...goodsByCategories].sort((a, b) => a.price > b.price ? 1 : -1);
            setGoodsByCategories(sortedGoods);
        }
    }

    const searched = useMemo(() => {
        return goodsByCategories.filter(item => item.title.toLowerCase().includes(findValue.toLowerCase()))
    }, [findValue, goodsByCategories])

    // modal
    const [ twoChairsVisibility, setTwoChairsVisibility ] = useState(false)
    const [ filterVisibility, setFilterVisibility ] = useState(false)
    
    return (
        <>
            <Modal
                visible={twoChairsVisibility}
                setVisible={setTwoChairsVisibility}
            >
                <ShopTwoChairs />
            </Modal>
            {isDesktop
            ? <AnimationSlideLeft>
                <div className="container">
                    <div className={cn.desktop}>
                        <div className={cn.desktop__navigation}>
                            <ShopNavigation 
                                sortByCategory={handleSortByCategory} 
                                sortBySubCategory={handleSortBySubCategory}
                                subCategoryValue={subCategoryValue}
                                setSubCategoryValue={setSubCategoryValue}
                            />
                        </div>
                        <div className={cn.desktop__content}>
                            <ShopSorting 
                                // find={finder} 
                                sortByPrice={handleSortByPrice} 
                                menuSelectByPrice={menuSelectByPrice} 
                                setMenuSelectByPriceValue={setMenuSelectByPriceValue}
                                menuSelectByPriceValue={menuSelectByPriceValue}
                                findValue={findValue}
                                setFindValue={setFindValue}
                            />
                            {goodsByCategories.length === 0
                            ? <p className={cn.noGoods}>Товарів не знайдено</p>

                            : <div className={cn.desktop__cardBox}>
                                {searched.map(item => (
                                    <AnimationFadeOut
                                        key={item.id}
                                    >
                                        <ShopCard 
                                            product={item}
                                        />
                                    </AnimationFadeOut>
                                ))}
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </AnimationSlideLeft>
            : <>
            {/* <div className={cn.testModal}>

            </div> */}
            <Modal
                visible={filterVisibility}
                setVisible={setFilterVisibility}
            >
                <ShopNavigation 
                    sortByCategory={handleSortByCategory} 
                    sortBySubCategory={handleSortBySubCategory}
                    subCategoryValue={subCategoryValue}
                    setSubCategoryValue={setSubCategoryValue}
                    isMobile={true}
                />
            </Modal>
            <AnimationSlideLeft>
                <div className="container">
                    <div className={cn.mobile}>
                        <div className={cn.mobile__content}>
                            <div className={cn.mobile__tray}>
                                <button 
                                    className='buttonGrayBordered'
                                    onClick={() => setFilterVisibility(true)}
                                >
                                    <FontAwesomeIcon icon={faFilter} />
                                    Фільтри
                                </button>
                                <ShopSorting 
                                    sortByPrice={handleSortByPrice} 
                                    menuSelectByPrice={menuSelectByPrice} 
                                    setMenuSelectByPriceValue={setMenuSelectByPriceValue}
                                    menuSelectByPriceValue={menuSelectByPriceValue}
                                    findValue={findValue}
                                    setFindValue={setFindValue}
                                />
                            </div>
                            {goodsByCategories.length === 0
                            ? <p className={cn.noGoods}>Товарів не знайдено</p>

                            : <div className={cn.mobile__cardBox}>
                                {searched.map(item => (
                                    <AnimationFadeOut
                                        key={item.id}
                                    >
                                        <ShopCard 
                                            product={item}
                                        />
                                    </AnimationFadeOut>
                                ))}
                            </div>
                            }
                        </div>
                    </div>
                </div>



            </AnimationSlideLeft>
            </>
            }
        </>
    );
}

export default ShopPage;
