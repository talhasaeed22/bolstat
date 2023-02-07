import React from 'react'
import FunctiesBox from './FunctiesBox'

const Functies = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-gray-400 text-lg	'>BolStats</span>
                <h1 className='text-[#3051A3] text-3xl font-bold'>Functies</h1>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-center my-5'>
                <div className='lg:w-[55%] w-full flex flex-col gap-4 items-center'>
                    <FunctiesBox para={"Krijg een nieuwe notificatie op je telefoon bij een nieuwe bestelling of een nieuwe retour."} />
                    <FunctiesBox para={"Bekijk je dagelijkse statistieken met omzet, verkopen, bestellingen en open bestellingen."} />
                    <FunctiesBox para={"Bekijk je week en maand overzicht. "} />
                    <FunctiesBox para={"Via de app kan je makkelijk je voorraad in de gaten houden. Je kan er voor kiezen om een melding te krijgen als je voorraad bijna op is. "} />
                    <FunctiesBox para={"Bekijk gemakkelijk welke bestellingen je nog moet afhandelen en welke bestellingen verzonden zijn."} />
                    
                </div>
                <div className='flex items-center justify-center ' style={{zIndex:"-10"}}>
                    <img src={"/Images/Home/Functies.png"} alt="Functies" className='item-center flex justify-center md:w-full w-[70%]  my-5 md:my-0' />
                </div>
            </div>
        </>
    )
}

export default Functies
