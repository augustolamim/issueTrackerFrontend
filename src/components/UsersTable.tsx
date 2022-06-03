import React from 'react'
import { Table } from 'react-bootstrap'
import UsersTableItem from './UsersTableItem'
interface Props{
    id:string,
    nickname:string,
    role:string
}
const UsersTable = ({ items }:any) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Nickname</th>
            <th>Nível de acesso</th>
            </tr>
        </thead>
        <tbody>
        {items.map((item:Props, i:number) => <UsersTableItem key={i} id={item.id} nickname={item.nickname} role={item.role} />)}
        </tbody>
    </Table>
  )
}

export default UsersTable
