import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IAuthContextProviderProps, IAuthContext, ILoginData } from "./types";
import { IUser } from "../types/user";
import { api } from "../service/api";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.get(`/users?email=${loginData.email}&senha=${loginData.password}`);
            
            if (data.length === 1) {
                setUser(data[0]);
                navigate('/feed');
            } else {
                alert("Email ou senha inválido");
            }
        } catch (error) {
            alert(error);
        }
    }

    const handleSignOut = () => {
        setUser({} as IUser)
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
};