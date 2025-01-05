const Newsletter = () => {
  return (
    <section className="newsletter background-accent__item" id="newsletter">
      <article className="flex flex-col gap-6 w-11/12 mx-auto py-12">
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
        <article className="flex w-full lg:w-2/3 p-3 items-center mx-auto bg-white text-white">
          <form
            className="flex w-full"
            action="#"
            method="post"
            id="newsletter-form"
          >
            <input
              required
              autoComplete="off"
              name="email"
              id="email"
              type="email"
              placeholder="Your email address"
              className="w-5/6 lg:p-4 py-2 rounded-xs"
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
