import React, { useState } from 'react'
import cn from './Authorization.module.sass'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { setLoginSession, setUserName } from '../../store/loginSession'
import { toggleLoginVisibility } from '../../store/modal'

const Authorization = ({  }) => {
    const { 
        register, 
        handleSubmit,
        formState: { errors, isValid } 
    } = useForm({
        mode: "onBlur"
    });

    const dispatch = useDispatch()

    function login(data){
        dispatch(setLoginSession(true))
        dispatch(setUserName(data.login))
        dispatch(toggleLoginVisibility(false))
    }

    return (
        <div className={cn.main}>
            <p className={cn.header}>Увійдіть щоб отримати доступ до історії обслуговування вашого авто на нашому СТО</p>
            <form className={cn.form}>
                <label className={cn.form__item}>
                    <p>Логін</p>
                    <input 
                        type="text"
                        {...register('login',
                            {
                                required: 'Поле не може бути пустим',
                                minLength: {
                                    value: 2,
                                    message: 'Логін не може складатися менше ніж з 2 символів'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Перевищений ліміт символів'
                                }
                            }
                        )}
                    />
                    <div className={cn.form__error}>
                        {errors?.login && 
                            <p>
                                {errors?.login?.message}
                            </p>
                        }
                    </div>
                </label>
                <label className={cn.form__item}>
                    <p>Пароль</p>
                    <input 
                        type="password"
                        {...register('password',
                        {
                            required: 'Поле не може бути пустим',
                            minLength: {
                                value: 2,
                                message: 'Короткий пароль'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Перевищений ліміт символів'
                            }
                        }
                    )}
                    />
                    <div className={cn.form__error}>
                        {errors?.password && 
                            <p>
                                {errors?.password?.message}
                            </p>
                        }
                    </div>
                </label>
            </form>
            <button 
                className="buttonModal"
                onClick={handleSubmit(login)}
            >
                увійти
            </button>
        </div>
    );
}

export default Authorization;
