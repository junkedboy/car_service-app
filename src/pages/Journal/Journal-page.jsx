import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFocus } from '../../store/focus'
import AnimationSlideLeft from '../../components/Animations/AnimationSlideLeft'
import cn from './Journal-page.module.sass'
import { usersDB } from '../../components/usersDB' // TEMPORARY FAKE DB !!!
import { carsDB } from '../../components/carsDB' // TEMPORARY FAKE DB !!!
import forsage from '../../assets/img/temp/forsage.jpeg'
import car from '../../assets/img/journalCar.png'


const JournalPage = () => {
    // отримуємо все що я записав про юзера в авторизації
    const user = useSelector(store => store.loginSession)
    // отримуємо обʼєкт з БД для авторизованого користувача 
    const loggedUser = usersDB.filter(item => item.id === user.userId)
    // створюємо массив з автомобілями на основі "usersDB" і "carsDB"
    const userCars = []
    loggedUser.forEach(user => {
        user.cars.forEach(carUser => {
            const fetchedCars = carsDB.filter(carAll => carAll.id === carUser.carId)
            fetchedCars.forEach(fetchedCar => {
                userCars.push({
                    userId: user.id,
                    carId: carUser.id,
                    carName: `${fetchedCar.manufacturer} ${fetchedCar.model} ${carUser.year} «${carUser.nickname}»`,
                })
            })
        })
    })
    
    // фокусуємось на вибраній машині для використання userId, carId, carName в елементах "/journal/item" 
    const dispatch = useDispatch()
    function focusHandler(value) {
        dispatch(setFocus(value))
    }

    return (
        <AnimationSlideLeft>
            <div className="container">
                {user.loginStatus
                ? // authorized user
                <div className={cn.cars}>
                    {userCars.map(item => (
                        <Link 
                            className={[cn.car, 'material'].join(' ')} 
                            to="/journal/item" 
                            key={item.carId}
                            onClick={() => focusHandler([{userId: item.userId, carId: item.carId}, item.carName])}
                        >
                            <img src={car} alt="" />
                            <p>{item.carName}</p>
                        </Link>
                    ))}
                </div>

                : // unknown visitor
                <div className={cn.noAuth}>
                    <img src={forsage} alt="" />
                    <p>Увійдіть щоб отримати доступ до детальної історії обслуговування вашого авто</p>
                    <button className='buttonModal'>Увійти</button>
                </div>
                }
            </div>
        </AnimationSlideLeft>
    );
}

export default JournalPage;
