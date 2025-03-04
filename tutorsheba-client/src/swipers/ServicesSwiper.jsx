import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const ServicesSwiper = () => {
  const [tutorsReviews, setTutorsReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorsReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/services");
        setTutorsReviews(response.data);
      } catch (error) {
        console.error("Error fetching tutors' reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorsReviews();
  }, []);

  return (
    <div className="container mx-auto py-12">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {tutorsReviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4   rounded-lg shadow-lg text-center transform transition-all duration-300 hover:translate-y-[-8px]">
                <img
                  src={item.image}
                  className="w-[250px] h-[250px] object-cover mb-4"
                  alt=""
                />
                <span className="mt-4 font-bold">{item.subject}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ServicesSwiper;
