import FeatureBox from '../components/FeatureBox'
import HomeComponent from '../components/Home/HomeComponent'
import ReviewPanel from '../components/Home/ReviewPanel'
import Functies from '../components/Home/Functies'
import Blur from '../components/Blur'
export default function Home() {
  return (
    <>
      <div className='my-6 mx-16'>
        <FeatureBox para1={'Al jouw statistieken op één plek'} para2={`De BolStats IOS app geeft je inzicht in jouw online bol.com br business. BolStats is een betaalbare app om je bedrijf te volgen.`} image="/Images/Home/home.svg" />
      </div>


      <HomeComponent/>

      <ReviewPanel/>

      <Functies />

      <div className="my-6 text-center">
        <span className=' text-[23px] text-gray-200'>© Copyright 2023 bolstats.nl, alle rechten voorbehouden</span>
      </div>

      <Blur width={'8rem'} height={'28rem'} top={'23%'} left={'82%'} />
      <Blur width={'8rem'} height={'28rem'} top={'100%'} left={'-6%'} />
      <Blur width={'8rem'} height={'28rem'} top={'280%'} left={'82%'} />
      <Blur width={'8rem'} height={'28rem'} top={'330%'} left={'-6%'} />

    </>
  )
}
