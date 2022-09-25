import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import showCodeMessage from '~/api/code'

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200)
      // eslint-disable-next-line no-console
      console.debug('response', response.data)
    return response
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      console.error(showCodeMessage(response.status))
      return Promise.reject(response.data)
    }
    console.error('The network connection is abnormal, please try again later!')
    return Promise.reject(error)
  },
)
const service = {
  get: (url: string, data?: object) => axiosInstance.get(url, { params: data }),
  post: (url: string, data?: object) => axiosInstance.post(url, data),
  put: (url: string, data?: object) => axiosInstance.put(url, data),
  delete: (url: string, data?: object) => axiosInstance.delete(url, data),
}

export default service
