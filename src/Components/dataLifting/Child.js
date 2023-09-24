import React from 'react'

export default function Child(props) {
    const data = "This is child Data"
    props.onData(data)
  return (
    <div>
      <h2>This is Child</h2>
    </div>
  )
}
