import React from 'react'

const TextComponent = ({span}) => {
  return (
    <div className='flex flex-col'>
        {span.map((item, index)=>{
            return item ==='br' ? <br /> : <span key={index} className='text-[#A1A1A1] text-[15px] font-[400] '>{item}</span>
        })}
    </div>
  )
}

export default TextComponent
