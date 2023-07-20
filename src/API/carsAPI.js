import axios from "axios"

export async function fetchManufacturersList() {
    try {
        const response = await axios.get('http://localhost:3000/api/car_manufacturer')
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchManufacturerByID(manufacturerID) {
    try {
        const response = await axios.get(`http://localhost:3000/api/car_manufacturer/id/${manufacturerID}`)
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchCarsListByManufacturer(manufacturerID) {
    try {
        const response = await axios.get(`http://localhost:3000/api/cars/manufacturer/${manufacturerID}`)
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchCarsListByManufacturerID(carID) {
    try {
        const response = await axios.get(`http://localhost:3000/api/cars/${carID}`)
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}
