import Cover from "../assets/images/juego-tronos-cover.jpg";
import StarRating from "./StarRating";

const BookGuideItem = () => {
  return (
    <article className="flex flex-col border border-slate-200">
      <figure>
        <img src={Cover} alt="" />
      </figure>
      <div className="text-center border-b border-slate-200">
        <h2>Basic Time Management Course</h2>
        <p>Sed ut perspiciatis</p>
      </div>
      <div className="flex justify-between items-center relative py-2 px-2">
        <span>$24.75</span>
        <div>
          <StarRating />
        </div>
        <a
          className="absolute top-0 left-0 flex items-center justify-center font-bold text-white w-full h-full text-center background-accent__item uppercase"
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
        <article>
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
