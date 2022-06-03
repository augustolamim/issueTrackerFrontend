import React, { SyntheticEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer'
import UsersTable from '../components/UsersTable'
// import { useNavigate } from 'react-router-dom'
import UserService from '../util/users.service'

const UserScreen = () => {
  // const navigate = useNavigate()
  const [role, setRole] = useState('')
  const [tableUsers, setTableUsers] = useState([])
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    const { users } = await UserService.getUsersByRole(role)
    setTableUsers(users)
    // navigate('/')
  }

  return (
    <>
        <FormContainer>
        <h1>Pesquisar usuários</h1>
            <Form onSubmit={submitHandler}>
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
        {tableUsers.length > 0 && <UsersTable items={tableUsers}/>}

    </>
  )
}
export default UserScreen
