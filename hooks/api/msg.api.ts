import { AxiosResponse } from "axios";
import { useContext } from "react";
import { TokenContext } from "../../components/tokenContext";
import { URL, useAxios } from "./axios.api";

type QueryPage = {
    id: number,
    page: number,
    size: number
}

type QuerySkipTake = {
    id: number,
    skip: number,
    take: number
}

type PageDto = {
    size: number,
    page: number
}

type MsgDto = {
    id: number,
    date: string,
    message: string,
    senderId: number,
    reciveId: number
}

type PageReturn = {
    data: MsgDto[],
    page: PageDto
}

type SkipTakeReturn = {
    data: MsgDto[]
}

type Count = {
    count: number
}

type BodySend = {
    reciverId: number,
    message: string
}

const useMsgApi = () => {
    const { token } = useContext(TokenContext);

    const api = useAxios(
        URL,
        {
            authorization: `Bearer ${token}`
        }
    )

    const page = async (query:QueryPage) => {
        const result:AxiosResponse<PageReturn> = await api.get(
            "/msg/page",
            {
                params: {
                    ...query
                }
            }
        )    
    }

    const skipTake = async (query:QuerySkipTake) => {
        const result: AxiosResponse<SkipTakeReturn> = await api.get(
            "/msg/skipTake",
            {
                params: {
                    ...query
                }
            }
        )

        return result.data
    }

    const count = async (id:number) => {
        const result: AxiosResponse<Count> = await api.get(
            "/msg/count",
            {
                params: {
                    id
                }
            }
        )
        return result.data
    }

    const send =async (body:BodySend) => {
        const result: AxiosResponse = await api.post(
            "/msg",
            body
        )
    }

    return {
        page,
        skipTake,
        count,
        send
    }
}

export {
    useMsgApi
}