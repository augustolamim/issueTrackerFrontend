import React, { SyntheticEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer'
import UserService from '../util/users.service'

const SignupScreen = () => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    await UserService.createNewUser(nickname, password, role)

    location.href = '/'
  }
  return (
    <FormContainer>
        <h1>Cadastro</h1>
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
            <Form.Group className='my-3'>
                <Form.Label>Nível de Acesso</Form.Label>
                    <Form.Select
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    >
                    <option value ='' disabled>Escolha seu nível de acesso</option>
                    <option value='Scrum master'>Scrum Master</option>
                    <option value='QA Tester'>QA Tester</option>
                    <option value='Developer'>Developer</option>
                    </Form.Select>
            </Form.Group>
            <Button variant='primary' type='submit' className='my-3'>
                Enviar
            </Button>
        </Form>
    </FormContainer>
  )
}

export default SignupScreen
