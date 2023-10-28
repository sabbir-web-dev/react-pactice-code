import React, { memo, useMemo } from 'react'

function Counter({count,messageUp}) {
  console.log("im a message");

  const number = useMemo(()=>{
    let num = 0;
    for (let index = 0; index < 50000000; index++) {
      num++ 

    }
    return num;
  },[])
  console.log(number)
  return (
    <div>
      <h2>{number}</h2>
      <p>message {count} </p>
      <button onClick={messageUp}>message +</button>
    </div>
  )
}

export default memo(Counter)
