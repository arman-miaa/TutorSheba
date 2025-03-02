import { FaArrowRight, FaSearchengin } from "react-icons/fa6";

const SearchBtn = () => {
  return (
    <div>
      <button className="relative px-8 py-3 bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890]  text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-[#7d0c70] transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group hover:border-8 ">
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
        <FaSearchengin/>  <span>FIND A TUTOR</span> <FaArrowRight/>
        </span>
        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
      </button>
    </div>
  );
};

export default SearchBtn;
