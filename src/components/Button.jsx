import React from 'react'

const Button = ({name}) => {
  return (
    <div className='w-[100%] mt-[40px] rounded-md h-[50px] grid  place-content-center bg-gradient-to-r from-[#5240f9] to-[#f3526d] '> 
<p>{name}</p>
    </div>
  )
}

export default Button