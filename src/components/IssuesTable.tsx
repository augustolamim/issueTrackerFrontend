import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import IssuesTableItem from './IssuesTableItem'

const IssuesTable = ({ items, id, role }:any) => {
  const [showDelete, setShowDelete] = useState(false)
  useEffect(() => {
    if (role === 'Scrum master') { setShowDelete(true) }
  }, [])
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            {showDelete && <th>#</th>}
            <th>Id</th>
            <th>Título</th>
            <th>Versão</th>
            <th>Descrição</th>
            <th>Desenvolvedor</th>
            <th>Autor do problema</th>
            <th>Prioridade</th>
            <th>Status</th>
            <th>Data de criação</th>
            <th>Editar</th>
            </tr>
        </thead>
        <tbody>
        {items.map((item:any, i:number) => <IssuesTableItem key={i} item={item} id={id} showDelete={showDelete} role={role}/>)}
        </tbody>
    </Table>
  )
}

export default IssuesTable
