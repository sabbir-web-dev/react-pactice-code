import React, { useState } from 'react'

function Search(props) {
  const [input,setInput] =useState();

  const hendleChange = (e)=>{
    props.getSearcValue(e.target.value);
  }
  return (
    <div>
      <input type="text"
       name="" 
       id="" 
       placeholder='Search Country'
       onChange={hendleChange}
       value={input}
       />
    </div>
  )
}

export default Search
