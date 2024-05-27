import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8001'
})

export const createUser = async ({ name, email, password }) => {
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

export const login = async ({ email, password }) => {
    try {
        const { data } = await api.get(`/users?email=${email}&senha=${password}`)
        
        if (data.length === 1) {
            return { success: true }
        } else {
            return { success: false, message: "Email ou senha inválido" }
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