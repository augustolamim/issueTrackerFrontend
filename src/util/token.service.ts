const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user?.refreshToken.id
}
const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user?.token
}
const updateLocalAccessToken = (token:string) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  user.token = token
  localStorage.setItem('user', JSON.stringify(user) || '{}')
}
const updateLocalRefreshToken = (refreshToken:string) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  user.refreshToken = refreshToken
  localStorage.setItem('user', JSON.stringify(user) || '{}')
}
const getUser = () => {
  return JSON.parse(localStorage.getItem('user') || '{}')
}
const setUser = (user:object) => {
  localStorage.setItem('user', JSON.stringify(user))
}
const removeUser = () => {
  localStorage.removeItem('user')
}
const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  updateLocalRefreshToken,
  getUser,
  setUser,
  removeUser
}
export default TokenService
