import React, { useState, useEffect, useMemo, useRef } from 'react';
import cn from './ShopPurchaseDelivery.module.sass'
import axios from "axios"
import { fetchCityList, fetchDepartmentsList } from '../../API/novaPoshtaAPI'

const ShopPurchaseDelivery = ({ address, setAddress }) => {
    const [inputCity, setInputCity] = useState('')
    const [cityListVisibility, setCityListVisibility] = useState(false)
    const [inputDept, setInputDept] = useState('')
    const [deptListVisibility, setDeptListVisibility] = useState(false)
    const [novaPoshtaCityList, setNovaPoshtaCityList] = useState([])
    const [novaPoshtaDept, setNovaPoshtaDept] = useState([])

    // коли користувач закінчує набирати текст йде запрос міст нової пошти
    useEffect(() => {
        if (inputCity !== '') {
            const delay = setTimeout(async () => {
                const response = await fetchCityList(inputCity)
                setNovaPoshtaCityList(response)
                setCityListVisibility(true)
            }, 500);
            return () => clearTimeout(delay);
          } else {
        // якщо сіті інпут пустий
            setInputCity('');
            setInputDept('')
            setCityListVisibility(false)
            setAddress({city: null, department: null})
          }
    }, [inputCity]);

    async function cityPickHandler (city, area, cityRef) {
        setCityListVisibility(false)
        const cityFullPath = `${city}, ${area} область`
        setInputCity(cityFullPath)
        setAddress({...address, city: cityFullPath, cityRef: cityRef})

        const response = await fetchDepartmentsList(cityRef)
        setNovaPoshtaDept(response)
    }
    function departmentPickHandler (warehous){
        setAddress({...address, department: warehous})
        setInputDept(warehous)
        setDeptListVisibility(false)
    }

    function openDepartmentsList() {
        setInputDept('')
        setDeptListVisibility(true)
        setAddress({...address, department: null})
    }
    // hide openDepartmentsList
    const rootEl = useRef(null)
    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setDeptListVisibility(false)
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])

    const searched = useMemo(() => {
        return novaPoshtaDept.filter(item => item.Description.toLowerCase().includes(inputDept.toLowerCase()))
    }, [inputDept, novaPoshtaDept])
    
    return (
        <div ref={rootEl} className={[cn.main, 'material'].join(' ')}>
            <h4>Нова Пошта</h4>
            <div className={cn.main__item}>
                <span>Введіть назву міста чи населеного пункту</span>
                <div className={cn.dropdown}>
                    <input 
                        className={[cn.dropdown__input, 'input'].join(' ')} 
                        value={inputCity} 
                        onChange={(e) => setInputCity(e.target.value)}
                        onClick={() => setCityListVisibility(true)}
                        placeholder='пошук'
                        type="text"
                    />
                    {novaPoshtaCityList.length > 0 && cityListVisibility &&
                    <ul className={cn.dropdown__list}>
                        {novaPoshtaCityList.map(item => (
                            <li key={item.Description} 
                                className={cn.dropdown__listItem}
                                onClick={() => cityPickHandler(item.Description, item.AreaDescription, item.Ref)}
                            >
                                {item.Description}, {item.AreaDescription} область
                            </li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
            {inputCity &&
                <div className={cn.main__item}>
                    <span>Оберіть відділення</span>
                    <div className={cn.dropdown}>
                        <input 
                            className={[cn.dropdown__input, 'input'].join(' ')} 
                            value={inputDept} 
                            onChange={(e) => setInputDept(e.target.value)} 
                            type="text" 
                            placeholder='пошук'
                            onClick={() => openDepartmentsList()}
                        />
                        {deptListVisibility && novaPoshtaDept.length > 0 &&
                        <ul className={cn.dropdown__list}>
                            {searched.map(item => (
                                <li 
                                    key={item.SiteKey} 
                                    className={cn.dropdown__listItem}
                                    onClick={() => departmentPickHandler(item.Description)}
                                >
                                    {item.Description}
                                </li>
                            ))}
                        </ul>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default ShopPurchaseDelivery;
