import React from 'react'

const FunctiesBox = ({para}) => {
  return (
    <div className='shadow-lg rounded-[20px] lg:w-7/12 w-full sm:w-10/12 h-[70px] flex items-center justify-center text-center py-2 px-3	'>
      <span className='text-[14px] font-[500]'>{para}</span>
    </div>
  )
}

export default FunctiesBox
