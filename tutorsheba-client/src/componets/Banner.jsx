import { MdLocationPin } from "react-icons/md";
import SearchBtn from "./SearchBtn";

import banner1 from "../assets/banner1.svg";

import SwiperCards from "./SwiperCards";

const Banner = () => {
 


  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1>
            Best <span>Tutoring Platform</span> for Home & Online Tuitions
          </h1>
          <h3>
            <MdLocationPin /> Find the Right Tutor in Your Area
          </h3>
          {/* Search Button */}
          <div>
            <SearchBtn />
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <img src={banner1} alt="banner" />
        </div>
      </div>

      {/* Divisional Tutors */}
      <div className="mt-4">
        <p className="font-semibold text-lg">Divisional Tutors:</p>
       <SwiperCards/>
      </div>
    </div>
  );
};

export default Banner;
