import axios from "axios"

const novaPoshtaAPIv2 = 'https://api.novaposhta.ua/v2.0/json/'
const novaPoshtaAPIv2Key = '8561a61051df8b7d788ff767094bb2cf'

export async function fetchCityList(city) {
    try {
        const response = await axios.post(novaPoshtaAPIv2, {
            "apiKey": `${novaPoshtaAPIv2Key}`,
            "modelName": "Address",
            "calledMethod": "getCities",
            "methodProperties": {
                "FindByString": `${city}`
            }
        })
        return (response.data.data)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchDepartmentsList(ref) {
    try {
        const response = await axios.post(novaPoshtaAPIv2, {
            "apiKey": `${novaPoshtaAPIv2Key}`,
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "CityRef": `${ref}`
            }
        })
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}