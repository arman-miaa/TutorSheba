import PopularSwiper from "../swipers/PopularSwiper";
import TitleSection from "./TitleSection"


const PopularTutors = () => {
  return (
    <div>
      <TitleSection
        title={`Our Popular Tutors`}
        subtitle={`Here are few of the Verified Teachers`}
          />
          <PopularSwiper/>
    </div>
  );
}

export default PopularTutors