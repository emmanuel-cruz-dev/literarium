import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Grid, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CarouselItemsProps } from "types/types";
import BookArticleCard from "./BookArticleCard";

const CarouselItems: FC<CarouselItemsProps> = ({
  articleClass,
  articleTitle,
  arr,
}) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <article className="w-full lg:w-[21rem] xl:w-full flex flex-col gap-4 mx-auto mb-12 xl:mb-0">
      <div className="flex justify-between border-b border-slate-300 pb-4">
        <h2 className={`uppercase text-2xl ${articleClass}`}>{articleTitle}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-gray-200/60 text-gray-600 hover:bg-gray-300"
            title="Previous"
          >
            <AiOutlineLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 bg-gray-200/60 text-gray-600 hover:bg-gray-300"
            title="Next"
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
        className="w-full lg:w-80 xl:w-full h-[400px]"
      >
        {arr.map((item) => (
          <SwiperSlide key={item.id}>
            <BookArticleCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default CarouselItems;
