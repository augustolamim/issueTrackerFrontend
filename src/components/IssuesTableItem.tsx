import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const IssuesTableItem = ({ item, id, role, showDelete }:any) => {
  const navigate = useNavigate()
  const [showEdit, setShowEdit] = useState(true)
  const checkHandler = () => {
    item.checked = !item.checked
  }
  const routeChange = () => {
    navigate('../issues/edit', { state: item })
  }
  useEffect(() => {
    if (role !== 'Developer' && item.issueCreator.id !== id) { setShowEdit(false) }
  }, [])

  return (
    <tr>
        {showDelete && <td ><input type="checkbox" onChange={() => checkHandler()}/></td>}
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.version}</td>
        <td>{item.description}</td>
        <td>{item.issueDeveloper.nickname}</td>
        <td>{item.issueCreator.nickname}</td>
        <td>{item.priority}</td>
        <td>{item.status}</td>
        <td>{dayjs(item.createdAt).format('DD/MM/YYYY H:m')}</td>
        {showEdit && <td><Button variant='alert' onClick={routeChange}> Editar </Button></td>}
    </tr>
  )
}

export default IssuesTableItem
