import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer'
import UsersOptions from '../components/UsersOptions'
import IssueService from '../util/issues.service'
import UserService from '../util/users.service'

const CreateIssueScreen = () => {
  const [title, setTitle] = useState('')
  const [version, setVersion] = useState('')
  const [description, setDescription] = useState('')
  const [issueDeveloperId, setIssueDeveloperId] = useState('')
  const [priority, setPriority] = useState('')
  const [optionUsers, setOptionUsers] = useState([])

  useEffect(() => {
    const f = async () => {
      const { users } = await UserService.getUsersByRole('Developer')
      setOptionUsers(users)
    }
    f()
  }, [])

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    await IssueService.createNewIssue(title, version, description, issueDeveloperId, priority)

    location.href = '/issues'
  }
  return (
    <FormContainer>
        <h1>Cadastro de Problemas</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-3' controlId='title'>
                <Form.Label>Título</Form.Label>
                <Form.Control type='text' placeholder='Digite o título do problema'
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='my-3' controlId='version'>
                <Form.Label>Versão</Form.Label>
                <Form.Control type='text' placeholder='Digite a versão'
                value={version}
                onChange={e => setVersion(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='my-3' controlId='description'>
                <Form.Label>Descrição</Form.Label>
                <Form.Control type='text' placeholder='Digite a descrição do problema'
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='my-3'>
                <Form.Label>Atribuição</Form.Label>
                    <Form.Select
                    value={issueDeveloperId}
                    onChange={e => setIssueDeveloperId(e.target.value)}
                    >
                    <option value ='' disabled>Atribua a um desenvolvedor</option>
                    <UsersOptions items={optionUsers}/>
                    </Form.Select>
            </Form.Group>
            <Form.Group className='my-3' controlId='priority'>
                <Form.Label>Prioridade</Form.Label>
                    <Form.Select
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                    >
                    <option value ='' disabled>Escolha a prioridade do problema</option>
                    <option value='Baixa'>Baixa</option>
                    <option value='Normal'>Normal</option>
                    <option value='Alta'>Alta</option>

                    </Form.Select>
            </Form.Group>
            <Button variant='primary' type='submit' className='my-3'>
                Enviar
            </Button>
        </Form>
    </FormContainer>
  )
}

export default CreateIssueScreen
