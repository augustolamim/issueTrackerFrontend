import api from './axios'
import TokenService from './token.service'
const getUsersByRole = async (role:string) => {
  const res = await api.get(`users?role=${role}`)
  return res.data
}
const createNewUser = async (nickname:string, password:string, role:string) => {
  const res = await api.post('/users', {
    nickname,
    password,
    role
  })
  TokenService.setUser(res.data.user)
}
const UserService = {
  getUsersByRole,
  createNewUser
}
export default UserService
