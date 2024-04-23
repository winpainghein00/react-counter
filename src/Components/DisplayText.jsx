import React from 'react'

const DisplayText = (props) => {
  return (
    <p className='md:text-2xl text-6xl font-bold text-gray-800 text-center'>{props.state}</p>
  )
}

export default DisplayText