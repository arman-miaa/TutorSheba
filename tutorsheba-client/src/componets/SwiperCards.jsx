// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const SwiperCards = () => {
  const data = [
    { name: "Bhairav", num: "3" },
    { name: "John", num: "5" },
    { name: "Sarah", num: "2" },
    { name: "Alex", num: "8" },
    { name: "Lisa", num: "4" },
    { name: "Tom", num: "6" },
  ];

  return (
    <div>
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
            slidesPerView: 3, // Show 3 cards on large screens
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 bg-purple-500 text-white rounded-lg shadow-lg text-center">
              <h4>{item.name}</h4>
              <p>{item.num} Tutors</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
