import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer'
import IssuesTable from '../components/IssuesTable'
import IssueService from '../util/issues.service'
import TokenService from '../util/token.service'

const ListIssueScreen = () => {
  // const navigate = useNavigate()
  const [tableIssues, setTableIssues] = useState([])
  const [userId, setUserId] = useState('')
  const [userRole, setUserRole] = useState('')
  const [deleted, setDeleted] = useState(false)
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    location.href = '/issues/create'
  }
  const deleteHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    const filteredIssues = tableIssues.filter((issue:any) => issue.checked)
    const idsToDelete = filteredIssues.map((issue:any) => issue.id)
    await IssueService.deleteIssues(idsToDelete)
    setDeleted((previousValue) => !previousValue)
  }
  useEffect(() => {
    const f = async () => {
      const { issues } = await IssueService.getAllIssues()
      const { id, role } = TokenService.getUser()
      issues.map((issue:any) => ({ ...issue, checked: false }))
      setUserId(id)
      setUserRole(role)
      setTableIssues(issues)
    }
    f()
  }, [deleted])

  return (
      <>
        {userRole !== 'Developer' &&
         <FormContainer>
              <Form onSubmit={submitHandler}>
                  <Button variant='primary' type='submit' className='my-3'>
                      Criar novo problema
                  </Button>
              </Form>

              <Form onSubmit={deleteHandler}>
                  <Button variant='danger' type='submit' className='my-3'>
                      Excluir selecionados
                  </Button>
              </Form>
        </FormContainer> }

          {tableIssues.length > 0 && <IssuesTable items={tableIssues} id={userId} role= {userRole}/>}
      </>
  )
}

export default ListIssueScreen
