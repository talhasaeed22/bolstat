import React from 'react'

const HomeComponent = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-gray-400 text-lg	'>BolStats</span>
        <h1 className='text-[#3051A3] text-3xl font-bold'>Onze IOS App</h1>
      </div>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 flex align-center justify-center lg:justify-end my-3 sm:my-0">
            <img src="/Images/Home/phone1.png" alt="phone1" className='img-fluid' />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 flex align-center justify-center my-3 sm:my-0">
            <img src="/Images/Home/phone1.png" alt="phone1" className='img-fluid' />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 flex align-center justify-center lg:justify-start my-3 sm:my-0">
            <img src="/Images/Home/phone1.png" alt="phone1" className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent
