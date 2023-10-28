import React from 'react'

function Search(props) {


  const hendleChange = (e)=>{
    props.getSearcValue(e.target.value);
  
    
  }
  return (
    <div>
      <input type="text"
       placeholder='Search Country'
       onChange={hendleChange}
       />
    </div>
  )
}

export default Search
