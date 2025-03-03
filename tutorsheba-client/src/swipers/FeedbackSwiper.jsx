// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


// Import required modules
import { Autoplay } from "swiper/modules";

const FeedbackSwiper = ({ feedbacks }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, // Adjust delay for better speed
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* Map over feedbacks and create slides dynamically */}
        {feedbacks.map((feedback, index) => (
          <SwiperSlide
            key={index}
            className="p-6 rounded-lg shadow-md"
          >
            <div className="text-center ">
              <div className="  flex justify-center w-full ">
                <img
                  src={feedback.image}
                  alt=""
                  className=" border2 border-2 border-[#800080]  w-[214px] h-[214px]  "
                />
              </div>

              <h3 className="text-xl font-bold mt-4">{feedback.name}</h3>
              <p className="text-gray-600 mt-2">
                {feedback.subject
                  ? feedback.subject
                  : `${feedback.relation} to Grade 4 student`}
              </p>

              <p className="text-gray-600 mt-2">{feedback.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSwiper;
