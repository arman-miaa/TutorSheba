import PopularSwiper from "../swipers/PopularSwiper";
import TitleSection from "./TitleSection"


const PopularTutors = () => {
  return (
    <div className="bg-base-300">
      <div className=" container mx-auto">
        <TitleSection
          title={`Our Popular Tutors`}
          subtitle={`Here are few of the Verified Teachers`}
        />
        <div className="w-full flex justify-end">
          {" "}
          <button className="px-2 button cursor-pointer py-1 block text-center text-white  rounded border border-[rgba(0,0,0,0.1)] bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890]">
            View More
          </button>
        </div>
        <PopularSwiper />
      </div>
    </div>
  );
}

export default PopularTutors