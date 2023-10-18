import React from 'react'
import Country from './Country'

function Countrys(props) {
  const {countrys} = props
  return (
    <div>
      {
        countrys.map(country => <Country country={country} key={country.name.common} getDeleteName={props.getDeleteName} />)
      }
    </div>
  )
}

export default Countrys
