import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

class Request {
    private instance: AxiosInstance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create({
            baseURL: '/api',
            timeout: 10000,
            ...config,
        })

        // Add request interceptor
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // Do something before sending request
                console.log('Request interceptor triggered')

                return config
            },
            (error: any) => {
                // Do something with request error
                console.error('Request interceptor error:', error)

                return Promise.reject(error)
            },
        )

        // Add response interceptor
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                // Do something with response data
                console.log('Response interceptor triggered')
                const responseData = response.data

                return responseData
            },
            (error: any) => {
                // Do something with response error
                console.error('Response interceptor error:', error)

                return Promise.reject(error)
            },
        )
    }

    public async request<T>(config: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.instance.request(config)

        return response.data
    }
}

// Function
function request<T>(config: AxiosRequestConfig): Promise<T> {
    const instance = new Request(config)

    return instance.request(config)
}

export default request
