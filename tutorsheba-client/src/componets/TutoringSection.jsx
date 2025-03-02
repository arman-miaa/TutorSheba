import TitleSection from "./TitleSection"
import tutoring from '../assets/tutoring.svg'
import { FaArrowRight, FaSearchengin } from "react-icons/fa6";

const TutoringSection = () => {
  return (
    <div className="container mx-auto">
      <TitleSection
        title={`SEARCH TUTORING JOBS`}
        subtitle={`Find Your Tution Jobs, in your area`}
      />
      {/* img and text */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <img src={tutoring} alt="" />
        </div>
        <div className="flex-1 text-justify">
          <h3 className="font-bold text-xl">
            Looking for interesting tuition jobs to excel your teaching
            experience?
          </h3>
          <p className="text-[#66789c]">
            If teaching jobs interests you, then you are on the right place.
            tutorsheba.com, we often have 500+ open home tuition jobs that are
            genuine and 100% verified. Whether you are starting your career as a
            tuition teacher or an expert in your field, we can help you find
            your next big tuition job. You can search and apply to the tuition
            jobs that best fit your skills, favorable location, class and
            subjects.
          </p>
          {/* btn */}
          <div className="flex justify-center items-center mt-4">
            <button
              className="relative px-6 py-3 text-white font-semibold uppercase flex items-center gap-2 
      border-2 border-purple-700 shadow-lg shadow-gray-400 
      overflow-hidden"
            >
              {/* Background Overlay */}
              <span
                style={{
                  clipPath: "polygon(0 1%, 100% 3%, 29% 100%, 0% 100%)",
                }}
                className="absolute inset-0 w-1/2 bg-pink-700 z-30"
              ></span>
              <span className="absolute inset-0  bg-purple-700"></span>

              {/* Text Content */}
              <span className="relative flex items-center gap-2 z-50">
                <FaSearchengin /> SEARCH TUITION <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutoringSection