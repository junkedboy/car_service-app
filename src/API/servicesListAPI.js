import axios from "axios"

export async function fetchCategoryList() {
    try {
        const response = await axios.get('http://localhost:3000/api/category/')
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}
export async function addNewCategory(data) {
    try {
        const response = await axios.post('http://localhost:3000/api/category/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        console.log(e)
    }
}
export async function editCategory(data) {
    try {
        const response = await axios.put('http://localhost:3000/api/category/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        console.log(e)
    }
}
export async function deleteCategory(id) {
    try {
        await axios.delete(`http://localhost:3000/api/category/${id}`)
    } catch (e) {
        console.log(e)
        return e.response
    }
}

// послуги

export async function addNewService(data) {
    try {
        const response = await axios.post('http://localhost:3000/api/services/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export async function fetchServiceList( page, pageLimit, categoryId ) {
    try {
        const response = await axios.get(`http://localhost:3000/api/services?category=${categoryId ? categoryId : ''}&page=${page}&pageSize=${pageLimit}`)
        return (response.data)
    } catch (e) {
        console.log(e)
    }
}
export async function editService(data) {
    try {
        const response = await axios.put('http://localhost:3000/api/services/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        console.log(e)
    }
}
export async function deleteService(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/api/services/${id}`)
    } catch (e) {
        console.log(e)
    }
}