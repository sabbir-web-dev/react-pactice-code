import React, { memo } from 'react'

function Counter({count,messageUp}) {
  console.log("im a message")
  return (
    <div>
      <p>message {count} </p>
      <button onClick={messageUp}>message +</button>
    </div>
  )
}

export default memo(Counter)
