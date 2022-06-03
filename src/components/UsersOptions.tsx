import React from 'react'
interface Props{
    id:string,
    nickname:string
}
const UsersOptions = ({ items }:any) => {
  return (
    <>
    {items.map((item:Props, i:number) => <option key={i} value={item.id} >{item.nickname}</option>)}
    </>
  )
}

export default UsersOptions
