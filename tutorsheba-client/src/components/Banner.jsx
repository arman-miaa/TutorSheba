import { MdLocationPin } from "react-icons/md";
import SearchBtn from "./SearchBtn";

import banner1 from "../assets/banner1.svg";

import SwiperCards from "../swipers/SwiperCards";

const Banner = () => {
 


  return (
    <div
      className="bg-gray-100"
      style={{ clipPath: "polygon(0 1%, 100% 0, 100% 85%, 0% 100%)" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center bg-gray-100">
          <div className="flex-1">
            <h1 className="font-bold text-3xl lg:text-5xl text-[#800080]">
              Best <span className="text-blue-500">Tutoring Platform</span> for
              Home & Online Tuitions
            </h1>
            <h3 className="flex items-center text-2xl text-[#66789c] py-6">
              <MdLocationPin /> Find the Right Tutor in Your Area
            </h3>
            {/* Search Button */}
            <div>
              <SearchBtn />
            </div>
          </div>
          <div className="flex-1 w-full h-full  ">
            <img
              src={banner1}
              className="w-[420px] h-[420px]  ml-auto"
              alt="banner"
            />
          </div>
        </div>

        {/* Divisional Tutors */}
        <div className="mt-4">
          <p className="font-semibold text-lg">Divisional Tutors:</p>
          <SwiperCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
