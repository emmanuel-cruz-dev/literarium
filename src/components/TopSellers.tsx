import { MdStar, MdStarOutline, MdStarHalf } from "react-icons/md";
import bookImage from "../assets/images/juego-tronos-cover.jpg";

const BookCard = () => {
  return (
    <article className="top-sellers__book-card bg-white">
      <div className="flex flex-col items-center">
        <figure className="book-card__image">
          <img src={bookImage} alt="Book Image" />
        </figure>
        <h3 className="py-1 text-lg">Juego de Tronos</h3>
      </div>
      <div className="top-sellers__hidden-menu">
        <div className="top-sellers__hidden-menu__body">
          <h3 className="text-2xl font-bold">Juego de Tronos</h3>
          <p>George R.R. Martin</p>
          <div className="flex text-xl">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
          </div>
          <span className="text-4xl font-thin">$692.00</span>
          <button className="font-semibold uppercase border-2 border-white py-2 px-4 hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

const TopSellers = () => {
  return (
    <section className="bg-slate-200">
      <article className="top-sellers w-11/12 mx-auto py-12" id="top-sellers">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl section__title">
            Best <span className="text__accent-color">top</span> Sellers
          </h2>
          <p>
            The Book Guide and the Book Library has one of the top sellers books
            with them. Those books which are sold with in few days and still
            available in our stock which you can get with us easily.
          </p>
        </div>
        <article>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </article>
      </article>
    </section>
  );
};

export default TopSellers;
