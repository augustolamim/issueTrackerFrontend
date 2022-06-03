import React, { useEffect } from 'react'
import AuthService from '../util/auth.service'

const LogoutScreen = () => {
  useEffect(() => {
    AuthService.logout()
    location.href = '/'
  }, [])

  return (
    <><p>Logging out!</p></>
  )
}

export default LogoutScreen
