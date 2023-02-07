import React from 'react'
import ReviewBox from './ReviewBox'

const ReviewPanel = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-gray-400 text-lg	'>BolStats</span>
        <h1 className='text-[#3051A3] text-3xl font-bold'>Test-panel reviews</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 col-sm-12 justify-center flex my-3 sm:my-0 ">
            <ReviewBox />

          </div>
          <div className="col-md-4 col-sm-12 justify-center flex my-3 sm:my-0 ">
            <ReviewBox />

          </div>
          <div className="col-md-4 col-sm-12 justify-center flex my-3 sm:my-0 ">
            <ReviewBox />

          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewPanel
