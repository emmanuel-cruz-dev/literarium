import StarsElement from "../../../components/ui/StarsElement";
import { FC } from "react";
import { BookCardProps } from "types/types";

const BookCard: FC<BookCardProps> = ({
  id,
  img,
  title,
  author,
  price,
  rating,
}) => {
  return (
    <article key={id} className="top-sellers__book-card bg-white">
      <div className="flex flex-col items-center">
        <figure className="book-card__image">
          <img
            className="p-6"
            src={img}
            alt={`Portada de ${title}`}
            width="620"
            height="900"
            loading="lazy"
          />
        </figure>
        <h3 className="-mt-4 pb-3 text-lg">{title}</h3>
      </div>
      <div className="top-sellers__hidden-menu">
        <div className="top-sellers__hidden-menu__body">
          <h3 className="text-3xl font-bold w-11/12">{title}</h3>
          <p className="text-lg">{author}</p>
          <div className="flex text-2xl">
            <StarsElement num={rating} />
          </div>
          <span className="text-3xl font-thin">${price}</span>
          <button className="font-semibold uppercase border-2 border-white py-2 px-4 hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
