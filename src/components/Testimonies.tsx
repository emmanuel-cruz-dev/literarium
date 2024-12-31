import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import Img1 from "../assets/images/testimonials-img1.jpg";
import Img2 from "../assets/images/testimonials-img2.jpg";
import Img3 from "../assets/images/testimonials-img3.jpg";

const testimoniesArr = [
  {
    id: 1,
    image: Img1,
    name: "Sarah Jefferson",
    ocupation: "Library Manager",
    description:
      "I found exactly what I needed at very affordable prices, and the books were delivered promptly. Excellent service—highly recommended!",
  },
  {
    id: 2,
    image: Img2,
    name: "Julia Burns",
    ocupation: "The Writer",
    description:
      "Two or three times a year, especially after Christmas, my family buys from the Book Library—it has become a tradition!",
  },
  {
    id: 3,
    image: Img3,
    name: "Anna Hawke",
    ocupation: "Marketing Manager",
    description:
      "Thank you for your support over the years! I would gladly recommend you to my friends.",
  },
];

const TestimoniesCard = () => {
  return (
    <article className="flex flex-col gap-5 justify-center items-center h-full">
      <figure className="rounded-full w-40 overflow-hidden border-4 border-cyan-400">
        <img src={Img1} alt="" />
      </figure>
      <div className="flex flex-col gap-3 [&>h4]:uppercase justify-center text-center text-white">
        <h3 className="text__accent-color uppercase font-bold text-3xl">
          Sarah Jefferson
        </h3>
        <h4>Library Manager</h4>
        <p className="text-lg">
          "I found exactly what I needed at very affordable prices, and the
          books were delivered promptly. Excellent service—highly recommended!"
        </p>
      </div>
    </article>
  );
};

const Testimonies = () => {
  return (
    <section className="testimonies" id="testimonies">
      <article className="py-12">
        <h2 className="text-center uppercase text-white font-semibold text-3xl">
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
              <TestimoniesCard />
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
