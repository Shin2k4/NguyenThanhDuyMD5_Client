import axios from "axios"

export interface createCart {
    userId: number,
    productId: number,
    quantity: number,
    total:number
}

export interface deleteCart {
    id: number
}
export interface findCart {
    id: number
}
export const cartAPI = {
    getCart: async (id: findCart) => {
        return await axios.get(`http://127.0.0.1:3000/api/v1/cart/${id}`)
    },
    create: async (data: createCart) => {

        return await axios.post(`http://127.0.0.1:3000/api/v1/cart`, data)
    },
    delete: async (id: deleteCart) => {
        return await axios.delete(`http://127.0.0.1:3000/api/v1/cart/${id}`)
    },
}