import React, { useState } from 'react'
import UserShow from './UserShow';

function Users() {
  const [user] =useState({name:"sabbir",id:242404})

  return (
    <div>
      <UserShow user={user} />
    </div>
  )
}

export default Users
