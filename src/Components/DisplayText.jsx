import React from 'react'

const DisplayText = (props) => {
  return (
    <p className='text-2xl font-bold text-gray-800 text-center'>{props.state}</p>
  )
}

export default DisplayText