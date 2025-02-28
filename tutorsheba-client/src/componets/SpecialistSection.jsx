import Specialist from "../swipers/Specialist"
import TitleSection from "./TitleSection"


const SpecialistSection = () => {
  return (
    <div>
      <TitleSection
        title={`Find Your Subject Specialist`}
        subtitle={`Find Our Specialist to reach your dream goal`}
      />
      <Specialist />
    </div>
  );
}

export default SpecialistSection