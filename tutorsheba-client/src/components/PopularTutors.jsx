import PopularSwiper from "../swipers/PopularSwiper";
import TitleSection from "./TitleSection"


const PopularTutors = () => {
  return (
    <div className="bg-base-300">
      <TitleSection
        title={`Our Popular Tutors`}
        subtitle={`Here are few of the Verified Teachers`}
          />
          <PopularSwiper/>
    </div>
  );
}

export default PopularTutors