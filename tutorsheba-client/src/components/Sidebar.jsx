import {
  FaChalkboardTeacher,
  FaHome,
  FaLaptopHouse,
  FaUser,
  FaMale,
  FaFemale,
} from "react-icons/fa";

const Sidebar = ({ onSearch, onDateSearch }) => {
  return (
    <div className="flex mt-16">
      {/* Sidebar */}
      <div className="w-96 min-h-screen px-12 shadow-lg rounded-lg">
        <h2 className="mb-6 font-bold text-3xl secondaryTextColor">
          Advanced Filter
        </h2>

        {/* Search by ID */}
        <div className="mb-4">
          <label className="block font-bold secondaryTextColor text-xl flex items-center gap-2">
            Search By Job ID
          </label>
          <input
            type="text"
            placeholder="Enter job id..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full mt-2 p-2 border rounded focus:outline-none"
          />
        </div>

        {/* Search by Date */}
        <div className="mb-4">
          <label className="block font-bold secondaryTextColor text-xl  flex items-center gap-2">
            Search By Date
          </label>
          <input
            type="date"
            onChange={(e) => onDateSearch(e.target.value)}
            className="w-full mt-2 p-2 border rounded focus:outline-none"
          />
        </div>

        {/* Tuition Type */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold secondaryTextColor text-xl">Tuition Type</h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox-style" />
            <span className="text-gray-700 text-lg">All Tuition</span>
            <FaChalkboardTeacher className="ml-auto text-gray-600" />
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox-style" />
            <span className="text-gray-700 text-lg">Home Tuition</span>
            <FaHome className="ml-auto text-gray-600" />
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox-style" />
            <span className="text-gray-700 text-lg">Online Tuition</span>
            <FaLaptopHouse className="ml-auto text-gray-600" />
          </label>
        </div>

        {/* Tutor Preference */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold secondaryTextColor text-xl">
            Tutor Preference
          </h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox-style" />
            <span className="text-gray-700 text-lg">All</span>
            <FaUser className="ml-auto text-gray-600" />
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox-style" />
            <span className="text-gray-700 text-lg">Male</span>
            <FaMale className="ml-auto text-gray-600" />
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox-style" />
            <span className="text-gray-700 text-lg">Female</span>
            <FaFemale className="ml-auto text-gray-600" />
          </label>
        </div>

        {/* Select District */}
        <div className="mb-4">
          <label className="block font-bold secondaryTextColor text-xl flex items-center gap-2">
            Select District
          </label>
          <select className="w-full mt-2 p-2 border rounded focus:outline-none">
            <option value="">All</option>
            {[
              "Dhaka",
              "Chattogram",
              "Rajshahi",
              "Khulna",
              "Barishal",
              "Sylhet",
              "Rangpur",
              "Mymensingh",
              "Cumilla",
              "Narayanganj",
              "Gazipur",
              "Noakhali",
              "Jessore",
              "Bogura",
              "Tangail",
              "Pabna",
              "Dinajpur",
              "Cox’s Bazar",
              "Feni",
              "Brahmanbaria",
              "Jamalpur",
              "Sherpur",
              "Netrakona",
            ].map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Select Area */}
        <div className="mb-4">
          <label className="block font-bold secondaryTextColor text-xl">
            Select Area
          </label>
          <select className="w-full mt-2 p-2 border rounded focus:outline-none">
            <option value="">All</option>
          </select>
        </div>

        {/* Select Medium */}
        <div className="mb-4">
          <label className="block font-bold secondaryTextColor text-xl">
            Select Medium
          </label>
          <select className="w-full mt-2 p-2 border rounded focus:outline-none ">
            <option value="">All</option>
            <option value="bangla-medium">Bangla Medium</option>
            <option value="english-version">English Version</option>
            <option value="english-medium">English Medium</option>
            <option value="english-medium">Religious Studies</option>
            <option value="english-medium">Admin Test</option>
            <option value="english-medium">
              Professional Skill Development
            </option>
            <option value="english-medium">Arts</option>
            <option value="english-medium">Special Skill Development</option>
            <option value="english-medium">Uni Help</option>
            <option value="english-medium">Language Learning</option>
            <option value="english-medium">Test Preparation</option>
            <option value="english-medium">Madrasa Medium</option>
            <option value="english-medium">Special Child Education</option>
          </select>
        </div>

        {/* Select Class*/}
        <div className="mb-4">
          <label className="block font-bold secondaryTextColor text-xl">
            Select Class
          </label>
          <select className="w-full mt-2 p-2 border rounded focus:outline-none ">
            <option value="">All</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1"></div>
    </div>
  );
};

export default Sidebar;
