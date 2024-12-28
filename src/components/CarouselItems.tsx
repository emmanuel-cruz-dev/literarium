import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CarouselItems = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
      className="w-full h-64" // Clases de Tailwind
    >
      <SwiperSlide>
        <div className="bg-blue-500 h-full flex items-center justify-center text-white">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-500 h-full flex items-center justify-center text-white">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-green-500 h-full flex items-center justify-center text-white">
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-blue-500 h-full flex items-center justify-center text-white">
          Slide 4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-500 h-full flex items-center justify-center text-white">
          Slide 5
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-green-500 h-full flex items-center justify-center text-white">
          Slide 6
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselItems;
