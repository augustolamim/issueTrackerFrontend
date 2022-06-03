import api from './axios'
import TokenService from './token.service'

const login = async (nickname:string, password:string) => {
  const response = await api
    .post('/session', {
      nickname,
      password
    })
  if (response.data.user.token) {
    TokenService.setUser(response.data.user)
  }
  return response.data.user
}
const logout = () => {
  TokenService.removeUser()
}
const register = (nickname:string, password:string, role:string) => {
  api.post('/users', {
    nickname,
    password,
    role
  })
}
const getCurrentUser = () => {
  return TokenService.getUser()
}

const AuthService = {
  login,
  logout,
  register,
  getCurrentUser
}
export default AuthService
