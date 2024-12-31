import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Testimonies = () => {
  return (
    <section className="testimonies" id="testimonies">
      <article>
        <h2 className="uppercase text-white font-semibold text-3xl">
          What Our Clients Are Saying About Us
        </h2>
        <div>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-96 h-[400px]" // Clases de Tailwind
          >
            <SwiperSlide>
              <div className="flex justify-center items-center bg-gray-300 h-full">
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center bg-gray-400 h-full">
                Slide 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center bg-gray-500 h-full">
                Slide 3
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default Testimonies;
