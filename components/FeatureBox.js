import React from 'react'

const FeatureBox = ({para1, para2, image}) => {
    return (
        <>
            <div className='flex md:flex-row flex-col items-center justify-center'>
                <div className='lg:w-[55%] w-full flex flex-col'>
                    <span className='text-4xl text-[#3051A3] font-bold mb-3'>{para1}</span>
                    {para2.split('br').map((item, index)=>{
                        return <span className='font-bold' key={index}> {item} </span>
                    })}
                </div>
                <div>
                    <img src={image} alt="" className='item-center flex justify-center img-fluid' />
                </div>
            </div>
        </>
    )
}

export default FeatureBox
