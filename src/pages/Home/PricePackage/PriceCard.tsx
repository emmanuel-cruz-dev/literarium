import { FC } from "react";
import { PriceCardProps } from "types/types";

const PriceCard: FC<PriceCardProps> = ({
  title,
  image,
  price,
  eBooks,
  comics,
  books,
  magazines,
}) => {
  return (
    <article className="box-shadow__item price-card-container flex flex-col justify-center items-center gap-6 text-center py-8 bg-slate-100 hover:bg-white transition-colors duration-300 ease-in-out">
      <img
        className="absolute top-0 w-full"
        src={image}
        alt={`Plan ${title}, banner de librería`}
        width="360"
        height="146"
        loading="lazy"
      />
      <div className="price-card__fill-item"></div>
      <h2 className="uppercase z-10 text-white font-bold text-2xl">{title}</h2>
      <div className="price-card__price-circle">
        <p className="text-3xl font-light">${price}</p>
        <p className="text-sm price-card__paragraph">Per Month</p>
      </div>
      <ul className="price-card__list flex flex-col gap-4 text-lg font-thin text-slate-600">
        <li>{eBooks} E-Books</li>
        <li>{comics} Comics</li>
        <li>{books} Books</li>
        <li>{magazines} Magazines</li>
      </ul>
      <a className="btn z-10" href="#">
        Purchase Now
      </a>
    </article>
  );
};

export default PriceCard;
