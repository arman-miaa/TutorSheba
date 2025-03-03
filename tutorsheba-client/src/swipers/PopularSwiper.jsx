// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const PopularSwiper = () => {
  const data = [
    { name: "Bhairav", num: "3" },
    { name: "John", num: "5" },
    { name: "Sarah", num: "2" },
    { name: "Alex", num: "8" },
    { name: "Lisa", num: "4" },
    { name: "Tom", num: "6" },
  ];

  return (
    <div className="container mx-auto py-12">
      <Swiper
        slidesPerView={4} // Show 3 cards at once
        spaceBetween={10} // Space between the cards
        autoplay={{
          delay: 2000, // Auto-slide every 2 seconds
          disableOnInteraction: false, // Keeps sliding even if the user interacts
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
            <div className="card bg-base-100 w-96 shadow-sm  rounded p-5 my-2">
              <div className="relative  p-2 overflow-hidden w-[65%] mx-auto h-[200px] rounded">
                <button className="absolute text-xl text-white top-[20px] left-[-30px] rotate-[-50deg] border px-3 bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890] w-[130px]">
                  Premium
                </button>
                <img
                  className="w-full h-full object-cover bg-base-200"
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="image"
                />
              </div>
              <div className="px-3 text-center space-y-2">
                <h2 className="card-title text-3xl font-semibold">
                  {item.name}
                </h2>
                <p className="text-[gray] font-semibold">National University</p>
                <h2 className="card-title text-[14px] font-semibold">
                  Agricultural engineering and...
                </h2>
                <div className="card-actions justify-end">
                  <button className="p-2 rounded border border-[rgba(0,0,0,0.1)]">
                    Dhaka
                  </button>
                </div>
              </div>
              <div className="w-full my-2">
                <a
                  href="/details/:id"
                  className="px-2 button py-1 block text-center text-white w-full rounded border border-[rgba(0,0,0,0.1)] bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890]"
                >
                  View Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularSwiper;
