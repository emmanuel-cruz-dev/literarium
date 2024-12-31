import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import Img1 from "../assets/images/testimonials-img1.jpg";
import Img2 from "../assets/images/testimonials-img2.jpg";
import Img3 from "../assets/images/testimonials-img3.jpg";

const Testimonies = () => {
  return (
    <section className="testimonies" id="testimonies">
      <article>
        <h2 className="uppercase text-white font-semibold text-3xl">
          What Our Clients Are Saying About Us
        </h2>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            className="w-2/3 h-[420px]" // Clases de Tailwind
          >
            <SwiperSlide>
              <div className="flex flex-col gap-2 justify-center items-center bg-gray-300 h-full">
                <figure className="rounded-full w-40 overflow-hidden border-4 border-cyan-400">
                  <img src={Img1} alt="" />
                </figure>
                <div className="flex flex-col gap-2 [&>h4]:uppercase justify-center text-center">
                  <h3 className="text__accent-color uppercase font-bold text-3xl">
                    Sarah Jefferson
                  </h3>
                  <h4>Library Manager</h4>
                  <p className="text-lg">
                    "I found exactly what I needed at very affordable prices,
                    and the books were delivered promptly. Excellent
                    service—highly recommended!"
                  </p>
                </div>
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
