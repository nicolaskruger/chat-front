import { AxiosResponse } from "axios";
import { useContext } from "react"
import { TokenContext } from "../../components/tokenContext"
import { URL, useAxios } from "./axios.api";


type UserDto = {
    id: number,
    name: string,
    password: string
}
type QueryPage = {
    page: number,
    size: number
}
type UserPage = {
    users: UserDto[],
    page: number
}

type QueryLogin = {
    name: string,
    password: string
}

type TokeResponse = {
    token: string
}

const useUserApi = () => {
    const { token } = useContext(TokenContext);

    const api = useAxios(
        URL,
        {
            authorization: `Bearer ${token}`
        }
    )

    const byId = async (id:number) => {
        const response: AxiosResponse<UserDto> = await api.get(
            `/user/${id}/id`
        );
        return response.data
    }

    const page = async (query:QueryPage) => {
        const response: AxiosResponse<UserPage> = await api.get(
            `/user/page`,
            {
                params: {
                    ...query
                }
            }
        )
        return response.data
    }

    const login = async (query:QueryLogin) => {
        const response: AxiosResponse<TokeResponse> = await api.get(
            '/user',
            {
                params: {
                    ...query
                }
            }
        )
        return response.data
    } 

    const create = async (user : UserDto) => {
        const response: AxiosResponse<UserDto> = await api.post(
            "/user",
            user
        )

        return response.data
    }



    return {
        byId,
        page,
        login,
        create
    }    
}

export {
    useUserApi
}