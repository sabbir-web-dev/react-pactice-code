import React, { useContext } from 'react'
import { UseContext } from '../Context/UseContext';

function User(props) {
  const {id,name} = props.user;

  const {removeUser} = useContext(UseContext);

  const hendleRemove = () => {
    removeUser(id)
  }
  return (
    <div className='UserWrap'>
      <h5>{id}</h5>
      <h3>{name}</h3>
      <button className='UsrBtn' onClick={hendleRemove}>remove</button>
    </div>
  )
}

export default User
