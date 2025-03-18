import { FC } from "react";
import { BookGuideProps } from "../../../types/types";
import StarsElement from "../../../components/StarsElement";

const BookGuideItem: FC<BookGuideProps> = ({
  title,
  author,
  img,
  rating,
  price,
}) => {
  return (
    <article className="products__article-item flex flex-col border border-slate-200 hover:border-transparent">
      <div className="relative mt-6 w-9/12 mx-auto">
        <div className="relative">
          <img
            className="border-2 border-white"
            src={img}
            alt={`Portada de ${title}`}
            width="620"
            height="900"
            loading="lazy"
          />
          <span className="absolute top-4 left-0 bottom-4 -right-2 z-[-1] bg-slate-300"></span>
        </div>
        <a href="#" className="book-guide__plus-item">
          +
        </a>
      </div>
      <div className="flex flex-col gap-2 text-center border-b border-slate-200 py-4 px-6">
        <h2
          className="products__card-title line-clamp-2 leading-tight font-bold text-xl text-slate-700"
          title={title}
        >
          {title}
        </h2>
        <p className="font-light text-slate-500">{author}</p>
      </div>
      <div className="flex justify-between items-center relative py-3 px-3">
        <span className="font-semibold text-lg text-slate-500">${price}</span>
        <div>
          <StarsElement num={rating} />
        </div>
        <a
          className="book-guide__btn absolute top-0 left-[-.9px] bottom-[-.9px] right-[-.9px] flex items-center text-lg justify-center font-bold text-white text-center background-accent__item uppercase"
          href="#"
        >
          Add to Cart
        </a>
      </div>
    </article>
  );
};

export default BookGuideItem;
