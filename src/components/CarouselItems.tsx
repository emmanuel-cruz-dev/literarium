import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Grid, Autoplay } from "swiper/modules";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";

import { MdStar, MdStarOutline } from "react-icons/md";
import AprendaMafia from "../assets/images/aprenda-de-la-mafia-cover.jpg";

const BookArticleCard = () => {
  return (
    <article className="h-full flex gap-4">
      <figure className="w-32 h-full">
        <img src={AprendaMafia} alt="" />
      </figure>
      <div className="flex flex-col gap-2">
        <h2 className="uppercase font-bold">The Winning</h2>
        <p>Mind Set</p>
        <div className="flex">
          <MdStar />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
          <MdStarOutline />
        </div>
        <span className="background-accent__item text-center text-white font-bold w-14 h-7">
          $452
        </span>
        <button className="w-fit uppercase flex items-center gap-2">
          Add to Cart
          <AiOutlineDoubleRight />
        </button>
      </div>
    </article>
  );
};

const CarouselItems = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <article className="w-80 flex flex-col gap-4 mx-auto">
      <div className="flex justify-between border-b border-slate-300 pb-4">
        <h2 className="uppercase text-2xl">New Product</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-gray-200/60 text-gray-600 hover:bg-gray-300"
          >
            <AiOutlineLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 bg-gray-200/60 text-gray-600 hover:bg-gray-300"
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Grid, Autoplay]}
        grid={{
          rows: 2,
          fill: "column",
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
          <BookArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <BookArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <BookArticleCard />
        </SwiperSlide>
        <SwiperSlide>
          <BookArticleCard />
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default CarouselItems;
