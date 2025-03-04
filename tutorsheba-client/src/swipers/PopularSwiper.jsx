// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
const PopularSwiper = () => {
  const [premiumTutors, setPremiumTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get(
          "https://tutorsheba.onrender.com/premiumTutors"
        );
        setPremiumTutors(response.data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto py-12">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            autoplay={{
              delay: 2000, // Auto-slide every 2 seconds
              disableOnInteraction: false, // Keeps sliding even if the user interacts
            }}
            breakpoints={{
              640: {
                slidesPerView: 2, // ছোট স্ক্রিনে 2 কার্ড
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, // মিডিয়াম স্ক্রিনে 3 কার্ড
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4, // বড় স্ক্রিনে 4 কার্ড
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]} // Add Autoplay module
            className="mySwiper"
          >
            {premiumTutors.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full  bg-base-200 shadow-sm  rounded p-5 my-2">
                  <div className="relative   p-2 overflow-hidden w-[65%] mx-auto  rounded">
                    <button className="absolute text-xl text-white top-[20px] left-[-30px] rotate-[-50deg] border px-3 bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890] w-[130px]">
                      Premium
                    </button>
                    <img
                      className=" h-[150px] mx-auto object-cover bg-base-200"
                      src={item.image}
                      alt="image"
                    />
                  </div>
                  <div className="px-3 text-center space-y-2 mx-auto">
                    <h2 className=" text-center text-3xl font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-[gray] text-lg font-semibold">
                      {item.university}
                    </p>
                    <h2 className=" text-[14px] text-center mx-auto w-full text-2xl font-bold ">
                      {item.subject}
                    </h2>
                    <div className="card-actions justify-end ">
                      <button className="p-2  flex items-center gap-1 text-xl rounded border text-center mx-auto border-blue-200 text-blue-400 bg-blue-50 cursor-pointer hover:bg-none">
                        <MdLocationPin className="text-[#e14545]" />{" "}
                        {item.location}
                      </button>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <a
                      // href="/details/:id"
                      className="px-2 button mt-auto cursor-pointer py-1 block text-center text-white w-full rounded border border-[rgba(0,0,0,0.1)] bg-gradient-to-r from-[#7d0c70] via-[#a31480] to-[#c21890]"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default PopularSwiper;
