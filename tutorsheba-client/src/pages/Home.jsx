import Banner from "../components/Banner";
import Featured from "../components/Featured";

import Feedbacks from "../components/Feedbacks";
import PopularTutors from "../components/PopularTutors";
import Services from "../components/Services";
import SpecialistSection from "../components/SpecialistSection";
import StudentProcess from "../components/StudentProcess";
import TuitionTypes from "../components/TuitionTypes";
import TutoringSection from "../components/TutoringSection";
import TutorProcess from "../components/TutorProcess";
import WantToBeCome from "../components/WantToBeCome";

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
      <Featured />
    </div>
  );
};

export default Home;
