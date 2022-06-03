import React from 'react'

const UsersTableItem = ({ id, nickname, role }:any) => {
  return (
    <tr>
        <td>{id}</td>
        <td>{nickname}</td>
        <td>{role}</td>
    </tr>
  )
}

export default UsersTableItem
