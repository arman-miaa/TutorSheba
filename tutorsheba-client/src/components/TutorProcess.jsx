import { FaUser, FaUserPlus } from "react-icons/fa6";
import TitleSection from "./TitleSection";
import { IoCarOutline, IoFlowerOutline } from "react-icons/io5";
import { RiCamera2Line } from "react-icons/ri";

const steps = [
  {
    title: "Create Tutor Profile",
    text: "Create your profile in minutes with sign up information.",
    icon: <FaUserPlus />,
  },
  {
    title: "Apply for Jobs",
    text: "Completing your profile start browsing our latest TUITION JOBS page and start applying.",
    icon: <IoFlowerOutline />,
  },
  {
    title: "Get Free Tutoring Job Alert",
    text: "Get updated tutoring jobs alerts via SMS/CALL whenever new jobs are posted.",
    icon: <IoCarOutline />,
  },
  {
    title: "Start Tutoring and Grow Your Income",
    text: "LIf parent like the demo session , you can continue tuition and start earning",
    icon: <RiCamera2Line />,
  },
];

const TutorProcess = () => {
  return (
    <div className="bg-gray-100 p-8 pb-16">
      <div className="container mx-auto">
        <TitleSection
          title="How it Works?"
          // subtitle="Here's how it works for Tutors"
        />
        <p className="text-2xl text-[#66789c] mb-8 -mt-8 font-bold text-center">
          Here's how it works for <span className="text-[#800080]">Tutors</span>
        </p>

        <div className="flex flex-col gap-6 items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 ${
                index % 2 === 1 ? "flex-row-reverse" : "" // Flip every 2nd row
              }`}
            >
              {/* Step Content */}
              <div className="flex shadow-2xl items-center gap-4 bg-base-100 px-4 rounded-lg w-[750px] ">
                <div className="w-full">
                  <h3 className="uppercase text-[#800080] text-xl">
                    {step.title}
                  </h3>
                  <p>{step.text}</p>
                </div>
                <div className="p-8 text-2xl -mr-4 bg-[#800080] text-white">
                  {step.icon}
                </div>
              </div>

              {/* Step Number */}
              <div className="bg-[#d36cc7] shadow-2xl  p-8  px-10 text-xl rounded-full text-white font-bold ">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorProcess;
