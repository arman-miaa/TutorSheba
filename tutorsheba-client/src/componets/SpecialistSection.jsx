import Specialist from "../swipers/Specialist";
import TitleSection from "./TitleSection";
import bg2 from "../assets/bg2.jpg"; // Import the background image

const SpecialistSection = () => {
      const data = [
        { name: "Bhairav", num: "3" },
        { name: "John", num: "5" },
        { name: "Sarah", num: "2" },
        { name: "Alex", num: "8" },
       
      ];
  return (
    <div className="relative">
      {/* Title Section */}
      <TitleSection
        title="Find Your Subject Specialist"
        subtitle="Find Our Specialist to reach your dream goal"
      />

      {/* Swiper Section */}
      <Specialist />

      {/* Background Section with Overlay */}
      <div
        className="relative h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0  bg-opacity-60"></div> */}

        {/* Content on top of overlay (if needed) */}
        <div className="border-2 flex items-center z-10 h-full text-white text-2xl font-bold">
          <div className="flex  items-center justify-between  container mx-auto ">
            {data.map((item) => (
              <div>
                <h3>{item.name}</h3>
                <h4>{item.num}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection;
