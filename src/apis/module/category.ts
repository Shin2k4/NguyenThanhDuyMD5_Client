import axios from 'axios'


export const categoryAPI = {
    findAll: async function () {
        return await axios.get(`http://127.0.0.1:3000/api/v1/category`)
    },
    create: async function (data) {
        return await axios.post(`http://127.0.0.1:3000/api/v1/category`, data)
    },
    delete: async function (id: number) {
        return await axios.delete(`${import.meta.env.VITE_HOST}/api/v1/category/${id}`)
    },
}