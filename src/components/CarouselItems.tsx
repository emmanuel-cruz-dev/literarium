import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Grid, Autoplay } from "swiper/modules";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import StarRating from "./StarRating";

interface CarouselItem {
  id: number;
  title: string;
  author: string;
  img: string;
  price: number;
}

interface CarouselItemsProps {
  articleClass?: string;
  articleTitle: string;
  arr: CarouselItem[];
}

const BookArticleCard: FC<CarouselItem> = ({ title, author, img, price }) => {
  return (
    <article className="products__article-item box-shadow-mode h-full flex gap-4">
      <div className={`relative w-28 lg:w-32 h-full flex-shrink-0`}>
        <img
          className="w-full object-cover flex-shrink-0"
          src={img}
          alt={`Portada de ${title}`}
          width="620"
          height="900"
          loading="lazy"
        />
        <a href="#" className="products__plus-item">
          +
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2
            className="uppercase font-semibold w-60 lg:w-44 truncate"
            title={title}
          >
            {title}
          </h2>
          <p
            className="font-light text-slate-500 w-60 lg:w-44 truncate"
            title={author}
          >
            {author}
          </p>
        </div>
        <StarRating />
        <span className="background-accent__item text-center text-white font-bold w-fit px-2 py-1">
          ${price}
        </span>
        <button className="w-fit uppercase text-sm flex items-center gap-2">
          Add to Cart
          <AiOutlineDoubleRight />
        </button>
      </div>
    </article>
  );
};

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
        className="w-full lg:w-80 xl:w-full h-[400px]" // Clases de Tailwind
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
