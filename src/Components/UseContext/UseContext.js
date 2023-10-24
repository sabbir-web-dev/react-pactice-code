import React from 'react'
import Component1 from './Component1';
import { UseContext } from './UseContexCreate';

  const user = [
    {id: 1, name: "sani"},
    {id:2 , name: "Tamim"}
  ]
  const name = "Sabbir Hosen"
function UseContextComponents() {
  return (
    <UseContext.Provider value={{user, name}}>
      <Component1 />
    </UseContext.Provider>
  )
}

export default UseContextComponents
