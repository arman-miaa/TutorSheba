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
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold">{feedback.name}</h3>
              <p className="text-gray-600 mt-2">{feedback.feedback}</p>
              <p className="text-yellow-500 mt-2">⭐ {feedback.rating} / 5</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSwiper;
