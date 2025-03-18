import { FC } from "react";
import MobRules from "../assets/images/mob-rules.webp";
import FellowshipRing from "../assets/images/fellowship-ring.webp";
import PhilosopherStone from "../assets/images/philosopher-stone.webp";
import It from "../assets/images/it.webp";
import StarsElement from "./StarsElement";
import CounterBanner from "./layout/CounterBanner/CounterBanner";

interface BookGuideProps {
  title: string;
  author: string;
  img: string;
  rating: number;
  price: number;
}

const items = [
  {
    number: 3578,
    title: "Books to Discover",
  },
  {
    number: 589,
    title: "Active Readers",
  },
  {
    number: 1250,
    title: "Renowned Authors",
  },
  {
    number: 98,
    title: "Awards Won",
  },
];

const books = [
  {
    id: 1,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    img: FellowshipRing,
    rating: 4,
    price: 1132.25,
  },
  {
    id: 2,
    title: "Mob Rules: What the Mafia Can Teach the Legitimate Businessman",
    author: "Louis Ferrante",
    img: MobRules,
    rating: 5,
    price: 695.99,
  },
  {
    id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    img: PhilosopherStone,
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

const BookGuide = () => {
  return (
    <>
      <section className="book-guide" id="book-guide">
        <article className="w-11/12 mx-auto py-12">
          <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
            <h2 className="section__title">
              Browse Our <span className="text__accent-color">Book</span>{" "}
              Selection
            </h2>
            <p>
              Discover unique and featured titles in our store. Add your
              favorites to your cart and enjoy a quick and easy shopping
              experience.
            </p>
          </div>
          <article className="py-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-8">
              {books.map((book) => (
                <BookGuideItem key={book.id} {...book} />
              ))}
            </div>
          </article>
        </article>
      </section>
      <CounterBanner arr={items} />
    </>
  );
};

export default BookGuide;
