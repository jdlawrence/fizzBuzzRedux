import React, { PropTypes } from 'react'

const DisplayStrings = ({ fizz, buzz }) => {
  
  return (
    <div>
      <p>fizz is now: { fizz } </p>
      <p>buzz is now: { buzz } </p>
    </div>
  )
}

DisplayStrings.propTypes = {
  fizz: PropTypes.string.isRequired,
  buzz: PropTypes.string.isRequired
}

export default DisplayStrings;

