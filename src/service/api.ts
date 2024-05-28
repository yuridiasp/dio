import axios from "axios";
import { ICreateUser, ILogin } from "./types";

export const api = axios.create({
    baseURL: 'http://localhost:8001'
})

export const createUser = async ({ name, email, password }: ICreateUser) => {
    try {
        const { status, statusText } = await api.post("/users", {
            name: name,
            email: email,
            senha: password
        })
        
        if (status === 201) {
            return { success: true, message: statusText }
        } else {
            return { success: false, message: statusText }
        }
    } catch (error) {
        return { success: false, error }
    }
}

export const getPosts = async () => {
    try {
        const { data } = await api.get("/posts")
    
        return data
    } catch (error) {
        return { success: false, error }
    }
}

export const getRanking = async () => {
    try {
        const { data } = await api.get("/ranking")
    
        return data
    } catch (error) {
        return { success: false, error }
    }
}