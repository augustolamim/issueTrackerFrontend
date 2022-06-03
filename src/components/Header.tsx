import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import TokenService from '../util/token.service'

const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [token, setToken] = useState('')
//   useEffect(() => {
//     const f = async () => {
//       setToken(TokenService.getUser().token)
//       if (token) {
//         setIsLoggedIn(true)
//       } else {
//         setIsLoggedIn(false)
//       }
//       console.log(token)
//     }
//     f()
//   }, [isLoggedIn, token])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (TokenService.getUser().token) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand href='/'>Issue Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            {isLoggedIn
              ? <>
                <Nav.Link href='/issues'>Problemas</Nav.Link>
                <Nav.Link href= '/logout'>Logout</Nav.Link>
              </>
              : <>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/signup'>Cadastrar</Nav.Link>
            </>
            }
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
