import React, { useContext } from 'react'
import Component4 from "./Component4"
import { UseContext } from './UseContexCreate'

function Componsent3() {
  const {user} = useContext(UseContext);
  return (
    <div>
      <Component4 />
      {
        user.map(user=> <p key={user.id}>{`${user.id}. ${user.name}`}</p>)
      }
    </div>
  )
}

export default Componsent3
