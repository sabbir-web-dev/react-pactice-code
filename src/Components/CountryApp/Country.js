import React from 'react'

function Country(props) {
  const {name,flags,population} = props.country;


  const removeHendle = () =>{
    props.getDeleteName(name.common)
  }

  return (
    <div style={{padding: "20px", maxWidth:"100px"}}>
      <div className="">
      <img src={flags.png} style={{width:"50px",height: "30px",flex: " 1 1 80px"}} alt={name.common} />
      <h6> {name.common}</h6>
      <p>Population: {population}</p>
      <button onClick={removeHendle}>Remove</button>
      </div>
    </div>
  )
}

export default Country
