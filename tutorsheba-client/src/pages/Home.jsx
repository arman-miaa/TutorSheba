import Banner from "../componets/Banner"
import Featured from "../componets/featured"
import Feedbacks from "../componets/Feedbacks"
import PopularTutors from "../componets/PopularTutors"
import Services from "../componets/Services"
import SpecialistSection from "../componets/SpecialistSection"
import StudentProcess from "../componets/StudentProcess"
import TuitionTypes from "../componets/TuitionTypes"
import TutoringSection from "../componets/TutoringSection"
import TutorProcess from "../componets/TutorProcess"
import WantToBeCome from "../componets/WantToBeCome"



const Home = () => {
  return (
      <div>
      <Banner />
      <TutoringSection />
      <PopularTutors />
      <SpecialistSection />
      <TuitionTypes />
      <WantToBeCome />
      <Feedbacks />
      <Services />
      <TutorProcess />
      <StudentProcess />
      <Featured/>
    </div>
  )
}

export default Home