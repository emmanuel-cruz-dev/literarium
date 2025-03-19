import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import TestimonialsCard from "./TestimonialsCard";
import testimonialsArr from "../../../data/testimonialsArr";
import "../../../styles/pages/Home/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonies" id="testimonies">
      <article className="w-11/12 mx-auto flex flex-col justify-center gap-12 py-16 h-full">
        <h2 className="text-center uppercase text-white font-bold text-3xl">
          What Our Clients Are Saying About Us
        </h2>
        <div>
          <Swiper
            modules={[EffectFade, Navigation, Autoplay, Pagination]}
            effect="fade" // Activar el efecto de desvanecimiento
            fadeEffect={{
              crossFade: true,
            }}
            speed={800}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="lg:w-2/3 h-full" // Clases de Tailwind
          >
            {testimonialsArr.map((testimony) => (
              <SwiperSlide key={testimony.id}>
                <TestimonialsCard {...testimony} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
}

export default Testimonials;
