import React, { useState } from 'react'
import "./Count.css"
export default function Count() {
    const [count ,setCount] = useState(0)
    
    const upHendel =()=>{
        const sCount = count + 1;
        setCount(sCount)
    }
    const downHendel =()=>{
      setCount(count -1)
    }
    const resedHendel =()=>{
      let zero = 0;
      setCount( zero )
    }
  return (
    <div className='wrap'>
      <h2>Count: <strong>{count}</strong></h2>
      <button onClick={upHendel} disabled={ count=== 5 ? true : false} className="btn">+</button>
      <button onClick={downHendel} disabled={count === -5 ? true : false }className="btn">-</button>
      <button onClick={resedHendel} className="btn">0</button>
    </div>
  )
}
