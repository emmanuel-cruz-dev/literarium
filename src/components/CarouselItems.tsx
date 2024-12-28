import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Grid, Navigation, Autoplay } from "swiper/modules";

const CarouselItems = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <article>
      <div>
        <h2 className="uppercase">New Product</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            ← {/* Puedes usar un ícono aquí */}
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            → {/* Puedes usar un ícono aquí */}
          </button>
        </div>
      </div>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Grid, Navigation, Autoplay]}
        // navigation
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
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
      </Swiper>
    </article>
  );
};

export default CarouselItems;
