import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function User() {
  const [searchParams,setSearchParams] = useSearchParams();
  const [searchQ,setSearchQ] = useState("");
  const hendleSubmit = (e) =>{
    e.preventDefault();
    setSearchParams({user : searchQ});
    console.log(searchParams.get("user"))
  }
  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input type="text"
          onChange={(e)=> setSearchQ(e.target.value)}
          value={searchQ}
        />
        <button type="submit">Search</button>
      </form>
      <h2>{}</h2>
    </div>
  )
}

export default User
