import React from 'react'
import PropTypes from 'prop-types'

function UserShow(props) {
  return (
    <div>
      <h3>{props.user.name}</h3>
      <h3>{props.user.id}</h3>
    </div>
  )
}

UserShow.propTypes = {
  user : PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  })
}

export default UserShow


