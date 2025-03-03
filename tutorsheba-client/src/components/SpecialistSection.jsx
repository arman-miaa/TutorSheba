import Specialist from "../swipers/Specialist";
import TitleSection from "./TitleSection";
import bg2 from "../assets/bg2.jpg"; // Import the background image

const SpecialistSection = () => {
  const stats = [
    { value: "428,092+", label: "Total Applied" },
    { value: "119,489+", label: "Total Tutors" },
    { value: "4,745+", label: "Live Tuition Jobs" },
    { value: "4.7", label: "Average Tutor Rating" },
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
        className="relative py-8 mt-12 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Stats Content */}
        <div className="relative z-10 container mx-auto text-white text-center grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div key={index} className="p-4   rounded-lg">
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <h4 className="text-lg">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection;
