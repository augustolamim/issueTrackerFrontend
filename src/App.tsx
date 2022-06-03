import React from 'react'
import './App.css'

import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import UserScreen from './screens/UserScreen'
import LogoutScreen from './screens/LogoutScreen'
import CreateIssueScreen from './screens/CreateIssueScreen'
import ListIssueScreen from './screens/ListIssueScreen'
import EditIssueScreen from './screens/EditIssueScreen'
function App () {
  return (
    <>
      <Header/>
        <main>
          <Container>
            <Routes>

              <Route path="/" element={<HomeScreen/>} />

              <Route path="/signup" element={<SignupScreen/>} />

              <Route path="/login" element={<LoginScreen/>} />

              <Route path="/users" element={<UserScreen/>} />

              <Route path="/logout" element={<LogoutScreen/>} />

              <Route path="/issues" element={<ListIssueScreen/>} />

              <Route path="/issues/create" element={<CreateIssueScreen/>} />

              <Route path="/issues/edit" element={<EditIssueScreen/>} />

            </Routes>
          </Container>
        </main>
        <Footer/>
    </>

  )
}

export default App
