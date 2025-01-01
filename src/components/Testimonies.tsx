import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";

import Img1 from "../assets/images/testimonials-img1.jpg";
import Img2 from "../assets/images/testimonials-img2.jpg";
import Img3 from "../assets/images/testimonials-img3.jpg";

interface TestimoniesCardProps {
  image: string;
  name: string;
  occupation: string;
  description: string;
}

const testimoniesArr = [
  {
    id: 1,
    image: Img1,
    name: "Sarah Jefferson",
    occupation: "Library Manager",
    description:
      "I found exactly what I needed at very affordable prices, and the books were delivered promptly. Excellent service—highly recommended!",
  },
  {
    id: 2,
    image: Img2,
    name: "Julia Burns",
    occupation: "The Writer",
    description:
      "Two or three times a year, especially after Christmas, my family buys from the Book Library—it has become a tradition!",
  },
  {
    id: 3,
    image: Img3,
    name: "Anna Hawke",
    occupation: "Marketing Manager",
    description:
      "Thank you for your support over the years! Every interaction I've had with your team has been positive and seamless. I would gladly recommend you to my friends.",
  },
];

const TestimoniesCard: FC<TestimoniesCardProps> = ({
  image,
  name,
  occupation,
  description,
}) => {
  return (
    <article className="flex flex-col gap-5 justify-center items-center h-full">
      <figure className="testimonies__card-container">
        <img className="object-cover" src={image} alt={name} />
      </figure>
      <div className="flex flex-col gap-3 [&>h4]:uppercase justify-center text-center text-white">
        <h3 className="text__accent-color uppercase font-bold text-3xl">
          {name}
        </h3>
        <h4>{occupation}</h4>
        <p className="text-lg mb-12">"{description}"</p>
      </div>
    </article>
  );
};

const Testimonies = () => {
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
            {testimoniesArr.map((testimony) => (
              <SwiperSlide key={testimony.id}>
                <TestimoniesCard {...testimony} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default Testimonies;
