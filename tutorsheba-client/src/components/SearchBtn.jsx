import { FaArrowRight, FaSearchengin } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const SearchBtn = () => {
  return (
    <div>
      <button
        className="relative cursor-pointer px-8 py-3 rounded-full bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#9d1574] text-white font-semibold border-2 border-purple-500 
  shadow-[0_0_20px_10px_rgba(102,210,206,0.4)] 
  hover:shadow-[0_0_25px_15px_rgba(125,12,112,0.4)]
  hover:border-[#7d0c70] hover:bg-[#9d1574] hover:bg-opacity-80 
  transition-all duration-300 
  active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.3)] group hover:border-8"
      >
        <span className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinecap="currentColor"
            fill="none"
            className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-300"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeWidth="2" // Fixed strokeWidth attribute
              strokeLinejoin="round" // Fixed strokeLinejoin attribute
              strokeLinecap="round" // Fixed strokeLinecap attribute
            ></path>
          </svg>
          <IoSearch className="text-2xl font-bold" /> <span>FIND A TUTOR</span>{" "}
          <FaArrowRight className="text-xl" />
        </span>
        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
      </button>
    </div>
  );
};

export default SearchBtn;
