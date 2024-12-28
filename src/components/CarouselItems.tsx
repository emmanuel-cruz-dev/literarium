import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Autoplay } from "swiper/modules";

const CarouselItems = () => {
  return (
    <Swiper
      modules={[Grid, Navigation, Autoplay]}
      navigation
      grid={{
        rows: 2,
        fill: "row",
      }}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="w-80 h-[400px]" // Clases de Tailwind
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
