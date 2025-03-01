import FeedbackSwiper from "../swipers/FeedbackSwiper";
import TitleSection from "./TitleSection";

const Feedbacks = () => {
  const feedbackData = [
    {
      name: "Bhairav",
      feedback: "This platform helped me find the best tutor!",
      rating: 5,
    },
    {
      name: "John",
      feedback: "Excellent service and very responsive.",
      rating: 4,
    },
    {
      name: "Sarah",
      feedback: "I love how easy it is to use!",
      rating: 5,
    },
    {
      name: "Alex",
      feedback: "Very helpful for my learning journey.",
      rating: 4,
    },
  ];

  return (
    <div className="container mx-auto">
      <TitleSection
        title="People Love Us!"
        subtitle="We are proud to share the experience of our honorable clients"
      />

      <div className="flex items-center gap-6">
        <div className="flex-1 w-1/2 border-2 ">
          {/* Pass the feedbackData as props */}
          <h1>What our Parents say about us</h1>
          <FeedbackSwiper feedbacks={feedbackData} />
        </div>
        <div className="flex-1 w-1/2 border-2 ">
          <h1>What our Tutors say about us</h1>
          <FeedbackSwiper feedbacks={feedbackData} />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
