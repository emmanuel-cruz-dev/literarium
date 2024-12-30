import { FC } from "react";
import AprendaMafia from "../assets/images/aprenda-de-la-mafia.jpg";
import ComunidadAnillo from "../assets/images/comunidad-anillo.jpg";
import HarryPotter from "../assets/images/harry-potter.jpg";
import It from "../assets/images/it.jpg";
import StarsElement from "./StarsElement";

interface BookGuideProps {
  title: string;
  author: string;
  img: string;
  rating: number;
  price: number;
}

const books = [
  {
    id: 1,
    title: "La Comunidad del Anillo",
    author: "J. R. R. Tolkien",
    img: ComunidadAnillo,
    rating: 4,
    price: 1132.25,
  },
  {
    id: 2,
    title: "Aprenda de la Mafia",
    author: "Louis Ferrante",
    img: AprendaMafia,
    rating: 5,
    price: 695.99,
  },
  {
    id: 3,
    title: "Harry Potter y la Piedra Filosofal",
    author: "J. K. Rowling",
    img: HarryPotter,
    rating: 5,
    price: 849.39,
  },
  {
    id: 4,
    title: "It",
    author: "Stephen King",
    img: It,
    rating: 5,
    price: 926.75,
  },
];

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
          <img className="border-2 border-white" src={img} alt="" />
          <span className="absolute top-4 left-0 bottom-4 -right-2 z-[-1] bg-slate-300"></span>
        </div>
        <a href="#" className="book-guide__plus-item">
          +
        </a>
      </div>
      <div className="flex flex-col gap-2 text-center border-b border-slate-200 py-4 px-6">
        <h2 className="products__card-title leading-tight font-bold text-xl text-slate-700">
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

const BookGuide = () => {
  return (
    <section className="book-guide" id="book-guide">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl section__title">
            Browse Our <span className="text__accent-color">Book</span>{" "}
            Selection
          </h2>
          <p>
            Discover unique and featured titles in our store. Add your favorites
            to your cart and enjoy a quick and easy shopping experience.
          </p>
        </div>
        <article className="py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book) => (
              <BookGuideItem key={book.id} {...book} />
            ))}
          </div>
        </article>
      </article>
    </section>
  );
};

export default BookGuide;
