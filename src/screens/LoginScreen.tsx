import React, { SyntheticEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer'

import AuthService from '../util/auth.service'
const LoginScreen = () => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    await AuthService.login(nickname, password)
    location.href = '/'
  }
  return (
    <FormContainer>
        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-3' controlId='nickname'>
                <Form.Label>Nickname</Form.Label>
                <Form.Control type='text' placeholder='Digite o seu nickname'
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='my-3' controlId='senha'>
                <Form.Label>Senha</Form.Label>
                <Form.Control type='password' placeholder='Digite a sua senha'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant='primary' type='submit' className='my-3'>
                Enviar
            </Button>
        </Form>
    </FormContainer>
  )
}

export default LoginScreen
