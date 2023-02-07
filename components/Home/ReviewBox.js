import React from 'react'

const ReviewBox = ({ heading, para, initials }) => {
    return (
        <>

            <div className="shadow-lg flex flex-col p-10 rounded-[25px] lg:w-[88%] w-full ">
                <span className='text-[#3051A3] font-bold text-sm text-center'>“Handige app!”</span>
                <span className='text-left'>Mij werd gevraagd om deze nieuwe app te testen. Kleine dingen werkte nog niet en moest nog aan gewerkt worden, maar als je bol.com winkel eenmaal gekoppeld is werkt hij heel goed! Je krijgt veel statistieken te zien voor een normale prijs.</span>
                <div className='flex flex-col items-center justify-center mt-20 '>
                    <span className='text-gray-400 font-bold text-sm'>Bram K.</span>
                    <span className='text-gray-200 text-sm'>Bol.com ondernemer</span>
                </div>
            </div>

        </>
    )
}

export default ReviewBox
