const Banner = () => {
  return (
    <article
      className="banner flex items-center justify-between py-12 px-16 bg-gray-800 text-white"
      id="banner"
    >
      <div>
        <h2 className="uppercase font-bold text-[1.65rem]">
          The World's Largest Online Bookstore
        </h2>
        <p>
          Here you can get the Ebooks easily where are available in our stock.
        </p>
      </div>
      <div className="flex gap-4 uppercase font-semibold [&>a]:py-3 [&>a]:px-4 [&>a]:bg-gray-600">
        <a
          href="#"
          className="hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
        >
          Start Now
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
        >
          Buy Now
        </a>
      </div>
    </article>
  );
};

export default Banner;
