import React from 'react'

function Country(props) {
  const {name,flags,population} = props.country;

  const removeHendle = () =>{
    props.getDeleteName(name.common)
  }
  return (
    <div style={{padding: "20px"}}>
      <img src={flags.png} alt={name.common} />
      <h3>Name: {name.common}</h3>
      <p>Population: {population}</p>
      <button onClick={removeHendle}>Remove</button>
    </div>
  )
}

export default Country
