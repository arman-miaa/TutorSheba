import Banner from "../componets/Banner"
import PopularTutors from "../componets/PopularTutors"
import SpecialistSection from "../componets/SpecialistSection"
import TuitionTypes from "../componets/TuitionTypes"
import TutoringSection from "../componets/TutoringSection"
import WantToBeCome from "../componets/WantToBeCome"



const Home = () => {
  return (
      <div>
      <Banner />
      <TutoringSection />
      <PopularTutors />
      <SpecialistSection />
      <TuitionTypes />
      <WantToBeCome/>
    </div>
  )
}

export default Home