import React from 'react'
import useFatch from '../CustomHook/useFatch'

export default function UseCustomHook() {
    const {data,isLodding,error} = useFatch("https://jsonplaceholder.typicode.com/users");

    const element = data && data.map(data => {
      return  <div key={data.id}>
            <h3>Name:{data.name}</h3>
            <p><small>Email:{data.email}</small></p>
        </div>
    })
  return (
    <div>
        {
            error
        }
      {
        isLodding && <p>Data is Lodding....</p>
      }
      {
        element
      }
    </div>
  )
}
