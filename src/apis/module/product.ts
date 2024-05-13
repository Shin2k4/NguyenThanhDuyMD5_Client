import axios from 'axios'

const version = "1"
export interface CreateProduct {
    name: string;
    description: string;
    quantity: number;
    price: number;
    images: string
    categoryId: number;
}

export interface UpdateProduct {
    name: string;
    description: string;
    quantity: number;
    price: number;
    images: string
    categoryId: number;
}



export const productApi = {

    findAll: async function () {
        return await axios.get(`${import.meta.env.VITE_HOST}/api/v${version}/product`)
    },
    createProduct: async function (data: CreateProduct) {
        return await axios.post(`${import.meta.env.VITE_HOST}/api/v${version}/product`, data)
    },
    deleteProduct: async function (id: number) {
        return await axios.delete(`${import.meta.env.VITE_HOST}/api/v${version}/product/${id}`)
    },
    updateProduct: async function (id: number, data: UpdateProduct) {
        console.log(data);
        
        return await axios.patch(`${import.meta.env.VITE_HOST}/api/v${version}/product/${id}`, data)

    }
}