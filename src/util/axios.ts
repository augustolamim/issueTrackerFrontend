import axios, { AxiosRequestConfig } from 'axios'
import TokenService from './token.service'

const api = axios.create({
  baseURL: 'https://pure-stream-45308.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    config.headers = {}
  }
  const token = TokenService.getLocalAccessToken()
  if (token) {
    config.headers.Authorization = 'Bearer ' + token // for Spring Boot back-end
    // config.headers['x-access-token'] = token // for Node.js Express back-end
  }
  return config
})

api.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config
    if (originalConfig.url !== '/session' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        try {
          const rs = await api.post('/session/refresh', {
            refreshTokenId: TokenService.getLocalRefreshToken()
          })
          const { token } = rs.data.token
          if (rs.data.refreshToken) {
            const { refreshToken } = rs.data.refreshToken
            TokenService.updateLocalRefreshToken(refreshToken)
          }
          TokenService.updateLocalAccessToken(token)
          return api(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(err)
  }
)

export default api
