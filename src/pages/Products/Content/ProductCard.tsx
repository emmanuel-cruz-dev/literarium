import { FaHeart, FaShoppingCart, FaLink } from "react-icons/fa";
import { ProductsContext } from "../../../context/ProductsContext";
import { FC, useContext } from "react";
import { ProductCardProps } from "types/types";

const ProductCard: FC<ProductCardProps> = ({
  title,
  text,
  price,
  img,
  sales,
}) => {
  const { handleClick } = useContext(ProductsContext);

  return (
    <article className="products-content__article-container flex flex-col gap-4 pb-4 bg-white">
      <button onClick={handleClick} title="Go to Details">
        <img
          className="w-full object-cover"
          src={img}
          alt={`Portada de ${title}`}
          width="467"
          height="700"
          loading="lazy"
        />
      </button>
      <div className="flex flex-col gap-2 text-center">
        <div className="products-content__article-text">
          <p className="flex gap-2 justify-center items-center font-bold text-xl">
            <span className="text-neutral-600">${price}</span>
            {sales && (
              <span className="text-neutral-400/70 line-through">
                ${(price * 1.21).toFixed(2)}
              </span>
            )}
          </p>
          <button onClick={handleClick} title="Go to Details">
            <h2 className="uppercase font-bold text-2xl text-black">{title}</h2>
          </button>
        </div>
        <div className="products-content__hidden-container">
          <p>{text}</p>
          <ul className="products-content__hidden-container__list">
            <li>
              <a href="#">
                <FaHeart />
              </a>
            </li>
            <li>
              <a href="#">
                <FaShoppingCart />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLink />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
