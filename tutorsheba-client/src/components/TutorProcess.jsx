import { FaUser } from "react-icons/fa6";
import TitleSection from "./TitleSection";

const steps = [
  {
    text: "Let’s Work Together & Explore Opportunities",
    icon: <FaUser />,
  },
  {
    text: "Find the Perfect Tutoring Opportunity",
    icon: <FaUser />,
  },
  {
    text: "Start Teaching & Share Knowledge",
    icon: <FaUser />,
  },
  {
    text: "Get Paid Securely & Grow Your Career",
    icon: <FaUser />,
  },
];

const TutorProcess = () => {
  return (
    <div className="container mx-auto">
      <TitleSection
        title="How it Works?"
        subtitle="Here's how it works for Tutors"
      />

      <div className="flex flex-col gap-6 items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-6 ${
              index % 2 === 1 ? "flex-row-reverse" : "" // Flip every 2nd row
            }`}
          >
            {/* Step Content */}
            <div className="flex items-center gap-4 bg-base-300 p-4 rounded-lg shadow-md">
              <div>
                <p>{step.text}</p>
              </div>
              <div className="p-4 bg-purple-600 text-white rounded-full">
                {step.icon}
              </div>
            </div>

            {/* Step Number */}
            <div className="bg-blue-300 p-6 rounded-full text-white font-bold text-lg">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorProcess;
