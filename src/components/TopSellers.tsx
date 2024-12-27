import bookImage from "../assets/images/juego-tronos-cover.jpg";
const BookCard = () => {
  return (
    <article className="book-card">
      <div className="book-card__image">
        <img src={bookImage} alt="Book Image" />
      </div>
      <div className="book-card__content">
        <h3 className="book-card__title">Book Title</h3>
        <p className="book-card__author">Author Name</p>
        <p className="book-card__price">Price</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </article>
  );
};

const TopSellers = () => {
  return (
    <section className="top-sellers w-11/12 mx-auto py-12" id="top-sellers">
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
    </section>
  );
};

export default TopSellers;
