import React, { useContext } from 'react';
import { UseContext } from './UseContexCreate';


function Component4() {
  const {name} = useContext(UseContext);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  )
}

export default Component4
