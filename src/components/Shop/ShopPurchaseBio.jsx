import React, { useEffect } from 'react';
import InputMask from 'react-input-mask';
import cn from './ShopPurchaseBio.module.sass'
import { useForm } from "react-hook-form"


const ShopPurchaseBio = ({ bio, setBio, onValidityChange }) => {
    const { 
        register,
        formState: { errors, isValid },
        watch
    } = useForm({
        mode: "onBlur"
    });

    const formData = watch();
    
    useEffect(() => {
        onValidityChange(isValid);
    }, [isValid]);

    useEffect(() => {
        setBio({...bio, name: formData.name})
    }, [formData.name])
    useEffect(() => {
        setBio({...bio, telephone: formData.telephone})
    }, [formData.telephone])
    useEffect(() => {
        setBio({...bio, email: formData.email})
    }, [formData.email])

    const validateTelephone = (value) => {
        if (value.replace(/[^0-9]/g, "").length < 12) {
            return "Мало цифр"
        }
        return true;
    };

    return (
        <div className={[cn.main, 'material'].join(' ')}>
            <h4>Контактні дані отримувача замовлення</h4>
            <span>Прізвище та імʼя</span>
            <input 
                className={['input', errors?.name && 'input_error'].join(' ')} 
                type="text" 
                placeholder='Іванов Іван'
                // onChange={handleFormName()}
                {...register('name',
                    {
                        required: 'Поле не може бути пустим',
                        minLength: {
                            value: 3,
                            message: 'Мало букв'
                        },
                        maxLength: {
                            value: 30,
                            message: 'Багато букв'
                        }
                    }
                )}
            />
            {errors?.name && 
                <p className="errorMessage">
                    {errors?.name?.message}
                </p>
            }
            <span>Номер телефону</span>
            <InputMask 
                className={['input', errors?.telephone && 'input_error'].join(' ')} 
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
            {errors?.telephone && 
                <p className="errorMessage">
                    {errors?.telephone?.message}
                </p>
            }
            <span>Електронна адреса</span>
            <input 
                className={['input', errors?.email && 'input_error'].join(' ')} 
                type="email" 
                placeholder='ivanov@mail.com'
                // onChange={() => handleFormEmail()}
                {...register('email',
                {
                    // required: 'Поле не може бути пустим',
                    // pattern: {
                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //     message: 'Невірний формат електронної адреси',
                    // },
                }
            )}
            />
            {errors?.email && 
            <p className="errorMessage">
                {errors?.email?.message}
            </p>
        }
        </div>
    );
}

export default ShopPurchaseBio;
