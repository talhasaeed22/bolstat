import React from 'react'

const Blur = ({width, height, top, right, left}) => {
  return (
    <div className='hidden md:block' style={{backgroundColor:"#3051A3", position:"absolute", width:width, height:height, borderRadius:'50%', background:'#3051A3', filter:'blur(100px)', zIndex:'-9', top:top, left:left}}>
      
    </div>
  )
}

export default Blur
