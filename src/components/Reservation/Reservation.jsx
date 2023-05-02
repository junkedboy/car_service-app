import React, { useState } from 'react'
import cn from './Reservation.module.sass'
import axios from "axios"
import okImg from '../../assets/img/service/ok.png'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { toggleVisibility, toggleReservationVisibility } from '../../store/modal'
import { serviceCategories } from '../../components/config' // TEMPORARY FAKE DB !!!

const Reservation = ({setCategoryId, text}) => {
    const dispatch = useDispatch()
    const [requestSent, setRequestSent] = useState(false)
    
    const { 
        register, 
        handleSubmit,
        formState: { errors, isValid } 
    } = useForm({
        mode: "onBlur"
    });

    function category() {
        const pickedCategory = serviceCategories.filter(item => item.id === setCategoryId)
        return pickedCategory[0].title
    }
    
    async function telegram(data) {


        await axios
            .post(`https://api.telegram.org/bot5320128940:AAGn2HWZ7zRRr5xqDzKOrka-bkeany9Yu9M/sendMessage?chat_id=473409829&text=Нове замовлення! ${getDate()}%0AКлієнт: ${data.name}%0AНомер телефону: ${data.telephone}%0AАвтомобіль: ${data.car}%0AКатегорія: ${data.category}%0AПоломка чи послуга: ${data.text}%0AХоче записатися на: <дана опція вимкнена>`)
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
                        <input 
                            className={cn.input} 
                            placeholder='097 111 11 11'
                            {...register('telephone',
                                {
                                    required: 'Поле не може бути пустим',
                                    minLength: {
                                        value: 10,
                                        message: 'Номер телефону не може складатися менше ніж з 10 цифр'
                                    },
                                    maxLength: {
                                        value: 13,
                                        message: 'Номер телефону не може складатися більше ніж з 13 цифр'
                                    },
                                    pattern: {
                                        value: /[0-9]/,
                                        message: 'Номер телефону не може складатися тільки з цифр'
                                    }
                                }
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
                        <input  
                            className={cn.input} 
                            placeholder='Hyundai Tiburon 2008'
                            {...register('car',
                            {
                                required: 'Поле не може бути пустим',
                                minLength: {
                                    value: 2,
                                    message: 'Назва не може складатися менше ніж з 2 букв'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Впевнений що це правильна назва твого авто?'
                                }
                            }
                        )}
                        />
                        <div className={cn.form__error}>
                            {errors?.car && 
                                <p>
                                    {errors?.car?.message}
                                </p>
                            }
                        </div>
                    </label>

                    <label className={cn.form__item}>
                        <p className={cn.text}>Категорія</p>
                        <select
                            defaultValue={setCategoryId ? category() : ""}
                            className={cn.category}
                            {...register('category',
                                {
                                    required: 'Виберіть одну з категорій',
                                }
                            )}
                        >
                            <option value="" disabled >Оберіть категорію</option>
                            {
                                serviceCategories.map((item, index) => (
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
