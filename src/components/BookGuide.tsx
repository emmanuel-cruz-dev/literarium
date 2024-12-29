const BookGuide = () => {
  return (
    <section className="bg-slate-100">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"></div>
        </article>
      </article>
    </section>
  );
};

export default BookGuide;
