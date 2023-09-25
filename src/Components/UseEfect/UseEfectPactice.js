import React, { useEffect, useState } from 'react'

export default function UseEfectPactice() {
  const [count,setCount] = useState(0);
  const [names,setNames] = useState([]);
  // const [loading, setIsLoding] =useState(true);

  const element = names.map((name,index) => {
    return <p key={index}>{name.name}</p>
  })


  useEffect (() => {

  },[count]);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json()
        })
        .then(data => {
          setNames(data)
        })
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count +1)}>+</button>
      {element}
    </div>
  )
}

