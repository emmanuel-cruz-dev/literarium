const Newsletter = () => {
  return (
    <section className="newsletter background-accent__item" id="newsletter">
      <article className="flex flex-col gap-6 w-11/12 mx-auto py-12 px-4">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl text-white section__title gift__title">
            Subscribe to our Newsletter for the Latest News
          </h2>
          <p className="text-white font-light">
            Stay updated right now! Fill out the form below, and you'll receive
            the latest information about thousands of books delivered directly
            to your email every week.
          </p>
        </div>
        <article className="flex w-2/3 items-center mx-auto py-12 lg:py-4 bg-white text-white">
          <form className="flex w-full px-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-5/6 p-4 py-2 rounded-xs"
            />
            <button className="background-accent__item text-lg uppercase font-bold py-2 px-6 rounded-xs hover:bg-black transition-colors duration-300 ease-in-out">
              Subscribe
            </button>
          </form>
        </article>
      </article>
    </section>
  );
};

export default Newsletter;
