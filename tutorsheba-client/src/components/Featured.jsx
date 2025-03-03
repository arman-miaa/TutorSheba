// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Featured = () => {
  const data = [
    { logo: "/logo1.svg" },
    { logo: "/logo2.svg" },
    { logo: "/logo3.svg" },
    { logo: "/logo4.svg" },
    { logo: "/logo5.svg" },
    { logo: "/logo1.svg" },
    { logo: "/logo2.svg" },
    { logo: "/logo3.svg" },
    { logo: "/logo4.svg" },
    { logo: "/logo5.svg" },
   
  ];

  return (
    <div className="bg-gray-100 mt-12">
      <div className="container mx-auto py-12 ">
        <h1 className="text-3xl lg:text-4xl font-bold py-8">
          We were <span className="text-[#800080]">featured</span> on:
        </h1>

        <Swiper
          slidesPerView={3} // Show 3 logos at once
          spaceBetween={6} // Space between the logos
          autoplay={{
            delay: 2000, // Auto-slide every 2 seconds
            disableOnInteraction: false, // Keep sliding even if the user interacts
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // On smaller screens, show 2 logos
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // Show 3 logos on medium screens
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4, // Show 4 logos on large screens
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="transform transition-all duration-300 hover:translate-y-[-8px]   text-white bg-white rounded-lg shadow-lg text-center">
                <img
                  src={item.logo}
                  alt={`Logo ${index + 1}`}
                  className="mx-auto mb-2 w-[204px] h-[110px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
