import { createContext, FC, ReactNode } from "react";
import useCookies from "../hooks/useCokies";

type TokenContextType = {
    setToken: (token:string) => void, 
    token: string
}

const TokenContext = createContext<TokenContextType>({} as TokenContextType)

type TokeType = {
    children: ReactNode
}

const TokenProvider: FC<TokeType> = ({ children }) => {
    
    const [token, setToken] = useCookies("", "TOKEN") 
    
    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export {
    TokenProvider,
    TokenContext
}