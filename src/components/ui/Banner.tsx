function Banner() {
  return (
    <article
      className="banner flex flex-col gap-4 xl:flex-row items-center justify-between text-center lg:text-left py-12 px-3 lg:px-16 bg-gray-800 text-white"
      id="banner"
    >
      <header className="flex flex-col gap-1">
        <h2 className="uppercase font-bold text-xl lg:text-[1.65rem]">
          The World's Largest Online Bookstore
        </h2>
        <p className="text-[17px]">
          Easily find available eBooks in our collection. Explore a wide variety
          of titles with just a click.
        </p>
      </header>
      <footer className="flex gap-4 uppercase font-semibold [&>a]:py-3 [&>a]:px-4">
        <a
          href="#"
          className="bg-gray-600 hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
        >
          Start Now
        </a>
        <a
          href="#"
          className="background-accent__item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
        >
          Buy Now
        </a>
      </footer>
    </article>
  );
}

export default Banner;
