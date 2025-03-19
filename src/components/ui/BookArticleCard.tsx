import { FC } from "react";
import { CarouselItem } from "types/types";
import StarRating from "./StarRating";
import { AiOutlineDoubleRight } from "react-icons/ai";

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

export default BookArticleCard;
