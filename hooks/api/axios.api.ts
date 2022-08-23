import axios from 'axios'

const URL = "http://localhost:5000"


const useAxios = (baseUrl: string, headers: any) => {
    return axios.create({
        baseURL: baseUrl,
        headers: headers
    })
}

export { 
    useAxios,
    URL
}