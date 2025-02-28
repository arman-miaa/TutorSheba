import Banner from "../componets/Banner"
import PopularTutors from "../componets/PopularTutors"
import SpecialistSection from "../componets/SpecialistSection"
import TutoringSection from "../componets/TutoringSection"



const Home = () => {
  return (
      <div>
      <Banner />
      <TutoringSection />
      <PopularTutors />
      <SpecialistSection/>
    </div>
  )
}

export default Home