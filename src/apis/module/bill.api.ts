import axios from "axios"

export interface createBill {
    userId: number,
    productId: string,
    quantity: number,
    Total: number,
}

export interface deleteBill {
    id: number
}
export interface findBill {
    id: number
}
export const billAPI = {
    getBill: async (id: number) => {
        return await axios.get(`http://127.0.0.1:3000/api/v1/bill/${id}`)
    },
    create: async (data: createBill) => {
        return await axios.post(`http://127.0.0.1:3000/api/v1/bill/createBill`, data)
    },
}