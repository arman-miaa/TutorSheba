// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Specialist = () => {
const data = [
  { subject: "Bangla" },
  { subject: "English" },
  { subject: "Arabic" },
  { subject: "Mathematics" },
  { subject: "Science" },
  { subject: "History" },
  { subject: "Geography" },
  { subject: "Physics" },
  { subject: "Chemistry" },
  { subject: "Biology" },
];


  return (
    <div className="container mx-auto py-12">
      <Swiper
        slidesPerView={3} // Show 3 cards at once
        spaceBetween={10} // Space between the cards
        // pagination={{
        //   clickable: true, // Enable clickable pagination
        // }}
        autoplay={{
          delay: 2000, // Auto-slide every 2 seconds
          disableOnInteraction: false, // Keep sliding even if the user interacts
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, // On smaller screens, show 2 cards
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // Show 3 cards on medium screens
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4, // Show 3 cards on large screens
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 bg-gray-200 border-2 border-gray-300 hover:bg-transparent cursor-pointer rounded-lg shadow-lg text-center">
              <span className="font-bold text-xl cursor-pointer ">{item.subject}</span>
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Specialist;
