import Cover from "../assets/images/juego-tronos-cover.jpg";
import StarRating from "./StarRating";

const BookGuideItem = () => {
  return (
    <article className="products__article-item flex flex-col border border-slate-200 hover:border-transparent">
      <div className="relative mt-6 w-9/12 mx-auto">
        <div className="relative">
          <img className="border-2 border-white" src={Cover} alt="" />
          <span className="absolute top-4 left-0 bottom-4 -right-2 z-[-1] bg-slate-300"></span>
        </div>
        <a href="#" className="book-guide__plus-item">
          +
        </a>
      </div>
      <div className="flex flex-col gap-2 text-center border-b border-slate-200 py-4 px-6">
        <h2 className="products__card-title leading-tight font-bold text-xl text-slate-700">
          Basic Time Management Course
        </h2>
        <p className="text-slate-500">Sed ut perspiciatis</p>
      </div>
      <div className="flex justify-between items-center relative py-3 px-3">
        <span className="font-semibold text-lg text-slate-500">$24.75</span>
        <div>
          <StarRating />
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
            The Book Guide <span className="text__accent-color">online</span>{" "}
            Book Store
          </h2>
          <p>
            We're breaking new ground in online bookselling. We believe that
            education and access to books are basic human rights. That's why
            books sold on BetterWorldBooks.com help fund high-impact literacy
            projects in the United States and around the world.
          </p>
        </div>
        <article className="py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <BookGuideItem />
            <BookGuideItem />
            <BookGuideItem />
            <BookGuideItem />
          </div>
        </article>
      </article>
    </section>
  );
};

export default BookGuide;
