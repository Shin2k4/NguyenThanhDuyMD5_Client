
import axios from 'axios';

const prefix = "user"
const version = "1"

export interface CreateUser {
    userName: string,
    email: string,
    password: string,
}

export interface LoginUser {
    userName: string,
    password: string,
}
export interface Token {
    token: string,
}

export const userApi = {

    register: async (data: CreateUser) => {
        return await axios.post(`${import.meta.env.VITE_HOST}/api/v${version}/${prefix}/register`, data)
    },

    login: async (data: LoginUser) => {
        return await axios.post(`${import.meta.env.VITE_HOST}/api/v${version}/${prefix}/login`, data)
    },

    getToken: async (token: Token) => {
        return await axios.post(`http://127.0.0.1:3000/api/v1/user/getToken`, token)
    },

}