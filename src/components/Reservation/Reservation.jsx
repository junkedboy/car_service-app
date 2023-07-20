import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask';
import cn from './Reservation.module.sass'
import axios from "axios"
import okImg from '../../assets/img/service/ok.png'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { toggleVisibility } from '../../store/modal'
import { fetchCategoryList } from '../../API/servicesListAPI.js'
import { fetchManufacturersList, fetchCarsListByManufacturer } from '../../API/carsAPI'

const Reservation = ({setCategoryId, text}) => {
    const dispatch = useDispatch()
    const [requestSent, setRequestSent] = useState(false)
    const [ serviceCategoryList, setServiceCategoryList ] = useState([])
    const [ manufacturerList, setManufacturerList ] = useState([])
    const [ pickedManufacturer, setPickedManufacturer ] = useState('')
    const [ carsList, setCarsList ] = useState('')
    const [ pickedCar, setPickedCar ] = useState('')
    const [ pickedCarYear, setPickedCarYear ] = useState('')

    const { 
        register, 
        handleSubmit,
        formState: { errors, isValid } 
    } = useForm({
        mode: "onBlur"
    });

    function yearOptions() {
        const startYear = 1960;
        const date = new Date();
        const currentYear = parseInt(date.getFullYear())
        const yearOptions = []
        for (let i = currentYear; i >= startYear; i--) {
            yearOptions.push(<option value={i} key={i}>{i}</option>);
          }
        return yearOptions
    }

    useEffect(() => {
        (async () => {
            setPickedCarYear('')
            setPickedCar('')
            setCarsList('')
            if (pickedManufacturer) {
                const response = await fetchCarsListByManufacturer(pickedManufacturer)
                setCarsList(response)
            }
        })();
    }, [pickedManufacturer])

    useEffect(() => {
        // отримуємо повний список категорій послуг при загрузці компонента
        (async () => {
            const response = await fetchCategoryList()
            setServiceCategoryList(response)
        })();
        // отримуємо повний список виробників авто загрузці компонента
        (async () => {
            const response = await fetchManufacturersList()
            setManufacturerList(response)
        })();
    }, [])
    
    async function telegram(data) {
        const manufacturer = manufacturerList.filter(item => item._id === data.manufacturer)[0]
        const car = `${manufacturer.title} ${data.model} ${data.year}`

        await axios
            .post(`https://api.telegram.org/bot5320128940:AAGn2HWZ7zRRr5xqDzKOrka-bkeany9Yu9M/sendMessage?chat_id=473409829&text=Нове замовлення! ${getDate()}%0AКлієнт: ${data.name}%0AНомер телефону: ${data.telephone}%0AАвтомобіль: ${car}%0AКатегорія: ${data.category}%0AПоломка чи послуга: ${data.text}%0AХоче записатися на: <дана опція вимкнена>`)
            .then(
                setRequestSent(true),
                setTimeout(() => {
                    dispatch(toggleVisibility(false))
                }, 5000)
            )
    }

    function getDate() {
        let date = new Date();
        let outputDate = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();    
        return outputDate
    }

    const validateTelephone = (value) => {
        if (value.replace(/[^0-9]/g, "").length < 12) {
            return "Мало цифр"
        }
        return true;
    };

    return (
        <>
        {requestSent
        ?   <div className={cn.requestAccepted}>
                <img src={okImg} alt="" />
                <h3>Ваша заявка прийнята</h3>
                <p>Будь ласка, очікуйте, скоро з вами зʼвяжеться наш спеціаліст</p>
            </div>

        :   <div className={cn.main}>
                <p className={cn.header}>Для отримання бесплатної консультації або запису ну СТО заповніть будь-ласка форму</p>
                
                <form className={cn.form}>

                    <label className={cn.form__item}>
                        <p className={cn.text}>Ім'я</p>
                        <input  
                            className={cn.input} 
                            placeholder='Степан'
                            {...register('name',
                                {
                                    required: 'Поле не може бути пустим',
                                    minLength: {
                                        value: 2,
                                        message: 'Імʼя не може складатися менше ніж з 2 букв'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Притримай коней ковбой, будь скромнішим'
                                    },
                                    pattern: {
                                        value: /[a-zA-Z-А-Яа-я]/,
                                        message: 'Імʼя не може складатися недопустимих символів та цифер'
                                    }
                                }
                            )}
                        />
                        <div className={cn.form__error}>
                            {errors?.name && 
                                <p>
                                    {errors?.name?.message}
                                </p>
                            }
                        </div>
                    </label>
                    
                    <label className={cn.form__item}>
                        <p className={cn.text}>Номер телефону</p>
                        <InputMask 
                            className={cn.input} 
                            mask="+38 (099) 999 99 99" 
                            maskChar=" " 
                            placeholder='+38 (099) 999 99 99'
                            // onChange={() => handleFormTelephone()}
                            {...register('telephone',
                                {
                                    required: 'Поле не може бути пустим',
                                    validate: validateTelephone
                                }, 
                            )}
                        />
                        <div className={cn.form__error}>
                            {errors?.telephone && 
                                <p>
                                    {errors?.telephone?.message}
                                </p>
                            }
                        </div>
                    </label>

                    <label className={cn.form__item}>
                        <p className={cn.text}>Ваше авто</p>
                        <select
                            className={cn.category}
                            {...register('manufacturer',
                                { 
                                    required: 'Виберіть марку авто', 
                                    onChange: (e) => setPickedManufacturer(e.target.value),
                                },
                                
                            )}
                        >
                            <option value="" disabled >Оберіть марку автомобіля</option>
                            {
                                manufacturerList.map((item, index) => (
                                    <option value={item._id} key={index}>{item.title}</option>
                                ))
                            }
                        </select>
                        {pickedManufacturer &&
                            <select
                            // defaultValue={setCategoryId ? category() : ""}
                            className={cn.category}
                            // onChange={(e) => setPickedCar(e.target.value)}
                            {...register('model',
                                { 
                                    required: 'Виберіть модель авто',
                                    onChange: (e) => setPickedCar(e.target.value),
                                }
                            )}
                        >
                            <option value="" disabled >Оберіть модель автомобіля</option>
                            {carsList &&
                                carsList.map((item, index) => (
                                    <option value={item.model} key={index}>{item.model}</option>
                                ))
                            }
                            </select>
                        }
                        {pickedCar &&
                            <select
                                defaultValue={pickedCarYear ? pickedCarYear : ""}
                                className={cn.category}
                                // onChange={(e) => setPickedCarYear(e.target.value)}
                                {...register('year',
                                    { 
                                        required: 'Виберіть рік випуску автомобіля',
                                        onChange: (e) => setPickedCarYear(e.target.value),
                                    }
                                )}
                            >
                            <option value="" disabled >Оберіть рік випуску автомобіля</option>
                                { pickedCar && yearOptions() }
                            </select>
                        }
                        <div className={cn.form__error}>
                            {errors?.manufacturer && 
                                <p>
                                    {errors?.manufacturer?.message}
                                </p>
                            }
                            {errors?.model && 
                                <p>
                                    {errors?.model?.message}
                                </p>
                            }
                            {errors?.year && 
                                <p>
                                    {errors?.year?.message}
                                </p>
                            }
                        </div>
                    </label>

                    <label className={cn.form__item}>
                        <p className={cn.text}>Категорія</p>
                        <select
                            // defaultValue={setCategoryId ? category() : ""}
                            className={cn.category}
                            {...register('category',
                                {
                                    required: 'Виберіть одну з категорій',
                                }
                            )}
                        >
                            <option value="" disabled >Оберіть категорію</option>
                            {
                                serviceCategoryList.map((item, index) => (
                                    <option value={item.title} key={index}>{item.title}</option>
                                ))
                            }
                        </select>
                        <div className={cn.form__error}>
                            {errors.category && 
                                <p>
                                    {errors.category.message}
                                </p>
                            }
                        </div>
                    </label>

                    <label className={cn.form__item}>
                        <p className={cn.text}>Короткий опис</p>
                        <textarea
                            className={[cn.input, cn.input_large].join(' ')} 
                            placeholder='Плавають оберти на холостому ходу двигуна'
                            defaultValue={text ? text : null}
                            {...register('text',
                            {
                                required: 'Поле не може бути пустим',
                                minLength: {
                                    value: 2,
                                    message: 'не може складатися менше ніж з 2 букв'
                                },
                                maxLength: {
                                    value: 300,
                                    message: 'Багато букв, не осилю скільки читати'
                                }
                            }
                        )}
                        />
                        <div className={cn.form__error}>
                            {errors?.text && 
                                <p>
                                    {errors?.text?.message}
                                </p>
                            }
                        </div>
                    </label>
                    
                    <button 
                        className="buttonModal"
                        onClick={handleSubmit(telegram)}
                    >
                        {isValid ? 'Відправити форму' : 'Заповніть всі поля'}
                    </button>
                </form>
            </div>
        }
        </>
        
    );
}

export default Reservation;
